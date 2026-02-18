/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Validation Utilities
 * ═══════════════════════════════════════════════════════════════
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(\+4|0)[0-9]{9}$/;

/** Validate email format */
export function isValidEmail(email: string): boolean {
    return EMAIL_REGEX.test(email.trim());
}

/** Validate Romanian phone number (+4XXXXXXXXX or 0XXXXXXXXX) */
export function isValidPhone(phone: string): boolean {
    return PHONE_REGEX.test(phone.replace(/[\s-]/g, ''));
}

/** Check if a string is non-empty after trimming */
export function isRequired(value: string): boolean {
    return value.trim().length > 0;
}

/** Check minimum length */
export function hasMinLength(value: string, min: number): boolean {
    return value.trim().length >= min;
}

/** Check maximum length */
export function hasMaxLength(value: string, max: number): boolean {
    return value.trim().length <= max;
}
