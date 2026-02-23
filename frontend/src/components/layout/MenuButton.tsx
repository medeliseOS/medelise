import Image from 'next/image';
import { ICONS } from '@shared/constants/icons';

interface MenuButtonProps {
    size?: 'medium' | 'small';
    onClick?: () => void;
}

export default function MenuButton({ size = 'medium', onClick }: MenuButtonProps) {
    const dim = size === 'medium' ? 44 : 36;
    const iconSize = size === 'medium' ? 18 : 24;
    const borderColor = size === 'medium' ? 'var(--color-border-light)' : 'var(--color-surface-border)';

    return (
        <button
            className="relative flex items-center justify-center flex-shrink-0 rounded-lg transition-colors hover:bg-gray-50"
            style={{
                width: dim,
                height: dim,
                border: `1px solid ${borderColor}`,
            }}
            aria-label="Open menu"
            onClick={onClick}
        >
            <Image
                src={ICONS.menu}
                alt="Menu"
                width={iconSize}
                height={iconSize}
            />
        </button>
    );
}

