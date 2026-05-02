"use client";

import { useEffect, useState } from 'react';

const MenuItem = ({ ar, en, price, priceHot, priceCold, img, subText }) => {
  const [imgError, setImgError] = useState(false);

  const normalizedImg = typeof img === 'string' ? img.trim().replace(/\\/g, '/') : img;
  const isImagePath = typeof normalizedImg === 'string' && /\.(svg|png|jpe?g|gif|webp)$/i.test(normalizedImg);

  const imageUrl = isImagePath
    ? normalizedImg.startsWith('/') || normalizedImg.startsWith('http')
      ? normalizedImg
      : `/${normalizedImg}`
    : normalizedImg;

  const fallbackIcon = '☕';

  useEffect(() => {
    setImgError(false);
  }, [imageUrl]);

  return (
    <div dir="rtl" className="flex items-start justify-between w-full max-w-[240px] gap-2 px-1 py-2 group">
      
      {/* 1. الصورة (أصبحت الآن في اليمين) */}
      <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] shrink-0 flex items-center justify-center mt-1">
        {imageUrl && isImagePath && !imgError ? (
          <img
            src={imageUrl}
            alt={en || ar}
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-[12px] opacity-20">
            {imgError ? fallbackIcon : normalizedImg}
          </span>
        )}
      </div>

      {/* 2. حاوية النصوص (أصبحت الآن في اليسار) */}
      <div className="flex flex-col flex-1 min-w-0 mr-2">
        
        {/* منطقة العنوان */}
        <div className="flex flex-col items-start leading-tight">
          <span className="font-bold text-[#4a443c] text-[13px] sm:text-[14px]">
            {ar}
          </span>
          <span className="text-[#8c857c] text-[10px] sm:text-[11px] font-medium">
            {en}
          </span>
        </div>

        {/* الخط الفاصل: يبدأ من تحت النص الإنجليزي مباشرة */}
        <div className="border-b border-[#d6d2cb] w-full my-1.5"></div>

        {/* السعر والوصف */}
        <div className="flex flex-col gap-1">
          {price && (
            <span className="font-bold text-[#4a443c] text-[12px]">
              {price} <span className="text-[9px] text-[#8c857c] font-normal">ريال</span>
            </span>
          )}

          {(priceHot || priceCold) && (
            <div className="flex gap-2 text-[10px] font-bold text-[#4a443c]">
              {priceHot && <span>☀️ {priceHot}</span>}
              {priceCold && <span>❄️ {priceCold}</span>}
            </div>
          )}

          {subText && (
            <div className="mt-1 flex flex-col gap-0.5">
              {subText.split('\n').map((line, index) => (
                <div key={index} className="text-[9px] text-[#8c857c] leading-tight flex items-center gap-1">
                  <span className="break-words">{line}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default MenuItem;