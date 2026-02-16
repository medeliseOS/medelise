'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';
import Logo from './Logo';
import MenuButton from './MenuButton';
import BookNowButton from './BookNowButton';
import ArrowCircleIcon from './ArrowCircleIcon';
import {
    MENU_WITH_ARROWS,
    MENU_SIMPLE,
    NAV_LINKS,
    MEGA_MENUS,
    type MegaMenuKey,
} from '@/data/navigation';

type SubMenu = MegaMenuKey | null;

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<SubMenu>(null);

    const handleClose = () => {
        setIsOpen(false);
        setActiveSubMenu(null);
    };

    const currentSub = activeSubMenu ? MEGA_MENUS[activeSubMenu] : null;

    return (
        <>
            {/* Default top bar */}
            <nav className="flex w-full flex-col items-center justify-center py-2.5">
                <div className="flex w-full items-center justify-between" style={{ paddingLeft: 'var(--space-nav-x)', paddingRight: 'var(--space-nav-x)' }}>
                    <Logo variant="wordmark" />
                    <MenuButton size="small" onClick={() => setIsOpen(true)} />
                </div>
            </nav>

            {/* Full-screen menu overlay */}
            <div
                className="fixed inset-0 z-[100] overflow-y-auto"
                style={{
                    background: 'var(--color-primary)',
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    transition: 'opacity 350ms ease-in-out',
                }}
            >
                {/* ── SUB-MENU VIEW ── */}
                {currentSub ? (
                    <div className="flex w-full flex-col" style={{ paddingLeft: 'var(--space-section-px)', paddingRight: 'var(--space-section-px)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
                        {/* Row 1: Logo + Close × */}
                        <div className="flex w-full items-center justify-between">
                            <Logo variant="full" white />
                            <button
                                onClick={handleClose}
                                className="flex cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
                                style={{ width: 18, height: 18 }}
                            >
                                <Image
                                    src={ICONS.close}
                                    alt="Close menu"
                                    width={18}
                                    height={18}
                                />
                            </button>
                        </div>

                        {/* Row 2: Back button */}
                        <button
                            onClick={() => setActiveSubMenu(null)}
                            className="mt-12 flex cursor-pointer items-center gap-2 self-start transition-opacity hover:opacity-80"
                        >
                            <Image
                                src={ICONS.chevronDown}
                                alt="Back"
                                width={9}
                                height={9}
                                className="rotate-90 invert"
                            />
                            <span
                                className="text-white"
                                style={{
                                    fontSize: 'var(--text-sm)',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 400,
                                    lineHeight: '1.45',
                                }}
                            >
                                Înapoi la Meniu
                            </span>
                        </button>

                        {/* Sub-menu content */}
                        <div className="mt-8 flex w-full flex-col items-center gap-[30px]">
                            {/* Divider - full width */}
                            <div
                                className="-mx-4"
                                style={{ width: 'calc(100% + 32px)', height: 0, outline: '1px solid white', outlineOffset: '-0.5px' }}
                            />

                            {/* Sub-menu heading */}
                            <div className="w-full px-6">
                                <h2
                                    className="text-white underline"
                                    style={{
                                        fontSize: 20,
                                        fontFamily: 'var(--font-body)',
                                        fontWeight: 600,
                                        lineHeight: '20.3px',
                                    }}
                                >
                                    {currentSub.heading}
                                </h2>
                            </div>

                            {/* Sub-menu items list */}
                            <div className="flex w-full flex-col">
                                {currentSub.items.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href || '#'}
                                        className="flex items-center justify-between transition-colors hover:bg-white/5"
                                        style={{
                                            height: 75,
                                            padding: 'var(--space-4) var(--space-6)',
                                            border: '1px solid white',
                                        }}
                                    >
                                        <div className="flex flex-col justify-center">
                                            <span
                                                className="text-white"
                                                style={{
                                                    fontSize: 'var(--text-sm)',
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 700,
                                                    lineHeight: '1.45',
                                                }}
                                            >
                                                {item.title}
                                            </span>
                                            <span
                                                className="text-white"
                                                style={{
                                                    fontSize: 'var(--text-xs)',
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 400,
                                                    lineHeight: '1.4',
                                                }}
                                            >
                                                {item.subtitle}
                                            </span>
                                        </div>
                                        <ArrowCircleIcon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* ── MAIN MENU VIEW ── */
                    <div
                        className="flex w-full flex-col"
                        style={{ paddingLeft: 'var(--space-section-px)', paddingRight: 'var(--space-section-px)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)', gap: 'var(--space-8)' }}
                    >
                        {/* Header section */}
                        <div className="flex w-full flex-col" style={{ gap: 32 }}>
                            {/* Row 1: Logo + Close */}
                            <div className="flex w-full items-start justify-between">
                                <Logo variant="full" white />
                                <button
                                    onClick={handleClose}
                                    className="flex cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
                                    style={{ width: 18, height: 18 }}
                                >
                                    <Image
                                        src={ICONS.close}
                                        alt="Close menu"
                                        width={18}
                                        height={18}
                                    />
                                </button>
                            </div>

                            {/* CTA Section */}
                            <div className="flex w-full flex-col" style={{ gap: 24 }}>
                                <div className="flex w-full flex-col" style={{ gap: 12 }}>
                                    <p
                                        className="text-white"
                                        style={{
                                            fontSize: 'var(--text-body)',
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 400,
                                            lineHeight: '1.6',
                                        }}
                                    >
                                        Începe-ți viața fără limite.
                                    </p>
                                    <p
                                        className="text-white"
                                        style={{
                                            fontSize: 'var(--text-body)',
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 400,
                                            lineHeight: '1.6',
                                        }}
                                    >
                                        Programează-ți tratamentul astăzi la unul dintre partenerii locali
                                        și începe să-ți atingi obiectivele de sănătate.
                                    </p>
                                </div>
                                <BookNowButton variant="inverted" />
                            </div>
                        </div>

                        {/* Menu sections */}
                        <div className="flex w-full flex-col" style={{ gap: 32 }}>
                            {/* Menu items with arrow circles */}
                            <div className="flex w-full flex-col items-center">
                                <div className="flex w-full flex-col">
                                    {MENU_WITH_ARROWS.map((item) => (
                                        <button
                                            key={item.label}
                                            onClick={() => setActiveSubMenu(item.key)}
                                            className="flex w-full cursor-pointer items-center justify-between transition-colors hover:bg-white/5"
                                            style={{
                                                height: 74,
                                                padding: 'var(--space-4) var(--space-6)',
                                                outline: '1px solid white',
                                                outlineOffset: '-1px',
                                            }}
                                        >
                                            <span
                                                className="text-white"
                                                style={{
                                                    fontSize: 'var(--text-body)',
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 400,
                                                    lineHeight: '1.6',
                                                }}
                                            >
                                                {item.label}
                                            </span>
                                            <ArrowCircleIcon />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Simple menu items */}
                            <div className="flex w-full flex-col items-center">
                                <div className="flex w-full flex-col">
                                    {MENU_SIMPLE.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="flex items-center transition-colors hover:bg-white/5"
                                            style={{
                                                height: 74,
                                                padding: 'var(--space-4) var(--space-6)',
                                                outline: '1px solid white',
                                                outlineOffset: '-1px',
                                            }}
                                        >
                                            <span
                                                className="text-white"
                                                style={{
                                                    fontSize: 'var(--text-body)',
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 400,
                                                    lineHeight: '1.6',
                                                }}
                                            >
                                                {item.label}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation links */}
                            <div className="flex w-full flex-col items-center">
                                <div className="flex w-full flex-col">
                                    {NAV_LINKS.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="flex items-center transition-colors hover:bg-white/5"
                                            style={{
                                                height: 74,
                                                padding: 'var(--space-4) var(--space-6)',
                                                outline: '1px solid white',
                                                outlineOffset: '-1px',
                                            }}
                                        >
                                            <span
                                                className="text-white"
                                                style={{
                                                    fontSize: 'var(--text-body)',
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 400,
                                                    lineHeight: '1.6',
                                                }}
                                            >
                                                {link.label}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
