/**
 * ═══════════════════════════════════════════════════════════════
 * IV Therapy Service — Contract Tests
 * ═══════════════════════════════════════════════════════════════
 *
 * Validates that the Adapter Pattern's public contract is stable.
 * These tests ensure that when we swap from static data to real API,
 * the return shape and behavior remain identical.
 */

import { describe, it, expect } from 'vitest';
import { getIVProducts, getIVProductBySlug } from '@services/iv-therapy.service';

describe('iv-therapy.service', () => {
    describe('getIVProducts()', () => {
        it('returns a non-empty array', async () => {
            const products = await getIVProducts();
            expect(products).toBeInstanceOf(Array);
            expect(products.length).toBeGreaterThan(0);
        });

        it('each product satisfies the IVDripService contract', async () => {
            const products = await getIVProducts();
            for (const p of products) {
                expect(p).toHaveProperty('id');
                expect(p).toHaveProperty('title');
                expect(p).toHaveProperty('slug');
                expect(p).toHaveProperty('price');
                expect(p).toHaveProperty('shortDescription');
                expect(p).toHaveProperty('imagePlaceholder');

                expect(typeof p.id).toBe('string');
                expect(typeof p.title).toBe('string');
                expect(typeof p.slug).toBe('string');
                expect(typeof p.price).toBe('number');
                expect(p.price).toBeGreaterThan(0);
                expect(p.slug).toMatch(/^\/iv-drip-therapy\//);
            }
        });

        it('returns exactly 12 services (static catalog)', async () => {
            const products = await getIVProducts();
            expect(products).toHaveLength(12);
        });
    });

    describe('getIVProductBySlug()', () => {
        it('returns a product for a valid slug', async () => {
            const product = await getIVProductBySlug('deshidratare');
            expect(product).toBeDefined();
            expect(product!.id).toBe('deshidratare');
            expect(product!.title).toBe('Deshidratare');
        });

        it('returns undefined for an invalid slug', async () => {
            const product = await getIVProductBySlug('nonexistent-slug');
            expect(product).toBeUndefined();
        });

        it('matches by slug suffix, not exact string', async () => {
            const product = await getIVProductBySlug('myers-cocktail');
            expect(product).toBeDefined();
            expect(product!.id).toBe('myers-cocktail');
        });
    });
});
