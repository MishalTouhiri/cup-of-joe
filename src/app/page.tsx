import React from 'react';
import MenuCategory from '@/components/MenuCategory';
import { menuData } from '@/data/menuData';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white font-sans pb-24 selection:bg-[#4a443c] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 pt-12 sm:pt-20">
        
        {/* الترويسة الرئيسية تظهر مرة واحدة فقط في أعلى الصفحة */}
        <header className="flex flex-row justify-between items-center mb-20 w-full" dir="ltr">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#4a443c] tracking-[0.2em] shrink-0">
            CUP OF JOE
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#4a443c] shrink-0" dir="rtl">
            دايم أقرب
          </h2>
        </header>

        {/* عرض جميع الأقسام */}
        <div dir="ltr">
          {menuData.map((category) => (
            <MenuCategory 
              key={category.id} 
              title={category.title} 
              items={category.items} 
            />
          ))}
        </div>

      </div>
    </main>
  );
}