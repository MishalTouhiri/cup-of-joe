import React from 'react';
import MenuItem from './MenuItem';

export default function MenuCategory({ title, items }) {
  return (
    <section className="mb-10 w-full">

      {/* العنوان + الخطوط العريضة */}
      <div className="flex items-center w-full mb-8">
        
        {/* الخط الذي يسبق النص (على اليسار) - تمت زيادة السماكة */}
        <div className="w-12 h-[2.5px] bg-[#bcb8b0]"></div>

        {/* العنوان */}
        <h2 className="text-[#4a443c] font-bold tracking-[0.2em] text-sm px-4 uppercase whitespace-nowrap">
          {title}
        </h2>

        {/* الخط الذي يتبع النص (على اليمين) - تمت زيادة السماكة وهو الأطول */}
        <div className="flex-1 h-[2.5px] bg-[#bcb8b0]"></div>
      </div>

    {/* الشبكة (Grid) بتوزيع متساوٍ ومحاذاة لليمين */}
<div 
  dir="rtl" 
  className="grid grid-cols-3 gap-x-12 gap-y-10 w-full justify-between"
>
  {items.map((item, index) => (
    /* flex justify-start لضمان أن كل كرت يبدأ من يمين العمود الخاص به */
    <div key={index} className="flex justify-start w-full">
      <MenuItem {...item} />
    </div>
  ))}
</div>

    </section>
  );
}