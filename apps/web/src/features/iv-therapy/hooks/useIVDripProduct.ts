/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — useIVDripProduct Hook
 * ═══════════════════════════════════════════════════════════════
 *
 * Extracted from IVDripProductPage.tsx (594 lines).
 * Contains ALL business logic:
 *   • Volume & quantity selection
 *   • Dynamic pricing calculation (variants + economy/ml)
 *   • Tab & accordion UI state
 *   • Favorites toggle
 *   • Add-to-cart via CartContext
 *   • Utility helpers (renderStars, parseVolume)
 */

import { useState, useCallback } from 'react';
import { useCart } from '@features/scheduling';
/** Type previously in ../components/iv-drip/types (removed during refactor) */
export interface IVDripProductProps {
    id: string;
    title: string;
    price: number;
    oldPrice?: number;
    volumeOptions?: string[];
    economyPerMl?: string[];
    pricingVariants?: Record<string, { price: number; oldPrice?: number }>;
    imageSrc: string;
}

type TabValue = 'descriere' | 'recenzii';

export function useIVDripProduct(props: IVDripProductProps) {
    const {
        id,
        title,
        price,
        oldPrice,
        volumeOptions = ['500ml', '1000ml'],
        economyPerMl,
        pricingVariants,
        imageSrc,
    } = props;

    const { addToCart } = useCart();

    /* ── UI State ── */
    const [selectedVolume, setSelectedVolume] = useState(volumeOptions[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<TabValue>('descriere');
    const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    /* ── Pricing Calculations ── */
    const currentVariant = pricingVariants ? pricingVariants[selectedVolume] : null;
    const currentPrice = currentVariant ? currentVariant.price : price;
    const currentOldPrice = currentVariant ? currentVariant.oldPrice : oldPrice;

    const totalPrice = currentPrice * quantity;
    const discountPercent = currentOldPrice
        ? Math.round((1 - currentPrice / currentOldPrice) * 100)
        : 0;
    const volumeIndex = volumeOptions.indexOf(selectedVolume);

    /* ── Economy per ml calculation ── */
    const parseVolume = (vol: string) => parseInt(vol.replace(/\D/g, ''), 10) || 0;
    const volNum = parseVolume(selectedVolume);

    let calculatedEconomyText: string | null = null;
    if (currentOldPrice && volNum > 0) {
        const savings = currentOldPrice - currentPrice;
        const economyPerMlValue = savings / volNum;
        if (economyPerMlValue > 0) {
            const formattedEco = economyPerMlValue.toFixed(2).replace('.', ',');
            calculatedEconomyText = `${formattedEco} Lei/ml`;
        }
    }

    const displayEconomy = calculatedEconomyText
        ? `${calculatedEconomyText} vs prețul standard`
        : economyPerMl && economyPerMl[volumeIndex]
            ? `${economyPerMl[volumeIndex]} vs prețul standard`
            : null;

    /* ── Handlers ── */
    const handleIncrement = useCallback(() => setQuantity(q => q + 1), []);
    const handleDecrement = useCallback(() => setQuantity(q => Math.max(1, q - 1)), []);
    const toggleFavorite = useCallback(() => setIsFavorite(f => !f), []);
    const toggleAccordion = useCallback(() => setMobileAccordionOpen(o => !o), []);

    const handleAddToCart = useCallback(() => {
        addToCart({
            id,
            name: title,
            volume: selectedVolume,
            quantity,
            price: currentPrice,
            total: totalPrice,
            imageSrc,
        });
    }, [addToCart, id, title, selectedVolume, quantity, currentPrice, totalPrice, imageSrc]);

    /* ── Star rendering helper ── */
    const renderStars = useCallback(
        (rating: number) =>
            [1, 2, 3, 4, 5].map(i => ({
                key: i,
                filled: i <= rating,
            })),
        []
    );

    return {
        /* Pricing */
        currentPrice,
        currentOldPrice,
        totalPrice,
        discountPercent,
        displayEconomy,

        /* UI state */
        selectedVolume,
        setSelectedVolume,
        quantity,
        activeTab,
        setActiveTab,
        mobileAccordionOpen,
        isFavorite,

        /* Handlers */
        handleIncrement,
        handleDecrement,
        toggleFavorite,
        toggleAccordion,
        handleAddToCart,

        /* Utils */
        renderStars,
    };
}
