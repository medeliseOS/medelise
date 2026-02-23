/** Fieldset: GDPR consent + newsletter opt-in. */
export default function ConsentSection() {
    return (
        <fieldset className="apply-section">
            <legend className="apply-section-title">Consimțământ</legend>

            <div className="apply-checkbox-row">
                <input
                    id="apply-gdpr"
                    name="acordGdpr"
                    type="checkbox"
                    required
                    className="apply-checkbox"
                />
                <label htmlFor="apply-gdpr" className="apply-checkbox-label">
                    Sunt de acord cu prelucrarea datelor personale în conformitate cu <a href="/politica-confidentialitate" target="_blank" rel="noopener noreferrer">Politica de Confidențialitate</a> și regulamentul GDPR. <span className="required">*</span>
                </label>
            </div>

            <div className="apply-checkbox-row">
                <input
                    id="apply-newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="apply-checkbox"
                />
                <label htmlFor="apply-newsletter" className="apply-checkbox-label">
                    Doresc să primesc notificări despre noi oportunități de angajare la Medelise.
                </label>
            </div>
        </fieldset>
    );
}
