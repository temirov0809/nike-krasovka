import { store } from '../state.js';

export function renderProductModal() {
  if (store.state.activeModal !== 'product' || !store.state.selectedProduct) {
    return '';
  }

  const t = store.t;
  const product = store.state.selectedProduct;
  const currentLang = store.state.lang;
  const selectedSize = store.state.selectedSize || product.sizes[0];
  const selectedColor = store.state.selectedColor || product.colors[0];
  const isFav = store.isFavorite(product.id);

  const formattedUZS = new Intl.NumberFormat('uz-UZ').format(product.priceUZS);
  const badgeText = product.badge[currentLang] || product.badge.uz;
  const descText = product.description[currentLang] || product.description.uz;
  const features = product.features[currentLang] || product.features.uz;
  const specs = product.specs;

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" id="product-detail-modal">
      
      <!-- Backdrop -->
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>

      <!-- Center Modal Container -->
      <div class="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        <div class="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden transform transition-all my-8 animate-modal-enter">
          
          <!-- Close Button -->
          <button 
            type="button" 
            data-close-modal
            class="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black hover:border-black transition-all"
            aria-label="Close"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- 2-Column Split: Gallery Left, Details Right -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            <!-- Left: Product Media Gallery Stage -->
            <div class="lg:col-span-7 bg-[#F6F6F8] p-8 sm:p-12 flex flex-col items-center justify-center relative min-h-[350px] lg:min-h-[500px]">
              
              <!-- Badge -->
              <div class="absolute top-6 left-6 z-10">
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-white/95 border border-neutral-200 text-xs font-extrabold uppercase tracking-wider text-neutral-800 shadow-sm">
                  ${badgeText}
                </span>
              </div>

              <!-- Main Large Image View -->
              <div class="w-full max-w-md flex items-center justify-center py-6">
                <img 
                  id="modal-main-image"
                  src="${product.image}" 
                  alt="${product.name}" 
                  class="w-full max-h-[340px] object-contain drop-shadow-2xl transition-all duration-300"
                />
              </div>

              <!-- Thumbnail Gallery Selector -->
              <div class="mt-4 flex items-center gap-3">
                ${product.gallery.map((img, idx) => `
                  <button 
                    type="button" 
                    data-gallery-thumb="${img}"
                    class="w-14 h-14 rounded-xl border-2 overflow-hidden bg-white p-1 transition-all ${
                      idx === 0 ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'
                    }"
                  >
                    <img src="${img}" alt="Thumbnail" class="w-full h-full object-contain" />
                  </button>
                `).join('')}
              </div>

            </div>

            <!-- Right: Product Information & Purchase Controls -->
            <div class="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[85vh]">
              
              <!-- Title, Price & SKU -->
              <div class="space-y-2">
                <div class="flex items-center justify-between text-xs text-neutral-400 font-bold uppercase tracking-wider">
                  <span>${product.series}</span>
                  <span>SKU: ${product.sku}</span>
                </div>

                <h1 class="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight leading-tight">
                  ${product.name}
                </h1>

                <div class="flex items-baseline gap-3 pt-1">
                  <span class="text-2xl font-black text-neutral-900">$${product.priceUSD}</span>
                  <span class="text-sm font-semibold text-neutral-400">${formattedUZS} ${t.card.currencyUzs}</span>
                </div>
              </div>

              <!-- Colorway Selector -->
              <div class="space-y-2.5">
                <label class="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  ${t.productDetail.colorLabel}: <span class="text-neutral-500 font-normal">${selectedColor.name[currentLang] || selectedColor.name.uz}</span>
                </label>
                <div class="flex items-center gap-2">
                  ${product.colors.map(col => `
                    <button 
                      type="button" 
                      data-select-color="${col.id}"
                      class="w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                        selectedColor.id === col.id ? 'border-black scale-110' : 'border-transparent hover:scale-105'
                      }"
                      title="${col.name[currentLang] || col.name.uz}"
                    >
                      <span class="block w-full h-full rounded-full border border-neutral-300" style="background-color: ${col.hex};"></span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Size Selection Grid -->
              <div class="space-y-2.5">
                <div class="flex items-center justify-between text-xs">
                  <label class="font-bold text-neutral-800 uppercase tracking-wider">
                    ${t.productDetail.selectSize}
                  </label>
                  <span class="text-neutral-400 hover:text-black cursor-pointer underline">
                    ${t.productDetail.sizeGuide}
                  </span>
                </div>

                <div class="grid grid-cols-4 gap-2">
                  ${product.sizes.map(sz => `
                    <button 
                      type="button" 
                      data-select-size="${sz}"
                      class="py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedSize === sz 
                          ? 'bg-black text-white border-black shadow-sm' 
                          : 'bg-white text-neutral-800 border-neutral-200 hover:border-black'
                      }"
                    >
                      EU ${sz}
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Quantity Selector & Action Buttons -->
              <div class="space-y-3 pt-2">
                <div class="flex items-center gap-3">
                  <button 
                    type="button" 
                    id="modal-add-to-bag"
                    class="pill-button-black flex-1 py-3 text-xs"
                  >
                    <span>${t.productDetail.addToBag}</span>
                    <span>• $${product.priceUSD}</span>
                  </button>

                  <button 
                    type="button" 
                    data-fav-toggle="${product.id}"
                    class="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center transition-all hover:border-black ${
                      isFav ? 'text-red-500 fill-red-500' : 'text-neutral-600 hover:text-black'
                    }"
                    title="${t.nav.wishlist}"
                  >
                    <svg class="w-5 h-5" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </button>
                </div>

                <button 
                  type="button" 
                  id="modal-buy-now"
                  class="pill-button-outline w-full py-3 text-xs"
                >
                  ${t.productDetail.buyNow}
                </button>
              </div>

              <!-- Expandable Accordion Sections -->
              <div class="border-t border-neutral-100 pt-4 space-y-3 text-xs">
                
                <details class="group" open>
                  <summary class="flex items-center justify-between font-bold text-neutral-900 cursor-pointer list-none py-1">
                    <span>${t.productDetail.tabs.description}</span>
                    <span class="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div class="text-neutral-500 pt-2 leading-relaxed space-y-2">
                    <p>${descText}</p>
                    <ul class="list-disc pl-4 space-y-1">
                      ${features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                  </div>
                </details>

                <details class="group border-t border-neutral-100 pt-3">
                  <summary class="flex items-center justify-between font-bold text-neutral-900 cursor-pointer list-none py-1">
                    <span>${t.productDetail.tabs.delivery}</span>
                    <span class="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div class="text-neutral-500 pt-2 leading-relaxed space-y-1">
                    <p>${t.productDetail.deliveryInfo}</p>
                    <p class="text-neutral-800 font-semibold pt-1">${t.productDetail.returnInfo}</p>
                  </div>
                </details>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  `;
}
