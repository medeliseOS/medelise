# MEDELISE - Arhitectura Supremă de Securitate și Date [Military-Grade / NATO Standard]

Acest document definește **Doctrina de Securitate Zero-Trust** a proiectului Medelise. Inspirată din standardele operaționale ONU, NATO și HIPAA pentru protecția confidențialității (PHI - Protected Health Information), arhitectura bazei de date și a rețelei este concepută pentru a rezista oricărui vector de atac intern sau extern.

---

## 1. Doctrina Fundamentală "Zero-Trust" (Încredere Zero)

În Medelise, niciun microserviciu, niciun utilizator (nici măcar administratorii IT supremi) și niciun modul Frontend nu primesc acces implicit la nicio resursă. Totul este interzis (**Deny by Default**). Accesul se face strict tranzacțional, matematic, fiind dovedit prin semnături criptografice imposibil de falsificat (JWT semnate asimetric).

### Principiul Compartimentării (Compartmentalization)
Sistemul Medelise este împărțit în "zone de securitate" la fel ca într-o unitate militară. Compromiterea unei zone (ex: portalul vizitatorilor) NU permite sub nicio formă escaladarea laterală către zona clinică, izolarea fiind garantată la nivel de Kernel PostgreSQL.

---

## 2. Izolarea Datelor prin Scheme PostgreSQL (Sub-Sisteme Etanșe)

Baza de date unică Supabase **NU** folosește schema tradițională `public` ca să arunce toate tabelele la grămadă. Am separat baza de date în **Scheme cu acces hardware restrictionat**:

### 🔒 `auth` (Vault-ul de Identitate)
- **Control**: Accesibil EXCLUSIV motorului intern Supabase GoTrue. Niciun microserviciu scris de noi nu poate citi direct de aici.
- **Conținut**: Adrese de email, parole hash-uite cryptografic (Scrypt), sesiuni, token-uri OTP, ID-uri unice MFA.
- **Riscul Zero**: Dacă un hacker fură datele din `clinical`, nu va obține nicio parolă.

### 🏥 `clinical` (Secret de Stat - Nivel ONU)
- **Control**: Acces limitat doar la microserviciul `svc-patients` și la apeluri API validate cu JWT activ de Medic sau Pacient Titular.
- **Conținut**: Tabele precum `medical_records`, `appointments`, `diagnostics`, `prescriptions`.
- **Politica RLS**: Acces Row-Level hiper-strict (vezi Secțiunea 3).
- **Criptare Suplimentară**: Câmpurile ultrasecrete (CNP, Alergii acute) sunt salvate Criptat AES-256 la nivel de coloană folosind extensia pgcrypto.

### 💰 `billing` (Secret Bancar)
- **Control**: Accesibil exclusiv microserviciului `svc-billing` (conducând webhook-urile Stripe).
- **Conținut**: Status plăți, facturi interne, tranzacții. Rolurile de "Medic" sau "Asistent" sunt blocate fizic să facă interogări `SELECT` pe această schemă (nu pot vedea veniturile).

### 👁️ `audit_sys` (Cutia Neagră Aviatică)
- **Control**: Tabel de tip *Append-Only* (Adăugare Permisă, Modificare/Ștergere Interzise la nivel de baza de date). Nici măcar rolul `postgres` (Superadmin) nu are voie să modifice un `INSERT` trecut. Funcționează pe bază de Trigger SQL invizibil.
- **Conținut**: Orice acțiune care modifică `clinical` va scrie obligatoriu un raport: Ce s-a schimbat, Cine a schimbat (`auth.uid()`), IP-ul, Ora exactă, Starea dinainte (Old State) și Starea de după (New State). 
- **Scop**: Previzualizarea și demonstrarea în mod irefutabil a oricărui incident suspect, conform normelor globale legale (Traceability).

---

## 3. Securitate la Nivel de Rând (Row Level Security - RLS)

Chiar dacă un utilizator a trecut de porți, la nivelul fiecărui Tabel (ex: `clinical.appointments`), motorul de baze de date evaluează manual dreptul său la EXACT acel rând de informație pe care îl cere.

### Regula de Fier: Extracția de Context din JWT
Supabase trimite la baza de date Token-ul utilizatorului verificat matematic.
Baza de date folosește comanda `auth.jwt() ->> 'user_role'` pentru a stabili instant cine este persoana, neîncrezându-se în niciun "parametr" trimis de Frontend.

### Exemple de Politici RLS Aplicate:

**Tabelul `clinical.medical_records`:**
1. **Pacientul (Titularul):**
   ```sql
   CREATE POLICY "Pacientul își poate vedea DOAR propriul dosar"
   ON clinical.medical_records
   FOR SELECT
   USING ( auth.uid() = patient_id ); -- DACĂ uid() din JWT nu e egal cu patient_id din SQL, output-ul este gol (0 rows).
   ```

2. **Asistentul (Delegație Temporală):**
   ```sql
   CREATE POLICY "Asistentul vede doar dosarele din unitatea/ziua sa"
   ON clinical.medical_records
   FOR SELECT
   USING ( 
     auth.jwt() ->> 'role' = 'assistant' 
     AND clinic_id IN (SELECT clinic_id FROM access.staff_assignments WHERE user_id = auth.uid())
   );
   ```

3. **Interzicerea Distrugerii Datelor (No Hard Deletes):**
   ```sql
   -- NU EXISTĂ PERMISIUNI DE DELETE!
   -- Se folosește abordarea Tombstone:
   CREATE POLICY "Doar adminii pot marca dosare ca fiind arhivate"
   ON clinical.medical_records
   FOR UPDATE
   USING ( auth.jwt() ->> 'role' = 'admin' )
   WITH CHECK ( deleted_at IS NOT NULL ); 
   ```

---

## 4. Controlul Fluxului de Acces (MFA & Edge Security)

### Frontiera 1: Vercel Edge Middleware (Radarul Aerian)
Orice cerere către `<domeniu>/patient` sau `/api/*` lovește mai întâi Vercel Edge.
Middleware-ul nostru rulează în **< 2 milisecunde**:
1. Verifică integritatea JWT-ului.
2. Dacă sesiunea a expirat sau token-ul este măsluit: Taie cererea și dă redirect 307 spre `/login`. Nu ajunge absolut nimic la serverele Next.js (Mitigare atacuri DDoS pe login).

### Frontiera 2: MFA (Multi-Factor Authentication) la Supabase
Conform standardelor înalte de e-health:
- Pacienții se loghează prin OTP (Magic Code pe mail combinat cu link criptat) sau Google/Apple Auth (autentificare biometrică delegată prin dispozitivul lor).
- Personalul administrativ (Asistenți, Doctori, Admini de rețea) **vor fi forțați hardware** să posede AAL2 (Authenticator Assurance Level 2) cu introducerea unui Cod de pe aplicația Google Authenticator pe lângă parolă ca să activeze rolul de sistem.

---

## 5. Defense in Depth (Principiile Codului Clean și React)

- Toate rutele SQL se feresc de injecții prin interfețe de tipul API Client (PostgREST sau Prisma), fiind imposibil să lipești string-uri SQL direct din Frontend (`dangerously` e interzis).
- Formularele ascultă doar de scheme `Zod`. (Dacă se trimite un nume ce conține `DROP TABLE`, schema `Zod` aruncă eroare înainte ca cererea să părăsească browserul).
- FSD (Feature-Sliced Design) menține logica izolată ca pe niște micro-aplicații invizibile. Interfața Adminului nu este o simplă bucată CSS ascunsă de Pacient prin `if (admin) display: block`, ci este fizic în alt "Bundle", care nu pleacă spre browserul pacientului. Codul de admin rămâne pur secret pe server.

---

Această arhitectură dovedește unui Auditor de Securitate Cibernetică faptul că sistemul poate funcționa chiar dacă unul dintre straturi este teoretic depășit, garantând confidențialitatea datelor clinice ale Medelise prin lacăte algoritmice.
