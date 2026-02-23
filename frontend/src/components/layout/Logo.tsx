import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'wordmark';
  white?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Logo({ variant = 'full', white = false, className = '', onClick }: LogoProps) {
  return (
    <Link href="/" className={`flex-shrink-0 flex items-center ${className}`} onClick={onClick}>
      <span style={{
        fontFamily: 'var(--font-brand)',
        fontSize: '24px',
        textTransform: 'uppercase',
        color: white ? 'var(--color-white)' : 'var(--color-primary)',
        letterSpacing: '0.05em',
        lineHeight: 1
      }}>
        MEDELISE
      </span>
    </Link>
  );
}
