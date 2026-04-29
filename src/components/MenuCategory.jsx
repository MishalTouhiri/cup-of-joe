import React from 'react';
import MenuItem from './MenuItem';

export default function MenuCategory({ title, items }) {
  return (
    <section className="mb-14 sm:mb-16">
      
      {/* عنوان القسم */}
      <div className="flex flex-row items-center w-full mb-8" dir="ltr">
        <div className="w-8 sm:w-14 h-[3px] bg-[#d6d2cb]"></div>
        <h2 className="text-[#4a443c] font-bold tracking-[0.1em] text-lg sm:text-xl mx-4 sm:mx-6 uppercase shrink-0">
          {title}
        </h2>
        <div className="flex-1 h-[3px] bg-[#d6d2cb]"></div>
      </div>
      
      {/* الشبكة: 3 كروت في الصف الواحد للشاشات الكبيرة lg:grid-cols-3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

    </section>
  );
}