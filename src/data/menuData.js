
export const menuData = [
  {
    id: "classic",
    title: "CLASSIC COFFEES",
    items: [
      { ar: "كورتادو", en: "Cortado", price: "21", img: "☕" },
      { ar: "أمريكانو", en: "Americano", price: "9", img: "☕" },
      { ar: "إسبريسو", en: "Espresso", price: "9", img: "☕" },
      { ar: "لاتيه", en: "Latte", price: "25", img: "🥛" },
      { ar: "فلات وايت", en: "Flat White", priceHot: "23", priceCold: "24", img: "/SVG/Asset2.svg" },
      { ar: "مكياتو", en: "Machiatto", price: "20", img: "☕" },
      { ar: "كريزي شوت", en: "Crazy Shot", price: "23", img: "☕" },
      { ar: "فلات وايت صغير", en: "Mini Flat White", price: "16", img: "☕" },
      { ar: "كابتشينو", en: "Cappuccino", price: "10", img: "☕" },
    ]
  },
  {
    id: "tea_filter",
    title: "TEA & FILTER COFFEES",
    items: [
      { ar: "قهوة مقطرة", en: "Filter beans", img: "⚗️", subText: "السعر يختلف حسب نوع البن\nPrice varies based on origin\nV60\nChemex" },
      { ar: "شاي", en: "Tea", price: "12", img: "/SVG/Asset2.svg", subText: "شاي أخضر | Green Tea\nشاي أسود | Black Tea\nليمون وزنجبيل | Lemon & Ginger\nشاي فواكه | Fruity Tea" },
    ]
  },
  {
    id: "specialty_hot",
    title: "SPECIALTY COFFEE",
    items: [
      { ar: "لاتيه كراميل مملح", en: "Salted Caramel Latte", priceHot: "24", priceCold: "28", img: "🧋" },
      { ar: "جو سبيشل (المميز)", en: "Joe Special (Signature)", price: "28", img: "🧋" },
      { ar: "سبانش لاتيه", en: "Spanish Latte", priceHot: "24", priceCold: "28", img: "🧋" },
    ]
  },
  {
    id: "matcha",
    title: "MATCHA",
    items: [
      { ar: "ماتشا محلاة", en: "Sweetened Matcha", priceHot: "33", priceCold: "33", img: "🍵" },
      { ar: "ماتشا عضوية", en: "Organic Matcha", priceHot: "28", priceCold: "28", img: "🍵" },
    ]
  },
  {
    id: "specialty_cold",
    title: "SPECIALTY COFFEE",
    items: [
      { ar: "آيس تي", en: "Ice Tea", price: "25", img: "🍹", subText: "كركديه | Hibiscus\nباشن فروت | Passion Fruit\nخوخ | Peach" },
      { ar: "عصير برتقال", en: "Orange Juice", price: "20", img: "🍊" },
      { ar: "ليموناده", en: "Lemonade", price: "22", img: "🍋" },
    ]
  },
  {
    id: "sandwiches",
    title: "SANDWICHES",
    items: [
      { ar: "تونا", en: "Tuna", price: "35", img: "🥪" },
      { ar: "ديك رومي", en: "Turkey", price: "23", img: "🥪" },
      { ar: "حلومي", en: "Halloumi", price: "28", img: "🥪" },
      { ar: "كلوب دجاج", en: "Chicken Club", price: "35", img: "🥪" },
    ]
  },
  {
    id: "sweets",
    title: "SWEETS & CAKES",
    items: [
      { ar: "شريحة الكراميل", en: "Caramel Slice", price: "8", img: "🍰" },
      { ar: "تارت تشيز كيك", en: "Cheese Cake Tart", price: "18", img: "🥧" },
      { ar: "تارت البيكان", en: "Pecan Tart", price: "14", img: "🥧" },
      { ar: "تشيز كيك نيويورك", en: "NY Cheesecake", price: "35", img: "🍰" },
      { ar: "روكي رود", en: "Rocky Road", price: "9", img: "🍫" },
      { ar: "كرات الفول السوداني", en: "Peanut Ball", price: "8", img: "🧆" },
      { ar: "كيك فيكتوريا", en: "Victoria Cake", price: "35", img: "🍰" },
      { ar: "براونيز", en: "Brownies", price: "24", img: "🍫" },
      { ar: "كيك البرتقال", en: "Orange Loaf", price: "25", img: "🍰" },
      { ar: "كيك العسل", en: "Honey Cake", price: "18", img: "🥞" },
      { ar: "تشيز كيك كولوميه", en: "Coulommier Cheese Cake", price: "35", img: "🍰" },
      { ar: "كوكيز", en: "Cookies", priceHot: "12", priceCold: "11", img: "🍪", subText: "فول سوداني | Peanut\nشوكلاته | Chocolate" },
      { ar: "طبقات حلوة", en: "Sweet Layer", price: "30", img: "🍰" },
      { ar: "جوز الهند والتوت", en: "Coconut Berry", price: "25", img: "🍰" },
      { ar: "ليزي كيك مقرمش", en: "Crispy Lazy Cake", price: "30", img: "🍫" },
      { ar: "تيراميسو كلاسيك", en: "Classic Tiramisu", price: "30", img: "🍰" },
      { ar: "شوكلاته مقرمشة", en: "Crunchy Chocolate", price: "40", img: "🍫" },
      { ar: "تيراميسو مانجو", en: "Mango Tiramisu", price: "35", img: "🍰" },
      { ar: "كيك الليمون", en: "Lemon Loaf", price: "24", img: "🍰" },
    ]
  },
  {
    id: "water",
    title: "WATER",
    items: [
      { ar: "مياه فوارة", en: "Sparkling Water", price: "10", img: "💧" },
      { ar: "مياه معدنية", en: "voda Water", price: "8", img: "🚰" },
    ]
  }
];