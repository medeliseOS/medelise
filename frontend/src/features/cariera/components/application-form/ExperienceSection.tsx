import {
    SPECIALTIES,
    EXPERIENCE_RANGES,
    GRADES,
} from '../../types';

interface ExperienceSectionProps {
    jobTitle: string;
}

/** Fieldset: position, specialty, experience, grade, telemedicine. */
export default function ExperienceSection({ jobTitle }: ExperienceSectionProps) {
    return (
        <fieldset className="apply-section">
            <legend className="apply-section-title">Experiență profesională</legend>

            <div className="apply-field">
                <label className="apply-field-label" htmlFor="apply-pozitie">
                    Poziția aplicată
                </label>
                <input
                    id="apply-pozitie"
                    type="text"
                    readOnly
                    value={jobTitle}
                    className="apply-field-input"
                />
            </div>

            <div className="apply-field-row">
                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-specialitate">
                        Specialitate medicală <span className="required">*</span>
                    </label>
                    <select
                        id="apply-specialitate"
                        name="specialitate"
                        required
                        className="apply-field-select"
                        defaultValue=""
                    >
                        <option value="" disabled>Selectează specialitatea</option>
                        {SPECIALTIES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-experienta">
                        Ani de experiență <span className="required">*</span>
                    </label>
                    <select
                        id="apply-experienta"
                        name="experienta"
                        required
                        className="apply-field-select"
                        defaultValue=""
                    >
                        <option value="" disabled>Selectează experiența</option>
                        {EXPERIENCE_RANGES.map((r) => (
                            <option key={r} value={r}>{r}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="apply-field-row">
                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-grad">
                        Grad profesional
                    </label>
                    <select
                        id="apply-grad"
                        name="gradProfesional"
                        className="apply-field-select"
                        defaultValue=""
                    >
                        <option value="" disabled>Selectează gradul</option>
                        {GRADES.map((g) => (
                            <option key={g} value={g}>{g}</option>
                        ))}
                    </select>
                </div>
                <div className="apply-field">
                    <div className="apply-checkbox-row" style={{ paddingTop: 26 }}>
                        <input
                            id="apply-telemedicina"
                            name="atestatTelemedicina"
                            type="checkbox"
                            className="apply-checkbox"
                        />
                        <label htmlFor="apply-telemedicina" className="apply-checkbox-label">
                            Dețin atestat telemedicină
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}
