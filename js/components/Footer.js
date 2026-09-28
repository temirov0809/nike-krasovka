import { store } from '../state.js';

export function renderFooter() {
  const t = store.t;
  const currentYear = new Date().getFullYear();

  return `
    <footer id="footer" class="bg-white border-t border-neutral-100 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Top Row: Logo, Manifesto & Language Pill -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div class="lg:col-span-5 space-y-4">
            <div class="flex items-center gap-3">
              <svg class="w-12 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.707 5.293c-2.457 1.83-5.26 3.518-8.414 5.065-2.827 1.385-5.69 2.56-8.593 3.525C2.868 14.49 1.5 15.02 0 15.485c2.435-.29 4.887-.91 7.355-1.86 3.238-1.246 6.305-2.87 9.2-4.872 2.21-1.53 4.093-3.237 5.152-3.46z"/>
              </svg>
              <span class="text-sm font-black tracking-widest uppercase">NIKE UZBEKISTAN</span>
            </div>

            <p class="text-xs text-neutral-500 font-normal leading-relaxed max-w-sm">
              ${t.footer.manifesto}
            </p>
          </div>

          <div class="lg:col-span-3 space-y-3">
            <h4 class="text-xs font-extrabold uppercase tracking-wider text-neutral-900">${t.footer.catalogHeader}</h4>
            <ul class="space-y-2 text-xs text-neutral-500 font-medium">
              <li><a href="#catalog" data-nav-category="all" class="hover:text-black transition-colors">Air Force 1 '07</a></li>
              <li><a href="#catalog" data-nav-category="lifestyle" class="hover:text-black transition-colors">Dunk Low Retro</a></li>
              <li><a href="#catalog" data-nav-category="basketball" class="hover:text-black transition-colors">Air Jordan 1 Low</a></li>
              <li><a href="#catalog" data-nav-category="running" class="hover:text-black transition-colors">Zoom Vomero 5</a></li>
              <li><a href="#catalog" data-nav-category="retro" class="hover:text-black transition-colors">Cortez '72</a></li>
            </ul>
          </div>

          <div class="lg:col-span-4 space-y-3">
            <h4 class="text-xs font-extrabold uppercase tracking-wider text-neutral-900">${t.footer.helpHeader}</h4>
            <div class="space-y-1.5 text-xs text-neutral-500">
              <p class="font-bold text-neutral-800">${t.footer.tashkentStore}</p>
              <p>${t.footer.storeAddress}</p>
              <p class="pt-1 font-semibold text-black">${t.footer.phone}</p>
              <p class="text-[11px] text-neutral-400">Har kuni: 10:00 — 22:00</p>
            </div>
          </div>

        </div>

        <!-- Bottom Row: Copyright & Legal -->
        <div class="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © ${currentYear} Nike, Inc. ${t.footer.rights}
          </div>

          <div class="flex items-center gap-6">
            <a href="#hero" class="hover:text-black transition-colors">Maxfiylik Siyosati</a>
            <a href="#hero" class="hover:text-black transition-colors">Ommaviy Oferta</a>
            <a href="#hero" class="hover:text-black transition-colors">Toshkent Yetkazib Berish</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}
