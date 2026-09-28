import { store } from '../state.js';
import { products } from '../data/products.js';

export function renderNavbar() {
  const t = store.t;
  const currentLang = store.state.lang;
  const cartCount = store.cartCount;
  const favCount = store.state.favorites.length;

  const lifestyleCount = products.filter(p => p.category === 'lifestyle').length;
  const performanceCount = products.filter(p => p.category === 'running').length;
  const heritageCount = products.filter(p => p.category === 'retro').length;

  return `
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        <!-- Left: Status Pill Badge (Matching Reference 1 "Available for New Project") -->
        <div class="flex items-center gap-4">
          <a href="#hero" class="flex items-center gap-2 group focus:outline-none" aria-label="Nike Home">
            <!-- Nike Swoosh SVG -->
            <svg class="w-12 h-6 text-black group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.707 5.293c-2.457 1.83-5.26 3.518-8.414 5.065-2.827 1.385-5.69 2.56-8.593 3.525C2.868 14.49 1.5 15.02 0 15.485c2.435-.29 4.887-.91 7.355-1.86 3.238-1.246 6.305-2.87 9.2-4.872 2.21-1.53 4.093-3.237 5.152-3.46z"/>
            </svg>
          </a>

          <div class="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200/80 bg-white text-xs font-medium text-neutral-800 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>${t.nav.statusBadge}</span>
          </div>
        </div>

        <!-- Center: Editorial Navigation Links with Counts (Matching Reference 1) -->
        <nav class="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-600">
          <a href="#catalog" class="hover:text-black transition-colors flex items-center gap-1 group">
            <span>${t.nav.catalog}</span>
            <span class="text-neutral-400 group-hover:text-black transition-colors font-normal">[${products.length}]</span>
          </a>
          <a href="#catalog" data-nav-category="lifestyle" class="hover:text-black transition-colors flex items-center gap-1 group">
            <span>${t.nav.editions}</span>
            <span class="text-neutral-400 group-hover:text-black transition-colors font-normal">[${lifestyleCount}]</span>
          </a>
          <a href="#catalog" data-nav-category="running" class="hover:text-black transition-colors flex items-center gap-1 group">
            <span>${t.nav.performance}</span>
            <span class="text-neutral-400 group-hover:text-black transition-colors font-normal">[${performanceCount}]</span>
          </a>
          <a href="#story" class="hover:text-black transition-colors flex items-center gap-1 group">
            <span>${t.nav.heritage}</span>
            <span class="text-neutral-400 group-hover:text-black transition-colors font-normal">[${heritageCount}]</span>
          </a>
          <a href="#footer" class="hover:text-black transition-colors">
            ${t.nav.about}
          </a>
        </nav>

        <!-- Right Controls: Language Switch, Search, Wishlist, Cart & Primary Pill Button -->
        <div class="flex items-center gap-2 sm:gap-3">
          
          <!-- Language Switcher Pill (UZ / RU) -->
          <div class="flex items-center p-0.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-bold" role="group" aria-label="Language Selector">
            <button 
              type="button" 
              data-lang="uz" 
              class="px-2.5 py-1 rounded-full transition-all ${currentLang === 'uz' ? 'bg-black text-white shadow-sm' : 'text-neutral-600 hover:text-black'}"
              title="O'zbek tili"
            >
              UZ
            </button>
            <button 
              type="button" 
              data-lang="ru" 
              class="px-2.5 py-1 rounded-full transition-all ${currentLang === 'ru' ? 'bg-black text-white shadow-sm' : 'text-neutral-600 hover:text-black'}"
              title="Русский язык"
            >
              RU
            </button>
          </div>

          <!-- Search Trigger Button -->
          <button 
            type="button" 
            id="nav-search-btn"
            class="w-9 h-9 rounded-full border border-neutral-200/80 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all"
            aria-label="${t.nav.searchShortcut}"
            title="${t.nav.searchShortcut}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke-width="2"/>
              <path d="m21 21-4.3-4.3" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- Favorites / Wishlist Trigger -->
          <button 
            type="button" 
            id="nav-favs-btn"
            class="relative w-9 h-9 rounded-full border border-neutral-200/80 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all"
            aria-label="${t.nav.wishlist}"
            title="${t.nav.wishlist}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            ${favCount > 0 ? `<span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">${favCount}</span>` : ''}
          </button>

          <!-- Cart Trigger -->
          <button 
            type="button" 
            id="nav-cart-btn"
            class="relative w-9 h-9 rounded-full border border-neutral-200/80 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all"
            aria-label="${t.nav.cart}"
            title="${t.nav.cart}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            ${cartCount > 0 ? `<span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center animate-scale">${cartCount}</span>` : ''}
          </button>

          <!-- Primary CTA Button (Matching Reference 1 "Let's Talk ↗") -->
          <a href="#catalog" class="pill-button-black hidden sm:inline-flex text-xs py-2 px-4">
            <span>${t.nav.cta}</span>
            <span class="text-xs">↗</span>
          </a>

          <!-- Mobile Menu Trigger -->
          <button 
            type="button" 
            id="mobile-menu-btn"
            class="lg:hidden w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:border-black"
            aria-label="${t.nav.mobileMenu}"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

        </div>
      </div>
    </header>
  `;
}
