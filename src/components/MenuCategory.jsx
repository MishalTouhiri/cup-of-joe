import React from 'react';
import MenuItem from './MenuItem';

export default function MenuCategory({ title, items }) {
  return (
    <section className="mb-10 w-full">

   {/* العنوان مع توزيع 10% خط - نص - باقي السطر خط */}
      <div className="flex items-center w-full mb-8">
        
        {/* الخط الأول (على اليمين) يمثل مسافة بسيطة (10% تقريباً) */}
        <div className="w-[10%] h-[2px] bg-[#8c857c] shrink-0"></div>

       {/* العنوان - قمنا بتكبير الخط text-lg وزيادة المسافة الجانبية px-8 */}
        <h2 className="text-[#4a443c] font-bold tracking-[0.25em] text-lg px-8 uppercase whitespace-nowrap">
          {title}
        </h2>

        {/* الخط الثاني (على اليسار) يمتد ليغطي باقي العرض بنسبة 90% تقريباً */}
        <div className="flex-1 h-[2px] bg-[#8c857c]"></div>
      </div>

 {/* الشبكة ثابتة 3 أعمدة */}
      {/* استخدمنا gap-x-2 للشاشات الصغيرة و gap-x-12 للكبيرة لتقليل التداخل */}
      <div   dir="rtl" 
        className="grid grid-cols-3 gap-x-2 md:gap-x-12 gap-y-10 w-full"
      >
        {items.map((item, index) => (
          <div key={index} className="flex justify-start w-full min-w-0">
             {/* MenuItem يحتاج لتعديل بسيط ليتناسب مع المساحة المتاحة */}
            <MenuItem {...item} />
          </div>
        ))}
      </div>

    </section>
  );
}