'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ICONS } from '@shared/constants/icons';
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
} from '@shared/data/navigation';

type SubMenu = MegaMenuKey | null;

export default function TabletNav() {
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
            <nav className="flex w-full items-center justify-center py-2.5">
                <div className="flex w-full items-center justify-between" style={{ paddingLeft: 'var(--space-nav-x)', paddingRight: 'var(--space-nav-x)' }}>
                    <Logo variant="full" />
                    <MenuButton size="medium" onClick={() => setIsOpen(true)} />
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
                            <Logo variant="full" white onClick={handleClose} />
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
                            {/* Divider */}
                            <div
                                className="-mx-10"
                                style={{ width: 'calc(100% + 80px)', height: 0, outline: '1px solid white', outlineOffset: '-0.5px' }}
                            />

                            {/* Sub-menu heading */}
                            <div className="w-full px-10">
                                <h2
                                    className="text-white underline"
                                    style={{
                                        fontSize: 'var(--text-h3)',
                                        fontFamily: 'var(--font-body)',
                                        fontWeight: 600,
                                        lineHeight: '1.25',
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
                                            paddingLeft: 'var(--space-section-px)',
                                            paddingRight: 'var(--space-section-px)',
                                            paddingTop: 'var(--space-4)',
                                            paddingBottom: 'var(--space-4)',
                                            border: '1px solid white',
                                        }}
                                    >
                                        <div className="flex flex-col justify-center">
                                            <span
                                                className="text-white"
                                                style={{
                                                    fontSize: 'var(--text-body)',
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 700,
                                                    lineHeight: '1.6',
                                                }}
                                            >
                                                {item.title}
                                            </span>
                                            <span
                                                className="text-white"
                                                style={{
                                                    fontSize: 'var(--text-sm)',
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 400,
                                                    lineHeight: '1.45',
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
                    <div className="flex w-full flex-col items-center pt-8 pb-8" style={{ paddingLeft: 'var(--space-section-px)', paddingRight: 'var(--space-section-px)' }}>
                        {/* Header: Logo + Close */}
                        <div className="flex w-full items-center justify-between">
                            <Logo variant="full" white onClick={handleClose} />
                            <button
                                onClick={handleClose}
                                className="flex cursor-pointer items-center justify-center"
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
                        <div className="mt-12 flex w-full max-w-[563px] flex-col items-start gap-4 self-start">
                            <p
                                className="text-white"
                                style={{
                                    fontSize: 'var(--text-sm)',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 400,
                                    lineHeight: '1.45',
                                }}
                            >
                                Începe-ți viața fără limite.
                            </p>
                            <p
                                className="text-white"
                                style={{
                                    fontSize: 'var(--text-sm)',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 400,
                                    lineHeight: '1.45',
                                }}
                            >
                                Programează-ți tratamentul astăzi la unul dintre partenerii locali
                                și începe să-ți atingi obiectivele de sănătate.
                            </p>
                            <BookNowButton variant="inverted" />
                        </div>

                        {/* Divider */}
                        <div
                            className="mt-8 -mx-10"
                            style={{ width: 'calc(100% + 80px)', height: 0, outline: '1px solid white', outlineOffset: '-0.5px' }}
                        />

                        {/* Menu items with arrow circles */}
                        <div className="mt-8 flex w-full flex-col">
                            {MENU_WITH_ARROWS.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => setActiveSubMenu(item.key)}
                                    className="flex w-full cursor-pointer items-center justify-between transition-colors hover:bg-white/5"
                                    style={{
                                        height: 74,
                                        paddingLeft: 'var(--space-section-px)',
                                        paddingRight: 'var(--space-section-px)',
                                        paddingTop: 'var(--space-5)',
                                        paddingBottom: 'var(--space-5)',
                                        outline: '1px solid white',
                                        outlineOffset: '-1px',
                                    }}
                                >
                                    <span
                                        className="text-white"
                                        style={{
                                            fontSize: 'var(--text-h4)',
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 400,
                                            lineHeight: '1.3',
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                    <ArrowCircleIcon />
                                </button>
                            ))}
                        </div>

                        {/* Simple menu items */}
                        <div className="mt-8 flex w-full flex-col">
                            {MENU_SIMPLE.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center transition-colors hover:bg-white/5"
                                    style={{
                                        height: 74,
                                        paddingLeft: 'var(--space-section-px)',
                                        paddingRight: 'var(--space-section-px)',
                                        paddingTop: 'var(--space-6)',
                                        paddingBottom: 'var(--space-6)',
                                        outline: '1px solid white',
                                        outlineOffset: '-1px',
                                    }}
                                >
                                    <span
                                        className="text-white"
                                        style={{
                                            fontSize: 'var(--text-h4)',
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 400,
                                            lineHeight: '1.3',
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Navigation links */}
                        <div className="mt-8 flex w-full flex-col">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="flex items-center transition-colors hover:bg-white/5"
                                    style={{
                                        height: 74,
                                        paddingLeft: 'var(--space-section-px)',
                                        paddingRight: 'var(--space-section-px)',
                                        paddingTop: 'var(--space-6)',
                                        paddingBottom: 'var(--space-6)',
                                        outline: '1px solid white',
                                        outlineOffset: '-1px',
                                    }}
                                >
                                    <span
                                        className="text-white"
                                        style={{
                                            fontSize: 'var(--text-h4)',
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 400,
                                            lineHeight: '1.3',
                                        }}
                                    >
                                        {link.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
