'use client';

import NewsTicker from './NewsTicker';

import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import ChevronDown from './ChevronDown';
import SearchIcon from './SearchIcon';
import BookNowButton from './BookNowButton';
import ArrowCircleIcon from './ArrowCircleIcon';
import {
    TOP_LINKS,
    MAIN_MENU_ITEMS,
    MENU_KEY_MAP,
    MEGA_MENUS,
    type MegaMenuKey,
} from '@shared/data/navigation';

type MegaMenu = MegaMenuKey | null;

export default function DesktopNav({ isHomePage = true }: { isHomePage?: boolean }) {
    const [activeMenu, setActiveMenu] = useState<MegaMenu>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const isFullIndigo = activeMenu !== null;
    const currentMenu = activeMenu ? MEGA_MENUS[activeMenu] : null;

    // Determine nav background: mega menu open → full indigo, homepage → transparent, other → white
    const navBg = isFullIndigo ? 'var(--color-primary)' : isHomePage ? 'transparent' : 'white';

    // Close mega menu when clicking outside the nav
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveMenu(null);
            }
        }

        if (activeMenu !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeMenu]);

    // Trigger animation on menu open — minimal delay
    useEffect(() => {
        if (activeMenu !== null) {
            setIsAnimating(false);
            const timer = setTimeout(() => setIsAnimating(true), 10);
            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
        }
    }, [activeMenu]);

    return (
        <>
            {/* Backdrop overlay — blurs page content when mega menu is open */}
            {isFullIndigo && (
                <div
                    className="fixed inset-0 z-40"
                    style={{
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        transition: 'opacity 300ms ease-in-out',
                    }}
                    onClick={() => setActiveMenu(null)}
                />
            )}
            <nav
                ref={navRef}
                className="relative z-50 w-full"
                style={{
                    backgroundColor: navBg,
                }}
            >
                {/* News Ticker Bar - Added above Top Bar */}
                <NewsTicker />

                {/* Top Bar - Always Primary Indigo */}
                <div className="bg-primary py-2" style={{ paddingLeft: 'var(--space-nav-x)', paddingRight: 'var(--space-nav-x)' }}>
                    <div className="flex items-center justify-end gap-8">
                        <Link
                            href="/"
                            className="font-body text-[16px] font-normal leading-tight text-white transition-all duration-200 hover:scale-105 hover:font-semibold"
                        >
                            Acasa
                        </Link>
                        {TOP_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="font-body text-[16px] font-normal leading-tight text-white transition-all duration-200 hover:scale-105 hover:font-semibold"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <SearchIcon />
                    </div>
                </div>

                {/* Main Navigation Bar */}
                <div className="flex items-center justify-between pt-4 pb-4" style={{ paddingLeft: 'var(--space-nav-x)', paddingRight: 'var(--space-nav-x)' }}>
                    <div className="flex flex-1 items-center gap-16">
                        <Logo variant="full" white={isFullIndigo} />

                        {/* Floating Pill-Shaped Nav Container */}
                        <div className="relative">
                            {/* Glow/blur effect behind the pill */}
                            <div
                                className="absolute inset-0 rounded-full scale-110 opacity-50"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    filter: 'blur(24px)',
                                }}
                            />

                            {/* Pill container */}
                            <div
                                className="relative flex items-center gap-10 rounded-full shadow-lg bg-primary"
                                style={{
                                    padding: '12px 32px',
                                }}
                            >
                                {MAIN_MENU_ITEMS.map((item) => {
                                    const menuKey = MENU_KEY_MAP[item] || null;
                                    const hasMenu = menuKey !== null;

                                    return (
                                        <button
                                            key={item}
                                            onClick={() => {
                                                if (hasMenu) {
                                                    setActiveMenu(activeMenu === menuKey ? null : menuKey);
                                                }
                                            }}
                                            className="flex items-center gap-2 font-body text-[16px] font-normal leading-tight text-white transition-all duration-200 hover:scale-105 hover:font-semibold"
                                            style={{ transition: 'all 200ms ease-in-out' }}
                                        >
                                            {item}
                                            {hasMenu && <ChevronDown white rotated={activeMenu === menuKey} />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Book Now CTA Button */}
                    <BookNowButton variant={isFullIndigo ? 'inverted' : 'primary'} />
                </div>

                {/* Mega Menu Dropdown with Animation */}
                {currentMenu && (
                    <div
                        className="overflow-hidden"
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            opacity: isAnimating ? 1 : 0,
                            transform: isAnimating ? 'translateY(0)' : 'translateY(-8px)',
                            transition: 'opacity 250ms ease-out, transform 250ms ease-out',
                        }}
                    >
                        <div className="px-[112px] pt-4 pb-16">
                            {/* Section Title */}
                            {currentMenu.href ? (
                                <Link href={currentMenu.href}>
                                    <h2
                                        className="mb-16 font-body text-2xl font-normal text-white underline transition-opacity hover:opacity-80"
                                        style={{ lineHeight: '20.3px' }}
                                    >
                                        {currentMenu.title}
                                    </h2>
                                </Link>
                            ) : (
                                <h2
                                    className="mb-16 font-body text-2xl font-normal text-white underline"
                                    style={{ lineHeight: '20.3px' }}
                                >
                                    {currentMenu.title}
                                </h2>
                            )}

                            {/* 3-Column Grid */}
                            <div className="flex">
                                {currentMenu.columns.map((column, colIndex) => (
                                    <div key={colIndex} className="flex flex-1 flex-col">
                                        {column.map((item, rowIndex) => (
                                            <a
                                                key={item.title}
                                                href={item.href || '#'}
                                                className="group flex items-center justify-between px-5 py-[18px] transition-colors hover:bg-white/5"
                                                style={{
                                                    height: 75,
                                                    outline: '1px solid white',
                                                    outlineOffset: '-1px',
                                                    opacity: isAnimating ? 1 : 0,
                                                    transform: isAnimating
                                                        ? 'translateY(0)'
                                                        : 'translateY(12px)',
                                                    transition: `opacity 300ms ease-out ${100 + rowIndex * 60 + colIndex * 40
                                                        }ms, transform 300ms ease-out ${100 + rowIndex * 60 + colIndex * 40
                                                        }ms`,
                                                }}
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-body text-lg font-semibold leading-7 text-white">
                                                        {item.title}
                                                    </span>
                                                    <span className="font-body text-xs font-medium leading-4 text-white">
                                                        {item.subtitle}
                                                    </span>
                                                </div>
                                                <ArrowCircleIcon />
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
