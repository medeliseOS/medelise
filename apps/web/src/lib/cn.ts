import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes safely — standard Next.js utility.
 * Combines `clsx` (conditional classes) with `tailwind-merge` (dedup/override).
 *
 * @example
 *   cn('px-4 py-2', isActive && 'bg-primary', className)
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
