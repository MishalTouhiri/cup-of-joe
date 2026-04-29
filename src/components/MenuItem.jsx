import React from 'react';

const MenuItem = ({ ar, en, price, priceHot, priceCold, img }) => {
  return (
    // استخدام w-full بدلاً من عرض ثابت، و min-w-0 للسماح بالتقلص
    <div dir="rtl" className="flex items-center w-full min-w-0 gap-1 sm:gap-3">
      
      {/* 1. الصورة - تصغر في الجوال وتكبر في الشاشات الكبيرة */}
      <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
        {img }
      </div>

      {/* 2. النصوص - مرونة كاملة */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* الأسماء - السماح بانكسار السطر وتصغير الخط في الجوال */}
        <div className="flex flex-col items-start leading-tight">
          <span className="font-bold text-[#4a443c] text-[10px] sm:text-[14px] md:text-[16px] break-words w-full">
            {ar}
          </span>
          <span className="text-[#8c857c] text-[8px] sm:text-[11px] truncate w-full">
            {en}
          </span>
        </div>

        {/* الخط الفاصل - سماكة واضحة وطول مرن */}
        <div className="border-b-[1.5px] sm:border-b-[2.5px] border-[#d6d2cb] my-1 sm:my-2 w-[60%]"></div>

        {/* السعر - استخدام flex-wrap لمنع التداخل */}
        <div className="flex items-center gap-1 font-bold text-[#4a443c] flex-wrap">
          {price && (
            <span className="text-[10px] sm:text-[13px] md:text-[15px] whitespace-nowrap">
              {price} <span className="text-[7px] sm:text-[10px] text-[#8c857c] font-normal">ر.س</span>
            </span>
          )}

          {/* أيقونات الحرارة - تصغيرها في الجوال */}
          {(priceHot || priceCold) && (
            <div className="flex gap-1 text-[9px] sm:text-[11px] md:text-[13px]">
              {priceHot && <span>☀️{priceHot}</span>}
              {priceCold && <span>❄️{priceCold}</span>}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MenuItem;