'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ═══════════════════════════════════════════════════════════
 * useLegalSearch — Reusable keyword-search hook for legal pages.
 * Highlights matching text in a content ref, debounces input,
 * counts matches, and auto-scrolls to the first result.
 * ═══════════════════════════════════════════════════════════ */

export interface UseLegalSearchReturn {
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    matchCount: number;
    contentRef: React.RefObject<HTMLDivElement | null>;
    clearSearch: () => void;
}

export default function useLegalSearch(): UseLegalSearchReturn {
    const [searchQuery, setSearchQuery] = useState('');
    const [matchCount, setMatchCount] = useState(0);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    /* ── Clear all <mark> elements ──────────────────────────── */
    const clearHighlights = useCallback(() => {
        if (!contentRef.current) return;
        const marks = contentRef.current.querySelectorAll('mark.legal-highlight');
        marks.forEach((mark) => {
            const parent = mark.parentNode;
            if (parent) {
                parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
                parent.normalize();
            }
        });
    }, []);

    /* ── Walk text nodes & wrap matches ─────────────────────── */
    const applyHighlights = useCallback(
        (query: string) => {
            clearHighlights();
            if (!contentRef.current || query.length < 2) {
                setMatchCount(0);
                return;
            }

            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${escapedQuery})`, 'gi');
            let count = 0;

            const walker = document.createTreeWalker(
                contentRef.current,
                NodeFilter.SHOW_TEXT,
                null,
            );

            const textNodes: Text[] = [];
            let node: Node | null;
            while ((node = walker.nextNode())) {
                if (node.textContent && regex.test(node.textContent)) {
                    textNodes.push(node as Text);
                }
                regex.lastIndex = 0;
            }

            textNodes.forEach((textNode) => {
                const text = textNode.textContent || '';
                const parts = text.split(regex);
                if (parts.length <= 1) return;

                const frag = document.createDocumentFragment();
                parts.forEach((part) => {
                    if (regex.test(part)) {
                        const mark = document.createElement('mark');
                        mark.className = 'legal-highlight';
                        if (count === 0) mark.classList.add('legal-highlight-first');
                        mark.textContent = part;
                        frag.appendChild(mark);
                        count++;
                    } else {
                        frag.appendChild(document.createTextNode(part));
                    }
                    regex.lastIndex = 0;
                });

                textNode.parentNode?.replaceChild(frag, textNode);
            });

            setMatchCount(count);

            /* Scroll to first match */
            if (count > 0) {
                const first = contentRef.current.querySelector('.legal-highlight-first');
                if (first) {
                    first.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        },
        [clearHighlights],
    );

    /* ── Debounced search trigger ──────────────────────────── */
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            applyHighlights(searchQuery.trim());
        }, 300);
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [searchQuery, applyHighlights]);

    /* ── Clear search & highlights ─────────────────────────── */
    const clearSearch = useCallback(() => {
        setSearchQuery('');
        clearHighlights();
        setMatchCount(0);
    }, [clearHighlights]);

    return { searchQuery, setSearchQuery, matchCount, contentRef, clearSearch };
}
