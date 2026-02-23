import { RefObject } from 'react';
import { AVAILABILITY } from '../../types';

interface AvailabilityDocumentsSectionProps {
    cvFile: File | null;
    cvError: string;
    isDragOver: boolean;
    fileInputRef: RefObject<HTMLInputElement | null>;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
    removeCv: () => void;
    formatSize: (bytes: number) => string;
}

/** Fieldsets: Availability + Driving + Documents (CV upload + cover letter). */
export default function AvailabilityDocumentsSection({
    cvFile,
    cvError,
    isDragOver,
    fileInputRef,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    removeCv,
    formatSize,
}: AvailabilityDocumentsSectionProps) {
    return (
        <div className="apply-section-row">
            <fieldset className="apply-section">
                <legend className="apply-section-title">Disponibilitate</legend>

                <div className="apply-field-row">
                    <div className="apply-field">
                        <label className="apply-field-label" htmlFor="apply-disponibilitate">
                            Tip program <span className="required">*</span>
                        </label>
                        <select
                            id="apply-disponibilitate"
                            name="disponibilitate"
                            required
                            className="apply-field-select"
                            defaultValue=""
                        >
                            <option value="" disabled>Selectează disponibilitatea</option>
                            {AVAILABILITY.map((a) => (
                                <option key={a} value={a}>{a}</option>
                            ))}
                        </select>
                    </div>
                    <div className="apply-field">
                        <label className="apply-field-label" htmlFor="apply-start">
                            Poate începe din
                        </label>
                        <input
                            id="apply-start"
                            name="dataStart"
                            type="date"
                            className="apply-field-input"
                        />
                    </div>
                </div>

                <div className="apply-checkbox-row">
                    <input
                        id="apply-permis"
                        name="permisConducere"
                        type="checkbox"
                        className="apply-checkbox"
                    />
                    <label htmlFor="apply-permis" className="apply-checkbox-label">
                        Dețin permis de conducere categoria B
                    </label>
                </div>

                <div className="apply-checkbox-row">
                    <input
                        id="apply-auto"
                        name="autovehiculPropriu"
                        type="checkbox"
                        className="apply-checkbox"
                    />
                    <label htmlFor="apply-auto" className="apply-checkbox-label">
                        Dețin autovehicul propriu
                    </label>
                </div>
            </fieldset>

            <fieldset className="apply-section">
                <legend className="apply-section-title">Documente</legend>

                <div className="apply-field">
                    <label className="apply-field-label">
                        CV <span className="required">*</span>
                    </label>

                    {!cvFile ? (
                        <div
                            className={`apply-upload-zone ${isDragOver ? 'apply-upload-zone--drag' : ''} ${cvError ? 'apply-upload-zone--error' : ''}`}
                            onClick={() => fileInputRef.current?.click()}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                        >
                            <div className="apply-upload-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="apply-upload-text">
                                Trage fișierul aici sau <strong>alege de pe dispozitiv</strong>
                            </p>
                            <span className="apply-upload-hint">PDF, DOC sau DOCX · Maxim 5 MB</span>
                        </div>
                    ) : (
                        <div className="apply-cv-preview">
                            <div className="apply-cv-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 2V8H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="apply-cv-info">
                                <div className="apply-cv-name">{cvFile.name}</div>
                                <div className="apply-cv-size">{formatSize(cvFile.size)}</div>
                            </div>
                            <button type="button" className="apply-cv-remove" onClick={removeCv} title="Elimină fișierul">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    )}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        aria-label="Încarcă CV"
                    />

                    {cvError && <p className="apply-error-text">{cvError}</p>}
                </div>

                <div className="apply-field">
                    <label className="apply-field-label" htmlFor="apply-scrisoare">
                        Scrisoare de intenție
                    </label>
                    <textarea
                        id="apply-scrisoare"
                        name="scrIsoareIntentie"
                        placeholder="Scrie câteva rânduri despre motivația ta și de ce dorești să faci parte din echipa Medelise..."
                        className="apply-field-textarea"
                        maxLength={1000}
                        rows={4}
                    />
                </div>
            </fieldset>
        </div>
    );
}
