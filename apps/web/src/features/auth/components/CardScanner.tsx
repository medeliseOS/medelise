'use client';

import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { randomFloat, generateCode, calcCodeDims, CARD_IMAGES } from './cardScannerUtils';

/* ═══════════════════════════════════════════════════════
   CardScanner  —  self-contained React component
   ═══════════════════════════════════════════════════════ */
export default function CardScanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const scannerCanvasRef = useRef<HTMLCanvasElement>(null);
  const cardLineRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  /* ── build card DOM ── */
  const buildCards = useCallback(() => {
    const line = cardLineRef.current;
    if (!line) return;
    line.innerHTML = '';

    const CARD_W = 240;
    const CARD_H = 150;
    const count = 30;

    for (let i = 0; i < count; i++) {
      const wrapper = document.createElement('div');
      wrapper.className = 'cs-card-wrapper';

      /* normal card (image) */
      const normal = document.createElement('div');
      normal.className = 'cs-card cs-card-normal';
      const img = document.createElement('img');
      img.className = 'cs-card-image';
      img.src = CARD_IMAGES[i % CARD_IMAGES.length];
      img.alt = 'Card';
      img.onerror = () => {
        const c = document.createElement('canvas');
        c.width = CARD_W; c.height = CARD_H;
        const cx = c.getContext('2d')!;
        const g = cx.createLinearGradient(0, 0, CARD_W, CARD_H);
        g.addColorStop(0, '#667eea'); g.addColorStop(1, '#764ba2');
        cx.fillStyle = g; cx.fillRect(0, 0, CARD_W, CARD_H);
        img.src = c.toDataURL();
      };
      normal.appendChild(img);

      /* ASCII card */
      const ascii = document.createElement('div');
      ascii.className = 'cs-card cs-card-ascii';
      const asciiContent = document.createElement('div');
      asciiContent.className = 'cs-ascii-content';
      const dims = calcCodeDims(CARD_W, CARD_H);
      asciiContent.style.fontSize = dims.fontSize + 'px';
      asciiContent.style.lineHeight = dims.lineHeight + 'px';
      asciiContent.style.color = 'var(--color-primary)';
      asciiContent.textContent = generateCode(dims.width, dims.height);
      ascii.appendChild(asciiContent);

      wrapper.appendChild(normal);
      wrapper.appendChild(ascii);
      line.appendChild(wrapper);
    }
  }, []);

  /* ── main effect ── */
  useEffect(() => {
    const container = containerRef.current;
    const particleCanvas = particleCanvasRef.current;
    const scannerCanvas = scannerCanvasRef.current;
    const cardLine = cardLineRef.current;
    if (!container || !particleCanvas || !scannerCanvas || !cardLine) return;

    buildCards();

    /* sizes relative to the container */
    let cW = container.offsetWidth;
    let cH = container.offsetHeight;

    /* ── Card Stream Controller ── */
    let position = cW;
    let velocity = 70;
    let direction = -1;
    let isAnimating = true;
    let isDragging = false;
    let lastMouseX = 0;
    let mouseVelocity = 0;
    const friction = 0.95;
    const minVelocity = 45;
    let lastTime = performance.now();

    const cardWidth = 240;
    const cardGap = 60;
    const cardCount = cardLine.children.length;
    let cardLineWidth = (cardWidth + cardGap) * cardCount;

    /* clipping / scanning */
    let scanningActive = false;

    function updateCardClipping() {
      const scannerX = cW / 2;
      const scannerWidth = 8;
      const sLeft = scannerX - scannerWidth / 2;
      const sRight = scannerX + scannerWidth / 2;
      let anyActive = false;

      const containerRect = container!.getBoundingClientRect();

      cardLine!.querySelectorAll('.cs-card-wrapper').forEach((w) => {
        const wrapper = w as HTMLElement;
        const rect = wrapper.getBoundingClientRect();
        const cardLeft = rect.left - containerRect.left;
        const cardRight = rect.right - containerRect.left;
        const cardW = rect.width;

        const normalCard = wrapper.querySelector('.cs-card-normal') as HTMLElement;
        const asciiCard = wrapper.querySelector('.cs-card-ascii') as HTMLElement;
        if (!normalCard || !asciiCard) return;

        if (cardLeft < sRight && cardRight > sLeft) {
          anyActive = true;
          const intersectLeft = Math.max(sLeft - cardLeft, 0);
          const intersectRight = Math.min(sRight - cardLeft, cardW);
          const normalClipRight = (intersectLeft / cardW) * 100;
          const asciiClipLeft = (intersectRight / cardW) * 100;
          normalCard.style.setProperty('--clip-right', `${normalClipRight}%`);
          asciiCard.style.setProperty('--clip-left', `${asciiClipLeft}%`);

          if (!wrapper.hasAttribute('data-scanned') && intersectLeft > 0) {
            wrapper.setAttribute('data-scanned', 'true');
            const fx = document.createElement('div');
            fx.className = 'cs-scan-effect';
            wrapper.appendChild(fx);
            setTimeout(() => fx.remove(), 600);
          }
        } else {
          if (cardRight < sLeft) {
            normalCard.style.setProperty('--clip-right', '100%');
            asciiCard.style.setProperty('--clip-left', '100%');
          } else {
            normalCard.style.setProperty('--clip-right', '0%');
            asciiCard.style.setProperty('--clip-left', '0%');
          }
          wrapper.removeAttribute('data-scanned');
        }
      });
      scanningActive = anyActive;
    }

    function updateCardPosition() {
      if (position < -cardLineWidth) position = cW;
      else if (position > cW) position = -cardLineWidth;
      cardLine!.style.transform = `translateX(${position}px)`;
      updateCardClipping();
    }

    /* drag */
    function startDrag(e: MouseEvent | Touch) {
      isDragging = true;
      isAnimating = false;
      lastMouseX = e.clientX;
      mouseVelocity = 0;
      const tf = window.getComputedStyle(cardLine!).transform;
      if (tf !== 'none') { position = new DOMMatrix(tf).m41; }
      cardLine!.style.cursor = 'grabbing';
    }
    function onDrag(e: MouseEvent | Touch) {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      position += dx;
      mouseVelocity = dx * 60;
      lastMouseX = e.clientX;
      cardLine!.style.transform = `translateX(${position}px)`;
      updateCardClipping();
    }
    function endDrag() {
      if (!isDragging) return;
      isDragging = false;
      cardLine!.style.cursor = 'grab';
      if (Math.abs(mouseVelocity) > minVelocity) {
        velocity = Math.abs(mouseVelocity);
        direction = mouseVelocity > 0 ? 1 : -1;
      } else { velocity = 70; }
      isAnimating = true;
    }

    const onMouseDown = (e: MouseEvent) => { e.preventDefault(); startDrag(e); };
    const onMouseMove = (e: MouseEvent) => { if (isDragging) { e.preventDefault(); onDrag(e); } };
    const onMouseUp = () => endDrag();
    const onTouchStart = (e: TouchEvent) => { e.preventDefault(); startDrag(e.touches[0]); };
    const onTouchMove = (e: TouchEvent) => { if (isDragging) onDrag(e.touches[0]); };
    const onTouchEnd = () => endDrag();
    const onWheel = (e: WheelEvent) => { e.preventDefault(); position += e.deltaY > 0 ? 20 : -20; updateCardPosition(); };

    cardLine.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    cardLine.addEventListener('touchstart', onTouchStart, { passive: false });
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
    cardLine.addEventListener('wheel', onWheel, { passive: false });

    /* card stream animation loop */
    let cardRafId: number;
    function animateCards() {
      const now = performance.now();
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      if (isAnimating && !isDragging) {
        if (velocity > minVelocity) velocity *= friction;
        else velocity = Math.max(minVelocity, velocity);
        position += velocity * direction * dt;
        updateCardPosition();
      }
      cardRafId = requestAnimationFrame(animateCards);
    }
    animateCards();

    /* periodic ascii refresh */
    const asciiTimer = setInterval(() => {
      cardLine.querySelectorAll('.cs-ascii-content').forEach(el => {
        if (Math.random() < 0.15) {
          const dims = calcCodeDims(240, 150);
          el.textContent = generateCode(dims.width, dims.height);
        }
      });
    }, 200);

    /* ── Particle System (Three.js) ── */
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-cW / 2, cW / 2, 125, -125, 1, 1000);
    camera.position.z = 100;
    const renderer = new THREE.WebGLRenderer({ canvas: particleCanvas, alpha: true, antialias: true });
    renderer.setSize(cW, 250);
    renderer.setClearColor(0x000000, 0);

    const pCount = 400;
    const positions = new Float32Array(pCount * 3);
    const colors = new Float32Array(pCount * 3);
    const sizes = new Float32Array(pCount);
    const alphas = new Float32Array(pCount);
    const velocitiesArr = new Float32Array(pCount);

    for (let i = 0; i < pCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * cW * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
      positions[i * 3 + 2] = 0;
      colors[i * 3] = colors[i * 3 + 1] = colors[i * 3 + 2] = 1;

      const orbitRadius = Math.random() * 200 + 100;
      // Drastically reduced size for "fine point" look (1.5px - 3.5px)
      sizes[i] = Math.random() * 2 + 1.5;

      // Lower opacity for subtlety (0.1 - 0.6)
      alphas[i] = (Math.random() * 5 + 1) / 10;
      velocitiesArr[i] = Math.random() * 60 + 30;
    }

    /* particle dot texture - Sharp definition */
    const dotCanvas = document.createElement('canvas');
    dotCanvas.width = dotCanvas.height = 32; // Smaller texture
    const dCtx = dotCanvas.getContext('2d')!;
    const half = 16;
    const dGrad = dCtx.createRadialGradient(half, half, 0, half, half, half);

    // Harder gradient for crisp points
    dGrad.addColorStop(0, 'rgba(33, 49, 112, 1)');     // Core Indigo
    dGrad.addColorStop(0.4, 'rgba(33, 49, 112, 0.8)'); // High opacity body
    dGrad.addColorStop(0.5, 'rgba(33, 49, 112, 0)');   // Sharp edge
    dGrad.addColorStop(1, 'transparent');

    dCtx.fillStyle = dGrad;
    dCtx.beginPath(); dCtx.arc(half, half, half, 0, Math.PI * 2); dCtx.fill();
    const dotTexture = new THREE.CanvasTexture(dotCanvas);

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geom.setAttribute('size', new THREE.BufferAttribute(sizes, 1)); // Variable size
    geom.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: { pointTexture: { value: dotTexture } },
      vertexShader: `
        attribute float alpha;
        attribute float size;
        varying float vAlpha;
        varying vec3 vColor;
        void main(){
          vAlpha=alpha; vColor=color;
          vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize=size;
          gl_Position=projectionMatrix*mv;
        }`,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying float vAlpha;
        varying vec3 vColor;
        void main(){
          gl_FragColor=vec4(vColor,vAlpha)*texture2D(pointTexture,gl_PointCoord);
        }`,
      transparent: true,
      blending: THREE.NormalBlending, // Normal blending for dark particles on light bg
      depthWrite: false,
      vertexColors: true,
    });

    const points = new THREE.Points(geom, mat);
    scene.add(points);

    let threeRafId: number;
    function animateThree() {
      const pos = geom.attributes.position.array as Float32Array;
      const alp = geom.attributes.alpha.array as Float32Array;
      const t = Date.now() * 0.001;
      for (let i = 0; i < pCount; i++) {
        pos[i * 3] += velocitiesArr[i] * 0.016;
        if (pos[i * 3] > cW / 2 + 100) {
          pos[i * 3] = -cW / 2 - 100;
          pos[i * 3 + 1] = (Math.random() - 0.5) * 250;
        }
        pos[i * 3 + 1] += Math.sin(t + i * 0.1) * 0.5;
        const tw = Math.floor(Math.random() * 10);
        if (tw === 1 && alp[i] > 0) alp[i] -= 0.05;
        else if (tw === 2 && alp[i] < 1) alp[i] += 0.05;
        alp[i] = Math.max(0, Math.min(1, alp[i]));
      }
      geom.attributes.position.needsUpdate = true;
      geom.attributes.alpha.needsUpdate = true;
      renderer.render(scene, camera);
      threeRafId = requestAnimationFrame(animateThree);
    }
    animateThree();

    /* ── Particle Scanner (2D Canvas) ── */
    const sCtx = scannerCanvas.getContext('2d')!;
    let sW = cW;
    let sH = 300;
    scannerCanvas.width = sW;
    scannerCanvas.height = sH;

    const lightBarX = sW / 2;
    const lightBarWidth = 3;
    let fadeZone = 60;
    let intensity = 0.8;
    let maxParticles = 800;
    const baseIntensity = 0.8;
    const baseMax = 800;
    const baseFadeZone = 60;
    const scanTargetIntensity = 1.8;
    const scanTargetParticles = 2500;
    const scanTargetFadeZone = 35;
    const transitionSpeed = 0.05;
    let currentGlowIntensity = 1;

    /* gradient dot for scanner particles */
    const gradDot = document.createElement('canvas');
    gradDot.width = gradDot.height = 16;
    const gCtx = gradDot.getContext('2d')!;
    const gHalf = 8;
    const gGrd = gCtx.createRadialGradient(gHalf, gHalf, 0, gHalf, gHalf, gHalf);
    gGrd.addColorStop(0, 'rgba(33, 49, 112, 1)'); // Primary
    gGrd.addColorStop(0.3, 'rgba(189, 224, 255, 0.8)'); // Baby Blue
    gGrd.addColorStop(0.7, 'rgba(189, 224, 255, 0.4)');
    gGrd.addColorStop(1, 'transparent');
    gCtx.fillStyle = gGrd;
    gCtx.beginPath(); gCtx.arc(gHalf, gHalf, gHalf, 0, Math.PI * 2); gCtx.fill();

    interface SParticle {
      x: number; y: number; vx: number; vy: number;
      radius: number; alpha: number; originalAlpha: number;
      life: number; decay: number; time: number;
      twinkleSpeed: number; twinkleAmount: number;
    }
    const sParticles: (SParticle | null)[] = [];
    let sCount = 0;

    function createSParticle(): SParticle {
      const iRatio = intensity / baseIntensity;
      const sm = 1 + (iRatio - 1) * 1.2;
      const szm = 1 + (iRatio - 1) * 0.7;
      return {
        x: lightBarX + randomFloat(-lightBarWidth / 2, lightBarWidth / 2),
        y: randomFloat(0, sH),
        vx: randomFloat(0.2, 1.0) * sm,
        vy: randomFloat(-0.15, 0.15) * sm,
        radius: randomFloat(0.4, 1) * szm,
        alpha: randomFloat(0.6, 1),
        originalAlpha: 0,
        life: 1.0,
        decay: randomFloat(0.005, 0.025) * (2 - iRatio * 0.5),
        time: 0,
        twinkleSpeed: randomFloat(0.02, 0.08) * sm,
        twinkleAmount: randomFloat(0.1, 0.25),
      };
    }

    for (let i = 0; i < maxParticles; i++) {
      const p = createSParticle();
      p.originalAlpha = p.alpha;
      sCount++;
      sParticles[sCount] = p;
    }

    function drawLightBar() {
      /* Vertical fade mask */
      const vGrad = sCtx.createLinearGradient(0, 0, 0, sH);
      vGrad.addColorStop(0, 'rgba(255,255,255,0)');
      vGrad.addColorStop(fadeZone / sH, 'rgba(255,255,255,1)');
      vGrad.addColorStop(1 - fadeZone / sH, 'rgba(255,255,255,1)');
      vGrad.addColorStop(1, 'rgba(255,255,255,0)');

      /* We use source-over for light background visibility */
      sCtx.globalCompositeOperation = 'source-over';

      const targetGlow = scanningActive ? 3.5 : 1;
      currentGlowIntensity += (targetGlow - currentGlowIntensity) * transitionSpeed;
      const gi = currentGlowIntensity;
      const lw = lightBarWidth;

      // For light background: We need dark/vibrant colors for the glow to be visible.
      // Using Indigo (Primary) and Baby Blue.
      const primaryColor = '33, 49, 112'; // Indigo
      const secondaryColor = '189, 224, 255'; // Baby Blue

      /* core - indigo edges, baby blue center */
      const coreG = sCtx.createLinearGradient(lightBarX - lw / 2, 0, lightBarX + lw / 2, 0);
      coreG.addColorStop(0, `rgba(${primaryColor}, 0)`);
      coreG.addColorStop(0.2, `rgba(${primaryColor}, ${1 * gi})`);
      coreG.addColorStop(0.5, `rgba(${secondaryColor}, ${1 * gi})`); // Baby Blue center
      coreG.addColorStop(0.8, `rgba(${primaryColor}, ${1 * gi})`);
      coreG.addColorStop(1, `rgba(${primaryColor}, 0)`);

      sCtx.globalAlpha = 1;
      sCtx.fillStyle = coreG;
      sCtx.beginPath();
      if (sCtx.roundRect) sCtx.roundRect(lightBarX - lw / 2, 0, lw, sH, 15);
      else sCtx.rect(lightBarX - lw / 2, 0, lw, sH); // Fallback
      sCtx.fill();

      /* glow 1 - Indigo for visibility/contrast on light bg */
      const g1 = sCtx.createLinearGradient(lightBarX - lw * 2, 0, lightBarX + lw * 2, 0);
      g1.addColorStop(0, `rgba(${primaryColor}, 0)`);
      g1.addColorStop(0.5, `rgba(${primaryColor}, ${0.5 * gi})`);
      g1.addColorStop(1, `rgba(${primaryColor}, 0)`);

      sCtx.globalAlpha = scanningActive ? 1.0 : 0.8;
      sCtx.fillStyle = g1;
      sCtx.beginPath();
      if (sCtx.roundRect) sCtx.roundRect(lightBarX - lw * 2, 0, lw * 4, sH, 25);
      else sCtx.rect(lightBarX - lw * 2, 0, lw * 4, sH);
      sCtx.fill();

      /* glow 2 - Baby Blue (wide) */
      const g2 = sCtx.createLinearGradient(lightBarX - lw * 4, 0, lightBarX + lw * 4, 0);
      g2.addColorStop(0, `rgba(${secondaryColor}, 0)`);
      g2.addColorStop(0.5, `rgba(${secondaryColor}, ${0.6 * gi})`);
      g2.addColorStop(1, `rgba(${secondaryColor}, 0)`);

      sCtx.globalAlpha = scanningActive ? 0.8 : 0.6;
      sCtx.fillStyle = g2;
      sCtx.beginPath();
      if (sCtx.roundRect) sCtx.roundRect(lightBarX - lw * 4, 0, lw * 8, sH, 35);
      else sCtx.rect(lightBarX - lw * 4, 0, lw * 8, sH);
      sCtx.fill();

      if (scanningActive) {
        const g3 = sCtx.createLinearGradient(lightBarX - lw * 8, 0, lightBarX + lw * 8, 0);
        g3.addColorStop(0, `rgba(${secondaryColor}, 0)`);
        g3.addColorStop(0.5, `rgba(${secondaryColor}, 0.2)`);
        g3.addColorStop(1, `rgba(${secondaryColor}, 0)`);

        sCtx.globalAlpha = scanningActive ? 0.6 : 0.4;
        sCtx.fillStyle = g3;
        sCtx.beginPath();
        if (sCtx.roundRect) sCtx.roundRect(lightBarX - lw * 8, 0, lw * 16, sH, 45);
        else sCtx.rect(lightBarX - lw * 8, 0, lw * 16, sH);
        sCtx.fill();
      }

      /* Masking for top/bottom fade */
      sCtx.globalCompositeOperation = 'destination-in';
      sCtx.globalAlpha = 1;
      sCtx.fillStyle = vGrad;
      sCtx.fillRect(0, 0, sW, sH);
    }

    let scanRafId: number;
    function animateScanner() {
      const tI = scanningActive ? scanTargetIntensity : baseIntensity;
      const tM = scanningActive ? scanTargetParticles : baseMax;
      const tF = scanningActive ? scanTargetFadeZone : baseFadeZone;
      intensity += (tI - intensity) * transitionSpeed;
      maxParticles = Math.floor(maxParticles + (tM - maxParticles) * transitionSpeed);
      fadeZone += (tF - fadeZone) * transitionSpeed;

      sCtx.globalCompositeOperation = 'source-over';
      sCtx.clearRect(0, 0, sW, sH);
      drawLightBar();
      sCtx.globalCompositeOperation = 'source-over';

      for (let i = 1; i <= sCount; i++) {
        const p = sParticles[i];
        if (!p) continue;
        p.x += p.vx; p.y += p.vy; p.time++;
        p.alpha = p.originalAlpha * p.life + Math.sin(p.time * p.twinkleSpeed) * p.twinkleAmount;
        p.life -= p.decay;
        if (p.x > sW + 10 || p.life <= 0) {
          p.x = lightBarX + randomFloat(-lightBarWidth / 2, lightBarWidth / 2);
          p.y = randomFloat(0, sH);
          p.vx = randomFloat(0.2, 1.0);
          p.vy = randomFloat(-0.15, 0.15);
          p.alpha = randomFloat(0.6, 1);
          p.originalAlpha = p.alpha;
          p.life = 1.0;
          p.time = 0;
        }
        if (p.life <= 0) continue;
        let fa = 1;
        if (p.y < fadeZone) fa = p.y / fadeZone;
        else if (p.y > sH - fadeZone) fa = (sH - p.y) / fadeZone;
        fa = Math.max(0, Math.min(1, fa));
        sCtx.globalAlpha = p.alpha * fa;
        sCtx.drawImage(gradDot, p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
      }

      /* spawn more particles based on intensity */
      const iRatio = intensity / baseIntensity;
      if (Math.random() < intensity && sCount < maxParticles) {
        const np = createSParticle(); np.originalAlpha = np.alpha; sCount++; sParticles[sCount] = np;
      }
      if (iRatio > 1.1 && Math.random() < (iRatio - 1.0) * 1.2) {
        const np = createSParticle(); np.originalAlpha = np.alpha; sCount++; sParticles[sCount] = np;
      }
      if (iRatio > 1.5 && Math.random() < (iRatio - 1.5) * 1.8) {
        const np = createSParticle(); np.originalAlpha = np.alpha; sCount++; sParticles[sCount] = np;
      }
      if (sCount > maxParticles + 200) {
        const excess = Math.min(15, sCount - maxParticles);
        for (let x = 0; x < excess; x++) { sParticles[sCount - x] = null; }
        sCount -= excess;
      }

      scanRafId = requestAnimationFrame(animateScanner);
    }
    animateScanner();

    /* ── resize handler ── */
    function onResize() {
      cW = container!.offsetWidth;
      cH = container!.offsetHeight;
      cardLineWidth = (cardWidth + cardGap) * cardCount;
      camera.left = -cW / 2; camera.right = cW / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(cW, 250);
      sW = cW;
      scannerCanvas!.width = sW;
      scannerCanvas!.height = sH;
    }
    window.addEventListener('resize', onResize);

    /* ── cleanup ── */
    cleanupRef.current = () => {
      cancelAnimationFrame(cardRafId);
      cancelAnimationFrame(threeRafId);
      cancelAnimationFrame(scanRafId);
      clearInterval(asciiTimer);
      window.removeEventListener('resize', onResize);
      cardLine.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      cardLine.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
      cardLine.removeEventListener('wheel', onWheel);
      renderer.dispose();
      scene.remove(points);
      geom.dispose();
      mat.dispose();
    };

    return () => { cleanupRef.current?.(); };
  }, [buildCards]);

  /* ─── JSX ─── */
  return (
    <>
      <div ref={containerRef} className="cs-container">
        {/* Gradient overlay for text readability */}
        <div className="cs-gradient-overlay" />

        {/* Header: Logo + Title */}
        <div className="cs-header">
          <div className="cs-logo-row">
            <span className="cs-logo-text">MEDELISE</span>
            <div className="cs-logo-line" />
          </div>

        </div>

        <canvas ref={particleCanvasRef} className="cs-particle-canvas" />
        <canvas ref={scannerCanvasRef} className="cs-scanner-canvas" />
        <div className="cs-card-stream">
          <div ref={cardLineRef} className="cs-card-line" />
        </div>
        {/* Scanning label */}
        <div className="cs-scanning-label">
          <span className="cs-scanning-text">Scanning</span>
          {' '}
          <a href="https://medelise.com/" target="_blank" rel="noopener noreferrer" className="cs-scanning-link">
            identity<span className="cs-dots"><span className="cs-dot cs-dot-1">.</span><span className="cs-dot cs-dot-2">.</span><span className="cs-dot cs-dot-3">.</span></span>
          </a>
        </div>
        <div className="cs-footer">
          <div className="cs-sec-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            <span>SECURITATE DE NIVEL MILITAR</span>
          </div>
          <p className="cs-sec-desc">
            Datele tale sunt protejate cu criptare AES-256 și autentificare biometrică avansată. Fiecare acces este monitorizat și validat în timp real.
          </p>
          <p className="cs-sec-badges">
            🔒 Conexiune securizată • Certificat SSL/TLS • Conformitate GDPR
          </p>
        </div>
      </div>

      <style jsx>{`
        .cs-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--color-surface);
          border-radius: inherit;
        }

        .cs-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.5) 30%,
            rgba(255, 255, 255, 0) 50%
          );
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.5) 30%,
            rgba(255, 255, 255, 0) 50%
          );
          z-index: 20;
          pointer-events: none;
        }

        .cs-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            /* Tint image to primary indigo approx #213170 */
            filter: sepia(100%) hue-rotate(190deg) saturate(500%) brightness(0.4) contrast(1.2);
        }

        .cs-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 21;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 64px 0 0 250px;
        }

        .cs-logo-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .cs-logo-text {
          font-family: var(--font-brand);
          font-size: 24px;
          text-transform: uppercase;
          color: var(--color-primary);
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .cs-logo-line {
          flex: 1;
          height: 1px;
          background: var(--color-primary);
        }

        .cs-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 21;
          padding: 0 32px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cs-sec-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-primary);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .cs-sec-desc {
          color: var(--color-primary);
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          margin: 0;
          opacity: 0.9;
        }

        .cs-sec-badges {
          color: var(--color-primary);
          font-size: 14px;
          font-weight: 400;
          margin: 0;
          opacity: 0.8;
        }

        .cs-scanning-label {
          position: absolute;
          top: calc(50% + 153px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 21;
          font-size: 14px;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          font-family: 'Courier New', monospace;
          color: var(--color-text-muted);
          animation: cs-pulse-glow 2s ease-in-out infinite;
          white-space: nowrap;
        }
          animation: cs-pulse-glow 2s ease-in-out infinite;
          white-space: nowrap;
        }

        .cs-scanning-link {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 600;
        }

        .cs-scanning-link:hover {
          color: var(--color-primary-hover);
        }

        .cs-dots {
          display: inline;
        }

        .cs-dot {
          opacity: 0;
          animation: cs-dot-appear 1.5s ease-in-out infinite;
        }

        .cs-dot-1 { animation-delay: 0s; }
        .cs-dot-2 { animation-delay: 0.3s; }
        .cs-dot-3 { animation-delay: 0.6s; }

        @keyframes cs-dot-appear {
          0%, 20% { opacity: 0; }
          30%, 70% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }

        @keyframes cs-pulse-glow {
          0%, 100% { opacity: 0.5; text-shadow: 0 0 4px rgba(33,49,112,0.1); }
          50% { opacity: 1; text-shadow: 0 0 12px rgba(33,49,112,0.2); }
        }

        .cs-card-stream {
          position: absolute;
          width: 100%;
          height: 150px;
          display: flex;
          align-items: center;
          overflow: visible;
        }

        .cs-card-line {
          display: flex;
          align-items: center;
          gap: 60px;
          white-space: nowrap;
          cursor: grab;
          user-select: none;
          will-change: transform;
        }
        .cs-card-line:active { cursor: grabbing; }

        .cs-particle-canvas {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          height: 250px;
          z-index: 0;
          pointer-events: none;
        }

        .cs-scanner-canvas {
          position: absolute;
          top: 50%;
          left: -3px;
          transform: translateY(-50%);
          width: 100%;
          height: 300px;
          z-index: 15;
          pointer-events: none;
        }
      `}</style>

      {/* card / ascii styles — global so they apply to dynamically-created DOM */}
      <style jsx global>{`
        .cs-card-wrapper {
          position: relative;
          width: 240px;
          height: 150px;
          flex-shrink: 0;
        }

        .cs-card {
          position: absolute;
          top: 0; left: 0;
          width: 240px;
          height: 150px;
          border-radius: 10px;
          overflow: hidden;
        }

        .cs-card-normal {
          background: transparent;
          box-shadow: none;
          z-index: 2;
          clip-path: inset(0 0 0 var(--clip-right, 0%));
        }

        .cs-card-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 0;
          filter: sepia(100%) hue-rotate(190deg) saturate(500%) brightness(0.4) contrast(1.2);
          transition: filter 0.3s ease;
        }
        .cs-card-image:hover {
          filter: brightness(1.2) contrast(1.2);
        }

        .cs-card-ascii {
          background: transparent;
          z-index: 1;
          clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0);
        }

        .cs-ascii-content {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          color: rgba(200,180,255,1);
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 13px;
          overflow: hidden;
          white-space: pre;
          margin: 0; padding: 0;
          animation: cs-glitch 0.1s infinite linear alternate-reverse;
          -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 70%);
          mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 70%);
        }

        @keyframes cs-glitch {
          0%   { opacity: 1; }
          15%  { opacity: 0.9; }
          16%  { opacity: 1; }
          49%  { opacity: 0.8; }
          50%  { opacity: 1; }
          99%  { opacity: 0.9; }
          100% { opacity: 1; }
        }

        .cs-scan-effect {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.4), transparent);
          animation: cs-scanFx 0.6s ease-out;
          pointer-events: none;
          z-index: 5;
        }

        @keyframes cs-scanFx {
          0%   { transform: translateX(-100%); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </>
  );
}
