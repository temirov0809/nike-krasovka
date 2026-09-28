import { store } from './state.js';
import { products } from './data/products.js';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderMarquee } from './components/Marquee.js';
import { renderFilterBar } from './components/FilterBar.js';
import { renderProductGrid } from './components/ProductGrid.js';
import { renderStorySection } from './components/StorySection.js';
import { renderFooter } from './components/Footer.js';
import { renderProductModal } from './components/ProductModal.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderCheckoutModal } from './components/CheckoutModal.js';
import { renderSearchModal } from './components/SearchModal.js';
import { renderFavoritesDrawer, renderMobileMenu } from './components/FavoritesDrawer.js';

class App {
  constructor() {
    this.appEl = document.getElementById('app');
    this.init();
  }

  init() {
    // Initial Render
    this.render();

    // Subscribe to store updates
    store.subscribe((state, eventKey) => {
      this.render();
    });

    // Setup Event Listeners
    this.bindGlobalEvents();
  }

  render() {
    if (!this.appEl) return;

    this.appEl.innerHTML = `
      ${renderNavbar()}
      <main>
        ${renderHero()}
        ${renderMarquee()}
        ${renderFilterBar()}
        ${renderProductGrid()}
        ${renderStorySection()}
      </main>
      ${renderFooter()}

      <!-- Dynamic Drawers & Modals -->
      <div id="modal-root">
        ${renderProductModal()}
        ${renderCartDrawer()}
        ${renderCheckoutModal()}
        ${renderSearchModal()}
        ${renderFavoritesDrawer()}
        ${renderMobileMenu()}
      </div>
    `;

    // Re-focus search input if search modal is active
    if (store.state.activeModal === 'search') {
      const input = document.getElementById('search-input-field');
      if (input) {
        input.focus();
        input.selectionStart = input.selectionEnd = input.value.length;
      }
    }
  }

  bindGlobalEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      // 1. Language Toggle
      const langBtn = target.closest('[data-lang]');
      if (langBtn) {
        const lang = langBtn.getAttribute('data-lang');
        store.setLanguage(lang);
        return;
      }

      // 2. Open Product Modal
      const openProdBtn = target.closest('[data-open-product]');
      if (openProdBtn) {
        const prodId = openProdBtn.getAttribute('data-open-product');
        const prod = products.find(p => p.id === prodId);
        if (prod) store.openModal('product', prod);
        return;
      }

      // Hero Sneaker Click
      const heroProd = target.closest('[data-hero-product-id]');
      if (heroProd) {
        const prodId = heroProd.getAttribute('data-hero-product-id');
        const prod = products.find(p => p.id === prodId);
        if (prod) store.openModal('product', prod);
        return;
      }

      // 3. Quick Add to Cart
      const quickAddBtn = target.closest('[data-quick-add]');
      if (quickAddBtn) {
        const prodId = quickAddBtn.getAttribute('data-quick-add');
        const prod = products.find(p => p.id === prodId);
        if (prod) store.addToCart(prod, prod.sizes[0]);
        return;
      }

      // 4. Toggle Favorite / Wishlist
      const favBtn = target.closest('[data-fav-toggle]');
      if (favBtn) {
        const prodId = favBtn.getAttribute('data-fav-toggle');
        store.toggleFavorite(prodId);
        return;
      }

      // 5. Open Nav Modals (Search, Cart, Favs, Mobile Menu)
      if (target.closest('#nav-search-btn')) {
        store.openModal('search');
        return;
      }
      if (target.closest('#nav-cart-btn')) {
        store.openModal('cart');
        return;
      }
      if (target.closest('#nav-favs-btn')) {
        store.openModal('favorites');
        return;
      }
      if (target.closest('#mobile-menu-btn')) {
        store.openModal('mobileNav');
        return;
      }

      // 6. Close Any Modal
      if (target.closest('[data-close-modal]') || target.classList.contains('drawer-backdrop')) {
        store.closeModal();
        return;
      }

      // 7. Filter Category Pill
      const catBtn = target.closest('[data-filter-category]');
      if (catBtn) {
        const cat = catBtn.getAttribute('data-filter-category');
        store.setFilter('category', cat);
        return;
      }

      // Nav Category Link
      const navCatLink = target.closest('[data-nav-category]');
      if (navCatLink) {
        const cat = navCatLink.getAttribute('data-nav-category');
        store.setFilter('category', cat);
        return;
      }

      // 8. Filter Gender Button
      const genBtn = target.closest('[data-filter-gender]');
      if (genBtn) {
        const gen = genBtn.getAttribute('data-filter-gender');
        store.setFilter('gender', gen);
        return;
      }

      // 9. Clear All Filters
      if (target.closest('#filter-clear-all') || target.closest('#empty-reset-btn')) {
        store.resetFilters();
        return;
      }
      if (target.closest('#clear-search-chip')) {
        store.setSearchQuery('');
        return;
      }

      // 10. Product Modal Select Size
      const sizeBtn = target.closest('[data-select-size]');
      if (sizeBtn) {
        const size = parseInt(sizeBtn.getAttribute('data-select-size'), 10);
        store.setSelectedSize(size);
        return;
      }

      // 11. Product Modal Select Color
      const colorBtn = target.closest('[data-select-color]');
      if (colorBtn) {
        const colorId = colorBtn.getAttribute('data-select-color');
        const prod = store.state.selectedProduct;
        if (prod) {
          const col = prod.colors.find(c => c.id === colorId);
          if (col) store.setSelectedColor(col);
        }
        return;
      }

      // 12. Product Modal Gallery Thumbnail
      const thumbBtn = target.closest('[data-gallery-thumb]');
      if (thumbBtn) {
        const src = thumbBtn.getAttribute('data-gallery-thumb');
        const mainImg = document.getElementById('modal-main-image');
        if (mainImg) mainImg.src = src;
        document.querySelectorAll('[data-gallery-thumb]').forEach(b => {
          b.classList.remove('border-black');
          b.classList.add('border-transparent', 'opacity-60');
        });
        thumbBtn.classList.add('border-black');
        thumbBtn.classList.remove('border-transparent', 'opacity-60');
        return;
      }

      // 13. Modal Add to Bag Button
      if (target.closest('#modal-add-to-bag')) {
        const prod = store.state.selectedProduct;
        if (prod) {
          store.addToCart(prod, store.state.selectedSize, store.state.selectedColor, 1);
        }
        return;
      }

      // 14. Modal Buy Now Button
      if (target.closest('#modal-buy-now')) {
        const prod = store.state.selectedProduct;
        if (prod) {
          store.addToCart(prod, store.state.selectedSize, store.state.selectedColor, 1);
          store.openModal('checkout');
        }
        return;
      }

      // 15. Cart Stepper (+ / -)
      const deltaBtn = target.closest('[data-cart-delta]');
      if (deltaBtn) {
        const idx = parseInt(deltaBtn.getAttribute('data-cart-delta'), 10);
        const delta = parseInt(deltaBtn.getAttribute('data-delta'), 10);
        store.updateCartQuantity(idx, delta);
        return;
      }

      // 16. Cart Remove Item
      const removeBtn = target.closest('[data-remove-cart]');
      if (removeBtn) {
        const idx = parseInt(removeBtn.getAttribute('data-remove-cart'), 10);
        store.removeFromCart(idx);
        return;
      }

      // 17. Cart Checkout Button
      if (target.closest('#cart-checkout-btn')) {
        store.openModal('checkout');
        return;
      }

      // 18. Checkout Finish Continue Shopping
      if (target.closest('#checkout-finish-btn')) {
        store.state.orderSuccess = null;
        store.closeModal();
        return;
      }

      // 19. Search Chip
      const searchChip = target.closest('[data-search-chip]');
      if (searchChip) {
        const term = searchChip.getAttribute('data-search-chip');
        store.setSearchQuery(term);
        return;
      }
    });

    // Change events for Select dropdowns
    document.addEventListener('change', (e) => {
      if (e.target.id === 'filter-size-select') {
        const val = e.target.value ? parseInt(e.target.value, 10) : null;
        store.setFilter('size', val);
      }
      if (e.target.id === 'filter-sort-select') {
        store.setFilter('sort', e.target.value);
      }
    });

    // Live search input
    document.addEventListener('input', (e) => {
      if (e.target.id === 'search-input-field') {
        store.setSearchQuery(e.target.value);
      }
    });

    // Checkout Form Submit
    document.addEventListener('submit', (e) => {
      if (e.target.id === 'checkout-form') {
        e.preventDefault();
        const name = document.getElementById('checkout-name').value;
        const phone = document.getElementById('checkout-phone').value;
        const city = document.getElementById('checkout-city').value;
        const address = document.getElementById('checkout-address').value;

        const subtotalUSD = store.cartSubtotalUSD;
        const isFreeDelivery = subtotalUSD >= 100;
        const totalUSD = subtotalUSD + (isFreeDelivery ? 0 : 10);

        const orderId = 'NK-' + Math.floor(100000 + Math.random() * 900000);

        store.state.orderSuccess = {
          orderId,
          name,
          phone,
          city,
          address,
          totalUSD
        };

        store.clearCart();
        store.notify('checkout');
      }
    });

    // Keyboard Shortcuts (Escape to close modals, Cmd+K / Ctrl+K to search)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && store.state.activeModal) {
        store.closeModal();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        store.openModal('search');
      }
    });
  }
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
