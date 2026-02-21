interface ChevronDownProps {
    white?: boolean;
    rotated?: boolean;
}

export default function ChevronDown({ white = false, rotated = false }: ChevronDownProps) {
    return (
        <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
            style={{
                transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 300ms ease-in-out',
            }}
        >
            <path
                d="M1.4 0.75L4 3.25L6.73 0.75"
                stroke={white ? 'white' : 'var(--color-primary)'}
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
