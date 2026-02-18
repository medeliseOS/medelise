/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
    forbidden: [
        /* ═══════════════════════════════════════════════════════════
         * RULE 1: @ui (Atoms) cannot import from @features
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'ui-no-features',
            severity: 'error',
            comment: 'components/ui/ (Atoms) must NEVER import from features/. Atoms are pure visual — zero business logic.',
            from: { path: '^src/components/ui/' },
            to: { path: '^src/features/' },
        },

        /* ═══════════════════════════════════════════════════════════
         * RULE 2: @ui (Atoms) cannot import from @shared
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'ui-no-shared',
            severity: 'error',
            comment: 'components/ui/ must not import from shared/. Atoms receive everything via props.',
            from: { path: '^src/components/ui/' },
            to: { path: '^src/shared/' },
        },

        /* ═══════════════════════════════════════════════════════════
         * RULE 3: @ui cannot import from @layout
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'ui-no-layout',
            severity: 'error',
            comment: 'Atoms do not depend on Organisms. layout/ can import ui/, but not the reverse.',
            from: { path: '^src/components/ui/' },
            to: { path: '^src/components/layout/' },
        },

        /* ═══════════════════════════════════════════════════════════
         * RULE 4: @layout cannot import from @features
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'layout-no-features',
            severity: 'error',
            comment: 'Layout organisms must not import business logic from features/.',
            from: { path: '^src/components/layout/' },
            to: { path: '^src/features/' },
        },

        /* ═══════════════════════════════════════════════════════════
         * RULE 5: @shared cannot import from @features
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'shared-no-features',
            severity: 'error',
            comment: 'Shared infrastructure is lower-level than features — no upward imports.',
            from: { path: '^src/shared/' },
            to: { path: '^src/features/' },
        },

        /* ═══════════════════════════════════════════════════════════
         * RULE 6: @shared cannot import from @ui or @layout
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'shared-no-components',
            severity: 'error',
            comment: 'Shared infrastructure must not depend on UI components.',
            from: { path: '^src/shared/' },
            to: { path: '^src/components/' },
        },

        /* ═══════════════════════════════════════════════════════════
         * RULE 7: @lib cannot import from anyone (except itself)
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'lib-is-leaf',
            severity: 'error',
            comment: 'lib/ is the leaf node — zero imports from features, components, or shared.',
            from: { path: '^src/lib/' },
            to: { path: '^src/(features|components|shared)/' },
        },

        /* ═══════════════════════════════════════════════════════════
         * RULE 8: No feature-to-feature DIRECT imports (bypass barrel)
         * Only barrel (index.ts) imports are allowed between features
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'no-feature-cross-import-bypass',
            severity: 'error',
            comment: 'Features may only import from other features via their barrel export (index.ts). Direct file imports are forbidden.',
            from: { path: '^src/features/([^/]+)/' },
            to: {
                path: '^src/features/([^/]+)/',
                pathNot: [
                    // Allow importing from own feature (any file)
                    '^src/features/$1/',
                    // Allow importing other features' barrel exports
                    '^src/features/[^/]+/components/index\\.ts$',
                    '^src/features/[^/]+/context/',
                    '^src/features/[^/]+/data/',
                ],
            },
        },

        /* ═══════════════════════════════════════════════════════════
         * RULE 9: No circular dependencies
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'no-circular',
            severity: 'error',
            comment: 'Circular dependencies create tight coupling and make modules untestable.',
            from: {},
            to: { circular: true },
        },

        /* ═══════════════════════════════════════════════════════════
         * RULE 10: No importing from app/ (pages are entry points only)
         * ═══════════════════════════════════════════════════════════ */
        {
            name: 'no-import-from-app',
            severity: 'error',
            comment: 'app/ pages are entry points — no one should import from them.',
            from: { pathNot: '^src/app/' },
            to: { path: '^src/app/' },
        },
    ],

    options: {
        doNotFollow: {
            path: 'node_modules',
        },
        tsPreCompilationDeps: true,
        tsConfig: {
            fileName: 'tsconfig.json',
        },
        enhancedResolveOptions: {
            exportsFields: ['exports'],
            conditionNames: ['import', 'require', 'node', 'default'],
        },
        reporterOptions: {
            text: {
                highlightFocused: true,
            },
        },
    },
};
