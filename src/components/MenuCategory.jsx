import MenuItem from './MenuItem';

export default function MenuCategory({ title, items }) {
  return (
    // ضبط المسافة الرأسية بين الأقسام (mb-16 إلى mb-24) لتطابق التباعد في الصور
    <section className="mb-16 md:mb-24 w-full overflow-hidden px-4 md:px-0">

      {/* 1. العنوان العلوي: ضبط الهوامش ليكون متناسقاً تماماً مع الخطوط الجانبية */}
      <div className="flex items-center w-full mb-10 md:mb-14">
        
        {/* الخط الأول (الأيمن): يمثل الهامش الجانبي القصير */}
        <div className="w-[6%] md:w-[10%] h-[1px] bg-[#8c857c] shrink-0"></div>

        {/* النص: ضبط الحجم والتباعد بين الحروف ليتناسب مع هوية البراند */}
        <h2 className="text-[#4a443c] font-bold tracking-[0.2em] md:tracking-[0.3em] text-[14px] sm:text-base md:text-xl px-4 md:px-10 uppercase whitespace-nowrap">
          {title}
        </h2>

        {/* الخط الثاني: يمتد لتغطية كامل عرض الصفحة[cite: 1] */}
        <div className="flex-1 h-[1px] bg-[#8c857c]"></div>
      </div>

      {/* 2. شبكة المنتجات: ضبط الفراغات الرأسية والأفقية لضمان Scannability عالية[cite: 1] */}
      <div 
        dir="rtl" 
        // gap-y-16 تمنح مساحة كافية للنصوص تحت الصور دون تداخل مع الصف التالي[cite: 1]
        // max-w-[1100px] يحافظ على تركيز العناصر في المنتصف كما في الصور[cite: 1]
        className="grid grid-cols-3 gap-x-6 sm:gap-x-12 md:gap-x-24 gap-y-16 md:gap-y-24 w-full max-w-[1100px] mx-auto"
      >
        {items.map((item, index) => (
          <div key={index} className="flex justify-center w-full min-w-0">
            {/* MenuItem: يتم تمرير البيانات مع مراعاة المحاذاة المركزية[cite: 1] */}
            <MenuItem {...item} />
          </div>
        ))}
      </div>

    </section>
  );
}