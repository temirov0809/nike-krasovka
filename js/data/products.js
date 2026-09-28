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

export const HERO_CONFIG = {
  // Main Hero Sneaker Image (Easily replace with your own image file)
  heroImage: "assets/images/hero-sneaker.svg",
  featuredProductId: "af1-07-white",
  badgeText: {
    uz: "YANGI SS/26 DROP",
    ru: "НОВЫЙ SS/26 ДРОП"
  }
};

export const products = [
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
