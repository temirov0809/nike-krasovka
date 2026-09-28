import { store } from '../state.js';

export function renderCartDrawer() {
  if (store.state.activeModal !== 'cart') return '';

  const t = store.t;
  const cart = store.state.cart;
  const currentLang = store.state.lang;
  const subtotalUSD = store.cartSubtotalUSD;
  const subtotalUZS = store.cartSubtotalUZS;
  const isFreeDelivery = subtotalUSD >= 100;
  const deliveryUSD = cart.length === 0 || isFreeDelivery ? 0 : 10;
  const deliveryUZS = cart.length === 0 || isFreeDelivery ? 0 : 125000;
  const totalUSD = subtotalUSD + deliveryUSD;
  const totalUZS = subtotalUZS + deliveryUZS;

  const formattedSubtotalUZS = new Intl.NumberFormat('uz-UZ').format(subtotalUZS);
  const formattedTotalUZS = new Intl.NumberFormat('uz-UZ').format(totalUZS);

  return `
    <div class="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" id="cart-drawer">
      
      <!-- Backdrop -->
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>

      <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
        
        <div class="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-100 drawer-panel">
          
          <!-- Header -->
          <div class="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <h2 class="text-lg font-black text-neutral-900 uppercase tracking-tight">${t.cart.title}</h2>
              <span class="w-5 h-5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold flex items-center justify-center">
                ${store.cartCount}
              </span>
            </div>

            <button 
              type="button" 
              data-close-modal 
              class="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black hover:border-black"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <!-- Body Items List -->
          <div class="p-6 flex-1 overflow-y-auto divide-y divide-neutral-100">
            ${cart.length === 0 ? `
              <div class="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div class="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-neutral-900">${t.cart.emptyTitle}</h3>
                <p class="text-xs text-neutral-500 max-w-xs leading-relaxed">${t.cart.emptyDesc}</p>
                <button 
                  type="button" 
                  data-close-modal 
                  class="pill-button-black text-xs py-2.5 px-6"
                >
                  ${t.cart.exploreBtn}
                </button>
              </div>
            ` : cart.map((item, idx) => `
              <div class="py-4 flex gap-4 items-center">
                <!-- Thumbnail -->
                <div class="w-20 h-20 rounded-xl bg-neutral-100 p-2 flex-shrink-0 flex items-center justify-center">
                  <img src="${item.product.image}" alt="${item.product.name}" class="w-full h-full object-contain" />
                </div>

                <!-- Info -->
                <div class="flex-1 min-w-0 space-y-1">
                  <div class="flex items-start justify-between gap-2">
                    <h4 class="text-xs font-bold text-neutral-900 truncate">${item.product.name}</h4>
                    <button 
                      type="button" 
                      data-remove-cart="${idx}"
                      class="text-neutral-400 hover:text-red-500 transition-colors text-xs font-semibold"
                      title="O'chirish"
                    >
                      ✕
                    </button>
                  </div>

                  <div class="text-[11px] text-neutral-500 flex items-center gap-2">
                    <span>${t.cart.sizeLabel}: <strong>EU ${item.size}</strong></span>
                    ${item.color ? `<span>• ${item.color.name[currentLang] || item.color.name.uz}</span>` : ''}
                  </div>

                  <div class="flex items-center justify-between pt-1">
                    <!-- Quantity Stepper -->
                    <div class="inline-flex items-center rounded-full border border-neutral-200 text-xs font-bold">
                      <button type="button" data-cart-delta="${idx}" data-delta="-1" class="px-2 py-0.5 hover:bg-neutral-100 rounded-l-full">-</button>
                      <span class="px-2">${item.quantity}</span>
                      <button type="button" data-cart-delta="${idx}" data-delta="1" class="px-2 py-0.5 hover:bg-neutral-100 rounded-r-full">+</button>
                    </div>

                    <div class="text-right">
                      <div class="text-xs font-extrabold text-neutral-900">$${item.product.priceUSD * item.quantity}</div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Footer / Totals & Checkout -->
          ${cart.length > 0 ? `
            <div class="p-6 border-t border-neutral-100 bg-[#FBFBFC] space-y-3">
              <div class="flex items-center justify-between text-xs text-neutral-500">
                <span>${t.cart.subtotal}</span>
                <span class="font-bold text-neutral-900">$${subtotalUSD}</span>
              </div>

              <div class="flex items-center justify-between text-xs text-neutral-500">
                <span>${t.cart.shipping}</span>
                <span class="font-bold text-emerald-600">${isFreeDelivery ? t.cart.freeShipping : '$10'}</span>
              </div>

              <div class="pt-2 border-t border-neutral-200 flex items-baseline justify-between">
                <div>
                  <span class="text-sm font-black text-neutral-900 uppercase tracking-tight">${t.cart.total}</span>
                  <span class="block text-[11px] text-neutral-400 font-semibold">${formattedTotalUZS} ${t.card.currencyUzs}</span>
                </div>
                <span class="text-xl font-black text-neutral-900">$${totalUSD}</span>
              </div>

              <button 
                type="button" 
                id="cart-checkout-btn"
                class="pill-button-black w-full py-3.5 text-xs tracking-wider"
              >
                <span>${t.cart.checkoutBtn}</span>
                <span>↗</span>
              </button>
            </div>
          ` : ''}

        </div>

      </div>

    </div>
  `;
}
