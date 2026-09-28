# Nike Editorial Sneaker Store (SS/26)

Eksklyuziv Nike krossovkalari uchun zamonaviy editorial e-tijorat veb-sayti. Minimalist shveysarcha dizayn, katta kontrastli tipografiya va to'liq interaktiv savdo tajribasi.

## Xususiyatlar (Features)

- **Editorial Hero Dizayni**: "AIR" (kontur) + "AURA" (to'q qora) ulkan tipografiya, suzuvchi krossovka vizuali va hashamatli xususiyatlar ro'yxati.
- **2 Ustunli Krossovkalar Katalogi**: Air Force 1, Dunk Low, Jordan 1, Vomero 5, Air Max Plus, P-6000, Pegasus 2K5, Cortez '72 kabi afsonaviy modellar.
- **Ikki Tilli Tizim (Uzbek & Russian)**: Sahifani qayta yuklamasdan bir zumda o'zgaruvchi to'liq tarjima (`UZ | RU`).
- **Ko'p O'lchamli Filtrlar**: Kategoriya, jins (Erkaklar, Ayollar, Uniseks), EU o'lchami (`39–46`) va narx bo'yicha saralash.
- **To'liq Mahsulot Modali**: Ko'p burchakli galereya, o'lcham tanlash, rang tanlash, savatga qo'shish va "Hozir xarid qilish" tugmalari.
- **Savat va Buyurtma (Cart & Checkout)**: Miqdorni boshqarish, bepul yetkazib berish kalkulyatori, Toshkent va viloyatlar bo'yicha kuryerlik yetkazish hamda buyurtma cheki.
- **Tezkor Qidiruv (⌘K / Ctrl+K)**: Model va kalit so'zlar bo'yicha bir lahzalik qidiruv.
- **Moslashuvchan (Responsive)**: Katta ekranlar, noutbuklar, planshetlar va smartfonlar uchun maxsus moslashgan.

## Ishga tushirish (How to Run)

1. **Tezkor ochish**: `start.bat` fayliga sichqoncha bilan ikki marta bosing (yoki `index.html` faylini to'g'ridan-to'g'ri brauzerda oching).
2. **Lokal server**:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\serve.ps1
   ```
   Brauzerda: `http://localhost:5000/`

## Rasm va Ma'lumotlarni O'zgartirish

Barcha krossovka ma'lumotlari va rasm manzillari bitta markaziy faylda jamlangan:
`js/data/products.js`

O'zingizning haqiqiy krossovka rasmlaringizni `assets/images/` papkasiga joylashtirib, `js/data/products.js` ichidagi yo'llarni yangilashingiz mumkin.
O'zgarishlardan so'ng `build.bat` faylini ishga tushirib universal to'plamni qayta kompilyatsiya qiling.
