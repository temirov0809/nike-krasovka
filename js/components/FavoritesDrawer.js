import { store } from '../state.js';
import { products } from '../data/products.js';

export function renderFavoritesDrawer() {
  if (store.state.activeModal !== 'favorites') return '';

  const t = store.t;
  const favIds = store.state.favorites;
  const favProducts = products.filter(p => favIds.includes(p.id));

  return `
    <div class="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" id="favorites-drawer">
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>

      <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-100 drawer-panel">
          
          <!-- Header -->
          <div class="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <h2 class="text-lg font-black text-neutral-900 uppercase tracking-tight">${t.favorites.title}</h2>
              <span class="w-5 h-5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold flex items-center justify-center">
                ${favProducts.length}
              </span>
            </div>

            <button 
              type="button" 
              data-close-modal 
              class="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black hover:border-black"
            >
              ✕
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 flex-1 overflow-y-auto divide-y divide-neutral-100">
            ${favProducts.length === 0 ? `
              <div class="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div class="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-neutral-900">${t.favorites.emptyTitle}</h3>
                <p class="text-xs text-neutral-500 max-w-xs leading-relaxed">${t.favorites.emptyDesc}</p>
                <button 
                  type="button" 
                  data-close-modal 
                  class="pill-button-black text-xs py-2.5 px-6"
                >
                  ${t.cart.exploreBtn}
                </button>
              </div>
            ` : favProducts.map(p => `
              <div class="py-4 flex gap-4 items-center">
                <div class="w-16 h-16 rounded-xl bg-neutral-100 p-2 flex-shrink-0 flex items-center justify-center cursor-pointer" data-open-product="${p.id}">
                  <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain" />
                </div>

                <div class="flex-1 min-w-0 space-y-1">
                  <h4 class="text-xs font-bold text-neutral-900 truncate cursor-pointer hover:underline" data-open-product="${p.id}">${p.name}</h4>
                  <div class="text-xs font-extrabold text-neutral-900">$${p.priceUSD}</div>
                  <div class="flex items-center gap-2 pt-1">
                    <button 
                      type="button" 
                      data-quick-add="${p.id}"
                      class="text-[11px] font-bold text-black underline hover:no-underline"
                    >
                      + ${t.card.addToCart}
                    </button>
                    <span class="text-neutral-300">•</span>
                    <button 
                      type="button" 
                      data-fav-toggle="${p.id}"
                      class="text-[11px] font-semibold text-neutral-400 hover:text-red-500"
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </div>
    </div>
  `;
}

export function renderMobileMenu() {
  if (store.state.activeModal !== 'mobileNav') return '';

  const t = store.t;
  const currentLang = store.state.lang;

  return `
    <div class="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" id="mobile-nav-drawer">
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>

      <div class="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div class="w-screen max-w-xs bg-white shadow-2xl flex flex-col justify-between border-r border-neutral-100 p-6">
          
          <div class="space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-neutral-100">
              <svg class="w-12 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.707 5.293c-2.457 1.83-5.26 3.518-8.414 5.065-2.827 1.385-5.69 2.56-8.593 3.525C2.868 14.49 1.5 15.02 0 15.485c2.435-.29 4.887-.91 7.355-1.86 3.238-1.246 6.305-2.87 9.2-4.872 2.21-1.53 4.093-3.237 5.152-3.46z"/>
              </svg>
              <button type="button" data-close-modal class="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500">✕</button>
            </div>

            <!-- Mobile Navigation Links -->
            <nav class="space-y-4 text-sm font-bold uppercase tracking-wider text-neutral-800">
              <a href="#catalog" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.catalog}</a>
              <a href="#catalog" data-nav-category="lifestyle" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.editions}</a>
              <a href="#catalog" data-nav-category="running" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.performance}</a>
              <a href="#story" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.heritage}</a>
              <a href="#footer" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.about}</a>
            </nav>
          </div>

          <!-- Bottom: Language Selector -->
          <div class="pt-6 border-t border-neutral-100 space-y-4">
            <div class="text-xs font-bold text-neutral-400 uppercase tracking-wider">Til / Язык:</div>
            <div class="flex items-center gap-2">
              <button 
                type="button" 
                data-lang="uz" 
                class="flex-1 py-2 text-xs font-bold rounded-xl border ${currentLang === 'uz' ? 'bg-black text-white border-black' : 'border-neutral-200'}"
              >
                O'zbek
              </button>
              <button 
                type="button" 
                data-lang="ru" 
                class="flex-1 py-2 text-xs font-bold rounded-xl border ${currentLang === 'ru' ? 'bg-black text-white border-black' : 'border-neutral-200'}"
              >
                Русский
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}
