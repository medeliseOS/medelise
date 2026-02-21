'use client';

import { useState } from 'react';

/* ── Types ── */

export type RoleType = 'medic' | 'asistent';

export interface RoleTab {
    key: RoleType;
    label: string;
    subtitle: string;
}

export interface ServiceRoleTabsProps {
    /** Currently active role */
    activeRole?: RoleType;
    /** Callback when role changes */
    onRoleChange?: (role: RoleType) => void;
    /** Custom tab config (optional) */
    tabs?: RoleTab[];
    /** Helper text below tabs */
    helperText?: string;
}

/* ── Default tabs ── */

const DEFAULT_TABS: RoleTab[] = [
    { key: 'medic', label: 'Proceduri cu medic', subtitle: 'Expertiză maximă' },
    { key: 'asistent', label: 'Proceduri cu Asistent', subtitle: 'Cost optim' },
];

const DEFAULT_HELPER = 'Alege rolul potrivit pentru nevoile tale: siguranță, eficiență și costuri optimizate.';

/* ── Chevron icon ── */

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{
                transition: 'transform 0.2s ease',
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
        >
            <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#213170"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/* ── Component ── */

export default function ServiceRoleTabs({
    activeRole: controlledRole,
    onRoleChange,
    tabs = DEFAULT_TABS,
    helperText = DEFAULT_HELPER,
}: ServiceRoleTabsProps) {
    const [internalRole, setInternalRole] = useState<RoleType>('asistent');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const activeRole = controlledRole ?? internalRole;

    const handleSelect = (role: RoleType) => {
        setInternalRole(role);
        onRoleChange?.(role);
        setDropdownOpen(false);
    };

    const activeTab = tabs.find((t) => t.key === activeRole) ?? tabs[0];
    const inactiveTab = tabs.find((t) => t.key !== activeRole) ?? tabs[1];

    return (
        <section className="svc-role-tabs">
            {/* ── Desktop / Tablet: horizontal tabs ── */}
            <div className="svc-role-tabs__desktop">
                <div className="svc-role-tabs__tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            type="button"
                            className={`svc-role-tabs__tab ${activeRole === tab.key ? 'svc-role-tabs__tab--active' : ''
                                }`}
                            onClick={() => handleSelect(tab.key)}
                        >
                            <span className="svc-role-tabs__tab-label">{tab.label}</span>
                            <span className="svc-role-tabs__tab-subtitle">{tab.subtitle}</span>
                        </button>
                    ))}
                </div>
                <p className="svc-role-tabs__helper">{helperText}</p>
            </div>

            {/* ── Mobile: dropdown selector ── */}
            <div className="svc-role-tabs__mobile">
                <label className="svc-role-tabs__mobile-label">
                    Alege {inactiveTab.key === 'medic' ? 'medic' : 'asistent'} pentru {inactiveTab.subtitle}
                </label>

                <button
                    type="button"
                    className="svc-role-tabs__dropdown"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                >
                    <div className="svc-role-tabs__dropdown-dot" />
                    <span className="svc-role-tabs__dropdown-text">{activeTab.label}</span>
                    <ChevronIcon open={dropdownOpen} />
                </button>

                {dropdownOpen && (
                    <div className="svc-role-tabs__dropdown-menu">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                className={`svc-role-tabs__dropdown-item ${activeRole === tab.key ? 'svc-role-tabs__dropdown-item--active' : ''
                                    }`}
                                onClick={() => handleSelect(tab.key)}
                            >
                                <div
                                    className={`svc-role-tabs__dropdown-dot ${activeRole === tab.key ? 'svc-role-tabs__dropdown-dot--active' : ''
                                        }`}
                                />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                )}

                <span className="svc-role-tabs__mobile-subtitle">{activeTab.subtitle}</span>
            </div>

            <style jsx>{`
                /* ── Section ── */
                .svc-role-tabs {
                    width: 100%;
                    background: #fff;
                    padding: 32px 64px;
                    overflow: hidden;
                }

                /* ── Desktop / Tablet tabs ── */
                .svc-role-tabs__desktop {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                }

                .svc-role-tabs__tabs {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .svc-role-tabs__tab {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 240px;
                    padding: 0;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .svc-role-tabs__tab-label {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    padding: 10px 20px;
                    border-bottom: 2px solid #CED2DA;
                    color: #213170;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 1.56;
                    transition: border-color 0.2s ease;
                }

                .svc-role-tabs__tab--active .svc-role-tabs__tab-label {
                    border-bottom-color: #213170;
                }

                .svc-role-tabs__tab-subtitle {
                    padding: 8px;
                    text-align: center;
                    color: #637083;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 1.43;
                }

                .svc-role-tabs__helper {
                    text-align: center;
                    color: #97A1AF;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1.5;
                    margin: 0;
                    padding: 4px;
                    max-width: none;
                }

                /* ── Mobile: hidden on desktop ── */
                .svc-role-tabs__mobile {
                    display: none;
                }

                /* ── Tablet (≤1024px) ── */
                @media (max-width: 1024px) {
                    .svc-role-tabs {
                        padding: 16px 32px;
                    }

                    .svc-role-tabs__tab-label {
                        font-size: 16px;
                        line-height: 1.5;
                    }

                    .svc-role-tabs__tab-subtitle {
                        font-size: 12px;
                        line-height: 1.33;
                    }

                    .svc-role-tabs__helper {
                        font-size: 12px;
                        line-height: 1.33;
                        padding: 16px 80px;
                    }
                }

                /* ── Mobile (≤640px) ── */
                @media (max-width: 640px) {
                    .svc-role-tabs {
                        padding: 24px 8px;
                    }

                    .svc-role-tabs__desktop {
                        display: none;
                    }

                    .svc-role-tabs__mobile {
                        display: flex;
                        flex-direction: column;
                        gap: 6px;
                    }

                    .svc-role-tabs__mobile-label {
                        color: #213170;
                        font-family: var(--font-heading, 'Montserrat', sans-serif);
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 1.43;
                    }

                    .svc-role-tabs__dropdown {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        width: 100%;
                        padding: 8px 8px 8px 12px;
                        background: #fff;
                        border-radius: 8px;
                        border: 1px solid #CED2DA;
                        cursor: pointer;
                        transition: border-color 0.2s ease;
                    }

                    .svc-role-tabs__dropdown:focus {
                        border-color: #213170;
                        outline: none;
                    }

                    .svc-role-tabs__dropdown-dot {
                        width: 13px;
                        height: 13px;
                        border-radius: 9999px;
                        background: #CED2DA;
                        flex-shrink: 0;
                    }

                    .svc-role-tabs__dropdown-dot--active {
                        background: #213170;
                    }

                    .svc-role-tabs__dropdown-text {
                        flex: 1;
                        color: #213170;
                        font-family: var(--font-heading, 'Montserrat', sans-serif);
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 1.5;
                        text-align: left;
                    }

                    .svc-role-tabs__dropdown-menu {
                        display: flex;
                        flex-direction: column;
                        gap: 2px;
                        border: 1px solid #CED2DA;
                        border-radius: 8px;
                        overflow: hidden;
                        background: #fff;
                    }

                    .svc-role-tabs__dropdown-item {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        padding: 10px 12px;
                        background: #fff;
                        border: none;
                        cursor: pointer;
                        color: #213170;
                        font-family: var(--font-heading, 'Montserrat', sans-serif);
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 1.5;
                        text-align: left;
                        transition: background 0.15s ease;
                    }

                    .svc-role-tabs__dropdown-item:hover {
                        background: #F8F9FA;
                    }

                    .svc-role-tabs__dropdown-item--active {
                        font-weight: 500;
                    }

                    .svc-role-tabs__mobile-subtitle {
                        color: #637083;
                        font-family: var(--font-heading, 'Montserrat', sans-serif);
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 1.33;
                    }
                }
            `}</style>
        </section>
    );
}
