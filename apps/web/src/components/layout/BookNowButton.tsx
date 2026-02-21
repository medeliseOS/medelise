import Link from 'next/link';

interface BookNowButtonProps {
    variant?: 'primary' | 'inverted';
    size?: 'default' | 'small';
    className?: string;
    children?: React.ReactNode;
    fullWidth?: boolean;
}

/**
 * Reusable "Book Now" CTA button.
 *
 * Variants:
 *  - primary  → indigo bg, white text  (default navbar CTA)
 *  - inverted → white bg, indigo text  (mega menu / tablet)
 *
 * Sizes:
 *  - default → 123 × 38
 *  - small   → 100 × 32
 */
export default function BookNowButton({
    variant = 'primary',
    size = 'default',
    className = '',
    children,
    fullWidth = false,
}: BookNowButtonProps) {
    const dims =
        size === 'default'
            ? { width: 123, height: 38, fontSize: 16 }
            : { width: 100, height: 32, fontSize: 12 };

    const colors =
        variant === 'primary'
            ? { background: 'var(--color-primary)', color: 'white', border: 'none' }
            : { background: 'white', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' };

    return (
        <Link href="/login">
            <button
                className={`cursor-pointer rounded-lg font-body font-normal transition-all duration-300 hover:brightness-110 hover:scale-105 ${className}`}
                style={{
                    width: fullWidth ? '100%' : (children ? 'auto' : dims.width),
                    height: children ? 'auto' : dims.height,
                    fontSize: dims.fontSize,
                    padding: children ? '12px 32px' : undefined,
                    ...colors,
                }}
            >
                {children || 'Book Now'}
            </button>
        </Link>
    );
}
