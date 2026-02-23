'use client';

/**
 * ApplicationFormStyles — Scoped CSS for the Application Form.
 * Wraps children with styled-jsx styles.
 */
export default function ApplicationFormStyles({ children }: { children: React.ReactNode }) {
    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * APPLICATION FORM PAGE
                 * ═══════════════════════════════════════ */
                .apply-page {
                    width: 100%;
                    min-height: 100vh;
                    background: var(--color-surface);
                    font-family: var(--font-body);
                }

                /* ── Header ── */
                .apply-header {
                    width: 100%;
                    background: var(--color-primary);
                    padding: var(--space-16) var(--space-section-px-sm) var(--space-10);
                }

                /* ── Back button ── */
                .apply-back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-2);
                    background: rgba(255, 255, 255, 0.12);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    border-radius: 8px;
                    padding: var(--space-2) var(--space-4);
                    color: var(--color-white);
                    font-size: 14px;
                    font-weight: 500;
                    text-decoration: none;
                    cursor: pointer;
                    transition: background 0.2s, border-color 0.2s;
                    margin-bottom: var(--space-5);
                }

                .apply-back-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.3);
                }

                .apply-back-btn svg {
                    flex-shrink: 0;
                }

                .apply-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    margin-bottom: var(--space-6);
                    font-size: 14px;
                    line-height: 20px;
                }

                .apply-breadcrumb-link {
                    color: var(--color-secondary);
                    text-decoration: none;
                    transition: opacity 0.2s;
                }

                .apply-breadcrumb-link:hover {
                    opacity: 0.8;
                }

                .apply-breadcrumb-sep {
                    color: rgba(255, 255, 255, 0.4);
                }

                .apply-breadcrumb-current {
                    color: rgba(255, 255, 255, 0.7);
                }

                .apply-header-title {
                    color: var(--color-white);
                    font-family: var(--font-heading);
                    font-size: 32px;
                    font-weight: 600;
                    line-height: 40px;
                    margin: 0 0 var(--space-2) 0;
                }

                .apply-header-subtitle {
                    color: var(--color-secondary);
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* ── Form container ── */
                .apply-form-wrapper {
                    width: 100%;
                    padding: var(--space-10) var(--space-section-px-sm);
                }

                .apply-form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-10);
                }

                /* ── Side-by-side section row ── */
                .apply-section-row {
                    display: flex;
                    gap: var(--space-6);
                    align-items: flex-start;
                    padding: 0 var(--space-16);
                }

                .apply-section-row > .apply-section {
                    flex: 1;
                    min-width: 0;
                }

                /* ── Section groups ── */
                .apply-section {
                    background: var(--color-white);
                    border-radius: 12px;
                    border: 1px solid var(--color-surface-border);
                    padding: var(--space-6);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-5);
                }

                .apply-section-title {
                    font-family: var(--font-heading);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 24px;
                    color: var(--color-primary);
                    margin: 0;
                    padding-bottom: var(--space-3);
                    border-bottom: 1px solid var(--color-surface-border);
                }

                /* ── Field groups ── */
                .apply-field-row {
                    display: flex;
                    gap: var(--space-4);
                }

                .apply-field {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-1);
                }

                .apply-field-label {
                    color: var(--color-text);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                }

                .apply-field-label .required {
                    color: var(--color-error);
                    margin-left: 2px;
                }

                .apply-field-input,
                .apply-field-select,
                .apply-field-textarea {
                    width: 100%;
                    padding: 10px 12px;
                    background: var(--color-white);
                    border-radius: 8px;
                    border: 1px solid var(--color-border-form);
                    font-size: 15px;
                    font-family: inherit;
                    font-weight: 400;
                    line-height: 22px;
                    color: var(--color-text);
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .apply-field-input:focus,
                .apply-field-select:focus,
                .apply-field-textarea:focus {
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 8%, transparent);
                }

                .apply-field-input::placeholder,
                .apply-field-textarea::placeholder {
                    color: var(--color-border-light);
                }

                .apply-field-input[readonly] {
                    background: var(--color-surface);
                    color: var(--color-text-muted);
                    cursor: default;
                }

                .apply-field-select {
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23637083' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 12px center;
                    padding-right: 36px;
                    cursor: pointer;
                }

                .apply-field-textarea {
                    resize: vertical;
                    min-height: 100px;
                }

                /* ── Checkbox rows ── */
                .apply-checkbox-row {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-3);
                }

                .apply-checkbox {
                    width: 18px;
                    height: 18px;
                    margin-top: 2px;
                    accent-color: var(--color-primary);
                    cursor: pointer;
                    flex-shrink: 0;
                }

                .apply-checkbox-label {
                    font-size: 14px;
                    line-height: 20px;
                    color: var(--color-text);
                    cursor: pointer;
                }

                .apply-checkbox-label a {
                    color: var(--color-primary);
                    text-decoration: underline;
                }

                /* ── CV Upload Zone ── */
                .apply-upload-zone {
                    border: 2px dashed var(--color-border-form);
                    border-radius: 10px;
                    padding: var(--space-8) var(--space-6);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-3);
                    cursor: pointer;
                    transition: border-color 0.2s, background 0.2s;
                    text-align: center;
                }

                .apply-upload-zone:hover {
                    border-color: var(--color-primary);
                    background: color-mix(in srgb, var(--color-primary) 2%, transparent);
                }

                .apply-upload-zone--drag {
                    border-color: var(--color-primary);
                    background: color-mix(in srgb, var(--color-primary) 5%, transparent);
                }

                .apply-upload-zone--error {
                    border-color: var(--color-error);
                }

                .apply-upload-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: var(--color-surface);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-primary);
                }

                .apply-upload-text {
                    font-size: 14px;
                    color: var(--color-text-muted);
                    line-height: 20px;
                }

                .apply-upload-text strong {
                    color: var(--color-primary);
                    font-weight: 600;
                    cursor: pointer;
                }

                .apply-upload-hint {
                    font-size: 12px;
                    color: var(--color-text-light);
                    line-height: 16px;
                }

                /* ── CV File preview ── */
                .apply-cv-preview {
                    display: flex;
                    align-items: center;
                    gap: var(--space-3);
                    padding: var(--space-3) var(--space-4);
                    background: var(--color-surface);
                    border-radius: 8px;
                    border: 1px solid var(--color-surface-border);
                }

                .apply-cv-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    background: var(--color-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .apply-cv-info {
                    flex: 1;
                    min-width: 0;
                }

                .apply-cv-name {
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--color-text);
                    line-height: 20px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .apply-cv-size {
                    font-size: 12px;
                    color: var(--color-text-muted);
                    line-height: 16px;
                }

                .apply-cv-remove {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    border: none;
                    background: transparent;
                    color: var(--color-text-muted);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s, color 0.2s;
                    flex-shrink: 0;
                }

                .apply-cv-remove:hover {
                    background: color-mix(in srgb, var(--color-error) 8%, transparent);
                    color: var(--color-error);
                }

                .apply-error-text {
                    font-size: 13px;
                    color: var(--color-error);
                    margin: 0;
                    line-height: 18px;
                }

                /* ── Honeypot ── */
                .apply-honeypot {
                    position: absolute;
                    left: -9999px;
                    opacity: 0;
                    height: 0;
                    overflow: hidden;
                }

                /* ── Status messages ── */
                .apply-success {
                    text-align: center;
                    padding: var(--space-10) var(--space-6);
                    background: var(--color-white);
                    border-radius: 12px;
                    border: 1px solid var(--color-surface-border);
                }

                .apply-success-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: color-mix(in srgb, var(--color-success) 10%, transparent);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto var(--space-4);
                }

                .apply-success-title {
                    font-family: var(--font-heading);
                    font-size: 22px;
                    font-weight: 600;
                    color: var(--color-primary);
                    margin: 0 0 var(--space-2) 0;
                }

                .apply-success-text {
                    font-size: 15px;
                    color: var(--color-text-muted);
                    line-height: 22px;
                    margin: 0 0 var(--space-6) 0;
                }

                .apply-success-link {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-2);
                    color: var(--color-primary);
                    font-weight: 600;
                    font-size: 15px;
                    text-decoration: none;
                    transition: opacity 0.2s;
                }

                .apply-success-link:hover {
                    opacity: 0.8;
                }

                .apply-error-msg {
                    color: var(--color-error);
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    margin: 0;
                    padding: var(--space-3) var(--space-4);
                    background: color-mix(in srgb, var(--color-error) 6%, transparent);
                    border-radius: 8px;
                }

                /* ═══════════════════════════════════════
                 * TABLET ≥641px
                 * ═══════════════════════════════════════ */
                @media (min-width: 641px) {
                    .apply-header {
                        padding: var(--space-20) var(--space-section-px-md) var(--space-12);
                    }

                    .apply-form-wrapper {
                        padding: var(--space-12) var(--space-section-px-md);
                    }

                    .apply-header-title {
                        font-size: 36px;
                        line-height: 44px;
                    }

                    .apply-section {
                        padding: var(--space-8);
                    }
                }

                /* ═══════════════════════════════════════
                 * DESKTOP ≥1025px
                 * ═══════════════════════════════════════ */
                @media (min-width: 1025px) {
                    .apply-header {
                        padding: var(--space-24) var(--space-section-px-lg) var(--space-12);
                    }

                    .apply-form-wrapper {
                        padding: var(--space-16) var(--space-section-px-lg);
                    }

                    .apply-header-title {
                        font-size: 40px;
                        line-height: 48px;
                    }

                    .apply-section {
                        padding: var(--space-8) var(--space-10);
                    }
                }

                /* ═══════════════════════════════════════
                 * MOBILE <480px
                 * ═══════════════════════════════════════ */
                @media (max-width: 480px) {
                    .apply-field-row,
                    .apply-section-row {
                        flex-direction: column;
                    }

                    .apply-header-title {
                        font-size: 26px;
                        line-height: 34px;
                    }
                }
            `}</style>
            {children}
        </>
    );
}
