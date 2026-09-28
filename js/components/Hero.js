import { store } from '../state.js';
import { HERO_CONFIG, products } from '../data/products.js';

export function renderHero() {
  const t = store.t;
  const featured = products.find(p => p.id === HERO_CONFIG.featuredProductId) || products[0];

  return `
    <section id="hero" class="relative bg-white pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-neutral-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- =====================================================================
             GIANT DUAL-STYLE EDITORIAL HEADLINE (REFERENCE 1: OUTLINE + SOLID)
             "AIR" (Outline text-stroke) + "AURA" (Solid deep black)
             ===================================================================== -->
        <div class="w-full text-center select-none pt-2 pb-6 md:pb-8">
          <h1 class="text-6xl sm:text-8xl md:text-[130px] lg:text-[160px] font-black uppercase tracking-tight leading-[0.85] font-editorial flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            <span class="text-outline-hero">${t.hero.outlineWord}</span>
            <span class="text-solid-hero">${t.hero.solidWord}</span>
          </h1>
        </div>

        <!-- =====================================================================
             CENTRAL PRODUCT SHOWCASE STAGE (PREPARED FOR USER'S SNEAKER IMAGE)
             Isolated container with smooth ambient shadow and floating micro-motion
             ===================================================================== -->
        <div class="relative w-full max-w-4xl mx-auto my-2 md:my-6 flex items-center justify-center min-h-[300px] sm:min-h-[420px] md:min-h-[480px]">
          
          <!-- Subtle Radial Ambient Lighting behind product -->
          <div class="absolute inset-0 bg-gradient-to-b from-neutral-100/50 via-neutral-50/20 to-transparent rounded-full filter blur-3xl -z-10 transform scale-90"></div>

          <!-- Pulsing Floor Shadow -->
          <div class="absolute bottom-6 sm:bottom-10 w-2/3 h-10 bg-black/15 rounded-full filter blur-xl hero-shadow-pulse -z-10"></div>

          <!-- The Hero Sneaker Presentation (Image replacement target) -->
          <div 
            class="relative z-10 hero-sneaker-float cursor-pointer group"
            data-hero-product-id="${featured.id}"
            title="${featured.name} — Click to view details"
          >
            <!-- 
              HERO SNEAKER ASSET:
              Configured via HERO_CONFIG.heroImage in 'js/data/products.js'.
              Replace this path whenever you have your actual Nike shoe photograph!
            -->
            <img 
              id="hero-sneaker-img"
              src="${HERO_CONFIG.heroImage}" 
              alt="${featured.name}" 
              class="w-full max-w-md sm:max-w-xl md:max-w-2xl object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
            />

            <!-- Subtle Interactive Tag Indicator -->
            <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span class="pill-badge bg-black text-white text-[11px] py-1 px-3 border-black">
                ${t.card.quickView} ↗
              </span>
            </div>
          </div>
        </div>

        <!-- =====================================================================
             LOWER SECTION: ASYMMETRIC 2-COLUMN COMPOSITION (REFERENCE 1 LAYOUT)
             Left: Title + Editorial Copy + Pill CTA
             Right: Vertical Stack of Spec Pill Badges
             ===================================================================== -->
        <div class="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          
          <!-- Lower Left: Editorial Statement & Primary Action -->
          <div class="md:col-span-6 lg:col-span-5 space-y-4">
            <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <span class="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span>${t.hero.subtitle}</span>
            </div>

            <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              ${featured.name}
            </h2>

            <p class="text-sm text-neutral-500 font-normal leading-relaxed max-w-md">
              ${t.hero.desc}
            </p>

            <div class="pt-2 flex items-center gap-3 flex-wrap">
              <a href="#catalog" class="pill-button-black">
                <span>${t.hero.ctaPrimary}</span>
                <span class="text-sm">↗</span>
              </a>

              <button 
                type="button" 
                data-open-product="${featured.id}" 
                class="pill-button-outline"
              >
                <span>${t.hero.ctaSecondary}</span>
              </button>
            </div>
          </div>

          <!-- Spacer for asymmetric balance -->
          <div class="hidden md:block md:col-span-1 lg:col-span-2"></div>

          <!-- Lower Right: Vertical Stack of Pills (Matching Dribbble/Instagram stack in Reference 1) -->
          <div class="md:col-span-5 lg:col-span-5 flex flex-col items-start md:items-end gap-2.5">
            
            <div class="pill-badge hover:bg-neutral-50 cursor-default">
              <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>${t.hero.specs.airSole}</span>
            </div>

            <div class="pill-badge hover:bg-neutral-50 cursor-default">
              <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span>${t.hero.specs.leather}</span>
            </div>

            <div class="pill-badge hover:bg-neutral-50 cursor-default">
              <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>${t.hero.specs.delivery}</span>
            </div>

            <div class="pill-badge hover:bg-neutral-50 cursor-default">
              <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>${t.hero.specs.authentic}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
