import { store } from '../state.js';

export function renderProductCard(product) {
  const t = store.t;
  const isFav = store.isFavorite(product.id);
  const badgeText = product.badge[store.state.lang] || product.badge.uz;
  const tags = product.tags[store.state.lang] || product.tags.uz;
  const tagLine = product.tagLine[store.state.lang] || product.tagLine.uz;

  // Format currency
  const formattedUZS = new Intl.NumberFormat('uz-UZ').format(product.priceUZS);

  return `
    <article 
      class="editorial-card group" 
      data-product-id="${product.id}"
    >
      <!-- Media Stage with subtle rounded container -->
      <div class="card-media-wrapper cursor-pointer" data-open-product="${product.id}">
        
        <!-- Top Left: Clean Editorial Badge (Matching Reference 3 "EXPLORATION" / "REAL PROJECT") -->
        <div class="absolute top-3.5 left-3.5 z-10">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-neutral-200/70 text-[10px] font-extrabold uppercase tracking-wider text-neutral-800 shadow-xs">
            ${badgeText}
          </span>
        </div>

        <!-- Top Right: Wishlist / Favorite Heart Toggle -->
        <button 
          type="button" 
          data-fav-toggle="${product.id}"
          class="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm border border-neutral-200/70 flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${
            isFav ? 'text-red-500 fill-red-500' : 'text-neutral-500 hover:text-black'
          }"
          aria-label="${t.nav.wishlist}"
          title="${t.nav.wishlist}"
        >
          <svg class="w-4 h-4" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>

        <!-- Product Sneaker Artwork -->
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-full object-contain pointer-events-none"
          loading="lazy"
        />

        <!-- Hover Overlay: Quick View Pill -->
        <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span class="pill-badge bg-black text-white text-xs py-1.5 px-3.5 border-black shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            ${t.card.quickView} ↗
          </span>
        </div>
      </div>

      <!-- Card Information Section (Matching Reference 3 typography & spacing) -->
      <div class="mt-4 flex flex-col flex-1 justify-between space-y-3">
        
        <div>
          <!-- Title & Dual Price Row -->
          <div class="flex items-start justify-between gap-2">
            <h3 
              class="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-black cursor-pointer leading-snug"
              data-open-product="${product.id}"
            >
              ${product.name}
            </h3>

            <div class="text-right whitespace-nowrap">
              <span class="text-base font-extrabold text-neutral-900">$${product.priceUSD}</span>
              <span class="block text-[11px] font-medium text-neutral-400">${formattedUZS} ${t.card.currencyUzs}</span>
            </div>
          </div>

          <!-- Subtitle / Tagline -->
          <p class="text-xs text-neutral-500 font-normal mt-0.5 line-clamp-1">
            ${tagLine}
          </p>
        </div>

        <!-- Bottom Row: Pill Chips (Matching Reference 3 [Landing Page] [Kumpin Studio]) & Add Button -->
        <div class="pt-2 border-t border-neutral-100 flex items-center justify-between gap-2 flex-wrap">
          
          <!-- Metadata Pill Chips -->
          <div class="flex items-center gap-1.5 flex-wrap">
            ${tags.slice(0, 2).map(tag => `
              <span class="pill-tag text-[11px] py-1 px-2.5">
                ${tag}
              </span>
            `).join('')}
            <span class="pill-tag text-[11px] py-1 px-2 text-neutral-400">
              EU ${product.sizes[0]}–${product.sizes[product.sizes.length - 1]}
            </span>
          </div>

          <!-- Quick Add to Cart Pill Button -->
          <button 
            type="button" 
            data-quick-add="${product.id}"
            class="text-xs font-bold text-neutral-900 hover:text-black inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-200 hover:border-black transition-all hover:bg-neutral-50 active:scale-95"
            title="${t.card.addToCart}"
          >
            <span>+</span>
            <span>${t.card.addToCart}</span>
          </button>

        </div>

      </div>
    </article>
  `;
}
