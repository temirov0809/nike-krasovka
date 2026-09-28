/**
 * =====================================================================
 * REACTIVE GLOBAL STORE & STATE MANAGEMENT
 * =====================================================================
 */

import { translations } from './data/translations.js';
import { products } from './data/products.js';

class Store {
  safeStorageGet(key, fallback) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const item = window.localStorage.getItem(key);
        return item !== null ? item : fallback;
      }
    } catch (e) {
      console.warn('Storage unavailable:', e);
    }
    return fallback;
  }

  safeStorageSet(key, value) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch (e) {
      console.warn('Storage set failed:', e);
    }
  }

  safeParse(item, fallback) {
    if (!item) return fallback;
    try {
      return JSON.parse(item);
    } catch (e) {
      return fallback;
    }
  }

  constructor() {
    this.listeners = new Set();
    
    // Safely load persisted state
    const savedLang = this.safeStorageGet('nike_lang', 'uz');
    const savedCart = this.safeParse(this.safeStorageGet('nike_cart', '[]'), []);
    const savedFavs = this.safeParse(this.safeStorageGet('nike_favorites', '[]'), []);

    this.state = {
      lang: savedLang === 'ru' ? 'ru' : 'uz',
      cart: savedCart,
      favorites: savedFavs,
      searchQuery: '',
      filters: {
        category: 'all', // 'all' | 'lifestyle' | 'running' | 'basketball' | 'retro'
        gender: 'all',   // 'all' | 'men' | 'women' | 'unisex'
        size: null,      // null | number
        sort: 'featured',// 'featured' | 'price-asc' | 'price-desc' | 'newest'
        priceRange: null // null | 'under130' | '130to170' | 'above170'
      },
      activeModal: null, // null | 'product' | 'cart' | 'checkout' | 'favorites' | 'search' | 'mobileNav'
      selectedProduct: null,
      selectedSize: null,
      selectedColor: null,
      orderSuccess: null // details of placed order
    };
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(eventKey = 'update') {
    this.listeners.forEach(fn => fn(this.state, eventKey));
  }

  // --- Actions ---

  setLanguage(lang) {
    if (lang !== 'uz' && lang !== 'ru') return;
    this.state.lang = lang;
    this.safeStorageSet('nike_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    this.notify('language');
  }

  get t() {
    return translations[this.state.lang];
  }

  // --- Cart Actions ---

  addToCart(product, size, color = null, quantity = 1) {
    const chosenSize = size || (product.sizes && product.sizes[0]);
    const chosenColor = color || (product.colors && product.colors[0]);

    const existingIndex = this.state.cart.findIndex(
      item => item.product.id === product.id && item.size === chosenSize && item.color?.id === chosenColor?.id
    );

    if (existingIndex > -1) {
      this.state.cart[existingIndex].quantity += quantity;
    } else {
      this.state.cart.push({
        product,
        size: chosenSize,
        color: chosenColor,
        quantity
      });
    }

    this.saveCart();
    this.notify('cart');
    this.triggerToast(this.t.productDetail.addedToBag + `: ${product.name} (EU ${chosenSize})`);
  }

  removeFromCart(index) {
    if (index >= 0 && index < this.state.cart.length) {
      this.state.cart.splice(index, 1);
      this.saveCart();
      this.notify('cart');
    }
  }

  updateCartQuantity(index, delta) {
    if (this.state.cart[index]) {
      this.state.cart[index].quantity += delta;
      if (this.state.cart[index].quantity <= 0) {
        this.removeFromCart(index);
      } else {
        this.saveCart();
        this.notify('cart');
      }
    }
  }

  clearCart() {
    this.state.cart = [];
    this.saveCart();
    this.notify('cart');
  }

  saveCart() {
    this.safeStorageSet('nike_cart', JSON.stringify(this.state.cart));
  }

  get cartCount() {
    return this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  get cartSubtotalUSD() {
    return this.state.cart.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0);
  }

  get cartSubtotalUZS() {
    return this.state.cart.reduce((sum, item) => sum + item.product.priceUZS * item.quantity, 0);
  }

  // --- Favorites / Wishlist ---

  toggleFavorite(productId) {
    const index = this.state.favorites.indexOf(productId);
    if (index > -1) {
      this.state.favorites.splice(index, 1);
    } else {
      this.state.favorites.push(productId);
      const prod = products.find(p => p.id === productId);
      if (prod) {
        this.triggerToast(`${prod.name} ${this.state.lang === 'uz' ? "sevimlilarga qo'shildi" : "добавлен в избранное"}`);
      }
    }
    this.safeStorageSet('nike_favorites', JSON.stringify(this.state.favorites));
    this.notify('favorites');
  }

  isFavorite(productId) {
    return this.state.favorites.includes(productId);
  }

  // --- Modals & Navigation ---

  openModal(modalName, payload = null) {
    this.state.activeModal = modalName;
    if (modalName === 'product' && payload) {
      this.state.selectedProduct = payload;
      this.state.selectedSize = payload.sizes?.[0] || null;
      this.state.selectedColor = payload.colors?.[0] || null;
    }
    document.body.style.overflow = 'hidden';
    this.notify('modal');
  }

  closeModal() {
    this.state.activeModal = null;
    document.body.style.overflow = '';
    this.notify('modal');
  }

  setSelectedSize(size) {
    this.state.selectedSize = size;
    this.notify('product_selection');
  }

  setSelectedColor(color) {
    this.state.selectedColor = color;
    this.notify('product_selection');
  }

  // --- Filters & Search ---

  setFilter(key, value) {
    this.state.filters[key] = value;
    this.notify('filters');
  }

  resetFilters() {
    this.state.filters = {
      category: 'all',
      gender: 'all',
      size: null,
      sort: 'featured',
      priceRange: null
    };
    this.state.searchQuery = '';
    this.notify('filters');
  }

  setSearchQuery(query) {
    this.state.searchQuery = query;
    this.notify('search');
  }

  // --- Toast Notification ---

  triggerToast(message) {
    const existing = document.getElementById('global-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] bg-[#0A0A0A] text-white px-5 py-3 rounded-full text-xs font-medium tracking-wide shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-none border border-neutral-800';
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 350);
    }, 2800);
  }

  // --- Get Filtered Products ---

  getFilteredProducts() {
    let list = [...products];

    // Search query
    if (this.state.searchQuery.trim()) {
      const q = this.state.searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.series.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags[this.state.lang].some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Category
    if (this.state.filters.category && this.state.filters.category !== 'all') {
      list = list.filter(p => p.category === this.state.filters.category);
    }

    // Gender
    if (this.state.filters.gender && this.state.filters.gender !== 'all') {
      list = list.filter(p => p.gender === this.state.filters.gender || p.gender === 'unisex');
    }

    // Size
    if (this.state.filters.size) {
      list = list.filter(p => p.sizes.includes(this.state.filters.size));
    }

    // Price Range
    if (this.state.filters.priceRange) {
      if (this.state.filters.priceRange === 'under130') {
        list = list.filter(p => p.priceUSD < 130);
      } else if (this.state.filters.priceRange === '130to170') {
        list = list.filter(p => p.priceUSD >= 130 && p.priceUSD <= 170);
      } else if (this.state.filters.priceRange === 'above170') {
        list = list.filter(p => p.priceUSD > 170);
      }
    }

    // Sorting
    if (this.state.filters.sort === 'price-asc') {
      list.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (this.state.filters.sort === 'price-desc') {
      list.sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (this.state.filters.sort === 'newest') {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return list;
  }
}

export const store = new Store();
