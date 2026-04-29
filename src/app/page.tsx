import React from 'react';
import MenuCategory from '@/components/MenuCategory';
import { menuData } from '@/data/menuData';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#f8f6f2] text-[#4a443c] font-sans pb-20">

      <div className="max-w-[1200px] mx-auto px-6 pt-16">

        {/* الهيدر */}
        <header className="flex justify-between items-center mb-16">

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[0.25em]">
            CUP OF JOE
          </h1>

          <h2 className="text-3xl sm:text-4xl font-bold" dir="rtl">
            دايم أقرب
          </h2>

        </header>

        {/* الأقسام */}
        {menuData.map((category) => (
          <MenuCategory
            key={category.id}
            title={category.title}
            items={category.items}
          />
        ))}

      </div>
    </main>
  );
}