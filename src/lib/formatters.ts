/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Formatters
 * ═══════════════════════════════════════════════════════════════
 */

/** Format a number as Romanian Lei currency (e.g. "450 Lei") */
export function formatCurrency(amount: number): string {
    return `${amount.toLocaleString('ro-RO')} Lei`;
}

/** Format a file size in human-readable form */
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

/** Format an ISO date string to Romanian locale format */
export function formatDate(isoString: string): string {
    return new Date(isoString).toLocaleDateString('ro-RO', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
}

/** Capitalize the first letter of a string */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
