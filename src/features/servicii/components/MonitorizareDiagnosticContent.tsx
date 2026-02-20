'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';
import ServiceRoleTabs from './ServiceRoleTabs';
import ServiceCard from './ServiceCard';

export default function MonitorizareDiagnosticContent() {
    return (
        <main>
            <ServiceHero
                title="Monitorizare & Diagnostic la domiciliu – siguranța datelor clinice, în confortul tău"
                description={`Echipa Medelise vine la tine acasă pentru măsurarea parametrilor vitali, EKG, pulsoximetrie, glicemie și tensiune arterială. Toate valorile sunt înregistrate digital și transmise medicului curant în timp real.

Prevenția începe cu monitorizarea corectă.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Asistentă medicală Medelise monitorizând parametrii vitali ai unui pacient la domiciliu"
            />

            <ServiceSectionHeader
                title="Monitorizare medicală completă – parametri vitali, EKG și analize rapide"
                description="Verificări precise și non-invazive ale stării de sănătate, efectuate cu echipament profesional la domiciliu de asistenți medicali certificați."
            />

            <ServiceRoleTabs />

            {/* ── Service Cards ── */}
            <ServiceCard
                title="Măsurarea tensiunii arteriale (TA)"
                description="Monitorizare non-invazivă a presiunii arteriale sistolice și diastolice cu tensiometru digital calibrat. Include interpretarea valorilor și recomandări de conduită."
                price="50"
                duration="5 - 10 min"
                cnasStatus="decontat"
                triageLevel={5}
                triageLabel="Control"
                triageDescription="Procedură de verificare standard fără risc, indicată pentru monitorizare periodică sau la cererea pacientului."
                indications="Hipertensiune arterială, hipotensiune, amețeli, cefalee, monitorizare post-medicație antihipertensivă."
                contraindications="Nu există contraindicații absolute."
                immediateBenefit="Depistarea precoce a valorilor anormale ale TA și prevenirea complicațiilor cardiovasculare."
                premedication="Nu necesită premedicație."
                monitoringNeed="Nu necesită monitorizare suplimentară."
                patientPrep="Pacientul trebuie să fie în repaus de cel puțin 5 minute, fără consum de cafea/fumat cu 30 min înainte."
                medicalRecommendation="Nu este necesară."
                referralTicket="Nu este necesar."
                crew="1 asistent medical"
                expertiseLevel="Competențe de bază în nursing"
                location="La domiciliul pacientului"
                cnasInfo="Decontat integral prin CNAS cu bilet de trimitere."
                privateInsurance="Acoperit de majoritatea asigurărilor private."
                coPayment="0 RON (decontat CNAS) / 50 RON (privat)"
            />

            <ServiceCard
                title="Electrocardiogramă (EKG) la domiciliu"
                description="Înregistrare EKG cu 12 derivații, realizată cu aparat portabil profesional. Rezultatele sunt transmise digital medicului cardiolog pentru interpretare."
                price="150"
                duration="15 - 20 min"
                cnasStatus="decontat"
                triageLevel={4}
                triageLabel="Diagnostic"
                triageDescription="Procedură diagnostică non-invazivă care necesită echipament specializat și interpretare medicală."
                indications="Dureri toracice, palpitații, dispnee, sincopă, monitorizare post-infarct, evaluare pre-operatorie."
                contraindications="Nu există contraindicații absolute. Precauții la pacienți cu leziuni cutanate în zona electrozilor."
                immediateBenefit="Detectarea aritmiilor, ischemiei miocardice și a altor anomalii cardiace în timp real."
                premedication="Nu necesită premedicație."
                monitoringNeed="Transmitere rezultate către medic cardiolog."
                patientPrep="Pacientul trebuie dezbrăcat la nivelul toracelui, piele curată, fără creme sau loțiuni."
                medicalRecommendation="Recomandare de la medicul de familie sau cardiolog."
                referralTicket="Necesar pentru decontare CNAS."
                crew="1 asistent medical cu competențe EKG"
                expertiseLevel="Competențe avansate – interpretare EKG de bază"
                location="La domiciliul pacientului"
                cnasInfo="Decontat prin CNAS cu bilet de trimitere de la medicul de familie."
                privateInsurance="Acoperit de majoritatea asigurărilor private."
                coPayment="0 RON (CNAS) / 150 RON (privat)"
            />

            {/* More sections will be added here */}
        </main>
    );
}
