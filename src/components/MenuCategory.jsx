import React from 'react';
import MenuItem from './MenuItem';

export default function MenuCategory({ title, items }) {
  return (
    <section className="mb-10 w-full overflow-hidden">

      {/* 1. تصغير العنوان العلوي في الشاشات الصغيرة */}
      <div className="flex items-center w-full mb-6 md:mb-8">
        
        {/* الخط الأول */}
        <div className="w-[10%] h-[1.5px] md:h-[2px] bg-[#8c857c] shrink-0"></div>

        {/* العنوان: نص صغير في الجوال (text-sm) وكبير في الكمبيوتر (text-lg) */}
        <h2 className="text-[#4a443c] font-bold tracking-[0.15em] md:tracking-[0.25em] text-[12px] sm:text-sm md:text-lg px-3 md:px-8 uppercase whitespace-nowrap">
          {title}
        </h2>

        {/* الخط الثاني */}
        <div className="flex-1 h-[1.5px] md:h-[2px] bg-[#8c857c]"></div>
      </div>

      {/* 2. تصغير الأقسام (الشبكة) بنسبة 30% تقريباً في الشاشات الصغيرة */}
      <div 
        dir="rtl" 
        className="grid grid-cols-3 gap-x-1 md:gap-x-12 gap-y-6 md:gap-y-10 w-full 
                   origin-top-right scale-[0.75] sm:scale-90 md:scale-100 transition-transform"
      >
        {items.map((item, index) => (
          <div key={index} className="flex justify-start w-full min-w-0">
            <MenuItem {...item} />
          </div>
        ))}
      </div>

    </section>
  );
}