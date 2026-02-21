'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

interface AnimatedEyeToggleProps {
    isVisible: boolean;
    onToggle: () => void;
    inputRef?: React.RefObject<HTMLInputElement | null>;
}

const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~,.<>?/;":][}{+_)(*&^%$#@!±=-§';
const BLINK_DURATION = 75; // ms
const SCRAMBLE_DURATION = 800; // ms
const SCRAMBLE_FPS = 30;

export default function AnimatedEyeToggle({ isVisible, onToggle, inputRef }: AnimatedEyeToggleProps) {
    const eyeRef = useRef<SVGGElement>(null);
    const upperLidRef = useRef<SVGPathElement>(null);
    const lowerLidRef = useRef<SVGPathElement>(null);
    const maskPathRef = useRef<SVGPathElement>(null);
    const blinkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const busyRef = useRef(false);
    const [eyeState, setEyeState] = useState<'open' | 'closed'>('open');

    // Eye paths
    const UPPER_OPEN = 'M1 12C1 12 5 4 12 4C19 4 23 12 23 12';
    const UPPER_CLOSED = 'M1 12C1 12 5 20 12 20C19 20 23 12 23 12';
    const LOWER_PATH = 'M1 12C1 12 5 20 12 20C19 20 23 12 23 12';
    const MASK_OPEN = 'M1 12C1 12 5 4 12 4C19 4 23 12 23 12V20H12H1V12Z';
    const MASK_CLOSED = 'M1 12C1 12 5 20 12 20C19 20 23 12 23 12V20H12H1V12Z';

    // Blink animation
    const doBlink = useCallback(() => {
        if (eyeState !== 'open') return;
        const delay = 2000 + Math.random() * 6000;
        blinkTimeoutRef.current = setTimeout(() => {
            if (upperLidRef.current && maskPathRef.current) {
                // Close
                upperLidRef.current.setAttribute('d', UPPER_CLOSED);
                maskPathRef.current.setAttribute('d', MASK_CLOSED);
                setTimeout(() => {
                    if (upperLidRef.current && maskPathRef.current) {
                        // Open
                        upperLidRef.current.setAttribute('d', UPPER_OPEN);
                        maskPathRef.current.setAttribute('d', MASK_OPEN);
                        // Sometimes double-blink
                        if (Math.random() > 0.5) {
                            setTimeout(() => {
                                if (upperLidRef.current && maskPathRef.current) {
                                    upperLidRef.current.setAttribute('d', UPPER_CLOSED);
                                    maskPathRef.current.setAttribute('d', MASK_CLOSED);
                                    setTimeout(() => {
                                        if (upperLidRef.current && maskPathRef.current) {
                                            upperLidRef.current.setAttribute('d', UPPER_OPEN);
                                            maskPathRef.current.setAttribute('d', MASK_OPEN);
                                        }
                                        doBlink();
                                    }, BLINK_DURATION);
                                }
                            }, BLINK_DURATION);
                        } else {
                            doBlink();
                        }
                    }
                }, BLINK_DURATION);
            }
        }, delay);
    }, [eyeState]);

    useEffect(() => {
        if (eyeState === 'open') {
            doBlink();
        }
        return () => {
            if (blinkTimeoutRef.current) clearTimeout(blinkTimeoutRef.current);
        };
    }, [eyeState, doBlink]);

    // Eye follow cursor
    useEffect(() => {
        const handleMove = (e: PointerEvent) => {
            if (!eyeRef.current) return;
            const rect = eyeRef.current.getBoundingClientRect();
            const dx = e.clientX - (rect.x + rect.width / 2);
            const dy = e.clientY - (rect.y + rect.height / 2);
            const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
            const mapRange = (v: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
                outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);
            const xPct = clamp(mapRange(dx, -200, 200, -15, 15), -15, 15);
            const yPct = clamp(mapRange(dy, -200, 200, -10, 10), -10, 10);
            eyeRef.current.style.transform = `translate(${xPct}%, ${yPct}%)`;
        };
        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);
    }, []);

    // Scramble text effect
    const scrambleText = useCallback((input: HTMLInputElement, fromPassword: boolean, realValue: string) => {
        const len = realValue.length;
        if (len === 0) return;
        const totalFrames = Math.floor(SCRAMBLE_DURATION / (1000 / SCRAMBLE_FPS));
        let frame = 0;

        const scrambleInterval = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            let displayed = '';

            for (let i = 0; i < len; i++) {
                const charProgress = (progress - i / len) * len;
                if (fromPassword) {
                    // Revealing: go from • to scramble to real char
                    if (charProgress > 0.7) {
                        displayed += realValue[i];
                    } else if (charProgress > 0) {
                        displayed += CHARS[Math.floor(Math.random() * CHARS.length)];
                    } else {
                        displayed += '•';
                    }
                } else {
                    // Hiding: go from real char to scramble to •
                    if (charProgress > 0.7) {
                        displayed += '•';
                    } else if (charProgress > 0) {
                        displayed += CHARS[Math.floor(Math.random() * CHARS.length)];
                    } else {
                        displayed += realValue[i];
                    }
                }
            }

            input.value = displayed;

            if (frame >= totalFrames) {
                clearInterval(scrambleInterval);
                if (fromPassword) {
                    input.value = realValue;
                } else {
                    input.value = realValue;
                }
                busyRef.current = false;
            }
        }, 1000 / SCRAMBLE_FPS);
    }, []);

    const handleToggle = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;

        const input = inputRef?.current;
        const realValue = input?.value || '';

        if (!isVisible) {
            // Opening eye (showing password)
            if (blinkTimeoutRef.current) clearTimeout(blinkTimeoutRef.current);

            // Close eye first, then open with revealed text
            if (upperLidRef.current && maskPathRef.current) {
                upperLidRef.current.setAttribute('d', UPPER_CLOSED);
                maskPathRef.current.setAttribute('d', MASK_CLOSED);
            }

            setTimeout(() => {
                setEyeState('closed');
                onToggle();

                if (input && realValue.length > 0) {
                    scrambleText(input, true, realValue);
                } else {
                    busyRef.current = false;
                }
            }, 150);
        } else {
            // Closing eye (hiding password)
            if (upperLidRef.current && maskPathRef.current) {
                upperLidRef.current.setAttribute('d', UPPER_OPEN);
                maskPathRef.current.setAttribute('d', MASK_OPEN);
            }
            setEyeState('open');
            onToggle();

            if (input && realValue.length > 0) {
                scrambleText(input, false, realValue);
            } else {
                busyRef.current = false;
            }
        }
    }, [isVisible, onToggle, inputRef, scrambleText]);

    return (
        <>
            <button
                type="button"
                className="login-eye-btn animated-eye-btn"
                onClick={handleToggle}
                aria-label={isVisible ? 'Ascunde parola' : 'Arată parola'}
                aria-pressed={isVisible}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="eye-svg"
                    width="24"
                    height="24"
                >
                    <defs>
                        <mask id="eye-mask-open">
                            <path
                                ref={maskPathRef}
                                d={isVisible ? MASK_CLOSED : MASK_OPEN}
                                fill="#D9D9D9"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </mask>
                    </defs>
                    {/* Upper lid */}
                    <path
                        ref={upperLidRef}
                        className="eye-lid eye-lid--upper"
                        d={isVisible ? UPPER_CLOSED : UPPER_OPEN}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    {/* Lower lid */}
                    <path
                        ref={lowerLidRef}
                        className="eye-lid eye-lid--lower"
                        d={LOWER_PATH}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    {/* Eyeball group */}
                    <g mask="url(#eye-mask-open)">
                        <g ref={eyeRef} className="eye-ball" style={{ transition: 'transform 0.15s ease-out' }}>
                            <circle cy="12" cx="12" r="4" fill="currentColor" />
                            <circle cy="11" cx="13" r="1" fill="white" />
                        </g>
                    </g>
                </svg>
            </button>

            <style jsx>{`
        .animated-eye-btn {
          cursor: pointer;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          color: var(--color-text-light);
          transition: color 0.2s ease;
          outline: none;
        }
        .animated-eye-btn:hover,
        .animated-eye-btn:focus-visible {
          color: var(--color-primary);
        }
        .eye-svg {
          overflow: visible;
        }
        .eye-lid {
          transition: d 0.15s ease-in-out;
        }
        .eye-ball {
          transform-origin: 12px 12px;
        }
      `}</style>
        </>
    );
}
