/* ────────────────────────────────────────────────────────────
 * CardScanner — Pure Utility Functions
 *
 * Extracted from CardScanner.tsx to reduce component size and
 * enable independent testing. These are all pure functions with
 * no React dependencies.
 * ──────────────────────────────────────────────────────────── */

export function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pick<T>(arr: T[]): T {
    return arr[randInt(0, arr.length - 1)];
}

export function randomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

/* ─── Code generation for ASCII overlay ─── */
export function generateCode(width: number, height: number): string {
    const header = [
        '// compiled preview • scanner demo',
        '/* generated for visual effect – not executed */',
        'const SCAN_WIDTH = 8;',
        'const FADE_ZONE = 35;',
        'const MAX_PARTICLES = 2500;',
        'const TRANSITION = 0.05;',
    ];
    const helpers = [
        'function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }',
        'function lerp(a, b, t) { return a + (b - a) * t; }',
        'const now = () => performance.now();',
        'function rng(min, max) { return Math.random() * (max - min) + min; }',
    ];
    const particleBlock = (idx: number) => [
        `class Particle${idx} {`,
        '  constructor(x, y, vx, vy, r, a) {',
        '    this.x = x; this.y = y;',
        '    this.vx = vx; this.vy = vy;',
        '    this.r = r; this.a = a;',
        '  }',
        '  step(dt) { this.x += this.vx * dt; this.y += this.vy * dt; }',
        '}',
    ];
    const scannerBlock = [
        'const scanner = {',
        '  x: Math.floor(window.innerWidth / 2),',
        '  width: SCAN_WIDTH,',
        '  glow: 3.5,',
        '};',
        '',
        'function drawParticle(ctx, p) {',
        '  ctx.globalAlpha = clamp(p.a, 0, 1);',
        '  ctx.drawImage(gradient, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);',
        '}',
    ];
    const loopBlock = [
        'function tick(t) {',
        '  const dt = 0.016;',
        '}',
    ];
    const misc = [
        "const state = { intensity: 1.2, particles: MAX_PARTICLES };",
        "const bounds = { w: window.innerWidth, h: 300 };",
        "const gradient = document.createElement('canvas');",
        "const ctx = gradient.getContext('2d');",
        "ctx.globalCompositeOperation = 'lighter';",
    ];

    const library: string[] = [];
    header.forEach(l => library.push(l));
    helpers.forEach(l => library.push(l));
    for (let b = 0; b < 3; b++) particleBlock(b).forEach(l => library.push(l));
    scannerBlock.forEach(l => library.push(l));
    loopBlock.forEach(l => library.push(l));
    misc.forEach(l => library.push(l));
    for (let i = 0; i < 40; i++) {
        library.push(`const v${i} = (${randInt(1, 9)} + ${randInt(10, 99)}) * 0.${randInt(1, 9)};`);
    }

    let flow = library.join(' ').replace(/\s+/g, ' ').trim();
    const totalChars = width * height;
    while (flow.length < totalChars + width) {
        flow += ' ' + pick(library).replace(/\s+/g, ' ').trim();
    }

    let out = '';
    let offset = 0;
    for (let row = 0; row < height; row++) {
        let line = flow.slice(offset, offset + width);
        if (line.length < width) line += ' '.repeat(width - line.length);
        out += line + (row < height - 1 ? '\n' : '');
        offset += width;
    }
    return out;
}

/* ─── Calculate code overlay dimensions ─── */
export function calcCodeDims(cardW: number, cardH: number) {
    const fontSize = 11;
    const lineHeight = 13;
    const charWidth = 6;
    return {
        width: Math.floor(cardW / charWidth),
        height: Math.floor(cardH / lineHeight),
        fontSize,
        lineHeight,
    };
}

/* ─── Card images config ─── */
export const CARD_IMAGES = ['/images-medelise/md-security/md-img-security-touch-id.webp'];
