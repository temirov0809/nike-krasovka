import { store } from '../state.js';
import { products } from '../data/products.js';

export function renderFilterBar() {
  const t = store.t;
  const currentCategory = store.state.filters.category;
  const currentGender = store.state.filters.gender;
  const currentSort = store.state.filters.sort;
  const currentSize = store.state.filters.size;
  const filteredCount = store.getFilteredProducts().length;

  const categories = [
    { id: 'all', label: t.filters.all, count: products.length },
    { id: 'lifestyle', label: t.filters.lifestyle, count: products.filter(p => p.category === 'lifestyle').length },
    { id: 'running', label: t.filters.running, count: products.filter(p => p.category === 'running').length },
    { id: 'basketball', label: t.filters.basketball, count: products.filter(p => p.category === 'basketball').length },
    { id: 'retro', label: t.filters.retro, count: products.filter(p => p.category === 'retro').length }
  ];

  const sizes = [39, 40, 41, 42, 43, 44, 45, 46];

  const hasActiveFilters = currentCategory !== 'all' || currentGender !== 'all' || currentSize !== null || store.state.searchQuery;

  return `
    <div class="py-8 border-b border-neutral-100 bg-white" id="catalog-controls">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        <!-- Top Row: Section Headline + Live Results Count -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div class="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
              Curated Catalog 2026
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight font-editorial">
              ${t.nav.catalog}
            </h2>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-xs font-semibold text-neutral-500">
              <strong class="text-black font-extrabold">${filteredCount}</strong> ${t.filters.resultsCount}
            </span>
            ${hasActiveFilters ? `
              <button 
                type="button" 
                id="filter-clear-all" 
                class="text-xs font-semibold text-neutral-400 hover:text-black underline transition-colors"
              >
                ${t.filters.clearAll}
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Filter Controls Row: Category Pills + Gender & Sorting Selectors -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          <!-- Category Pills Row -->
          <div class="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            ${categories.map(cat => `
              <button 
                type="button" 
                data-filter-category="${cat.id}"
                class="whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold tracking-tight transition-all ${
                  currentCategory === cat.id 
                    ? 'bg-black text-white shadow-sm' 
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
                }"
              >
                ${cat.label} <span class="opacity-60 text-[10px] ml-1">[${cat.count}]</span>
              </button>
            `).join('')}
          </div>

          <!-- Secondary Filters: Gender Tabs, Size Picker, and Sorting Dropdown -->
          <div class="flex items-center gap-2 sm:gap-3 flex-wrap">

            <!-- Gender Segmented Control -->
            <div class="inline-flex p-1 rounded-full bg-neutral-100 text-xs font-semibold">
              <button 
                type="button" 
                data-filter-gender="all" 
                class="px-3 py-1 rounded-full transition-all ${currentGender === 'all' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'}"
              >
                ${t.filters.genderAll}
              </button>
              <button 
                type="button" 
                data-filter-gender="men" 
                class="px-3 py-1 rounded-full transition-all ${currentGender === 'men' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'}"
              >
                ${t.filters.men}
              </button>
              <button 
                type="button" 
                data-filter-gender="women" 
                class="px-3 py-1 rounded-full transition-all ${currentGender === 'women' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'}"
              >
                ${t.filters.women}
              </button>
            </div>

            <!-- Size Selector Dropdown -->
            <div class="relative">
              <select 
                id="filter-size-select" 
                class="appearance-none bg-white border border-neutral-200 text-xs font-semibold rounded-full pl-4 pr-8 py-2 text-neutral-800 hover:border-black transition-all cursor-pointer focus:outline-none"
              >
                <option value="">${t.filters.size}: ${t.filters.all}</option>
                ${sizes.map(s => `
                  <option value="${s}" ${currentSize === s ? 'selected' : ''}>EU ${s}</option>
                `).join('')}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>

            <!-- Sort By Dropdown -->
            <div class="relative">
              <select 
                id="filter-sort-select" 
                class="appearance-none bg-white border border-neutral-200 text-xs font-semibold rounded-full pl-4 pr-8 py-2 text-neutral-800 hover:border-black transition-all cursor-pointer focus:outline-none"
              >
                <option value="featured" ${currentSort === 'featured' ? 'selected' : ''}>${t.filters.sortFeatured}</option>
                <option value="newest" ${currentSort === 'newest' ? 'selected' : ''}>${t.filters.sortNewest}</option>
                <option value="price-asc" ${currentSort === 'price-asc' ? 'selected' : ''}>${t.filters.sortPriceAsc}</option>
                <option value="price-desc" ${currentSort === 'price-desc' ? 'selected' : ''}>${t.filters.sortPriceDesc}</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>

          </div>

        </div>

        <!-- Search Query Notice (if active) -->
        ${store.state.searchQuery ? `
          <div class="flex items-center gap-2 text-xs text-neutral-600 bg-neutral-50 px-4 py-2.5 rounded-full border border-neutral-200/60 w-fit">
            <span>Qidiruv natijalari: <strong>"${store.state.searchQuery}"</strong></span>
            <button type="button" id="clear-search-chip" class="ml-2 font-bold text-neutral-400 hover:text-black">✕</button>
          </div>
        ` : ''}

      </div>
    </div>
  `;
}
