import { store } from '../state.js';

export function renderCheckoutModal() {
  if (store.state.activeModal !== 'checkout') return '';

  const t = store.t;
  const cart = store.state.cart;
  const subtotalUSD = store.cartSubtotalUSD;
  const subtotalUZS = store.cartSubtotalUZS;
  const isFreeDelivery = subtotalUSD >= 100;
  const deliveryUSD = isFreeDelivery ? 0 : 10;
  const totalUSD = subtotalUSD + deliveryUSD;
  const formattedTotalUZS = new Intl.NumberFormat('uz-UZ').format(subtotalUZS + (isFreeDelivery ? 0 : 125000));

  // If order was successfully completed:
  if (store.state.orderSuccess) {
    const ord = store.state.orderSuccess;
    return `
      <div class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" id="checkout-modal">
        <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>
        <div class="min-h-full flex items-center justify-center p-4">
          <div class="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-neutral-100 p-8 sm:p-10 text-center space-y-6">
            
            <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
            </div>

            <div class="space-y-2">
              <h2 class="text-2xl font-black text-neutral-900">${t.checkout.successTitle}</h2>
              <p class="text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed">${t.checkout.successDesc}</p>
            </div>

            <!-- Receipt Box -->
            <div class="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-left space-y-3 text-xs">
              <div class="flex items-center justify-between border-b border-neutral-200 pb-2">
                <span class="text-neutral-500">${t.checkout.orderNumber}:</span>
                <span class="font-extrabold text-neutral-900">${ord.orderId}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-neutral-500">${t.checkout.fullName}:</span>
                <span class="font-bold text-neutral-900">${ord.name}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-neutral-500">${t.checkout.phone}:</span>
                <span class="font-bold text-neutral-900">${ord.phone}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-neutral-500">${t.checkout.city}:</span>
                <span class="font-bold text-neutral-900">${ord.city}</span>
              </div>
              <div class="flex items-center justify-between border-t border-neutral-200 pt-2 text-sm">
                <span class="font-bold text-neutral-900">${t.cart.total}:</span>
                <span class="font-black text-neutral-900">$${ord.totalUSD}</span>
              </div>
            </div>

            <button 
              type="button" 
              id="checkout-finish-btn" 
              class="pill-button-black w-full py-3.5 text-xs"
            >
              ${t.checkout.continueShopping}
            </button>

          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" id="checkout-modal">
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>
      
      <div class="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div class="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden p-6 sm:p-10 my-8">
          
          <!-- Close Button -->
          <button 
            type="button" 
            data-close-modal 
            class="absolute top-6 right-6 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black hover:border-black"
          >
            ✕
          </button>

          <div class="mb-6 space-y-1">
            <h2 class="text-2xl font-black text-neutral-900 uppercase tracking-tight">${t.checkout.title}</h2>
            <p class="text-xs text-neutral-500">Toshkent va butun O'zbekiston bo'ylab rasmiy yetkazib berish</p>
          </div>

          <form id="checkout-form" class="space-y-6">
            
            <!-- Recipient Information -->
            <div class="space-y-3">
              <h3 class="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-1.5">
                ${t.checkout.step1}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-neutral-700 mb-1">${t.checkout.fullName} *</label>
                  <input 
                    type="text" 
                    id="checkout-name" 
                    required 
                    placeholder="${t.checkout.fullNamePlaceholder}"
                    class="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-neutral-700 mb-1">${t.checkout.phone} *</label>
                  <input 
                    type="tel" 
                    id="checkout-phone" 
                    required 
                    placeholder="${t.checkout.phonePlaceholder}"
                    value="+998 "
                    class="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-black transition-colors font-mono"
                  />
                </div>
              </div>
            </div>

            <!-- Delivery Address -->
            <div class="space-y-3">
              <h3 class="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-1.5">
                ${t.checkout.step2}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-neutral-700 mb-1">${t.checkout.city} *</label>
                  <select 
                    id="checkout-city" 
                    required
                    class="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-black bg-white transition-colors"
                  >
                    <option value="Toshkent">${t.checkout.cityTashkent}</option>
                    <option value="Samarqand">${t.checkout.citySamarkand}</option>
                    <option value="Buxoro">${t.checkout.cityBukhara}</option>
                    <option value="Farg'ona">${t.checkout.cityFergana}</option>
                    <option value="Andijon">${t.checkout.cityAndijan}</option>
                    <option value="Namangan">${t.checkout.cityNamangan}</option>
                    <option value="Boshqa viloyat">${t.checkout.cityOther}</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-neutral-700 mb-1">${t.checkout.address} *</label>
                  <input 
                    type="text" 
                    id="checkout-address" 
                    required 
                    placeholder="${t.checkout.addressPlaceholder}"
                    class="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-neutral-700 mb-1">${t.checkout.notes}</label>
                <input 
                  type="text" 
                  id="checkout-notes" 
                  placeholder="Masalan: Kod domofon, 2-etaj"
                  class="w-full px-4 py-2 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <!-- Payment Method -->
            <div class="space-y-3">
              <h3 class="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-1.5">
                ${t.checkout.step3}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 cursor-pointer hover:border-black transition-all">
                  <input type="radio" name="paymentMethod" value="click" checked class="accent-black" />
                  <span class="text-xs font-bold text-neutral-800">${t.checkout.payClick}</span>
                </label>
                <label class="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 cursor-pointer hover:border-black transition-all">
                  <input type="radio" name="paymentMethod" value="cash" class="accent-black" />
                  <span class="text-xs font-bold text-neutral-800">${t.checkout.payCash}</span>
                </label>
              </div>
            </div>

            <!-- Order Total Preview & Submit -->
            <div class="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span class="text-xs text-neutral-500">${t.checkout.orderSummary} (${cart.length} krossovka):</span>
                <div class="text-xl font-black text-neutral-900">$${totalUSD} <span class="text-xs font-semibold text-neutral-400">/ ${formattedTotalUZS} ${t.card.currencyUzs}</span></div>
              </div>

              <button 
                type="submit" 
                id="submit-order-btn"
                class="pill-button-black py-3.5 px-8 text-xs font-bold tracking-wider"
              >
                ${t.checkout.orderBtn} ↗
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  `;
}
