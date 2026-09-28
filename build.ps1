# Nike Store Production Build Script
Write-Host "Building Nike Editorial Store..."

function Read-Utf8($path) {
    return [System.IO.File]::ReadAllText((Join-Path $PSScriptRoot $path), [System.Text.Encoding]::UTF8)
}

$translationsContent = Read-Utf8 "js\data\translations.js"
$productsContent = Read-Utf8 "js\data\products.js"
$stateContent = Read-Utf8 "js\state.js"
$navbarContent = Read-Utf8 "js\components\Navbar.js"
$heroContent = Read-Utf8 "js\components\Hero.js"
$marqueeContent = Read-Utf8 "js\components\Marquee.js"
$filterBarContent = Read-Utf8 "js\components\FilterBar.js"
$productCardContent = Read-Utf8 "js\components\ProductCard.js"
$productGridContent = Read-Utf8 "js\components\ProductGrid.js"
$storyContent = Read-Utf8 "js\components\StorySection.js"
$productModalContent = Read-Utf8 "js\components\ProductModal.js"
$cartDrawerContent = Read-Utf8 "js\components\CartDrawer.js"
$checkoutModalContent = Read-Utf8 "js\components\CheckoutModal.js"
$searchModalContent = Read-Utf8 "js\components\SearchModal.js"
$favsContent = Read-Utf8 "js\components\FavoritesDrawer.js"
$footerContent = Read-Utf8 "js\components\Footer.js"
$appContent = Read-Utf8 "js\app.js"

# Function to strip export / import statements
function Clean-Module($code) {
    # remove imports
    $code = $code -replace 'import\s+[^;]+;', ''
    # replace 'export const ' with 'const '
    $code = $code -replace 'export\s+const\s+', 'const '
    # replace 'export function ' with 'function '
    $code = $code -replace 'export\s+function\s+', 'function '
    # replace 'export default ' with ''
    $code = $code -replace 'export\s+default\s+', ''
    return $code
}

$bundle = @"
/**
 * =====================================================================
 * NIKE EDITORIAL SNEAKER STORE — COMPILED BUNDLE
 * Built for universal compatibility (file:// protocol and HTTP server)
 * =====================================================================
 */
(function() {
  'use strict';

  // --- 1. Translations ---
  $(Clean-Module($translationsContent))

  // --- 2. Products Data ---
  $(Clean-Module($productsContent))

  // --- 3. Reactive Store ---
  $(Clean-Module($stateContent))

  // --- 4. Components ---
  $(Clean-Module($navbarContent))
  $(Clean-Module($heroContent))
  $(Clean-Module($marqueeContent))
  $(Clean-Module($filterBarContent))
  $(Clean-Module($productCardContent))
  $(Clean-Module($productGridContent))
  $(Clean-Module($storyContent))
  $(Clean-Module($productModalContent))
  $(Clean-Module($cartDrawerContent))
  $(Clean-Module($checkoutModalContent))
  $(Clean-Module($searchModalContent))
  $(Clean-Module($favsContent))
  $(Clean-Module($footerContent))

  // --- 5. Application Orchestration ---
  $(Clean-Module($appContent))
})();
"@

$target = Join-Path $PSScriptRoot "js\bundle.js"
[System.IO.File]::WriteAllText($target, $bundle, [System.Text.Encoding]::UTF8)
Write-Host "Build complete! Output: js\bundle.js"
