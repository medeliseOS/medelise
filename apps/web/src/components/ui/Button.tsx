'use client';

import React, { forwardRef } from 'react';
import Spinner from './Spinner';
import {
    BUTTON_TOKENS as T,
    BUTTON_VARIANTS,
    type ButtonVariant,
} from './button-tokens';

/* ═══════════════════════════════════════════════════════════════════════════
 * TYPES
 * ═══════════════════════════════════════════════════════════════════════════ */

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual variant */
    variant?: ButtonVariant;
    /** Stretch to fill container width */
    isFullWidth?: boolean;
    /** Show loading spinner and disable interaction */
    isLoading?: boolean;
    /** Icon element placed before children */
    iconLeft?: React.ReactNode;
    /** Icon element placed after children */
    iconRight?: React.ReactNode;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

/**
 * Reusable Button / CTA — responsive, accessible, design-token-driven.
 *
 * Uses `styled-jsx` for responsive media queries (project convention)
 * and inline styles for variant colors (from button-tokens.ts).
 *
 * @example
 *   <Button variant="primary" iconLeft={<Heart size={18} />}>
 *     Book Now
 *   </Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            isFullWidth = false,
            isLoading = false,
            iconLeft,
            iconRight,
            disabled,
            children,
            className = '',
            style,
            ...rest
        },
        ref,
    ) => {
        const v = BUTTON_VARIANTS[variant];
        const isDisabled = disabled || isLoading;

        return (
            <>
                <button
                    ref={ref}
                    disabled={isDisabled}
                    aria-busy={isLoading || undefined}
                    aria-disabled={isDisabled || undefined}
                    className={`btn btn--${variant} ${isFullWidth ? 'btn--full' : ''} ${className}`}
                    style={{
                        '--btn-bg': v.bg,
                        '--btn-bg-hover': v.bgHover,
                        '--btn-text': v.text,
                        '--btn-border': v.border,
                        ...style,
                    } as React.CSSProperties}
                    {...rest}
                >
                    {isLoading && (
                        <span className="btn__spinner">
                            <Spinner size={18} />
                        </span>
                    )}
                    {!isLoading && iconLeft && (
                        <span className="btn__icon" aria-hidden="true">
                            {iconLeft}
                        </span>
                    )}
                    {children && <span className="btn__label">{children}</span>}
                    {!isLoading && iconRight && (
                        <span className="btn__icon" aria-hidden="true">
                            {iconRight}
                        </span>
                    )}
                </button>

                <style jsx>{`
          /* ═══════════════════════════════════════
           * §1  BASE (Mobile-first < 768px)
           * ═══════════════════════════════════════ */
          .btn {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            height: ${T.mobile.height}px;
            padding: 0 ${T.mobile.paddingX}px;
            font-size: ${T.mobile.fontSize}px;
            border-radius: ${T.mobile.borderRadius}px;

            font-family: var(--font-cta);
            font-weight: 500;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            border: 1.5px solid var(--btn-border);
            background: var(--btn-bg);
            color: var(--btn-text);
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;

            /* Smooth transitions */
            transition:
              background 0.2s ease,
              border-color 0.2s ease,
              box-shadow 0.2s ease,
              transform 0.15s ease;

            /* Accessibility: minimum 48px touch target */
            min-height: 48px;
          }

          /* ── Full-width modifier ── */
          .btn--full {
            width: 100%;
          }

          /* ── States ── */
          .btn:active:not(:disabled) {
            transform: scale(0.98);
          }

          .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          /* ── Hover (pointer devices only) ── */
          @media (hover: hover) and (pointer: fine) {
            .btn:hover:not(:disabled) {
              background: var(--btn-bg-hover);
              box-shadow: var(--shadow-md);
              transform: translateY(-1px);
            }

            .btn:hover:active:not(:disabled) {
              transform: scale(0.98);
              box-shadow: none;
            }
          }

          /* Focus-visible ring */
          .btn:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 2px;
          }

          /* ── Inner layout ── */
          .btn__label {
            display: inline-flex;
            align-items: center;
          }

          .btn__icon {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
          }

          .btn__spinner {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
          }

          /* ═══════════════════════════════════════
           * §2  TABLET ≥768px
           * ═══════════════════════════════════════ */
          @media (min-width: 768px) {
            .btn {
              height: ${T.tablet.height}px;
              padding: 0 ${T.tablet.paddingX}px;
              font-size: ${T.tablet.fontSize}px;
              border-radius: ${T.tablet.borderRadius}px;
            }
          }

          /* ═══════════════════════════════════════
           * §3  DESKTOP ≥1024px
           * ═══════════════════════════════════════ */
          @media (min-width: 1024px) {
            .btn {
              height: ${T.desktop.height}px;
              padding: 0 ${T.desktop.paddingX}px;
              font-size: ${T.desktop.fontSize}px;
              border-radius: ${T.desktop.borderRadius}px;
            }
          }
        `}</style>
            </>
        );
    },
);

Button.displayName = 'Button';
export default Button;
