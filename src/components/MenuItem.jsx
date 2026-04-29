import React from 'react';

const MenuItem = ({ ar, en, price, priceHot, priceCold, img, subText }) => {
  return (
    <div dir="rtl" className="flex items-start w-full min-w-0 gap-1 sm:gap-3 py-2">
      
      {/* 1. الصورة */}
      <div className="w-10 h-10 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
        {img}
      </div>

      {/* 2. حاوية النصوص */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* الأسماء */}
        <div className="flex flex-col items-start leading-tight">
          <span className="font-bold text-[#4a443c] text-[12px] sm:text-[16px] md:text-[18px] break-words w-full">
            {ar}
          </span>
          <span className="text-[#8c857c] text-[9px] sm:text-[12px] truncate w-full font-medium">
            {en}
          </span>
        </div>

        {/* الخط الفاصل */}
        <div className="border-b-[1.5px] sm:border-b-[2.5px] border-[#d6d2cb] my-1 sm:my-2 w-[70%]"></div>

        {/* السعر */}
        <div className="flex items-center gap-1 font-bold text-[#4a443c] flex-wrap mb-1">
          {price && (
            <span className="text-[11px] sm:text-[14px] md:text-[16px] whitespace-nowrap">
              {price} <span className="text-[8px] sm:text-[10px] text-[#8c857c] font-normal">ر.س</span>
            </span>
          )}

          {(priceHot || priceCold) && (
            <div className="flex gap-1 text-[10px] sm:text-[12px]">
              {priceHot && <span>☀️{priceHot}</span>}
              {priceCold && <span>❄️{priceCold}</span>}
            </div>
          )}
        </div>

        {/* 3. البيانات الاختيارية (subText) */}
        {subText && (
          <div className="mt-1 flex flex-col gap-0.5">
            {subText.split('\n').map((line, index) => (
              <div key={index} className="text-[9px] sm:text-[11px] text-[#8c857c] flex items-center gap-1 leading-relaxed">
                {/* يمكنك إضافة أيقونة نقطة أو سهم صغيرة */}
               
                <span className="break-words">{line}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MenuItem;