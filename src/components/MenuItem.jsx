import React from 'react';

const MenuItem = ({ ar, en, price, priceHot, priceCold, img }) => {
  return (
    <div className="bg-transparent rounded-xl px-2 py-1 w-full max-w-[240px] mx-auto flex items-center justify-between gap-2">

      {/* النص */}
      <div className="flex flex-col flex-1 min-w-0">

        <div className="flex flex-col items-end w-full">
          <h3 className="font-bold text-[#4a443c] text-[13px] leading-tight">
            {ar}
          </h3>

          <p className="text-[#8c857c] text-[10px] leading-none -mt-[2px]">
            {en}
          </p>
        </div>

        {/* السعر */}
        <div className="flex justify-end items-center gap-2 mt-[2px] font-bold text-[#4a443c]" dir="rtl">
          
          {price && (
            <span className="text-[12px]">
              {price} <span className="text-[9px] text-[#8c857c] font-normal">ر.س</span>
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

      {/* الصورة */}
      <div className="w-10 h-10 shrink-0 flex items-center justify-center">
        {img ? (
          <img src={img} alt={ar} className="w-full h-full object-contain" />
        ) : (
          <span className="text-lg">☕</span>
        )}
      </div>

    </div>
  );
};

export default MenuItem;