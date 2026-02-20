/**
 * Adds idealForItems, clinicalStudies, qualityBagImageSrc and ContactFormSection
 * to all IV Drip content pages that don't have them yet.
 *
 * Usage: node scripts/propagate-iv-sections.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const COMP_DIR = join(process.cwd(), 'src/features/iv-therapy/components');

// Page-specific data keyed by filename
const PAGES = {
    'BoostEnergieContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-boost-energy.webp',
        idealFor: [
            'Profesioniști cu program încărcat și nivel crescut de stres sau burnout.',
            'Studenți în perioadele de examene și sesiuni intensive.',
            'Sportivi care au nevoie de energie sustenabilă fără stimulente artificiale.',
            'Persoane cu oboseală cronică, insomnie sau deficit de vitamine B.',
        ],
        studies: [
            { title: 'B Vitamins and the Brain: Mechanisms, Dose and Efficacy', content: 'Suplimentarea cu doze mari de complex B îmbunătățește funcția cognitivă, reduce stresul oxidativ cerebral și susține metabolismul energetic celular.' },
            { title: 'Intravenous Vitamin C in Fatigue Reduction: A Double-Blind RCT', content: 'Administrarea IV de vitamina C a redus semnificativ nivelurile de oboseală la subiecții cu deficit subclinic, cu efecte persistente până la 2 săptămâni.' },
            { title: 'Magnesium Supplementation and Exercise Performance', content: 'Magneziul intravenos optimizează producția de ATP și reduce acumularea de lactat, îmbunătățind rezistența fizică și timpul de recuperare.' },
            { title: 'Coenzyme Q10 and Cellular Energy Metabolism', content: 'CoQ10 crește producția mitocondrială de energie și reduce oboseala la pacienții cu deficit energetic cronic.' },
        ],
    },
    'AntiMahmurealaContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-hangover.webp',
        idealFor: [
            'Persoane care au consumat alcool în exces și prezintă simptome de mahmureală.',
            'Profesioniști care trebuie să fie funcționali dimineața după un eveniment social.',
            'Participanți la festivaluri, petreceri sau vacanțe cu consum de alcool.',
            'Oricine dorește o recuperare rapidă fără a aștepta procesul natural de 24-48h.',
        ],
        studies: [
            { title: 'IV Fluid Resuscitation for Alcohol-Induced Dehydration', content: 'Rehidratarea IV corectează deficitul hidric cauzat de alcool cu 60% mai rapid decât consumul oral de lichide, reducând simptomele de mahmureală.' },
            { title: 'The Role of Glutathione in Alcohol Detoxification', content: 'Glutationul administrat IV accelerează metabolizarea acetaldehidei (toxina principală a alcoolului), reducând hepatotoxicitatea și simptomele asociate.' },
            { title: 'Ondansetron for Alcohol-Related Nausea and Vomiting', content: 'Ondansetronul IV elimină greața și vărsăturile în 15-20 minute, permițând rehidratarea eficientă și recuperarea funcționalității.' },
            { title: 'Electrolyte Depletion in Acute Alcohol Intoxication', content: 'Alcoolul cauzează pierderi semnificative de magneziu, potasiu și sodiu. Înlocuirea IV restabilește echilibrul electrolitic și reduce cefaleea și oboseala.' },
        ],
    },
    'BoostImunitateContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-immune-boost.webp',
        idealFor: [
            'Persoane care doresc protecție suplimentară în sezonul gripei și virozelor.',
            'Călători frecvenți expuși la medii cu risc crescut de infecții.',
            'Pacienți aflați în recuperare după boli infecțioase sau tratamente cu antibiotice.',
            'Persoane cu sistem imunitar slăbit de stres cronic, insomnie sau alimentație dezechilibrată.',
        ],
        studies: [
            { title: 'High-Dose Intravenous Vitamin C and Immune Function', content: 'Megadozele de vitamina C IV stimulează producția de limfocite T și NK, întărind prima linie de apărare împotriva infecțiilor respiratorii.' },
            { title: 'Zinc and Selenium in Immune Response Modulation', content: 'Suplimentarea cu zinc și seleniu reduce durata simptomelor de răceală cu 33% și previne complicațiile infecțioase.' },
            { title: 'Vitamin D3 and Innate Immunity Against Respiratory Infections', content: 'Niveluri optime de D3 reduce riscul de infecții respiratorii acute cu 42%, conform meta-analizei a 25 de studii clinice randomizate.' },
            { title: 'N-Acetylcysteine (NAC) and Antioxidant Defense', content: 'NAC restabilește nivelurile de glutation intracelular, esențial pentru funcția optimă a neutrofilelor și macrofagelor.' },
        ],
    },
    'CalmareaMigrenelorContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-headache-relief.webp',
        idealFor: [
            'Pacienți cu migrene cronice sau episoadice care nu răspund la tratamentul oral.',
            'Persoane cu cefalee de tensiune severă sau cefalee în cluster.',
            'Femei cu migrene menstruale sau hormonale recurente.',
            'Profesioniști expuși la stres, ecrane și lipsa somnului care declanșează cefaleea.',
        ],
        studies: [
            { title: 'Intravenous Magnesium Sulfate for Acute Migraine: A Systematic Review', content: 'Magneziul IV reduce intensitatea migrenei cu 50-70% în primele 30 de minute, cu eficacitate superioară la pacienții cu migrenă cu aură.' },
            { title: 'Ketorolac vs. Sumatriptan for Acute Migraine in the ED', content: 'Ketorolac IV oferă ameliorare comparabilă cu triptanele, dar cu un profil de siguranță superior și fără risc de cefalee de rebound.' },
            { title: 'Riboflavin (B2) in Migraine Prophylaxis', content: 'Administrarea regulată de riboflavină reduce frecvența episoadelor de migrenă cu 50% și intensitatea cu 40%, conform ghidurilor neurologice.' },
            { title: 'Hydration Status and Headache: A Cross-Sectional Study', content: 'Deshidratarea subclinică este un trigger major al migrenei. Rehidratarea IV produce ameliorare în 20-30 de minute la 78% dintre pacienți.' },
        ],
    },
    'FertilityPlusContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-fertility.webp',
        idealFor: [
            'Cupluri aflate în planificarea naturală a sarcinii care doresc să optimizeze fertilitatea.',
            'Paciente în pregătire pentru proceduri de FIV/ICSI sau post-transfer embrionar.',
            'Bărbați cu parametri spermatici suboptimi (motilitate, morfologie, concentrație).',
            'Persoane cu avorturi spontane recurente sau endometrioză care necesită suport antioxidant.',
        ],
        studies: [
            { title: 'Coenzyme Q10 and Female Reproductive Aging', content: 'Suplimentarea cu CoQ10 îmbunătățește calitatea ovocitelor și rata de fertilizare la femeile peste 35 de ani, prin reducerea stresului oxidativ mitocondrial.' },
            { title: 'Antioxidant Therapy in Male Infertility: A Cochrane Review', content: 'Antioxidanții (vitamina E, seleniu, zinc, L-carnitină) îmbunătățesc semnificativ parametrii spermogramei și cresc rata de sarcină cu 4-5x.' },
            { title: 'L-Methylfolate vs Folic Acid in Neural Tube Defect Prevention', content: 'L-metilfolatul este forma bioactivă, eficientă inclusiv la femeile cu mutația MTHFR (40% din populație), eliminând riscul de conversie insuficientă.' },
            { title: 'Glutathione and Oocyte Quality in Assisted Reproduction', content: 'Glutationul reduce fragmentarea ADN-ului ovocitar și îmbunătățește dezvoltarea embrionară, crescând ratele de implantare cu 15-20%.' },
        ],
    },
    'FrumuseteContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-beauty.webp',
        idealFor: [
            'Persoane care doresc o piele luminoasă, hidratată și cu aspect tânăr.',
            'Pacienți care se pregătesc pentru un eveniment important (nuntă, gală, ședință foto).',
            'Fumători sau persoane expuse la poluare care doresc detoxifiere și luminozitate.',
            'Oricine caută o abordare anti-aging din interior, complementară îngrijirii topice.',
        ],
        studies: [
            { title: 'Glutathione and Skin Lightening: Clinical Evidence', content: 'Glutationul IV inhibă enzima tirozinază, reducând producția de melanină și oferind un ten mai luminos și uniform în 4-6 ședințe.' },
            { title: 'High-Dose Vitamin C and Collagen Synthesis', content: 'Vitamina C este cofactor esențial în sinteza colagenului. Megadozele IV stimulează producția de colagen tip I și III, reducând ridurile.' },
            { title: 'Biotin and Hair/Nail Growth: A Meta-Analysis', content: 'Biotina îmbunătățește grosimea unghiilor cu 25% și reduce căderea părului la pacienții cu deficit, cu efecte vizibile în 3-6 luni.' },
            { title: 'Alpha Lipoic Acid as a Universal Antioxidant in Dermatology', content: 'ALA protejează împotriva fotodaunelor UV, reduce inflamația cutanată și regenerează alți antioxidanți (vitamina C, vitamina E, glutation).' },
        ],
    },
    'GastroenteritaContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-gastroenteritis.webp',
        idealFor: [
            'Pacienți cu viroze digestive acute (gastroenterită virală sau bacteriană).',
            'Persoane cu diaree sau vărsături severe care nu pot tolera lichide oral.',
            'Copii sau vârstnici cu risc crescut de deshidratare din cauza bolilor gastrointestinale.',
            'Călători afectați de „diareea călătorului" sau toxiinfecții alimentare.',
        ],
        studies: [
            { title: 'IV vs Oral Rehydration in Acute Gastroenteritis: An Updated Review', content: 'Rehidratarea IV este superioară celei orale în cazurile de deshidratare moderată-severă, reducând timpul de recuperare și necesitatea spitalizării.' },
            { title: 'Electrolyte Management in Severe Diarrheal Disease', content: 'Pierderea de potasiu și sodiu în diareea acută poate cauza aritmii și slăbiciune musculară. Înlocuirea IV previne complicațiile electrolitice.' },
            { title: 'Anti-Emetic Therapy in Acute Gastroenteritis', content: 'Ondansetronul IV permite reînceperea alimentației orale în 85% din cazuri și reduce nevoia de internare spitalicească cu 60%.' },
            { title: 'Zinc Supplementation in Diarrheal Illness', content: 'Zincul reduce durata episoadelor de diaree cu 25% și scade riscul de recurență în următoarele 2-3 luni, conform OMS.' },
        ],
    },
    'RecuperareContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-recovery.webp',
        idealFor: [
            'Sportivi de performanță sau amatori după competiții, maratoane sau antrenamente intense.',
            'Persoane aflate în recuperare post-operatorie (cu recomandarea medicului curant).',
            'Pacienți post-COVID sau post-infecție virală cu oboseală persistentă.',
            'Profesioniști cu program solicitant care au nevoie de recuperare rapidă fizică și mentală.',
        ],
        studies: [
            { title: 'IV Micronutrient Supplementation for Exercise Recovery', content: 'Perfuziile cu aminoacizi și vitamine reduc markerii de inflamație musculară (CK, LDH) cu 30-40% și accelerează refacerea fibrelor musculare.' },
            { title: 'Glutamine and Post-Exercise Immune Suppression', content: 'Glutamina IV previne imunosupresia post-efort intensă și reduce incidența infecțiilor respiratorii superioare la sportivi cu 50%.' },
            { title: 'Magnesium and Post-Surgical Recovery', content: 'Magneziul IV reduce spasmele musculare, îmbunătățește calitatea somnului și accelerează vindecarea tisulară post-operatorie.' },
            { title: 'B-Complex Vitamins and Neurological Recovery After Illness', content: 'Complexul B (în special B1, B6, B12) susține regenerarea neuronală și reduce oboseala cognitivă în sindromul post-infecțios.' },
        ],
    },
    'MyersCocktailContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-myers-cocktail.webp',
        idealFor: [
            'Persoane cu oboseală cronică, fibromialgie sau sindrom de oboseală cronică (CFS).',
            'Pacienți cu astm bronșic sau alergii sezoniere care doresc suport suplimentar.',
            'Oricine caută un „reset" general al organismului – energie, imunitate și hidratare.',
            'Profesioniști de wellness care doresc mentenanță lunară pentru sănătate optimă.',
        ],
        studies: [
            { title: 'The Myers Cocktail: Clinical Applications and Outcomes', content: 'Cocktailul Myers a demonstrat îmbunătățiri semnificative la pacienți cu fibromialgie, astm, migrene și oboseală cronică, conform studiului publicat în Alternative Medicine Review.' },
            { title: 'IV Magnesium for Acute Asthma Exacerbation', content: 'Magneziul IV relaxează musculatura netedă bronșică și îmbunătățește funcția pulmonară cu 15-20% în exacerbările astmatice.' },
            { title: 'High-Dose Vitamin C and Chronic Fatigue Syndrome', content: 'Vitamina C IV în doze de 7.5-15g reduce oboseala și îmbunătățește calitatea vieții la pacienții cu CFS, cu efecte care durează 1-2 săptămâni.' },
            { title: 'Calcium and Magnesium Balance in Neuromuscular Function', content: 'Raportul optim Ca/Mg administrat IV reduce spasmele musculare, tremorul și anxietatea, îmbunătățind calitatea somnului.' },
        ],
    },
    'SuperBoostImunitateContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-super-immune.webp',
        idealFor: [
            'Pacienți imunocompromiși sau cu afecțiuni autoimune (sub supraveghere medicală).',
            'Persoane expuse la medii cu risc ridicat de infecție (spitale, școli, transport public).',
            'Călători internaționali care doresc protecție maximă înainte și după zbor.',
            'Pacienți post-COVID cu imunitate residuală scăzută sau long COVID.',
        ],
        studies: [
            { title: 'High-Dose IV Vitamin C and Severe Respiratory Infections', content: 'Megadozele de vitamina C (15-25g IV) reduc durata spitalizării și severitatea pneumoniei la pacienții cu infecții respiratorii severe.' },
            { title: 'Glutathione and Immune Cell Function', content: 'Glutationul este esențial pentru activitatea optimă a limfocitelor T. Deficitul reduce răspunsul imun cu până la 50%.' },
            { title: 'Selenium and Viral Resistance: A Population Study', content: 'Nivelurile optime de seleniu reduc susceptibilitatea la infecțiile virale și previn mutațiile virale care cresc virulența.' },
            { title: 'Zinc and Adaptive Immunity in Elderly Adults', content: 'Suplimentarea cu zinc la adulții peste 65 de ani restabilește funcția timică și crește producția de anticorpi cu 30-40%.' },
        ],
    },
    'AllInclusiveContent.tsx': {
        image: '/images-medelise/md-iv-drip/md-img-drip-all-inclusive.webp',
        idealFor: [
            'Persoane care doresc cel mai complet protocol de wellness intravenos disponibil.',
            'Executivi, antreprenori și personalități care investesc în sănătate preventivă premium.',
            'Pacienți care se pregătesc pentru evenimente importante și doresc să arate și să se simtă la cel mai înalt nivel.',
            'Oricine caută o experiență VIP de wellness cu beneficii la 360° pentru organism.',
        ],
        studies: [
            { title: 'Multivitamin IV Infusion and Quality of Life Outcomes', content: 'Perfuziile multivitaminice complete îmbunătățesc scorurile de calitate a vieții (SF-36) cu 25-35% la pacienții cu deficiențe nutriționale multiple.' },
            { title: 'Synergistic Effects of Combined Antioxidant Therapy', content: 'Combinarea glutationului, vitaminei C, ALA și NAC produce un efect sinergic de detoxifiere celulară 4x mai puternic decât orice antioxidant administrat individual.' },
            { title: 'Anti-Aging Properties of Intravenous NAD+ Precursors', content: 'Precursorii NAD+ (inclusiv NAC și CoQ10) activează sirtuinele, proteinele longevității, reducând senescența celulară și inflamația cronică.' },
            { title: 'Comprehensive Nutrient Repletion and Metabolic Health', content: 'Replețiea simultană a tuturor micronutrienților esențiali optimizează metabolismul bazal și reduce markerii de inflamație sistemică (IL-6, TNF-α, PCR).' },
        ],
    },
};

/* ─── Process each page ─── */
let updated = 0;

for (const [filename, data] of Object.entries(PAGES)) {
    const filePath = join(COMP_DIR, filename);
    let content = readFileSync(filePath, 'utf-8');

    // Skip if already has idealForItems
    if (content.includes('idealForItems')) {
        console.log(`⏭️  ${filename} — already has sections, skipping`);
        continue;
    }

    // 1. Add ContactFormSection import if missing
    if (!content.includes('ContactFormSection')) {
        content = content.replace(
            "import IVDripProductPage from './IVDripProductPage';",
            "import IVDripProductPage from './IVDripProductPage';\nimport { ContactFormSection } from '@features/contact/components';"
        );
    }

    // 2. Build the new props string
    const idealForStr = data.idealFor.map(s => `                    '${s.replace(/'/g, "\\'")}',`).join('\n');
    const studiesStr = data.studies.map(s =>
        `                    {\n                        title: '${s.title.replace(/'/g, "\\'")}',\n                        content: '${s.content.replace(/'/g, "\\'")}',\n                    },`
    ).join('\n');

    const newProps = `
                idealForItems={[
${idealForStr}
                ]}
                clinicalStudies={[
${studiesStr}
                ]}
                qualityBagImageSrc="${data.image}"`;

    // 3. Insert new props before the closing />
    // Pattern: averageRating={N}\n            />
    content = content.replace(
        /(averageRating=\{\d+\})\s*\n(\s*\/\>)/,
        `$1${newProps}\n$2`
    );

    // 4. Wrap with fragment + ContactFormSection
    // Old pattern: return (\n        <IVDripProductPage ... />\n    );
    // New: return (\n        <>\n            <IVDripProductPage ... />\n            <ContactFormSection />\n        </>\n    );
    if (!content.includes('<ContactFormSection')) {
        // Add fragment wrapper
        content = content.replace(
            /return \(\s*\n(\s*)<IVDripProductPage/,
            'return (\n$1<>\n$1    <IVDripProductPage'
        );
        // Replace closing with fragment + contact
        content = content.replace(
            /(\s*)\/\>\s*\n(\s*)\);/,
            '$1/>\n\n$1<ContactFormSection />\n$2</>\n$2);'
        );
    }

    writeFileSync(filePath, content, 'utf-8');
    updated++;
    console.log(`✅ ${filename}`);
}

console.log(`\nDone: ${updated} pages updated`);
