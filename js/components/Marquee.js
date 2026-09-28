import { store } from '../state.js';

export function renderMarquee() {
  const t = store.t;
  const items = t.marquee || [];

  return `
    <div class="border-b border-neutral-100 bg-[#FBFBFC] py-3.5 overflow-hidden select-none">
      <div class="animate-ticker flex items-center gap-8 text-[11px] font-extrabold uppercase tracking-[0.25em] text-neutral-400">
        ${[...items, ...items, ...items].map(item => `
          <div class="flex items-center gap-6 whitespace-nowrap">
            <span>${item}</span>
            <span class="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
