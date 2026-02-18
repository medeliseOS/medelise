import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        include: ['src/**/*.test.{ts,tsx}'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@ui': path.resolve(__dirname, 'src/components/ui'),
            '@layout': path.resolve(__dirname, 'src/components/layout'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@lib': path.resolve(__dirname, 'src/lib'),
            '@services': path.resolve(__dirname, 'src/services'),
        },
    },
});
