import React from 'react';
import MenuItem from './MenuItem';

export default function MenuCategory({ title, items }) {
  return (
    <section className="mb-10">

      {/* العنوان + الخط */}
      <div className="flex items-center w-full mb-4">
        <div className="w-8 h-[1px] bg-[#d6d2cb]"></div>

        <h2 className="text-[#4a443c] font-bold tracking-[0.2em] text-sm mx-3 uppercase">
          {title}
        </h2>

        <div className="flex-1 h-[1px] bg-[#d6d2cb]"></div>
      </div>

      {/* الشبكة */}
<div className="grid grid-cols-3 gap-6 justify-items-center">
            {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

    </section>
  );
}