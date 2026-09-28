/**
 * =====================================================================
 * NIKE EDITORIAL SNEAKER STORE вЂ” COMPILED BUNDLE
 * Built for universal compatibility (file:// protocol and HTTP server)
 * =====================================================================
 */
(function() {
  'use strict';

  // --- 1. Translations ---
  /**
 * Centralized Bilingual Translation Dictionary (Uzbek & Russian)
 * Engineered for clean typography and no overflow.
 */

const translations = {
  uz: {
    meta: {
      siteTitle: "NIKE — Rasmiy Eksklyuziv Do'kon",
      siteDesc: "Premium Nike krossovkalari kolleksiyasi. Toshkent va butun O'zbekiston bo'ylab tezkor yetkazib berish."
    },
    nav: {
      statusBadge: "SS/26 Drop Sotuvda",
      catalog: "Katalog",
      editions: "Kolleksiyalar",
      performance: "Yugurish & Sport",
      heritage: "Meros",
      about: "Biz Haqimizda",
      searchPlaceholder: "Krossovka yoki model qidirish...",
      searchShortcut: "Qidirish",
      wishlist: "Tanlanganlar",
      cart: "Savat",
      cta: "Katalogga o'tish",
      mobileMenu: "Menyu"
    },
    hero: {
      outlineWord: "AIR",
      solidWord: "AURA",
      subtitle: "Yangi Avlod Siluetlari 2026",
      title: "Nike Air Force 1 '07 Editorial",
      desc: "Ko'cha madaniyati va professional qulaylikning mukammal uyg'unligi. Premium toza charm va patentlangan Air amortizatsiyasi.",
      ctaPrimary: "Kolleksiyani ko'rish",
      ctaSecondary: "Batafsil ma'lumot",
      specs: {
        airSole: "Zoom Air Amortizatsiya",
        leather: "100% Premium Tabiiy Charm",
        delivery: "Toshkentda 24 Soatda Yetkazish",
        authentic: "100% Asl Kafolatli Mahsulot"
      }
    },
    marquee: [
      "ENGINEERED FOR MOTION",
      "ORIGINAL NIKE SILHOUETTES",
      "TASHKENT EXPRESS DELIVERY",
      "ICONIC HERITAGE REIMAGINED",
      "LIMITED RUN EDITIONS",
      "AUTHENTICITY VERIFIED"
    ],
    filters: {
      all: "Barchasi",
      lifestyle: "Kundalik (Lifestyle)",
      running: "Yugurish (Running)",
      basketball: "Basketbol",
      retro: "Retro Meros",
      genderAll: "Barchasi",
      men: "Erkaklar",
      women: "Ayollar",
      unisex: "Uniseks",
      filterTitle: "Filtrlar",
      categories: "Kategoriyalar",
      size: "O'lcham (EU)",
      priceRange: "Narx oralig'i",
      sortBy: "Saralash",
      sortFeatured: "Tavsiya etilgan",
      sortPriceAsc: "Narx: Arzondan qimmatga",
      sortPriceDesc: "Narx: Qimmatdan arzonga",
      sortNewest: "Yangi kelganlar",
      clearAll: "Tozalash",
      resultsCount: "ta model topildi",
      activeFilters: "Faol filtrlar"
    },
    card: {
      quickView: "Tezkor ko'rish",
      addToCart: "Savatga qo'shish",
      availableSizes: "O'lchamlar",
      currencyUsd: "$",
      currencyUzs: "so'm",
      newBadge: "YANGI",
      limitedBadge: "EKSKLYUZIV",
      iconicBadge: "IKONIK",
      memberBadge: "CLUB EDITION"
    },
    productDetail: {
      selectSize: "O'lchamni tanlang (EU)",
      sizeGuide: "O'lchamlar jadvali",
      colorLabel: "Rang",
      quantity: "Miqdor",
      addToBag: "Savatga qo'shish",
      buyNow: "Hozir xarid qilish",
      addedToBag: "Savatga qo'shildi",
      inStock: "Sotuvda mavjud",
      sku: "Artikul",
      tabs: {
        description: "Tavsif va Xususiyatlar",
        specs: "Texnik Tafsilotlar",
        delivery: "Yetkazib berish va Qaytarish"
      },
      deliveryInfo: "Toshkent bo'ylab 1 kunda kuryer orqali yetkaziladi. Viloyatlarga BTS yoki Pochta orqali 2-3 kunda yetkazib beriladi.",
      returnInfo: "14 kun davomida kiyilmagan holatda qaytarish yoki almashtirish kafolati.",
      authInfo: "Har bir krossovka o'zining original qutisi va xalqaro shtrix-kodi bilan keladi."
    },
    cart: {
      title: "Sizning Savatingiz",
      emptyTitle: "Savatingiz hozircha bo'sh",
      emptyDesc: "Sizga yoqqan eksklyuziv Nike krossovkalarini tanlang va bu yerda buyurtma bering.",
      exploreBtn: "Katalogga qaytish",
      sizeLabel: "O'lcham",
      subtotal: "Oraliq summa",
      shipping: "Yetkazib berish",
      freeShipping: "Bepul",
      total: "Jami to'lov",
      checkoutBtn: "Buyurtmani rasmiylashtirish",
      clearCart: "Savatni tozalash"
    },
    checkout: {
      title: "Buyurtmani rasmiylashtirish",
      step1: "1. Qabul qiluvchi ma'lumotlari",
      step2: "2. Yetkazib berish manzili",
      step3: "3. To'lov usuli",
      fullName: "To'liq ismingiz",
      fullNamePlaceholder: "Masalan: Azizbek Karimov",
      phone: "Telefon raqamingiz",
      phonePlaceholder: "+998 90 123 45 67",
      city: "Shahar / Viloyat",
      cityTashkent: "Toshkent shahri",
      citySamarkand: "Samarqand",
      cityBukhara: "Buxoro",
      cityFergana: "Farg'ona",
      cityAndijan: "Andijon",
      cityNamangan: "Namangan",
      cityOther: "Boshqa hudud",
      address: "Yetkazib berish manzili",
      addressPlaceholder: "Ko'cha, uy raqami, xonadon",
      notes: "Kuryer uchun izoh (ixtiyoriy)",
      paymentMethod: "To'lov turi",
      payClick: "Click / Payme orqali onlayn",
      payCash: "Kuryerga yetkazilganda naqd yoki karta",
      orderSummary: "Buyurtma hisobi",
      orderBtn: "Buyurtmani tasdiqlash",
      processing: "Rasmiylashtirilmoqda...",
      successTitle: "Buyurtmangiz qabul qilindi!",
      successDesc: "Operatorimiz tez orada siz bilan bog'lanib, buyurtma tafsilotlarini tasdiqlaydi.",
      orderNumber: "Buyurtma raqami",
      continueShopping: "Xaridni davom ettirish"
    },
    favorites: {
      title: "Tanlangan krossovkalar",
      emptyTitle: "Sevimlilar ro'yxati bo'sh",
      emptyDesc: "Katalogdagi yurakcha belgisini bosib sevimli modellaringizni saqlab qo'ying."
    },
    search: {
      title: "Tezkor Qidiruv",
      placeholder: "Model nomi (Air Force, Dunk, Vomero, Cortez...)",
      popular: "Ommabop qidiruvlar",
      noResults: "Mos keluvchi krossovka topilmadi"
    },
    footer: {
      manifesto: "Nike krossovkalari — bu faqat poyabzal emas, balki innovatsiya, harakat va uslub bayonotidir.",
      catalogHeader: "Modellar",
      helpHeader: "Yordam & Aloqa",
      tashkentStore: "Toshkent Flagman Showroom:",
      storeAddress: "Amir Temur shox ko'chasi, 42, Toshkent",
      phone: "+998 71 200 45 45",
      rights: "Barcha huquqlar himoyalangan."
    }
  },

  ru: {
    meta: {
      siteTitle: "NIKE — Официальный Эксклюзивный Магазин",
      siteDesc: "Премиальная коллекция кроссовок Nike. Экспресс-доставка по Ташкенту и всему Узбекистану."
    },
    nav: {
      statusBadge: "SS/26 Drop В Наличии",
      catalog: "Каталог",
      editions: "Коллекции",
      performance: "Бег и Спорт",
      heritage: "Наследие",
      about: "О студии",
      searchPlaceholder: "Поиск кроссовок или модели...",
      searchShortcut: "Поиск",
      wishlist: "Избранное",
      cart: "Корзина",
      cta: "В каталог",
      mobileMenu: "Меню"
    },
    hero: {
      outlineWord: "AIR",
      solidWord: "AURA",
      subtitle: "Силуэты Нового Поколения 2026",
      title: "Nike Air Force 1 '07 Editorial",
      desc: "Безупречный союз уличной культуры и технологичного комфорта. Премиальная цельнозерновая кожа и запатентованная амортизация Air.",
      ctaPrimary: "Смотреть коллекцию",
      ctaSecondary: "Узнать больше",
      specs: {
        airSole: "Амортизация Zoom Air",
        leather: "100% Премиальная Натуральная Кожа",
        delivery: "Экспресс-доставка за 24ч по Ташкенту",
        authentic: "100% Гарантия Подлинности"
      }
    },
    marquee: [
      "ENGINEERED FOR MOTION",
      "ORIGINAL NIKE SILHOUETTES",
      "TASHKENT EXPRESS DELIVERY",
      "ICONIC HERITAGE REIMAGINED",
      "LIMITED RUN EDITIONS",
      "AUTHENTICITY VERIFIED"
    ],
    filters: {
      all: "Все модели",
      lifestyle: "Лайфстайл (Lifestyle)",
      running: "Бег (Running)",
      basketball: "Баскетбол",
      retro: "Ретро-классика",
      genderAll: "Все",
      men: "Мужские",
      women: "Женские",
      unisex: "Унисекс",
      filterTitle: "Фильтры",
      categories: "Категории",
      size: "Размер (EU)",
      priceRange: "Диапазон цен",
      sortBy: "Сортировка",
      sortFeatured: "Рекомендуемые",
      sortPriceAsc: "Сначала недорогие",
      sortPriceDesc: "Сначала премиальные",
      sortNewest: "Новинки",
      clearAll: "Сбросить",
      resultsCount: "моделей найдено",
      activeFilters: "Активные фильтры"
    },
    card: {
      quickView: "Быстрый просмотр",
      addToCart: "В корзину",
      availableSizes: "Размеры",
      currencyUsd: "$",
      currencyUzs: "сум",
      newBadge: "НОВИНКА",
      limitedBadge: "ЭКСКЛЮЗИВ",
      iconicBadge: "ИКОНА",
      memberBadge: "CLUB EDITION"
    },
    productDetail: {
      selectSize: "Выберите размер (EU)",
      sizeGuide: "Таблица размеров",
      colorLabel: "Цвет",
      quantity: "Количество",
      addToBag: "Добавить в корзину",
      buyNow: "Купить сейчас",
      addedToBag: "Добавлено в корзину",
      inStock: "В наличии",
      sku: "Артикул",
      tabs: {
        description: "Описание и Технологии",
        specs: "Характеристики",
        delivery: "Доставка и Возврат"
      },
      deliveryInfo: "Экспресс-курьер по Ташкенту в течение 24 часов. Доставка по регионам Узбекистана через курьерские службы BTS/Почта за 2-3 дня.",
      returnInfo: "14 дней на обмен или возврат при сохранении товарного вида и коробки.",
      authInfo: "Каждая пара поставляется в оригинальном боксе с международным заводским штрих-кодом."
    },
    cart: {
      title: "Ваша Корзина",
      emptyTitle: "Ваша корзина пока пуста",
      emptyDesc: "Выберите желаемую модель из каталога Nike и оформите заказ в несколько кликов.",
      exploreBtn: "Перейти в каталог",
      sizeLabel: "Размер",
      subtotal: "Подытог",
      shipping: "Доставка",
      freeShipping: "Бесплатно",
      total: "Итого к оплате",
      checkoutBtn: "Оформить заказ",
      clearCart: "Очистить корзину"
    },
    checkout: {
      title: "Оформление Заказа",
      step1: "1. Контактные данные",
      step2: "2. Адрес доставки",
      step3: "3. Способ оплаты",
      fullName: "ФИО получателя",
      fullNamePlaceholder: "Например: Азизбек Каримов",
      phone: "Номер телефона",
      phonePlaceholder: "+998 90 123 45 67",
      city: "Город / Регион",
      cityTashkent: "город Ташкент",
      citySamarkand: "Самарканд",
      cityBukhara: "Бухара",
      cityFergana: "Фергана",
      cityAndijan: "Андижан",
      cityNamangan: "Наманган",
      cityOther: "Другой регион",
      address: "Улица, дом, квартира",
      addressPlaceholder: "Например: ул. Нукус, дом 24, кв. 15",
      notes: "Комментарий для курьера (необязательно)",
      paymentMethod: "Способ оплаты",
      payClick: "Онлайн через Click / Payme",
      payCash: "При получении (наличными или картой)",
      orderSummary: "Состав заказа",
      orderBtn: "Подтвердить заказ",
      processing: "Оформление...",
      successTitle: "Ваш заказ успешно оформлен!",
      successDesc: "Наш менеджер свяжется с вами в течение 15 минут для подтверждения доставки.",
      orderNumber: "Номер заказа",
      continueShopping: "Продолжить покупки"
    },
    favorites: {
      title: "Избранные Модели",
      emptyTitle: "Список избранного пуст",
      emptyDesc: "Нажимайте на иконку сердечка на карточке любого товара, чтобы сохранить его сюда."
    },
    search: {
      title: "Быстрый Поиск",
      placeholder: "Название модели (Air Force, Dunk, Vomero, Cortez...)",
      popular: "Популярные запросы",
      noResults: "Кроссовки не найдены"
    },
    footer: {
      manifesto: "Кроссовки Nike — это не просто обувь, а манифест инноваций, непрерывного движения и культового стиля.",
      catalogHeader: "Модели",
      helpHeader: "Сервис и Поддержка",
      tashkentStore: "Флагманский шоурум в Ташкенте:",
      storeAddress: "Проспект Амира Темура, 42, Ташкент",
      phone: "+998 71 200 45 45",
      rights: "Все права защищены."
    }
  }
};


  // --- 2. Products Data ---
  /**
 * =====================================================================
 * CENTRALIZED NIKE SNEAKER PRODUCT CATALOG & IMAGE SYSTEM
 * =====================================================================
 * NOTE FOR IMAGE REPLACEMENT:
 * When you have your actual Nike product photos, simply place them into 
 * the 'assets/images/' directory and replace the file paths below 
 * (e.g. change "assets/images/nike-air-force-1.svg" to "assets/images/my-af1.webp").
 * All components dynamically read from this single source of truth.
 * =====================================================================
 */

const HERO_CONFIG = {
  // Main Hero Sneaker Image (Easily replace with your own image file)
  heroImage: "assets/images/hero-sneaker.svg",
  featuredProductId: "af1-07-white",
  badgeText: {
    uz: "YANGI SS/26 DROP",
    ru: "НОВЫЙ SS/26 ДРОП"
  }
};

const products = [
  {
    id: "af1-07-white",
    name: "Nike Air Force 1 '07",
    series: "Air Force 1",
    sku: "CW2288-111",
    category: "lifestyle",
    gender: "unisex",
    priceUSD: 130,
    priceUZS: 1650000,
    inStock: true,
    isNew: false,
    isFeatured: true,
    badge: {
      uz: "IKONIK MEROS",
      ru: "КУЛЬТОВАЯ ИКОНА"
    },
    tagLine: {
      uz: "Afsonaviy qulaylik va ko'cha uslubi",
      ru: "Легендарный комфорт и уличный стиль"
    },
    image: "assets/images/nike-air-force-1.svg",
    gallery: [
      "assets/images/nike-air-force-1.svg",
      "assets/images/nike-air-force-1.svg",
      "assets/images/hero-sneaker.svg"
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    colors: [
      { id: "white", name: { uz: "Oppoq Oq (Triple White)", ru: "Белоснежный (Triple White)" }, hex: "#FFFFFF", border: "#E4E4E7" },
      { id: "black", name: { uz: "Qora (Triple Black)", ru: "Черный (Triple Black)" }, hex: "#18181B", border: "#27272A" }
    ],
    tags: {
      uz: ["Air Sole", "Toza Charm", "Klassika"],
      ru: ["Air Sole", "Натуральная Кожа", "Классика"]
    },
    description: {
      uz: "Nike Air Force 1 '07 afsonaviy basketbol poyabzalining eng yorqin davomini taqdim etadi. Yumshoq tabiiy charm, qalin amortizatsiyalovchi Air taglik va o'zgarmas dizayn.",
      ru: "Сияние продолжается в Nike Air Force 1 '07 — баскетбольной классике, получившей свежее прочтение: мягкая простроченная кожа, фирменная скрытая подушка Nike Air и нестареющий силуэт."
    },
    specs: {
      upper: { uz: "100% Premium tabiiy va sintetik charm", ru: "100% Натуральная и премиальная кожа" },
      sole: { uz: "Ko'pikli oraliq qatlam va rezina Air taglik", ru: "Пеноматериал со скрытой амортизацией Air" },
      closure: { uz: "Klassik bog'ichli mahkamlash", ru: "Традиционная шнуровка с металлическим дюбре" }
    },
    features: {
      uz: [
        "Ko'p yillik chidamlilikka ega qattiq tikuvlar",
        "Havoning erkin aylanishi uchun burundagi perforatsiyalar",
        "Yengil va elastik Nike Air amortizatsiyasi",
        "Sirpanmaydigan aylanma naqshli rezina protektor"
      ],
      ru: [
        "Прошитые кожаные накладки для максимальной прочности",
        "Перфорация на носке для естественной вентиляции",
        "Легендарная амортизация Nike Air для комфорта весь день",
        "Резиновая подметка с круговым протектором для надежного сцепления"
      ]
    }
  },
  {
    id: "dunk-low-panda",
    name: "Nike Dunk Low Retro 'Panda'",
    series: "Dunk",
    sku: "DD1391-100",
    category: "lifestyle",
    gender: "unisex",
    priceUSD: 140,
    priceUZS: 1780000,
    inStock: true,
    isNew: true,
    isFeatured: true,
    badge: {
      uz: "XIT SOTUV",
      ru: "БЕСТСЕЛЛЕР"
    },
    tagLine: {
      uz: "Universallik cho'qqisi bo'lgan oq-qora ranglar",
      ru: "Универсальный монохромный бестселлер"
    },
    image: "assets/images/nike-dunk-low.svg",
    gallery: [
      "assets/images/nike-dunk-low.svg",
      "assets/images/nike-dunk-low.svg"
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { id: "panda", name: { uz: "Oq va Qora (Panda)", ru: "Белый и Черный (Panda)" }, hex: "#18181B", border: "#27272A" },
      { id: "grey-fog", name: { uz: "Kulrang Tuman", ru: "Серый Туман" }, hex: "#9CA3AF", border: "#D1D5DB" }
    ],
    tags: {
      uz: ["Retro Basket", "Kam O'lchamli", "Kundalik"],
      ru: ["Ретро Баскетбол", "Низкий Профиль", "Повседневные"]
    },
    description: {
      uz: "1980-yillarning mashhur basketbol parketlaridan kelib chiqqan Nike Dunk Low bugungi kunda ko'cha madaniyatining ajralmas ramziga aylandi. Yuqori sifatli kontrastli qoplamalar.",
      ru: "Созданные для баскетбольных площадок 80-х, Nike Dunk Low триумфально вернулись с классическими контрастными накладками и ретро-вайбом. Идеальный баланс винтажа и уличного комфорта."
    },
    specs: {
      upper: { uz: "Yuqori sifatli tabiiy charm qoplamalar", ru: "Натуральная гладкая кожа" },
      sole: { uz: "Yumshoq ko'pik va bardoshli rezina", ru: "Пеноматериал и цепкая резиновая подошва" },
      closure: { uz: "Klassik tekis paxtali bog'ichlar", ru: "Классические плоские шнурки" }
    },
    features: {
      uz: [
        "Vaqt sinovidan o'tgan monoxrom ranglar gammasi",
        "Yumshoq pastki yoqasi to'piqqa qulay o'tiradi",
        "Og'irlik qilmaydigan yengil ko'pikli oraliq taglik"
      ],
      ru: [
        "Нестареющая цветовая палитра Panda",
        "Мягкий низкий бортик дарит непревзойденный комфорт щиколотке",
        "Упругая межподошва из легкого амортизирующего пеноматериала"
      ]
    }
  },
  {
    id: "air-jordan-1-low-chicago",
    name: "Air Jordan 1 Retro Low 'Chicago'",
    series: "Jordan",
    sku: "CZ0790-106",
    category: "basketball",
    gender: "men",
    priceUSD: 160,
    priceUZS: 2030000,
    inStock: true,
    isNew: false,
    isFeatured: true,
    badge: {
      uz: "EKSKLYUZIV",
      ru: "ЭКСКЛЮЗИВ"
    },
    tagLine: {
      uz: "Maykl Jordan merosining tirik timsoli",
      ru: "Символ баскетбольной истории Майкла Джордана"
    },
    image: "assets/images/nike-air-jordan-1.svg",
    gallery: [
      "assets/images/nike-air-jordan-1.svg",
      "assets/images/nike-air-jordan-1.svg"
    ],
    sizes: [41, 42, 43, 44, 45],
    colors: [
      { id: "chicago", name: { uz: "Varsity Red / Qora / Oq", ru: "Varsity Red / Черный / Белый" }, hex: "#DC2626", border: "#B91C1C" }
    ],
    tags: {
      uz: ["Jordan Heritage", "Air Amortizatsiya", "Tarixiy"],
      ru: ["Наследие Jordan", "Air Амортизация", "История"]
    },
    description: {
      uz: "1985-yilda basketbol olamini ostin-ustun qilgan afsonaviy ranglar uyg'unligi. Past qirqimli zamonaviy dizayn va tovondagi Wings logotipi.",
      ru: "Легендарная расцветка Чикаго, изменившая баскетбол и культуру кроссовок в 1985 году. Низкий профиль, фирменный брендинг Wings на пятке и капсула Air-Sole."
    },
    specs: {
      upper: { uz: "Premium tabiiy silliq charm", ru: "Высококачественная премиум кожа" },
      sole: { uz: "Encapsulated Air-Sole kapsulasi", ru: "Встроенная газовая подушка Air-Sole" },
      closure: { uz: "Sport bog'ichlari", ru: "Текстильные прочные шнурки" }
    },
    features: {
      uz: [
        "Tovon qismidagi o'yilgan Wings timsoli",
        "Air-Sole yostiqchasi qadam tashlashni yumshatadi",
        "Yengil va past profil harakat erkinligini beradi"
      ],
      ru: [
        "Тисненый логотип Wings на заднике",
        "Скрытая воздушная капсула Air-Sole для поглощения ударов",
        "Низкопрофильный силуэт обеспечивает полную свободу движений"
      ]
    }
  },
  {
    id: "nike-zoom-vomero-5",
    name: "Nike Zoom Vomero 5 'Cobblestone'",
    series: "Vomero",
    sku: "FB9149-001",
    category: "running",
    gender: "unisex",
    priceUSD: 180,
    priceUZS: 2280000,
    inStock: true,
    isNew: true,
    isFeatured: true,
    badge: {
      uz: "YANGI TREND",
      ru: "ТРЕНД СЕЗОНА"
    },
    tagLine: {
      uz: "Y2K estetikasiga ega eng qulay yugurish krossovkasi",
      ru: "Абсолютный комфорт в эстетике ранних 2000-х"
    },
    image: "assets/images/nike-vomero-5.svg",
    gallery: [
      "assets/images/nike-vomero-5.svg",
      "assets/images/nike-vomero-5.svg"
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { id: "silver", name: { uz: "Kumush va Kulrang (Silver)", ru: "Серебристый и Графит (Silver)" }, hex: "#9CA3AF", border: "#D1D5DB" },
      { id: "oatmeal", name: { uz: "Oatmeal / Pale Ivory", ru: "Овсяный / Pale Ivory" }, hex: "#E5E7EB", border: "#E5E7EB" }
    ],
    tags: {
      uz: ["Zoom Air", "Y2K Tech", "Ko'p Qatlamli"],
      ru: ["Zoom Air", "Y2K Технологии", "Многослойный"]
    },
    description: {
      uz: "Nike Zoom Vomero 5 murakkab plastik qafaslar, nafas oluvchi to'r va ikkita Zoom Air yostiqchalarini birlashtiradi. Bugungi moda olamining eng talabgir krossovkalaridan biri.",
      ru: "Многослойный дизайн, технологичная вентилируемая сетка, пластиковые боковые решетки и двойная амортизация Zoom Air делают Vomero 5 эталоном повседневного комфорта."
    },
    specs: {
      upper: { uz: "Sintetik teri va to'rli shamollatish panellari", ru: "Текстильная сетка TecTuff и синтетические накладки" },
      sole: { uz: "Cushlon ko'pik va Zoom Air amortizatorlari", ru: "Пеноматериал Cushlon с двойными вставками Zoom Air" },
      closure: { uz: "Tezkor mustahkam bog'ichlar", ru: "Спортивная шнуровка" }
    },
    features: {
      uz: [
        "Old va orqa qismdagi ikkita mustaqil Zoom Air kapsulasi",
        "Shamollatish teshiklariga ega yon himoya qafasi",
        "Qorong'uda nur qaytaruvchi reflektor detallar"
      ],
      ru: [
        "Двойные воздушные подушки Zoom Air в пятке и носке",
        "Вентилируемая пластиковая клетка в средней части стопы",
        "Светоотражающие акценты для ночной безопасности"
      ]
    }
  },
  {
    id: "nike-air-max-plus-sunset",
    name: "Nike Air Max Plus (Tn)",
    series: "Air Max",
    sku: "DM0032-800",
    category: "running",
    gender: "men",
    priceUSD: 190,
    priceUZS: 2410000,
    inStock: true,
    isNew: false,
    isFeatured: true,
    badge: {
      uz: "TUNED AIR",
      ru: "TUNED AIR"
    },
    tagLine: {
      uz: "Okean to'lqinlari va palma daraxtlaridan ilhomlangan",
      ru: "Вдохновленные закатом океана и пальмовыми ветвями"
    },
    image: "assets/images/nike-air-max-plus.svg",
    gallery: [
      "assets/images/nike-air-max-plus.svg",
      "assets/images/nike-air-max-plus.svg"
    ],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: [
      { id: "sunset", name: { uz: "Quyosh Botishi (Sunset)", ru: "Закат (Sunset Gradient)" }, hex: "#EA580C", border: "#C2410C" },
      { id: "triple-black", name: { uz: "To'liq Qora", ru: "Полный Черный" }, hex: "#0F172A", border: "#1E293B" }
    ],
    tags: {
      uz: ["Tuned Air", "Gradient", "Dovyurak Dizayn"],
      ru: ["Tuned Air", "Градиент", "Смелый Силуэт"]
    },
    description: {
      uz: "Shon Makdauell tomonidan 1998-yilda yaratilgan afsonaviy 'Tn'. Polimer qovurg'alari va tovon-oyoq ostidagi alohida sozlangan Tuned Air havo kameralari.",
      ru: "Шон Макдауэлл создал легендарные 'Tn' в 1998 году под впечатлением от заката во Флориде. Фирменный экзоскелет из TPU и раздельные камеры Tuned Air для безупречной стабильности."
    },
    specs: {
      upper: { uz: "Nafas oluvchi gradient to'r va TPU qovurg'alari", ru: "Дышащий текстиль с TPU каркасом" },
      sole: { uz: "Ko'p kamerali Tuned Air va mustahkam rezina", ru: "Многокамерная система Tuned Air" },
      closure: { uz: "Kuchaytirilgan ko'zli bog'ichlar", ru: "Усиленная шнуровка" }
    },
    features: {
      uz: [
        "Kit dumi shaklidagi oraliq suyanchiq arkasi",
        "Palma daraxtlaridan ilhomlangan TPU qafas",
        "Har bir qadamni yumshatuvchi Tuned Air texnologiyasi"
      ],
      ru: [
        "Супинатор в виде хвоста кита для анатомической поддержки стопы",
        "Пластиковые волны TPU, напоминающие пальмовые ветви",
        "Точечно настроенные воздушные подушки Tuned Air"
      ]
    }
  },
  {
    id: "nike-p-6000-chrome",
    name: "Nike P-6000 'Metallic Silver'",
    series: "P-6000",
    sku: "CD6404-006",
    category: "retro",
    gender: "women",
    priceUSD: 120,
    priceUZS: 1520000,
    inStock: true,
    isNew: true,
    isFeatured: false,
    badge: {
      uz: "YANGI KELGAN",
      ru: "НОВОЕ ПОСТУПЛЕНИЕ"
    },
    tagLine: {
      uz: "Pegasus 2006 modelining qayta tug'ilishi",
      ru: "Перерождение беговой эстетики Pegasus 2006"
    },
    image: "assets/images/nike-p6000.svg",
    gallery: [
      "assets/images/nike-p6000.svg",
      "assets/images/nike-p6000.svg"
    ],
    sizes: [38, 39, 40, 41, 42, 43],
    colors: [
      { id: "chrome", name: { uz: "Metall Xrom / Qizil", ru: "Хром Металлик / Красный" }, hex: "#CBD5E1", border: "#94A3B8" }
    ],
    tags: {
      uz: ["Y2K Runner", "Engil", "Kumush To'r"],
      ru: ["Y2K Runner", "Легкие", "Серебряная Сетка"]
    },
    description: {
      uz: "Nike Pegasus seriyasining 2000-yillar boshidagi xarakterini mujassam etgan yugurish krossovkasi. Gorizontal va vertikal metall tasmalar qulaylik va o'zgacha uslub beradi.",
      ru: "Модель P-6000 объединила черты моделей Pegasus 2006 года. Спортивные металлизированные линии, дышащая сетка и комфортная легкая подошва для динамичных прогулок."
    },
    specs: {
      upper: { uz: "Nafas oluvchi to'r va yaltiroq qoplamalar", ru: "Сетка и блестящие синтетические ленты" },
      sole: { uz: "Ko'pikli oraliq qatlam va Waffle rezina", ru: "Подошва из пены и цепкая вафельная резина" },
      closure: { uz: "Yengil to'qilgan bog'ichlar", ru: "Шнуровка с мягким язычком" }
    },
    features: {
      uz: [
        "Nafas oluvchi to'qima oyoqni qizib ketishdan saqlaydi",
        "Waffle taglik qoplamasi ishonchli ushlab turadi",
        "Zamonaviy Y2K ko'cha uslubi bilan mos keladi"
      ],
      ru: [
        "Сетчатый верх обеспечивает отличную циркуляцию воздуха",
        "Вафельная резиновая подошва предотвращает скольжение",
        "Идеальное попадание в тренд массивных беговых кроссовок Y2K"
      ]
    }
  },
  {
    id: "nike-air-pegasus-2k5",
    name: "Nike Air Pegasus 2K5 'Racer Blue'",
    series: "Pegasus",
    sku: "FN7153-101",
    category: "running",
    gender: "men",
    priceUSD: 150,
    priceUZS: 1900000,
    inStock: true,
    isNew: false,
    isFeatured: false,
    badge: {
      uz: "TEZKOR YUGURISH",
      ru: "БЕГОВОЙ ТЕХ"
    },
    tagLine: {
      uz: "2005-yilgi professional yugurish texnologiyalari",
      ru: "Технологии профессионального бега 2005 года"
    },
    image: "assets/images/nike-pegasus-2k5.svg",
    gallery: [
      "assets/images/nike-pegasus-2k5.svg",
      "assets/images/nike-pegasus-2k5.svg"
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { id: "racer-blue", name: { uz: "Racer Moviy va Oq", ru: "Racer Синий и Белый" }, hex: "#2563EB", border: "#1D4ED8" }
    ],
    tags: {
      uz: ["Full-Length Air", "Yugurish", "Ultra Nafas"],
      ru: ["Full-Length Air", "Бег", "Дышащие"]
    },
    description: {
      uz: "Qaytgan afsona — Air Pegasus 2K5 to'liq o'lchamli Air gaz yostig'i bilan qadamga quvvat beradi. Dinamik chiziqlar va poyezd tezligidagi harakatlanish.",
      ru: "Возвращение легенды 2005 года: беговые кроссовки Air Pegasus 2K5 с полноразмерной воздушной подушкой Air. Идеальны для марафонских дистанций и активного ритма города."
    },
    specs: {
      upper: { uz: "Texnik to'r va shamollatish tasmalar", ru: "Техническая сетка с полимерным укреплением" },
      sole: { uz: "To'liq bo'ylama Air gaz yostig'i", ru: "Полноразмерный блок Air во всю длину подошвы" },
      closure: { uz: "Mustahkam sport bog'ichlari", ru: "Прочная шнуровка" }
    },
    features: {
      uz: [
        "To'liq taglik bo'ylab cho'zilgan amortizatsiya",
        "Kuchli shamollatish panellari",
        "Egiluvchan taglik qirralari"
      ],
      ru: [
        "Амортизация по всей длине стопы",
        "Улучшенная вентиляция в зоне носка и боковин",
        "Анатомические гибкие канавки на подметке"
      ]
    }
  },
  {
    id: "nike-cortez-vintage",
    name: "Nike Cortez '72 Vintage",
    series: "Cortez",
    sku: "DM4044-100",
    category: "retro",
    gender: "unisex",
    priceUSD: 110,
    priceUZS: 1390000,
    inStock: true,
    isNew: false,
    isFeatured: true,
    badge: {
      uz: "ENG BIRINCHI MEROS",
      ru: "ИСТОРИЯ 1972"
    },
    tagLine: {
      uz: "Bill Bouerman tomonidan yaratilgan birinchi krossovka",
      ru: "Первый беговой шедевр Билла Бауэрмана"
    },
    image: "assets/images/nike-cortez.svg",
    gallery: [
      "assets/images/nike-cortez.svg",
      "assets/images/nike-cortez.svg"
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: [
      { id: "og-white-red", name: { uz: "Klassik Oq / Qizil / Moviy", ru: "Классический Белый / Красный / Синий" }, hex: "#DC2626", border: "#B91C1C" }
    ],
    tags: {
      uz: ["Bill Bowerman", "Suede & Leather", "Tarix"],
      ru: ["Билл Бауэрман", "Замша и Кожа", "История"]
    },
    description: {
      uz: "1972-yilda dunyo yuzini ko'rgan Nike Cortez — brend tarixidagi eng birinchi yugurish poyabzali. Ko'k chiziqli xanjar shaklidagi o'rta taglik va arra tishli rezina protektor.",
      ru: "Созданные тренером Биллом Бауэрманом в 1972 году, Cortez стали первыми беговыми кроссовками Nike. Неповторимая двухцветная подошва-клинышек и винтажный шарм."
    },
    specs: {
      upper: { uz: "Silliq tabiiy charm va zamsh qoplamalar", ru: "Мягкая натуральная кожа с замшевым мыском" },
      sole: { uz: "EVA ko'pikli xanjar va baliq suyagi naqshli rezina", ru: "Клиновидная пена EVA и подметка 'елочка'" },
      closure: { uz: "Klassik retro bog'ichlar", ru: "Винтажная шнуровка" }
    },
    features: {
      uz: [
        "Engil va ixcham siluet",
        "Baliq suyagi naqshli protektor toymanishni oldini oladi",
        "O'ziga xos moviy rangli o'rta qatlam (Wedge)"
      ],
      ru: [
        "Невероятно легкий и изящный силуэт на ноге",
        "Зигзагообразный протектор 'елочка' для цепкости",
        "Культовая синяя полоса в клиновидной промежуточной подошве"
      ]
    }
  }
];


  // --- 3. Reactive Store ---
  /**
 * =====================================================================
 * REACTIVE GLOBAL STORE & STATE MANAGEMENT
 * =====================================================================
 */




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

const store = new Store();


  // --- 4. Components ---
  


function renderNavbar() {
  const t = store.t;
  const currentLang = store.state.lang;
  const cartCount = store.cartCount;
  const favCount = store.state.favorites.length;

  const lifestyleCount = products.filter(p => p.category === 'lifestyle').length;
  const performanceCount = products.filter(p => p.category === 'running').length;
  const heritageCount = products.filter(p => p.category === 'retro').length;

  return `
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        <!-- Left: Status Pill Badge (Matching Reference 1 "Available for New Project") -->
        <div class="flex items-center gap-4">
          <a href="#hero" class="flex items-center gap-2 group focus:outline-none" aria-label="Nike Home">
            <!-- Nike Swoosh SVG -->
            <svg class="w-12 h-6 text-black group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.707 5.293c-2.457 1.83-5.26 3.518-8.414 5.065-2.827 1.385-5.69 2.56-8.593 3.525C2.868 14.49 1.5 15.02 0 15.485c2.435-.29 4.887-.91 7.355-1.86 3.238-1.246 6.305-2.87 9.2-4.872 2.21-1.53 4.093-3.237 5.152-3.46z"/>
            </svg>
          </a>

          <div class="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200/80 bg-white text-xs font-medium text-neutral-800 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>${t.nav.statusBadge}</span>
          </div>
        </div>

        <!-- Center: Editorial Navigation Links with Counts (Matching Reference 1) -->
        <nav class="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-600">
          <a href="#catalog" class="hover:text-black transition-colors flex items-center gap-1 group">
            <span>${t.nav.catalog}</span>
            <span class="text-neutral-400 group-hover:text-black transition-colors font-normal">[${products.length}]</span>
          </a>
          <a href="#catalog" data-nav-category="lifestyle" class="hover:text-black transition-colors flex items-center gap-1 group">
            <span>${t.nav.editions}</span>
            <span class="text-neutral-400 group-hover:text-black transition-colors font-normal">[${lifestyleCount}]</span>
          </a>
          <a href="#catalog" data-nav-category="running" class="hover:text-black transition-colors flex items-center gap-1 group">
            <span>${t.nav.performance}</span>
            <span class="text-neutral-400 group-hover:text-black transition-colors font-normal">[${performanceCount}]</span>
          </a>
          <a href="#story" class="hover:text-black transition-colors flex items-center gap-1 group">
            <span>${t.nav.heritage}</span>
            <span class="text-neutral-400 group-hover:text-black transition-colors font-normal">[${heritageCount}]</span>
          </a>
          <a href="#footer" class="hover:text-black transition-colors">
            ${t.nav.about}
          </a>
        </nav>

        <!-- Right Controls: Language Switch, Search, Wishlist, Cart & Primary Pill Button -->
        <div class="flex items-center gap-2 sm:gap-3">
          
          <!-- Language Switcher Pill (UZ / RU) -->
          <div class="flex items-center p-0.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-bold" role="group" aria-label="Language Selector">
            <button 
              type="button" 
              data-lang="uz" 
              class="px-2.5 py-1 rounded-full transition-all ${currentLang === 'uz' ? 'bg-black text-white shadow-sm' : 'text-neutral-600 hover:text-black'}"
              title="O'zbek tili"
            >
              UZ
            </button>
            <button 
              type="button" 
              data-lang="ru" 
              class="px-2.5 py-1 rounded-full transition-all ${currentLang === 'ru' ? 'bg-black text-white shadow-sm' : 'text-neutral-600 hover:text-black'}"
              title="Русский язык"
            >
              RU
            </button>
          </div>

          <!-- Search Trigger Button -->
          <button 
            type="button" 
            id="nav-search-btn"
            class="w-9 h-9 rounded-full border border-neutral-200/80 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all"
            aria-label="${t.nav.searchShortcut}"
            title="${t.nav.searchShortcut}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke-width="2"/>
              <path d="m21 21-4.3-4.3" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- Favorites / Wishlist Trigger -->
          <button 
            type="button" 
            id="nav-favs-btn"
            class="relative w-9 h-9 rounded-full border border-neutral-200/80 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all"
            aria-label="${t.nav.wishlist}"
            title="${t.nav.wishlist}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            ${favCount > 0 ? `<span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">${favCount}</span>` : ''}
          </button>

          <!-- Cart Trigger -->
          <button 
            type="button" 
            id="nav-cart-btn"
            class="relative w-9 h-9 rounded-full border border-neutral-200/80 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all"
            aria-label="${t.nav.cart}"
            title="${t.nav.cart}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            ${cartCount > 0 ? `<span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center animate-scale">${cartCount}</span>` : ''}
          </button>

          <!-- Primary CTA Button (Matching Reference 1 "Let's Talk ↗") -->
          <a href="#catalog" class="pill-button-black hidden sm:inline-flex text-xs py-2 px-4">
            <span>${t.nav.cta}</span>
            <span class="text-xs">↗</span>
          </a>

          <!-- Mobile Menu Trigger -->
          <button 
            type="button" 
            id="mobile-menu-btn"
            class="lg:hidden w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:border-black"
            aria-label="${t.nav.mobileMenu}"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

        </div>
      </div>
    </header>
  `;
}

  


function renderHero() {
  const t = store.t;
  const featured = products.find(p => p.id === HERO_CONFIG.featuredProductId) || products[0];

  return `
    <section id="hero" class="relative bg-white pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-neutral-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- =====================================================================
             GIANT DUAL-STYLE EDITORIAL HEADLINE (REFERENCE 1: OUTLINE + SOLID)
             "AIR" (Outline text-stroke) + "AURA" (Solid deep black)
             ===================================================================== -->
        <div class="w-full text-center select-none pt-2 pb-6 md:pb-8">
          <h1 class="text-6xl sm:text-8xl md:text-[130px] lg:text-[160px] font-black uppercase tracking-tight leading-[0.85] font-editorial flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            <span class="text-outline-hero">${t.hero.outlineWord}</span>
            <span class="text-solid-hero">${t.hero.solidWord}</span>
          </h1>
        </div>

        <!-- =====================================================================
             CENTRAL PRODUCT SHOWCASE STAGE (PREPARED FOR USER'S SNEAKER IMAGE)
             Isolated container with smooth ambient shadow and floating micro-motion
             ===================================================================== -->
        <div class="relative w-full max-w-4xl mx-auto my-2 md:my-6 flex items-center justify-center min-h-[300px] sm:min-h-[420px] md:min-h-[480px]">
          
          <!-- Subtle Radial Ambient Lighting behind product -->
          <div class="absolute inset-0 bg-gradient-to-b from-neutral-100/50 via-neutral-50/20 to-transparent rounded-full filter blur-3xl -z-10 transform scale-90"></div>

          <!-- Pulsing Floor Shadow -->
          <div class="absolute bottom-6 sm:bottom-10 w-2/3 h-10 bg-black/15 rounded-full filter blur-xl hero-shadow-pulse -z-10"></div>

          <!-- The Hero Sneaker Presentation (Image replacement target) -->
          <div 
            class="relative z-10 hero-sneaker-float cursor-pointer group"
            data-hero-product-id="${featured.id}"
            title="${featured.name} — Click to view details"
          >
            <!-- 
              HERO SNEAKER ASSET:
              Configured via HERO_CONFIG.heroImage in 'js/data/products.js'.
              Replace this path whenever you have your actual Nike shoe photograph!
            -->
            <img 
              id="hero-sneaker-img"
              src="${HERO_CONFIG.heroImage}" 
              alt="${featured.name}" 
              class="w-full max-w-md sm:max-w-xl md:max-w-2xl object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
            />

            <!-- Subtle Interactive Tag Indicator -->
            <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span class="pill-badge bg-black text-white text-[11px] py-1 px-3 border-black">
                ${t.card.quickView} ↗
              </span>
            </div>
          </div>
        </div>

        <!-- =====================================================================
             LOWER SECTION: ASYMMETRIC 2-COLUMN COMPOSITION (REFERENCE 1 LAYOUT)
             Left: Title + Editorial Copy + Pill CTA
             Right: Vertical Stack of Spec Pill Badges
             ===================================================================== -->
        <div class="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          
          <!-- Lower Left: Editorial Statement & Primary Action -->
          <div class="md:col-span-6 lg:col-span-5 space-y-4">
            <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <span class="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span>${t.hero.subtitle}</span>
            </div>

            <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              ${featured.name}
            </h2>

            <p class="text-sm text-neutral-500 font-normal leading-relaxed max-w-md">
              ${t.hero.desc}
            </p>

            <div class="pt-2 flex items-center gap-3 flex-wrap">
              <a href="#catalog" class="pill-button-black">
                <span>${t.hero.ctaPrimary}</span>
                <span class="text-sm">↗</span>
              </a>

              <button 
                type="button" 
                data-open-product="${featured.id}" 
                class="pill-button-outline"
              >
                <span>${t.hero.ctaSecondary}</span>
              </button>
            </div>
          </div>

          <!-- Spacer for asymmetric balance -->
          <div class="hidden md:block md:col-span-1 lg:col-span-2"></div>

          <!-- Lower Right: Vertical Stack of Pills (Matching Dribbble/Instagram stack in Reference 1) -->
          <div class="md:col-span-5 lg:col-span-5 flex flex-col items-start md:items-end gap-2.5">
            
            <div class="pill-badge hover:bg-neutral-50 cursor-default">
              <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>${t.hero.specs.airSole}</span>
            </div>

            <div class="pill-badge hover:bg-neutral-50 cursor-default">
              <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span>${t.hero.specs.leather}</span>
            </div>

            <div class="pill-badge hover:bg-neutral-50 cursor-default">
              <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>${t.hero.specs.delivery}</span>
            </div>

            <div class="pill-badge hover:bg-neutral-50 cursor-default">
              <svg class="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>${t.hero.specs.authentic}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

  

function renderMarquee() {
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

  


function renderFilterBar() {
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

  

function renderProductCard(product) {
  const t = store.t;
  const isFav = store.isFavorite(product.id);
  const badgeText = product.badge[store.state.lang] || product.badge.uz;
  const tags = product.tags[store.state.lang] || product.tags.uz;
  const tagLine = product.tagLine[store.state.lang] || product.tagLine.uz;

  // Format currency
  const formattedUZS = new Intl.NumberFormat('uz-UZ').format(product.priceUZS);

  return `
    <article 
      class="editorial-card group" 
      data-product-id="${product.id}"
    >
      <!-- Media Stage with subtle rounded container -->
      <div class="card-media-wrapper cursor-pointer" data-open-product="${product.id}">
        
        <!-- Top Left: Clean Editorial Badge (Matching Reference 3 "EXPLORATION" / "REAL PROJECT") -->
        <div class="absolute top-3.5 left-3.5 z-10">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-neutral-200/70 text-[10px] font-extrabold uppercase tracking-wider text-neutral-800 shadow-xs">
            ${badgeText}
          </span>
        </div>

        <!-- Top Right: Wishlist / Favorite Heart Toggle -->
        <button 
          type="button" 
          data-fav-toggle="${product.id}"
          class="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm border border-neutral-200/70 flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${
            isFav ? 'text-red-500 fill-red-500' : 'text-neutral-500 hover:text-black'
          }"
          aria-label="${t.nav.wishlist}"
          title="${t.nav.wishlist}"
        >
          <svg class="w-4 h-4" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>

        <!-- Product Sneaker Artwork -->
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-full object-contain pointer-events-none"
          loading="lazy"
        />

        <!-- Hover Overlay: Quick View Pill -->
        <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span class="pill-badge bg-black text-white text-xs py-1.5 px-3.5 border-black shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            ${t.card.quickView} ↗
          </span>
        </div>
      </div>

      <!-- Card Information Section (Matching Reference 3 typography & spacing) -->
      <div class="mt-4 flex flex-col flex-1 justify-between space-y-3">
        
        <div>
          <!-- Title & Dual Price Row -->
          <div class="flex items-start justify-between gap-2">
            <h3 
              class="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-black cursor-pointer leading-snug"
              data-open-product="${product.id}"
            >
              ${product.name}
            </h3>

            <div class="text-right whitespace-nowrap">
              <span class="text-base font-extrabold text-neutral-900">$${product.priceUSD}</span>
              <span class="block text-[11px] font-medium text-neutral-400">${formattedUZS} ${t.card.currencyUzs}</span>
            </div>
          </div>

          <!-- Subtitle / Tagline -->
          <p class="text-xs text-neutral-500 font-normal mt-0.5 line-clamp-1">
            ${tagLine}
          </p>
        </div>

        <!-- Bottom Row: Pill Chips (Matching Reference 3 [Landing Page] [Kumpin Studio]) & Add Button -->
        <div class="pt-2 border-t border-neutral-100 flex items-center justify-between gap-2 flex-wrap">
          
          <!-- Metadata Pill Chips -->
          <div class="flex items-center gap-1.5 flex-wrap">
            ${tags.slice(0, 2).map(tag => `
              <span class="pill-tag text-[11px] py-1 px-2.5">
                ${tag}
              </span>
            `).join('')}
            <span class="pill-tag text-[11px] py-1 px-2 text-neutral-400">
              EU ${product.sizes[0]}–${product.sizes[product.sizes.length - 1]}
            </span>
          </div>

          <!-- Quick Add to Cart Pill Button -->
          <button 
            type="button" 
            data-quick-add="${product.id}"
            class="text-xs font-bold text-neutral-900 hover:text-black inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-200 hover:border-black transition-all hover:bg-neutral-50 active:scale-95"
            title="${t.card.addToCart}"
          >
            <span>+</span>
            <span>${t.card.addToCart}</span>
          </button>

        </div>

      </div>
    </article>
  `;
}

  


function renderProductGrid() {
  const t = store.t;
  const filteredProducts = store.getFilteredProducts();

  if (filteredProducts.length === 0) {
    return `
      <section id="catalog" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div class="max-w-md mx-auto space-y-4">
          <div class="w-16 h-16 mx-auto rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke-width="2"/>
              <path d="m21 21-4.3-4.3" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900">${t.search.noResults}</h3>
          <p class="text-sm text-neutral-500">Iltimos, boshqa filtr yoki qidiruv so'zini sinab ko'ring.</p>
          <button 
            type="button" 
            id="empty-reset-btn" 
            class="pill-button-black text-xs py-2 px-6"
          >
            ${t.filters.clearAll}
          </button>
        </div>
      </section>
    `;
  }

  return `
    <section id="catalog" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <!-- 2-Column Editorial Grid matching Reference 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        ${filteredProducts.map(product => renderProductCard(product)).join('')}
      </div>
    </section>
  `;
}

  

function renderStorySection() {
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

  

function renderProductModal() {
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

  

function renderCartDrawer() {
  if (store.state.activeModal !== 'cart') return '';

  const t = store.t;
  const cart = store.state.cart;
  const currentLang = store.state.lang;
  const subtotalUSD = store.cartSubtotalUSD;
  const subtotalUZS = store.cartSubtotalUZS;
  const isFreeDelivery = subtotalUSD >= 100;
  const deliveryUSD = cart.length === 0 || isFreeDelivery ? 0 : 10;
  const deliveryUZS = cart.length === 0 || isFreeDelivery ? 0 : 125000;
  const totalUSD = subtotalUSD + deliveryUSD;
  const totalUZS = subtotalUZS + deliveryUZS;

  const formattedSubtotalUZS = new Intl.NumberFormat('uz-UZ').format(subtotalUZS);
  const formattedTotalUZS = new Intl.NumberFormat('uz-UZ').format(totalUZS);

  return `
    <div class="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" id="cart-drawer">
      
      <!-- Backdrop -->
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>

      <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
        
        <div class="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-100 drawer-panel">
          
          <!-- Header -->
          <div class="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <h2 class="text-lg font-black text-neutral-900 uppercase tracking-tight">${t.cart.title}</h2>
              <span class="w-5 h-5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold flex items-center justify-center">
                ${store.cartCount}
              </span>
            </div>

            <button 
              type="button" 
              data-close-modal 
              class="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black hover:border-black"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <!-- Body Items List -->
          <div class="p-6 flex-1 overflow-y-auto divide-y divide-neutral-100">
            ${cart.length === 0 ? `
              <div class="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div class="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-neutral-900">${t.cart.emptyTitle}</h3>
                <p class="text-xs text-neutral-500 max-w-xs leading-relaxed">${t.cart.emptyDesc}</p>
                <button 
                  type="button" 
                  data-close-modal 
                  class="pill-button-black text-xs py-2.5 px-6"
                >
                  ${t.cart.exploreBtn}
                </button>
              </div>
            ` : cart.map((item, idx) => `
              <div class="py-4 flex gap-4 items-center">
                <!-- Thumbnail -->
                <div class="w-20 h-20 rounded-xl bg-neutral-100 p-2 flex-shrink-0 flex items-center justify-center">
                  <img src="${item.product.image}" alt="${item.product.name}" class="w-full h-full object-contain" />
                </div>

                <!-- Info -->
                <div class="flex-1 min-w-0 space-y-1">
                  <div class="flex items-start justify-between gap-2">
                    <h4 class="text-xs font-bold text-neutral-900 truncate">${item.product.name}</h4>
                    <button 
                      type="button" 
                      data-remove-cart="${idx}"
                      class="text-neutral-400 hover:text-red-500 transition-colors text-xs font-semibold"
                      title="O'chirish"
                    >
                      ✕
                    </button>
                  </div>

                  <div class="text-[11px] text-neutral-500 flex items-center gap-2">
                    <span>${t.cart.sizeLabel}: <strong>EU ${item.size}</strong></span>
                    ${item.color ? `<span>• ${item.color.name[currentLang] || item.color.name.uz}</span>` : ''}
                  </div>

                  <div class="flex items-center justify-between pt-1">
                    <!-- Quantity Stepper -->
                    <div class="inline-flex items-center rounded-full border border-neutral-200 text-xs font-bold">
                      <button type="button" data-cart-delta="${idx}" data-delta="-1" class="px-2 py-0.5 hover:bg-neutral-100 rounded-l-full">-</button>
                      <span class="px-2">${item.quantity}</span>
                      <button type="button" data-cart-delta="${idx}" data-delta="1" class="px-2 py-0.5 hover:bg-neutral-100 rounded-r-full">+</button>
                    </div>

                    <div class="text-right">
                      <div class="text-xs font-extrabold text-neutral-900">$${item.product.priceUSD * item.quantity}</div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Footer / Totals & Checkout -->
          ${cart.length > 0 ? `
            <div class="p-6 border-t border-neutral-100 bg-[#FBFBFC] space-y-3">
              <div class="flex items-center justify-between text-xs text-neutral-500">
                <span>${t.cart.subtotal}</span>
                <span class="font-bold text-neutral-900">$${subtotalUSD}</span>
              </div>

              <div class="flex items-center justify-between text-xs text-neutral-500">
                <span>${t.cart.shipping}</span>
                <span class="font-bold text-emerald-600">${isFreeDelivery ? t.cart.freeShipping : '$10'}</span>
              </div>

              <div class="pt-2 border-t border-neutral-200 flex items-baseline justify-between">
                <div>
                  <span class="text-sm font-black text-neutral-900 uppercase tracking-tight">${t.cart.total}</span>
                  <span class="block text-[11px] text-neutral-400 font-semibold">${formattedTotalUZS} ${t.card.currencyUzs}</span>
                </div>
                <span class="text-xl font-black text-neutral-900">$${totalUSD}</span>
              </div>

              <button 
                type="button" 
                id="cart-checkout-btn"
                class="pill-button-black w-full py-3.5 text-xs tracking-wider"
              >
                <span>${t.cart.checkoutBtn}</span>
                <span>↗</span>
              </button>
            </div>
          ` : ''}

        </div>

      </div>

    </div>
  `;
}

  

function renderCheckoutModal() {
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

  


function renderSearchModal() {
  if (store.state.activeModal !== 'search') return '';

  const t = store.t;
  const query = store.state.searchQuery;
  const filtered = query.trim() ? store.getFilteredProducts() : [];

  const popularSearches = ["Air Force", "Dunk", "Jordan", "Vomero", "Cortez", "Pegasus"];

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" id="search-modal">
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>
      
      <div class="min-h-full flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
        <div class="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden p-6 sm:p-8 space-y-6">
          
          <!-- Search Input Row -->
          <div class="relative flex items-center border-b-2 border-black pb-3">
            <svg class="w-6 h-6 text-neutral-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke-width="2"/>
              <path d="m21 21-4.3-4.3" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input 
              type="text" 
              id="search-input-field" 
              placeholder="${t.search.placeholder}"
              value="${query}"
              class="w-full text-base sm:text-lg font-bold text-neutral-900 focus:outline-none placeholder-neutral-400"
              autofocus
            />
            <button 
              type="button" 
              data-close-modal 
              class="ml-3 text-xs font-bold text-neutral-400 hover:text-black"
            >
              ESC
            </button>
          </div>

          <!-- Popular Searches Pills -->
          <div class="space-y-2">
            <div class="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              ${t.search.popular}:
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              ${popularSearches.map(term => `
                <button 
                  type="button" 
                  data-search-chip="${term}"
                  class="pill-tag hover:bg-black hover:text-white transition-colors"
                >
                  ${term}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Live Results -->
          ${query.trim() ? `
            <div class="space-y-3 pt-2">
              <div class="text-xs font-bold text-neutral-900">
                ${filtered.length} ta natija:
              </div>

              ${filtered.length === 0 ? `
                <p class="text-xs text-neutral-400 py-4 text-center">${t.search.noResults}</p>
              ` : `
                <div class="divide-y divide-neutral-100 max-h-72 overflow-y-auto">
                  ${filtered.map(p => `
                    <div 
                      class="py-3 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50 px-3 rounded-xl transition-colors"
                      data-open-product="${p.id}"
                    >
                      <div class="flex items-center gap-3">
                        <img src="${p.image}" alt="${p.name}" class="w-12 h-12 object-contain bg-neutral-100 rounded-lg p-1" />
                        <div>
                          <h4 class="text-xs font-bold text-neutral-900">${p.name}</h4>
                          <span class="text-[11px] text-neutral-400">${p.series} • ${p.category}</span>
                        </div>
                      </div>
                      <span class="text-xs font-black text-neutral-900">$${p.priceUSD}</span>
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          ` : ''}

        </div>
      </div>
    </div>
  `;
}

  


function renderFavoritesDrawer() {
  if (store.state.activeModal !== 'favorites') return '';

  const t = store.t;
  const favIds = store.state.favorites;
  const favProducts = products.filter(p => favIds.includes(p.id));

  return `
    <div class="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" id="favorites-drawer">
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>

      <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-100 drawer-panel">
          
          <!-- Header -->
          <div class="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <h2 class="text-lg font-black text-neutral-900 uppercase tracking-tight">${t.favorites.title}</h2>
              <span class="w-5 h-5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold flex items-center justify-center">
                ${favProducts.length}
              </span>
            </div>

            <button 
              type="button" 
              data-close-modal 
              class="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black hover:border-black"
            >
              ✕
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 flex-1 overflow-y-auto divide-y divide-neutral-100">
            ${favProducts.length === 0 ? `
              <div class="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div class="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-neutral-900">${t.favorites.emptyTitle}</h3>
                <p class="text-xs text-neutral-500 max-w-xs leading-relaxed">${t.favorites.emptyDesc}</p>
                <button 
                  type="button" 
                  data-close-modal 
                  class="pill-button-black text-xs py-2.5 px-6"
                >
                  ${t.cart.exploreBtn}
                </button>
              </div>
            ` : favProducts.map(p => `
              <div class="py-4 flex gap-4 items-center">
                <div class="w-16 h-16 rounded-xl bg-neutral-100 p-2 flex-shrink-0 flex items-center justify-center cursor-pointer" data-open-product="${p.id}">
                  <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain" />
                </div>

                <div class="flex-1 min-w-0 space-y-1">
                  <h4 class="text-xs font-bold text-neutral-900 truncate cursor-pointer hover:underline" data-open-product="${p.id}">${p.name}</h4>
                  <div class="text-xs font-extrabold text-neutral-900">$${p.priceUSD}</div>
                  <div class="flex items-center gap-2 pt-1">
                    <button 
                      type="button" 
                      data-quick-add="${p.id}"
                      class="text-[11px] font-bold text-black underline hover:no-underline"
                    >
                      + ${t.card.addToCart}
                    </button>
                    <span class="text-neutral-300">•</span>
                    <button 
                      type="button" 
                      data-fav-toggle="${p.id}"
                      class="text-[11px] font-semibold text-neutral-400 hover:text-red-500"
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </div>
    </div>
  `;
}

function renderMobileMenu() {
  if (store.state.activeModal !== 'mobileNav') return '';

  const t = store.t;
  const currentLang = store.state.lang;

  return `
    <div class="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" id="mobile-nav-drawer">
      <div class="fixed inset-0 drawer-backdrop transition-opacity" data-close-modal></div>

      <div class="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div class="w-screen max-w-xs bg-white shadow-2xl flex flex-col justify-between border-r border-neutral-100 p-6">
          
          <div class="space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-neutral-100">
              <svg class="w-12 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.707 5.293c-2.457 1.83-5.26 3.518-8.414 5.065-2.827 1.385-5.69 2.56-8.593 3.525C2.868 14.49 1.5 15.02 0 15.485c2.435-.29 4.887-.91 7.355-1.86 3.238-1.246 6.305-2.87 9.2-4.872 2.21-1.53 4.093-3.237 5.152-3.46z"/>
              </svg>
              <button type="button" data-close-modal class="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500">✕</button>
            </div>

            <!-- Mobile Navigation Links -->
            <nav class="space-y-4 text-sm font-bold uppercase tracking-wider text-neutral-800">
              <a href="#catalog" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.catalog}</a>
              <a href="#catalog" data-nav-category="lifestyle" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.editions}</a>
              <a href="#catalog" data-nav-category="running" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.performance}</a>
              <a href="#story" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.heritage}</a>
              <a href="#footer" class="block py-2 border-b border-neutral-50" data-close-modal>${t.nav.about}</a>
            </nav>
          </div>

          <!-- Bottom: Language Selector -->
          <div class="pt-6 border-t border-neutral-100 space-y-4">
            <div class="text-xs font-bold text-neutral-400 uppercase tracking-wider">Til / Язык:</div>
            <div class="flex items-center gap-2">
              <button 
                type="button" 
                data-lang="uz" 
                class="flex-1 py-2 text-xs font-bold rounded-xl border ${currentLang === 'uz' ? 'bg-black text-white border-black' : 'border-neutral-200'}"
              >
                O'zbek
              </button>
              <button 
                type="button" 
                data-lang="ru" 
                class="flex-1 py-2 text-xs font-bold rounded-xl border ${currentLang === 'ru' ? 'bg-black text-white border-black' : 'border-neutral-200'}"
              >
                Русский
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

  

function renderFooter() {
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


  // --- 5. Application Orchestration ---
  














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

})();