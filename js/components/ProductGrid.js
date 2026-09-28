import { store } from '../state.js';
import { renderProductCard } from './ProductCard.js';

export function renderProductGrid() {
  const t = store.t;
  const filteredProducts = store.getFilteredProducts();

  if (filteredProducts.length === 0) {
    return `
      <section id="catalog" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div class="max-w-md mx-auto space-y-4">
          <div class="w-16 h-16 mx-auto rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke-width="2"/>
              <path d="m21 21-4.3-4.3" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900">${t.search.noResults}</h3>
          <p class="text-sm text-neutral-500">Iltimos, boshqa filtr yoki qidiruv so'zini sinab ko'ring.</p>
          <button 
            type="button" 
            id="empty-reset-btn" 
            class="pill-button-black text-xs py-2 px-6"
          >
            ${t.filters.clearAll}
          </button>
        </div>
      </section>
    `;
  }

  return `
    <section id="catalog" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <!-- 2-Column Editorial Grid matching Reference 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        ${filteredProducts.map(product => renderProductCard(product)).join('')}
      </div>
    </section>
  `;
}
