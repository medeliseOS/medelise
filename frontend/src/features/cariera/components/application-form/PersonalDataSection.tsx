interface PersonalDataSectionProps {
    /** Currently intentionally empty — fields are uncontrolled (native form). */
}

/** Fieldset: name, email, phone, city, date of birth. */
export default function PersonalDataSection(_props: PersonalDataSectionProps) {
    return (
        <fieldset className="apply-section">
            <legend className="apply-section-title">Date personale</legend>

            <div className="apply-field-row">
                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-nume">
                        Nume <span className="required">*</span>
                    </label>
                    <input
                        id="apply-nume"
                        name="nume"
                        type="text"
                        required
                        minLength={2}
                        placeholder="Popescu"
                        className="apply-field-input"
                    />
                </div>
                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-prenume">
                        Prenume <span className="required">*</span>
                    </label>
                    <input
                        id="apply-prenume"
                        name="prenume"
                        type="text"
                        required
                        minLength={2}
                        placeholder="Maria"
                        className="apply-field-input"
                    />
                </div>
            </div>

            <div className="apply-field-row">
                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-email">
                        E-mail <span className="required">*</span>
                    </label>
                    <input
                        id="apply-email"
                        name="email"
                        type="email"
                        required
                        placeholder="maria.popescu@email.com"
                        className="apply-field-input"
                    />
                </div>
                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-telefon">
                        Telefon <span className="required">*</span>
                    </label>
                    <input
                        id="apply-telefon"
                        name="telefon"
                        type="tel"
                        required
                        placeholder="+40 7XX XXX XXX"
                        className="apply-field-input"
                    />
                </div>
            </div>

            <div className="apply-field-row">
                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-oras">
                        Oraș / Localitate <span className="required">*</span>
                    </label>
                    <input
                        id="apply-oras"
                        name="oras"
                        type="text"
                        required
                        placeholder="București"
                        className="apply-field-input"
                    />
                </div>
                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-data-nastere">
                        Data nașterii
                    </label>
                    <input
                        id="apply-data-nastere"
                        name="dataNasterii"
                        type="date"
                        className="apply-field-input"
                    />
                </div>
            </div>
        </fieldset>
    );
}
