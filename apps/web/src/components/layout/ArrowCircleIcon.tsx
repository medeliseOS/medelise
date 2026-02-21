/**
 * Circular arrow button — white circle outline with a right-pointing arrow.
 * Used in mega menus and tablet nav to indicate drill-down links.
 */
export default function ArrowCircleIcon() {
    return (
        <div
            className="flex flex-shrink-0 items-center justify-center rounded-full"
            style={{ width: 40, height: 40, border: '1px solid white' }}
        >
            <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 7H17M17 7L11 1M17 7L11 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}
