/**
 * <Container /> — Core Layout Component
 *
 * Manages horizontal constraints: max-width + responsive gutter.
 * Content is auto-centered on desktop, with fluid lateral margins
 * on smaller screens.
 *
 * Width system:
 *   Gutter:    16px @375px → 32px @1440px (fluid, no breakpoint jumps)
 *   Max-width: 1280px (7xl) — centered with auto margins
 *
 * @example
 *   <Container>...</Container>
 *   <Container maxWidth="960px" className="my-class">...</Container>
 *   <Container as="nav">...</Container>
 */

import React from 'react';

interface ContainerProps {
    /** Override the default max-width (1280px) */
    maxWidth?: string;
    /** Semantic HTML tag */
    as?: 'div' | 'main' | 'nav' | 'article' | 'aside';
    /** Additional CSS classes */
    className?: string;
    children: React.ReactNode;
}

export default function Container({
    maxWidth,
    as: Tag = 'div',
    className = '',
    children,
}: ContainerProps) {
    return (
        <>
            <Tag
                className={`container-root ${className}`}
                style={maxWidth ? { maxWidth } : undefined}
            >
                {children}
            </Tag>

            <style jsx>{`
        .container-root {
          width: 100%;
          max-width: var(--max-width);
          margin-left: auto;
          margin-right: auto;
          padding-left: var(--gutter);
          padding-right: var(--gutter);
        }
      `}</style>
        </>
    );
}
