# 🏛️ MEDELISE MASTER ARCHITECTURE BIBLE
**SURSA UNICĂ DE ADEVĂR PENTRU ECOSISTEMUL MEDELISE**

> **Versiune:** 2.0 (Consolidată) | **Ecosistem:** SpheraOS / careOS  
> **Scop:** Acest document unifică arhitectura sistemului, protocoalele de securitate, matematica de design și regulile de frontend (FSD). Nicio linie de cod nu se scrie fără a respecta aceste legi.

---

## 🧭 CUPRINS
1. [Infrastructură & Monorepo (Microservicii)](#1-infrastructur-monorepo-microservicii)
2. [Securitate, Complianță & Autentificare](#2-securitate-complian-autentificare)
3. [Arhitectura Frontend (Feature-Sliced Design)](#3-arhitectura-frontend-feature-sliced-design)
4. [Fundația Matematică de Design (UI)](#4-fundaia-matematic-de-design-ui)
5. [Sistemul de Assets & Nomenclatură](#5-sistemul-de-assets-nomenclatur)
6. [Guvernanță & Definition of Done](#6-guvernan-definition-of-done)
7. [Strategia de Data Fetching & State Management](#7-strategia-de-data-fetching--state-management)
8. [Error Handling & Observability](#8-error-handling--observability)
9. [Modelarea Datelor (Database Schema Protocol)](#9-modelarea-datelor-database-schema-protocol)
10. [CI/CD & Ecosistem de Lucru (Github Flow)](#10-cicd--ecosistem-de-lucru-github-flow)
11. [Strategia de Testare (The Testing Pyramid)](#11-strategia-de-testare-the-testing-pyramid)
12. [Ghidul Suprem de Securitate (Sistemul RBAC)](#12-ghidul-suprem-de-securitate-sistemul-rbac)

---

## 🌐 1. INFRASTRUCTURĂ & MONOREPO (Microservicii)

Backend-ul **nu** este un monolit. Proiectul folosește un `pnpm`/`npm` workspace orchestrat prin Turborepo sau Nx, bazat pe servicii *Plug-and-Play* decuplate.

### 1.1 Diagrama Ecosistemului Cloud-Native

```mermaid
graph TD
    %% USERI
    User["Pacient / Medic"] -->|HTTPS / WAF| Vercel["Vercel Cloud (Frontend Next.js)"]

    %% API GATEWAY & FRONTEND
    subgraph "Nivelul de Fațadă (Vercel Edge)"
        Vercel -->|Server Actions / Edge API| Gateway["API Gateway (Ruter Central)"]
    end

    %% BACKEND MICROSERVICES
    subgraph "Nivelul de Logică (Microservicii Independente)"
        Gateway -->|Verifică Token| AuthSvc["svc-auth (Autentificare/JWT)"]
        Gateway -->|Rutează Cererea| PatientSvc["svc-patients (Dosare Medicale)"]
        Gateway -->|Rutează Cererea| BillingSvc["svc-billing (Facturi & Plăți)"]
        Gateway -->|Rutează Cererea| NotifySvc["svc-notifications (SMS/Email)"]
    end

    %% BaaS & TERȚI
    subgraph "Sisteme Terțe & Baze de Date"
        AuthSvc <-->|Auth & RLS| Supabase[("Supabase (PostgreSQL)")]
        PatientSvc <-->|Citire/Scriere| Supabase
        
        BillingSvc -->|Procesează| Stripe["Stripe API (Plăți)"]
        BillingSvc -->|Generează| SmartBill["SmartBill API (Facturi)"]
        
        NotifySvc -->|Email| Resend["Resend API"]
        NotifySvc -->|SMS| Twilio["Twilio API"]
    end
```

### 1.2 Regulile Monorepo-ului (Izolare)
*   **A. Structura fizică:** Frontend-ul se află în `apps/web/`. Microserviciile în `apps/api/` (sau `apps/svc-*`). Schemele Zod partajate în `packages/shared/`.
*   **B. Fără 'Shared Databases':** `svc-billing` NU are voie să citească direct tabela pacienților din baza de date a `svc-patients`. Interogarea se face prin API-ul intern.
*   **C. Comunicare inter-servicii:** Declanșată prin Evenimente (Webhooks / RabbitMQ). (ex: *Pacient creat* -> *Trimite SMS bun venit*).

---

## 🔐 2. SECURITATE, COMPLIANȚĂ & AUTENTIFICARE

Aplicația tratează date medicale (PHI), deci securitatea este la standard **AAL2 (Authenticator Assurance Level 2)** pentru respectarea HIPAA & GDPR.

### 2.1 Fluxul MFA (Multi-Factor Authentication) cu Supabase

```mermaid
sequenceDiagram
    participant U as Utilizator / Medic
    participant F as Frontend (Vercel Edge)
    participant S as Supabase (Auth Auth)

    Note over U,S: LOGIN CU 2FA (TOTP / EMAIL OTP)
    U->>F: 1. Introduce Email + Parolă
    F->>S: 2. apelează signInWithPassword()
    S-->>F: 3. Returnează succes (AAL1). Lipsă MFA!
    F-->>U: 4. Afișează ecran blocat (Cere TOTP)
    U->>F: 5. Introduce 6 cifre din Google Authenticator
    F->>S: 6. apelează mfa.challengeAndVerify(cod)
    S-->>F: 7. Validat AAL2. Emite AccessToken oficial.
    F-->>U: 8. Autentificat securizat pe /dashboard
```

### 2.2 Securitatea pe Straturi
*   **Zero FOUC (Flashes of Unauthenticated Content):** Verificarea JWT-ului se face prin Middleware Next.js la nivel de margine de rețea (Vercel Edge). Timp de răspuns < 50ms pentru redirectări fără ecran alb.
*   **Fără Parolă (OTP Login):** Pacienții se pot loga pur și simplu introducând telefonul și primind un SMS OTP valabil 5 minute (`signInWithOtp()`).
*   **Protecție Formulare:** Orice date pleacă din UI trec prin `packages/shared/validations/auth.schema.ts` (Zod). 

---

## 🧩 3. ARHITECTURA FRONTEND (Feature-Sliced Design)

Medelise folosește module absolut izolate. Tot codul ce are logică de business trăiește în `src/features/`.

### 3.1 Matricea de Importuri (Zero Excepții)

```text
                     POATE IMPORTA DIN →
                ┌────────┬──────────┬────────────┬────────┬──────┐
     DIN ↓      │ app/   │features/ │components/ │shared/ │ lib/ │
┌───────────────┼────────┼──────────┼────────────┼────────┼──────┤
│ app/          │   —    │    ✅    │     ✅     │   ✅   │  ✅  │
│ features/X    │   ❌   │   ⚠️¹    │     ✅     │   ✅   │  ✅  │
│ components/   │   ❌   │    ❌    │     ✅²    │   ❌³  │  ✅  │
│ shared/       │   ❌   │    ❌    │     ❌     │   ✅   │  ✅  │
└───────────────┴────────┴──────────┴────────────┴────────┴──────┘
```
*   ¹ `features/X` importă din `features/Y` DOAR prin `index.ts` (Barrel Export). Fără legături interne invizibile.
*   ² Componentele interne (`components/ui`) sunt „atomi puri”. Nu apelează hooks (`useCart`), nu au logică de business, nu scriu de domeniu.

### 3.2 Diagrama de Triaj a Componentelor

```mermaid
graph TD
    A["Are state/logică de business?"] -->|DA| B["Aparține unui feature anume?"]
    A -->|NU| C["Este layout/structură?"]
    B -->|DA| D["features/nume/components/"]
    B -->|NU, e share-uit| E["components/ui/ (Logica merge într-un hook)"]
    C -->|DA| F["components/layout/"]
    C -->|NU| G["Este vizual și refolosibil?"]
    G -->|DA| H["components/ui/"]
    G -->|NU| I["components/icons/"]
```

---

## 📐 4. FUNDAȚIA MATEMATICĂ DE DESIGN (UI)

Aplicația vizuală se bazează pe rigoare matematică. `globals.css` este singura sursă de adevăr.

### 4.1 Regula Zero și Culorile
*   **Base Unit:** `:root { --base-unit: 4px; }`. Toate formele și spațierile sunt multipli de `4px` (preferabil de `8px`).
*   **Culori Stricte:**
    *   `--color-primary (#213170)`: Indigo (Logouri, Headings, Call to Action).
    *   `--color-accent (#FE5D16)`: Orange (Exclusiv accente vizuale, eyebrows. NICIODATĂ CTA principal).
    *   `--color-secondary (#BDE0FF)`: Baby Blue (Text luminos pe fundal Indigo).
    *   Nu există hardcodare hexadecimală (`#FFF`) în modulele React; totul e instanțiat cu `var(--color-*)`.

### 4.2 Scala Fluidă de Tipografie și Layout
*   Folosim `clamp()` – Mărimile fontului și spațierea secțiunilor se scalează algoritmic între Mobile (375px) și Desktop (1065px+). **Fără tailwind breakpoints (`md:`, `lg:`)** pentru texte.
*   **Fonturi Alocate:**
    *   `Michroma`: Exclusiv Logo / Wordmarks.
    *   `Montserrat`: Toate Hedings (`<h2>`, `<h3>`, etc).
    *   `Inter`: Body text.

---

## 📦 5. SISTEMUL DE ASSETS & NOMENCLATURĂ

### 5.1 Protocolul WebP (Foldere /public)
Zero imagini PNG, JPEG sau fișiere SVG uriașe nerefacute. Tot mediul grafic este compus din `.webp`.
```text
public/
├── brand-medelise/      → (md-logo-black.webp)
├── icons-medelise/      → Peste 1.000 iconițe pe categorii (md-ico-doc.webp).
└── images-medelise/     → Imagini HD per features (md-img-hero-intro.webp).
```
Asset-urile din `icons-` și `images-` **trebuie** trecute prin filtrele `@shared/constants/icons.ts` sau hardcodate limitativ doar în feature-ul de care aparțin.

### 5.2 Standarizarea Numelor de Fișiere
| Element | Formulare | Exemplu |
|---------|-----------|---------|
| Componente React | PascalCase | `AppointmentCard.tsx` |
| Hooks | camelCase | `usePatientData.ts` |
| Interfețe/Types TS | PascalCase prefixate | `interface IVPatientProfile` |
| Config & Fisiere utils | camelCase | `formatDate.ts`, `turbo.json` |

---

## ✅ 6. GUVERNANȚĂ & DEFINITION OF DONE

Înainte ca un cod să poată fi aprobat și împins spre serverele de producție de către un dezvoltator (sau agent AI), trebuie să valideze 5 Piloni:

1.  **Fără Rute de Import Murdare:** Niciun import din `src/features/*` care nu folosește alias-ul oficial (`@features/...`) sau ignoră arhitectura de Barrels (`index.ts`).
2.  **Date Separate de Logică:** Secret-keys (Stripe, Twilio) trăiesc doar în `.env` în folder-ul de microserviciu (Backend). 
3.  **Fără Imagini Directe:** Totul este importat prin `next/image` cu atribute exprese de optimizare (lățime, înălțime) spre a evita Core Web Vitals CLS.
4.  **Cod Validat prin Zod:** Niciun flux Input/Output nu scapă de validarea Schemelor TypeScript cross-workspace.
5.  **Reverificarea Contextelor (reguli-stricte.md):** Fiecare folder static nou creat va poseda un `reguli-stricte.md` cu detalierea și inventarierea fișierelor sale.

**[End of Master Architecture Document]**

---

## 💾 7. STRATEGIA DE DATA FETCHING & STATE MANAGEMENT

Fluxul datelor trebuie să fie previzibil. Interzicem folosirea excesivă a Redux sau Context API (Prop Drilling) în favoarea arhitecturii moderne Next.js + Zustand.

### 7.1 Ciclul de Viață al Datelor (Diagrama de Flux)

```mermaid
graph LR
    %% SURSE
    DB[("Supabase DB")] -->|Server Actions Async/Await| RSC["React Server Components Randare Server"]
    
    %% RENDER
    RSC -->|Transmite date statice fără JS| Client["Browser Client"]
    
    %% STATE MANAGEMENT
    Client -->|Interacțiune UI| Zustand(("Zustand Store Local State"))
    Zustand -->|Declanșează Mutare| Mut["Server Action (ex: Adaugă în coș)"]
    Mut -->|Update| DB
    
    %% CACHE INVALIDATION
    Mut -.->|revalidatePath| RSC
```

### 7.2 Reguli de State Management
1.  **Server State (Supabase):** Rânduit EXCLUSIV prin **React Server Components (RSC)**. Nu aducem liste de pacienți folosind `useEffect` sau `useQuery` pe client. Totul vine pre-randat HTML de la Vercel.
2.  **Client State (UI, Modaluri, Coș de cumpărături):** Folosim **Zustand**. Este un store global, minimalist, care nu provoacă re-randări întregii aplicații când se schimbă un singur `boolean`.
3.  **Mutarea Datelor (Formulare):** Modificarea bazei de date se face via **Server Actions** (`"use server"`). Frontend-ul apelează o funcție, iar Vercel Edge o execută securizat. După o plată de succes, se apelează `revalidatePath('/dashboard')` pentru a aduce instant datele noi.

---

## 💥 8. ERROR HANDLING & OBSERVABILITY

Platforma medicală nu are voie să afișeze ecrane albe (White Screen of Death) sau erori criptice pacienților (ex: `Error 500: Database timeout`).

### 8.1 Arhitectura de Tratare a Erorilor (Global Error Boundaries)

```mermaid
graph TD
    A["Cerere Utilizator POST /api/programare"] --> B{"Validare Zod"}
    
    %% EROARE ZOD
    B -->|Eșuează Formular| C["Return: 400 Bad Request Afișare UI"]
    
    %% EROARE SERVER
    B -->|Trece Zod| D["Apelează Gateway"]
    D --> E{"Eroare Internă/Rețea?"}
    E -->|Da, API Picat| F(("Global Error Boundary"))
    F --> G["Sentry: Înregistrează Stack Trace"]
    F --> H["UIFallback: Serviciu indisponibil"]
    E -->|Nu| I["Succes!"]
```

### 8.2 Contractul Universal de Răspuns (API Response Pattern)
Toate microserviciile Medelise comunică spre Frontend folosind **UN SINGUR CONTRACT JSON**:
```json
// Răspuns de SUCCES
{
  "success": true,
  "data": { "patientId": "uuid-1234", "status": "confirmed" }
}

// Răspuns de EROARE (Gestionat grațios)
{
  "success": false,
  "error": {
    "code": "PAYMENT_FAILED",
    "message": "Cardul a fost respins. Vă rugăm verificați fondurile."
  }
}
```
*   **Observabilitate (Sentry):** Orice eroare neașteptată (`throw new Error`) ajunge în Sentry. Este **STRICT INTERZIS** să lăsăm date sensibile (`email`, `cnp`) în logurile Sentry. Folosim doar UUID-uri pentru depanare.

---

## 🗄️ 9. MODELAREA DATELOR (Database Schema Protocol)

Baza de date (Supabase PostgreSQL) are propriul ei guvernământ.
1.  **Nomenclatură:** Obligatoriu `snake_case` (ex: `first_name`, `appointment_date`). Niciodată `firstName`.
2.  **Identificatori (Primary Keys):** Folosim EXCLUSIV **UUID v4**. (ex: `f47ac10b-58cc-4372-a567-0e02b2c3d479`). Dacă am folosi ID-uri numerice (1, 2, 3), hackerii ar putea itera peste ele. UUID face imposibilă ghicirea URL-urilor medicale.
3.  **Istoric Incoruptibil (Soft Deletes):** Niciun rând din baza de date Medicală nu se șterge prin comanda SQL `DELETE`. Adăugăm mereu funcția de **Soft Delete**: `deleted_at = NOW()`. Aceasta filtrează datele din UI, dar le păstrează pentru audit legislativ sau facturare istorică.

---

## 🚀 10. CI/CD & ECOSISTEM DE LUCRU (Github Flow)

Pentru echipele de Top 0.1%, codul ajunge de la laptop-ul programatorului pe serverul Medelise printr-o autostradă complet automatizată și testată.

### 10.1 Calea Codului spre Producție

```mermaid
graph TD
    classDef mainBranch fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px;
    classDef featureBranch fill:#fff3e0,stroke:#ed8936,stroke-width:2px;

    Main1("main<br>1. Starea Curentă"):::mainBranch --> Feature1("feature/add-stripe<br>2. Creare Branch Nou"):::featureBranch
    
    Feature1 --> Feature2("3. Dev: Zod Schemas"):::featureBranch
    Feature2 --> Feature3("4. Dev: API Gateway"):::featureBranch
    
    Feature3 --> Vercel("5. Vercel Preview<br>Deploy Automat Test")
    
    Vercel --> PR("6. Pull Request<br>Aprobare Code Review")
    
    PR --> Main2("main<br>7. Merge & Deploy Producție"):::mainBranch
```

### 10.2 Reguli de Integrare
*   **Main Branch Protection:** Nimeni, nici măcar arhitectul principal, nu face "push direct" pe `main`. Se folosesc Pull Requests.
*   **Vercel Preview Deployments:** La fiecare Pull Request, Vercel generează automat un URL temporar secret (ex: `stripe-test-medelise.vercel.app`). Clientul sau QA-ul testează vizual schimbarea. Abia după validare udamă, codul este acceptat.
*   **Turborepo Smart Caching:** Dacă se face un commit doar într-un fișier de Backend (`svc-billing`), Turborepo ignoră instalarea și testarea ramurii `apps/web` pe Github Actions, scurtând timpul de build de la 10 minute la 30 de secunde.

---

## 🧪 11. STRATEGIA DE TESTARE (The Testing Pyramid)

Nu există cod de nivel medical fără 3 straturi de testare matematică. Nimic nu trece de CI/CD dacă testele pică.

1.  **Unit Tests (Vitest):** Mici, rapide (milisecunde). Testează funcții matematice izolate și scheme Zod. (ex: *CalculeazăCorectTVA(100) -> 119*).
2.  **Integration Tests:** Verifică legăturile. (ex: *Dacă trimit payload bun spre svc-auth, primesc înapoi JWT valid?*).
3.  **E2E (End-to-End cu Playwright):** Cireașa de pe tort. Un robot de test zilnic pornește un browser Chromium fantomă, se duce pe platforma ta, dă click pe "Programare", alege data, completează numele, simulează o plată Stripe și verifică dacă a primit bifa verde. Dacă robotul nu prinde bifă într-o noapte, la ora 04:00, ești alertat automat pe telefon că un update recent a stricat ceva critic.


---

## 🔐 12. GHIDUL SUPREM DE SECURITATE: Sistemul RBAC

> **Ecosistem:** Medelise / SpheraOS
> **Tipologie:** Baze de date dinamice (PostgreSQL) + JWT Claims + Auth Passwordless/MFA + Randare Edge (Next.js)

Acest capitol reprezintă **Biblia dezvoltatorului** pentru implementarea securității Medelise. Combină logica de Autentificare (Registrare, MFA, OTP) cu arhitectura de nivel Top 0.1% a sistemului **RBAC (Role-Based Access Control)**.

---

### 12.1. Principiile de Bază ale Sistemului

Securitatea Medelise este formată din două inimi mari care bat în tandem:
1. **Supabase Auth (AAL2):** Motorul principal care verifică dacă "Ești cine zici că ești" (Autentificare strictă, MFA, OTP, Register).
2. **PostgreSQL Triggers & JWT Injection:** Motorul decizional care verifică "Ce ai voie să faci" pe baza permisiunilor atomice (Lego).

---

### 12.2. Procesul de Bază: Înregistrarea și Autentificarea (End-to-End)

Cum ajunge un utilizator (Medic / Pacient) să aibă de fapt permisiuni în sistemul Medelise? Iată fluxul complet de viață al unui cont.

#### 12.2.1 Pasul A: Înregistrarea (Registration Flow)
Când un cont nou este creat pe platformă:
1. Utilizatorul introduce datele în formularul securizat de Frontend (`RegisterSchema` Zod creat în `@medelise/shared`).
2. Cererea ajunge la Supabase Auth.
3. Supabase creează contul securizat în tabelul ascuns `auth.users`.
4. **Trigger Database:** Automat, se declanșează un Trigger SQL din baza de date (`on_auth_user_created`). Acest trigger copiază profilul public în tabelul public `users` și îi asignează automat un **Rol Default** (ex: `GUEST` sau `PACIENT` cu permisiuni foarte limitate, strict de vizualizare programări).

#### 12.2.2 Pasul B: Autentificarea & Verificarea (MFA / OTP)
Securitatea medicală (HIPAA) nu acceptă simpla logare cu parolă.
1. Utilizatorul introduce Telefonul sau Emailul.
2. În funcție de setări, introduce Parola, sau cere direct un Cod OTP pentru autentificare Rapidă (Passwordless).
3. Dacă parola e corectă, sistemul intră în "AAL2" (Assurance Level 2), cerând codul unic din Google Authenticator sau primit prin SMS / Email.

```mermaid
sequenceDiagram
    autonumber
    
    %% Faza de Înregistrare & Login
    participant U as Utilizator Neautentificat
    participant UI as Frontend Medelise
    participant SA as Supabase Auth (Motor)
    participant DB as Postgres (Users Table)
    
    U->>UI: 1. Completează formular Register
    UI->>SA: 2. Apel API Înregistrare
    SA-->>DB: 3. Trigger Automat (Rol Default [Pacient] setat)
    
    U->>UI: 4. Cerere Login (Parolă / OTP)
    UI->>SA: 5. Autentifică identitatea
    SA-->>UI: 6. Cere factorul 2 (MFA - 6 Cifre)
    U->>UI: 7. Introduce 123456
    UI->>SA: 8. Verifică OTP
```

---

### 12.3. Arhitectura Supremă RBAC (Permisiuni Dinamice)

După ce utilizatorul se autentifică cu succes (Pasul 8 din diagrama de mai sus), sistemul trebuie să știe **exact ce voie are să facă**. 

Dacă un programator normal ar face sistemul, ar folosi enum-uri în cod (`role = KINETOTERAPEUT`). În sistemul nostru de **Top 1%**, rolurile se compun din **cutiuțe de piese Lego (Permisiuni Atomice)**.

#### 12.3.1 Modelul de Date (Cele 4 Tabele Cheie)

Sistemul permite Admin-ului să creeze "Roluri" noi din Dashboard și să le bifeze manual Permisiuni (Lego-uri de Securitate) dintr-o listă.

- **`roles`:** [1: Doctor General, 2: Asistent Medical, 3: Maseor VIP]
- **`permissions`:** [`patients.read`, `patients.edit`, `billing.view`] (Hardcodate de noi, programatorii).
- **`role_permissions`:** Leagă Rolul 3 (Maseor) strict de permisiunea `patients.read`.
- **`user_roles`:** Leagă Utilizatorul Suprem 'Mircea' de Rolul 1.

#### ERD (Entity Relationship Diagram - Cele 4 Tabele Cheie)
Aceasta este structura care previne repetarea codului (DRY) și permite crearea infinită de noi poziții ocupaționale:

```mermaid
classDiagram
  class USERS {
    +uuid id
    +string email
  }
  class ROLES {
    +int id
    +string name
  }
  class PERMISSIONS {
    +string id
  }
  class USER_ROLES {
    +uuid user_id
    +int role_id
  }
  class ROLE_PERMISSIONS {
    +int role_id
    +string permission_id
  }
  
  USERS "1" -- "*" USER_ROLES : detine
  ROLES "1" -- "*" USER_ROLES : incadreaza
  ROLES "1" -- "*" ROLE_PERMISSIONS : asociaza
  PERMISSIONS "1" -- "*" ROLE_PERMISSIONS : compune
```

#### 12.3.2 Injectarea Permisiunilor la Viteza Luminii (JWT)

A interoga Baza de date la fiecare click al utilizatorului ca să verifici tabelele de permisiuni sugrumă serverul. **Soluția:** JWT Custom Claims.

Imediat după ce Supabase Auth validează parola (Pasul 8), înainte să-i trimită `Sesiunea locală (Token)` browserului, un hook special verifică tabelele și atașează "piesele de Lego":

```json
{
  "email": "maseor@medelise.ro",
  "app_metadata": {
    "role": "Maseor VIP",
    "permissions": ["appointments.view", "patients.read"]
  }
}
```

Orice verificare viitoare pe Vercel Middleware va citi direct acest Token stocat pe Cookie. Procesare de **2ms per click**.

---

### 12.4. Diagramele de Flux RBAC (Creation & Execution)

#### 12.4.1 Faza 1: Construcția Dinamică (Cum lucrează Adminul)

Când vrei să angajezi un tip nou de profesionist, nu chemi dezvoltatorii de cod. Intri în Dashboard și îi creezi pașaportul de securitate.

```mermaid
sequenceDiagram
    autonumber
    
    %% Dashboard Admin
    participant A as Admin Suprem
    participant C as UI Frontend
    participant DB as Supabase PostgreSQL
    
    A->>C: Click "Creează Rol Nou" (ex: Nutriționist)
    C->>DB: Inserează Numele Rolului în Tabela [roles]
    C->>DB: Leagă Permisiunile (patients.view, diet.edit) în [role_permissions]
    DB-->>A: Rol creat cu succes. Gata de asigurat Userilor!
```

#### 12.4.2 Faza 2: Execuția la fiecare Click (Front-End & Back-End RLS)

După ce utilizatorul are JWT-ul injectat cu permisiuni, iată cum este protejată fizic arhitectura Monorepo.

```mermaid
sequenceDiagram
    autonumber
    
    %% Fluxul Real de Lucru (Execution - Viteza Luminii)
    participant P as Profesionist logat (Client Browser)
    participant Edge as Vercel Edge Middleware
    participant API as Backend API (apps/api - svc-patients)
    participant SDB as Supabase Database (RLS)
    
    P->>Edge: Navighează spre /dashboard/facturi (GET)
    Edge->>Edge: Decripează JWT Cookie local (Timp procesare: 2ms)
    Edge-->>P: Eroare: "billing.view" LIPSĂ din JWT! Middleware Redirect -> /403 Access Denied
    
    P->>Edge: Navighează spre /dashboard/fisa-pacient
    Edge->>Edge: Verifică JWT: "patients.read" EXISTĂ!
    Edge->>API: Permite Forward la Microserviciul de Pacienți
    API->>SDB: Row Level Security SQL rulează pe baza JWT-ului
    SDB-->>API: Întoarce DOAR rândurile permise doctorului
    API-->>P: Afișează conținutul medical
```

---

### 12.5. Scenarii Concrete de Utilizare (Exemple Vizuale)

Pentru o claritate tehnică absolută, iată 3 exemple reale de cum interacționează acest sistem de Securitate în producție, demonstrând superioritatea arhitecturii noastre.

#### Exemplul 1: Acces Autorizat Perfect (Medic -> Dosar Pacient)
Un Medic autentificat cu MFA are în pașaportul său digital (token-ul JWT) permisiunea de a vizualiza fișele: `patients.view`.

```mermaid
sequenceDiagram
    participant M as Medic (Browser)
    participant E as Vercel Edge (Next.js)
    participant API as Backend (svc-patients)
    participant DB as Supabase
    
    M->>E: Cerere: GET /dashboard/pacienti/123
    E->>E: Citește Token JWT (în 2ms)
    Note over E: Edge vede în JWT: ["patients.view", "billing.create"]
    E->>API: 🟢 Acces Permis (Forward Request)
    API->>DB: Caută logic dosarul 123
    DB-->>API: Date returnate
    API-->>M: Afișează Fișa Medicală grafică
```

#### Exemplul 2: Blocare Instantanee pe Margine de rețea (Asistent -> Facturare)
Un Asistent încearcă să modifice o factură, însă la semnarea contractului, Adminul nu a bifat permisiunea `billing.delete` pe rolul "Asistent". Sistemul îi blochează acțiunea direct din frontend, menținând backend-ul curat.

```mermaid
sequenceDiagram
    participant A as Asistent (Browser)
    participant E as Vercel Edge Middleware
    participant API as Backend (svc-billing)
    
    A->>E: Cerere: DELETE /api/billing/999
    E->>E: Citește Token JWT
    Note over E: Edge vede în JWT: ["patients.view", "appointments.edit"]
    E-->>A: 🔴 Acces Interzis! (403 Forbidden)
    Note over API: Nu a ajuns nicio cerere la Backend. Cost zero de CPU.
```

#### Exemplul 3: Ultimul Zid de Apărare Incoruptibil (Supabase RLS)
Să ne imaginăm un scenariu catastrofal în care un Hacker reușește să spargă Vercel Edge și trimite direct o interogare internă către baza de date pentru a fura pacienții Alte Clinicilor. Postgres va refuza citirea nivel de rând datorită regulilor noastre stricte de RLS.

```mermaid
sequenceDiagram
    participant H as Hacker (Atac API Direct bypass)
    participant DB as Supabase PostgreSQL
    
    H->>DB: Interogare SQL: SELECT * FROM patients
    DB->>DB: Evaluează logic: "User can only see their own clinic's patients"
    Note over DB: Extrage din auth.uid() & token clinic_id
    DB-->>H: 🔴 Refuzat RLS. Returnează 0 rânduri găsite (Deși tabelele sunt pline)
```

---

### 12.6. Reguli Absolute pentru Dezvoltatori (De Transmis Echipei de Auth)

Când echipa ta se va integra direct în codul `apps/api` și UI:
1. Niciodată nu hardcodați `if (role === 'ADMIN')` în UI. Folosiți `if (session.permissions.includes('billing.view'))`.
2. Supabase RLS (Row Level Security) stă **întotdeauna activat**. Chiar dacă Edge-ul dă voie unui atacator, RLS-ul pe tabelele SQL va opri citirea ilegală a datelor.
3. Permisiunile sunt granulare (Format: `entitate.acțiune`). Funcționează impecabil cu Master Schema și cu pachetul nostru `@medelise/shared`.

Document construit pentru a asigura **Complianța Multi-Clinic & Scalabilitatea Masivă** pentru orice angajat viitor Medelise.
