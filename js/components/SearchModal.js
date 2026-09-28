import { store } from '../state.js';
import { products } from '../data/products.js';

export function renderSearchModal() {
  if (store.state.activeModal !== 'search') return '';

  const t = store.t;
  const query = store.state.searchQuery;
  const filtered = query.trim() ? store.getFilteredProducts() : [];

  const popularSearches = ["Air Force", "Dunk", "Jordan", "Vomero", "Cortez", "Pegasus"];

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" id="search-modal">
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>
      
      <div class="min-h-full flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
        <div class="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden p-6 sm:p-8 space-y-6">
          
          <!-- Search Input Row -->
          <div class="relative flex items-center border-b-2 border-black pb-3">
            <svg class="w-6 h-6 text-neutral-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke-width="2"/>
              <path d="m21 21-4.3-4.3" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input 
              type="text" 
              id="search-input-field" 
              placeholder="${t.search.placeholder}"
              value="${query}"
              class="w-full text-base sm:text-lg font-bold text-neutral-900 focus:outline-none placeholder-neutral-400"
              autofocus
            />
            <button 
              type="button" 
              data-close-modal 
              class="ml-3 text-xs font-bold text-neutral-400 hover:text-black"
            >
              ESC
            </button>
          </div>

          <!-- Popular Searches Pills -->
          <div class="space-y-2">
            <div class="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              ${t.search.popular}:
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              ${popularSearches.map(term => `
                <button 
                  type="button" 
                  data-search-chip="${term}"
                  class="pill-tag hover:bg-black hover:text-white transition-colors"
                >
                  ${term}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Live Results -->
          ${query.trim() ? `
            <div class="space-y-3 pt-2">
              <div class="text-xs font-bold text-neutral-900">
                ${filtered.length} ta natija:
              </div>

              ${filtered.length === 0 ? `
                <p class="text-xs text-neutral-400 py-4 text-center">${t.search.noResults}</p>
              ` : `
                <div class="divide-y divide-neutral-100 max-h-72 overflow-y-auto">
                  ${filtered.map(p => `
                    <div 
                      class="py-3 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50 px-3 rounded-xl transition-colors"
                      data-open-product="${p.id}"
                    >
                      <div class="flex items-center gap-3">
                        <img src="${p.image}" alt="${p.name}" class="w-12 h-12 object-contain bg-neutral-100 rounded-lg p-1" />
                        <div>
                          <h4 class="text-xs font-bold text-neutral-900">${p.name}</h4>
                          <span class="text-[11px] text-neutral-400">${p.series} • ${p.category}</span>
                        </div>
                      </div>
                      <span class="text-xs font-black text-neutral-900">$${p.priceUSD}</span>
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          ` : ''}

        </div>
      </div>
    </div>
  `;
}
