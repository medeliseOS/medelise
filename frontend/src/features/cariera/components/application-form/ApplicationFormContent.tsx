'use client';

import Button from '@ui/Button';
import DocumentChecker from '../DocumentChecker';
import { getRoleForSlug } from '../../data/documentRequirements';
import { useApplicationForm } from '../../hooks/useApplicationForm';
import { type ApplicationFormContentProps } from '../../types';

import ApplicationFormStyles from './ApplicationFormStyles';
import ApplicationHeader from './ApplicationHeader';
import ApplicationSuccess from './ApplicationSuccess';
import PersonalDataSection from './PersonalDataSection';
import ExperienceSection from './ExperienceSection';
import AvailabilityDocumentsSection from './AvailabilityDocumentsSection';
import ConsentSection from './ConsentSection';

export default function ApplicationFormContent({ slug }: ApplicationFormContentProps) {
    const {
        job,
        jobTitle,
        formStatus,
        cvFile,
        cvError,
        isDragOver,
        fileInputRef,
        handleFileChange,
        handleDrop,
        handleDragOver,
        handleDragLeave,
        removeCv,
        handleSubmit,
        formatSize,
    } = useApplicationForm(slug);

    return (
        <ApplicationFormStyles>
            <main className="apply-page">
                <ApplicationHeader slug={slug} jobTitle={jobTitle} />

                <div className="apply-form-wrapper">
                    {formStatus === 'sent' ? (
                        <ApplicationSuccess jobTitle={jobTitle} />
                    ) : (
                        <form className="apply-form" onSubmit={handleSubmit} noValidate>
                            {/* Honeypot */}
                            <div className="apply-honeypot" aria-hidden="true">
                                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                            </div>

                            {/* ═══ Sections 1+2: Personal Data + Experience (side-by-side) ═══ */}
                            <div className="apply-section-row">
                                <PersonalDataSection />
                                <ExperienceSection jobTitle={jobTitle} />
                            </div>

                            {/* ═══ Sections 3+4: Availability + Documents (side-by-side) ═══ */}
                            <AvailabilityDocumentsSection
                                cvFile={cvFile}
                                cvError={cvError}
                                isDragOver={isDragOver}
                                fileInputRef={fileInputRef}
                                handleFileChange={handleFileChange}
                                handleDrop={handleDrop}
                                handleDragOver={handleDragOver}
                                handleDragLeave={handleDragLeave}
                                removeCv={removeCv}
                                formatSize={formatSize}
                            />

                            {/* ═══ Section 5: GDPR ═══ */}
                            <ConsentSection />

                            {/* ═══ Section 6: Document Checker ═══ */}
                            <DocumentChecker selectedRole={getRoleForSlug(slug)} />

                            {/* ── Error message ── */}
                            {formStatus === 'error' && (
                                <p className="apply-error-msg">
                                    A apărut o eroare la trimiterea formularului. Te rugăm să încerci din nou.
                                </p>
                            )}

                            {/* ── Submit ── */}
                            <Button
                                type="submit"
                                variant="primary"
                                isFullWidth
                                isLoading={formStatus === 'sending'}
                            >
                                {formStatus === 'sending' ? 'Se trimite aplicația...' : 'Trimite aplicația'}
                            </Button>
                        </form>
                    )}
                </div>
            </main>
        </ApplicationFormStyles>
    );
}
