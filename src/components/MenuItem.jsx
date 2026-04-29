import React from 'react';

const MenuItem = ({ ar, en, price, priceHot, priceCold, img }) => {
  return (
    // نستخدم dir="rtl" لضمان أن الترتيب يبدأ من اليمين
    <div dir="rtl" className="flex items-center w-[260px] gap-3">
      
      {/* 1. الصورة في جهة اليمين */}
      <div className="w-14 h-14 shrink-0 flex items-center justify-center">
        {img ? (
          <img src={img} alt={ar} className="w-full h-full object-contain" />
        ) : (
          <span className="text-2xl">🍰</span>
        )}
      </div>

      {/* 2. النصوص والخط (على يسار الصورة ومحاذاته لليمين) */}
      <div className="flex flex-col flex-1">

        {/* الأسماء محاذية لليمين (بداية السطر من جهة الصورة) */}
        <div className="flex flex-col items-start leading-tight">
          <span className="font-bold text-[#4a443c] text-[14px]">
            {ar}
          </span>
          <span className="text-[#8c857c] text-[11px] font-medium">
            {en}
          </span>
        </div>

        {/* الخط الفاصل */}
        <div className="border-b border-[#d6d2cb] my-[4px] w-full"></div>

        {/* السعر محاذى لليمين أيضاً */}
        <div className="flex items-center gap-1 font-bold text-[#4a443c]">
          {price && (
            <span className="text-[13px]">
              {price} <span className="text-[10px] text-[#8c857c] font-normal">ر.س</span>
            </span>
          )}

          {(priceHot || priceCold) && (
            <div className="flex gap-2 text-[11px]">
              {priceHot && <span>☀️ {priceHot}</span>}
              {priceCold && <span>❄️ {priceCold}</span>}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MenuItem;