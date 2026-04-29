// src/components/MenuItem.jsx

import React from 'react';

// استيراد الأيقونات الخاصة بالأسعار الحارة والباردة
const HotIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#a39a8e] ml-1">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

const ColdIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#a39a8e] ml-1">
    <line x1="12" y1="2" x2="12" y2="22"></line><line x1="17" y1="5" x2="7" y2="19"></line><line x1="5" y1="17" x2="19" y2="7"></line><polyline points="15 2 12 2 12 5"></polyline><polyline points="9 2 12 2 12 5"></polyline><polyline points="15 22 12 22 12 19"></polyline><polyline points="9 22 12 22 12 19"></polyline><polyline points="19 15 19 12 22 12"></polyline><polyline points="5 15 5 12 2 12"></polyline><polyline points="19 9 19 12 22 12"></polyline><polyline points="5 9 5 12 2 12"></polyline>
  </svg>
);

const MenuItem = ({ ar, en, price, priceHot, priceCold, img, subText }) => {
  return (
    // الحاوية الأساسية للمنتج، مع محاذاة justify-end لوضع الصورة على اليمين
    <div className="flex flex-row items-center justify-end gap-3 sm:gap-4 w-full" dir="ltr">
      
      {/* القسم الأيسر: النصوص والخط والسعر */}
      <div className="flex-1 flex flex-col items-end pr-3 sm:pr-4 min-w-0">

        {/* القسم العلوي: الأسماء والخط الفاصل */}
        <div className="flex flex-col items-end text-right w-full mb-1">
          {/* الاسم العربي فوق الخط */}
          <h3 className="font-bold text-[#4a443c] text-[15px] sm:text-[17px] mb-0.5 whitespace-nowrap truncate">{ar}</h3>
          
          {/* الخط الفاصل الممتد يساراً */}
          <div className="w-full border-b-[1.5px] border-[#d6d2cb] mb-1.5 opacity-80"></div>
          
          {/* الاسم الإنجليزي تحت الاسم العربي */}
          <p className="text-[#8c857c] text-[11px] sm:text-[12px] uppercase tracking-wide mb-1 whitespace-nowrap truncate">{en}</p>
        </div>

        {/* قسم السعر (يظهر تحت الخط الفاصل ومحاذي لليمين تماماً) */}
        <div className="flex flex-row-reverse justify-start items-center gap-4 mt-1 font-bold text-[#4a443c] text-[13px] sm:text-[14px] w-full" dir="rtl">
          {price && (
            <span>{price} <span className="text-[10px] font-normal text-[#8c857c] mr-0.5">ريال</span></span>
          )}
          
          {/* أسعار الحار والبارد */}
          {priceHot && priceCold && (
            <>
              <span className="flex items-center gap-1 whitespace-nowrap">
                {priceHot} <span className="text-[10px] font-normal text-[#8c857c]">ريال</span> 
                <span className="text-[#8c857c] text-[10px] mr-1">☕</span>
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap">
                {priceCold} <span className="text-[10px] font-normal text-[#8c857c]">ريال</span> 
                <span className="text-[#8c857c] text-[10px] mr-1">🧊</span>
              </span>
            </>
          )}
        </div>

        {/* النص الفرعي الاختياري */}
        {subText && (
          <div className="mt-2 text-[9px] sm:text-[10px] text-[#8c857c] leading-relaxed text-right whitespace-pre-line w-full" dir="rtl">
            {subText}
          </div>
        )}
      </div>

      {/* القسم الأيمن: الصورة */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center bg-stone-50 rounded-xl border border-[#eceae6] group-hover:scale-105 transition-transform duration-300">
        {/* نستخدم الإيموجي كبديل، ضع وسم img هنا لصور حقيقية */}
        <span className="text-3xl sm:text-4xl drop-shadow-sm">{img}</span>
      </div>

    </div>
  );
};

export default MenuItem;