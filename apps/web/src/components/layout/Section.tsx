/**
 * <Section /> — Core Layout Component
 *
 * Manages vertical rhythm automatically using the design system's
 * fluid spacing variables. Every section on the site should use this
 * component (or the equivalent CSS classes) for consistent vertical
 * spacing between content blocks.
 *
 * Spacing variants:
 *   "default"  → 48px @mobile → 96px @desktop  (standard sections)
 *   "tight"    → 32px @mobile → 48px @desktop  (related content groups)
 *   "none"     → 0px                            (hero / custom layouts)
 *
 * @example
 *   <Section>...</Section>
 *   <Section spacing="tight" background="var(--color-surface-card)">...</Section>
 *   <Section spacing="none" as="header">...</Section>
 */

import React from 'react';

type SectionSpacing = 'default' | 'tight' | 'none';

interface SectionProps {
    /** Vertical padding variant */
    spacing?: SectionSpacing;
    /** Background color — any CSS value or variable */
    background?: string;
    /** Semantic HTML tag */
    as?: 'section' | 'header' | 'footer' | 'aside' | 'article' | 'div';
    /** Additional CSS classes */
    className?: string;
    /** HTML id for anchor links */
    id?: string;
    children: React.ReactNode;
}

const spacingClass: Record<SectionSpacing, string> = {
    default: 'section--default',
    tight: 'section--tight',
    none: 'section--none',
};

export default function Section({
    spacing = 'default',
    background,
    as: Tag = 'section',
    className = '',
    id,
    children,
}: SectionProps) {
    return (
        <>
            <Tag
                id={id}
                className={`section-root ${spacingClass[spacing]} ${className}`}
                style={background ? { background } : undefined}
            >
                {children}
            </Tag>

            <style jsx>{`
        .section-root {
          width: 100%;
          position: relative;
        }

        .section--default {
          padding-top: var(--space-section-py);
          padding-bottom: var(--space-section-py);
        }

        .section--tight {
          padding-top: var(--space-section-py-tight);
          padding-bottom: var(--space-section-py-tight);
        }

        .section--none {
          padding-top: 0;
          padding-bottom: 0;
        }
      `}</style>
        </>
    );
}
