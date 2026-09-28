import { store } from '../state.js';

export function renderStorySection() {
  const isUz = store.state.lang === 'uz';

  const heading = isUz 
    ? "HARAKAT ERKINLIGI VA INNOVATSIYA"
    : "СВОБОДА ДВИЖЕНИЯ И ИННОВАЦИИ";

  const sub = isUz 
    ? "NIKE AURA ARCHITECTURE 2026"
    : "АРХИТЕКТУРА NIKE AURA 2026";

  const quote = isUz
    ? "“Biz shunchaki krossovka ishlab chiqarmaymiz. Biz inson vujudining cheksiz harakat salohiyatini ochib beruvchi texnologiyalarni yaratamiz.”"
    : "“Мы создаем не просто обувь. Мы проектируем технологии, раскрывающие безграничный потенциал движения человеческого тела.”";

  const story1Title = isUz ? "Patentlangan Air Texnologiyasi" : "Запатентованная технология Air";
  const story1Desc = isUz 
    ? "Tashqi zarbalarni to'liq yutuvchi gaz kapsulalari har bir qadamingizga o'zgacha yengillik va qaytish quvvatini baxsh etadi."
    : "Газовые капсулы Air поглощают энергию удара, превращая каждый ваш шаг в мощный импульс динамичного движения.";

  const story2Title = isUz ? "Tanlangan Xomashyo" : "Отборные Материалы";
  const story2Desc = isUz 
    ? "Har bir modelda faqat saralangan toza charm, chidamli sintetik iplar va ekologik qayta ishlangan kauchuk ishlatiladi."
    : "Только сертифицированная цельнозерновая кожа, износостойкие нити и экологичный вулканизированный каучук.";

  return `
    <section id="story" class="py-20 lg:py-28 border-t border-b border-neutral-100 bg-[#FBFBFC]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Editorial Split Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column: Typographic Manifesto -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-neutral-400">
              <span class="w-2 h-2 rounded-full bg-black"></span>
              <span>${sub}</span>
            </div>

            <h2 class="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight font-editorial">
              ${heading}
            </h2>

            <blockquote class="text-lg sm:text-xl font-medium text-neutral-700 italic border-l-2 border-black pl-5 py-1">
              ${quote}
            </blockquote>

            <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <div class="text-sm font-bold text-neutral-900 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  ${story1Title}
                </div>
                <p class="text-xs text-neutral-500 leading-relaxed">
                  ${story1Desc}
                </p>
              </div>

              <div class="space-y-2">
                <div class="text-sm font-bold text-neutral-900 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  ${story2Title}
                </div>
                <p class="text-xs text-neutral-500 leading-relaxed">
                  ${story2Desc}
                </p>
              </div>
            </div>

            <div class="pt-2">
              <a href="#catalog" class="pill-button-black text-xs py-2.5 px-6">
                <span>${store.t.nav.cta}</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Visual Stage with Technical Blueprint Aesthetic -->
          <div class="lg:col-span-6">
            <div class="bg-white border border-neutral-200/80 rounded-3xl p-8 relative overflow-hidden shadow-sm">
              
              <!-- Subtle Technical Grid Lines -->
              <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

              <div class="relative z-10 flex flex-col items-center justify-center py-6 text-center">
                <div class="w-full max-w-sm">
                  <img 
                    src="assets/images/nike-vomero-5.svg" 
                    alt="Nike Tech Spec" 
                    class="w-full h-auto object-contain transform -rotate-6 hover:rotate-0 transition-transform duration-700 filter drop-shadow-xl"
                  />
                </div>

                <div class="mt-8 flex items-center justify-between w-full border-t border-neutral-100 pt-4 text-xs font-semibold text-neutral-400">
                  <span>SPECIFICATION // SS26</span>
                  <span>ZOOM AIR CUSHIONING</span>
                  <span>SERIES: 001/008</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
