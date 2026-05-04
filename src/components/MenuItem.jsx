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
    /* الصندوق الخفي الرئيسي: يضمن توزيع العناصر بمسافات متساوية */
    <div 
      dir="rtl" 
      className="flex items-start justify-between w-full max-w-[280px] p-2 md:p-3 group"
    >
      
      {/* 1. جانب الصورة (اليمين) */}
      <div className="flex flex-col items-center shrink-0 ml-3">
        <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center">
          {imageUrl && isImagePath && !imgError ? (
            <img
              src={imageUrl}
              alt={en || ar}
              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-[14px] opacity-30">
              {imgError ? fallbackIcon : normalizedImg}
            </span>
          )}
        </div>
      </div>

      {/* 2. جانب النصوص (اليسار) */}
      <div className="flex flex-col flex-1 min-w-0">
        
        {/* العناوين: العربي والإنجليزي */}
        <div className="flex flex-col items-start leading-tight mb-1">
          <span className="font-bold text-[#4a443c] text-[14px] sm:text-[15px]">
            {ar}
          </span>
          <span className="text-[#8c857c] text-[11px] sm:text-[12px] font-medium italic">
            {en}
          </span>
        </div>

        {/* الخط الفاصل الرفيع كما في الصور */}
        <div className="border-b border-[#d6d2cb] w-full mb-2"></div>

        {/* السعر والبيانات الإضافية */}
        <div className="flex flex-col gap-1">
          {price && (
            <span className="font-bold text-[#4a443c] text-[13px]">
              {price} <span className="text-[10px] text-[#8c857c] font-normal">ريال</span>
            </span>
          )}

          {/* أسعار الحار والبارد */}
{(priceHot || priceCold) && (
  <div className="flex flex-wrap items-center gap-2 mt-1">
    
    {/* السعر الحار (نار سوداء) */}
    {priceHot && (
      <div className="flex items-center gap-1.5 bg-[#fcfbfa]">
        {/* الكلاس هنا يحول الإيموجي لأسود */}
        <span className="text-[13px] grayscale brightness-0">🔥</span>
        <span className="font-bold text-[#4a443c] text-[11px]">
          {priceHot} <span className="text-[9px] font-normal text-[#8c857c]">ريال</span>
        </span>
      </div>
    )}

    {/* السعر البارد (ثلجة سوداء) */}
    {priceCold && (
      <div className="flex items-center gap-1.5 bg-[#fcfbfa] ">
        {/* الكلاس هنا يحول الإيموجي لأسود */}
        <span className="text-[13px] grayscale brightness-0">❄️</span>
        <span className="font-bold text-[#4a443c] text-[11px]">
          {priceCold} <span className="text-[9px] font-normal text-[#8c857c]">ريال</span>
        </span>
      </div>
    )}

  </div>
)}

          {/* النصوص الفرعية (مثل أنواع الشاي أو الحشوات) */}
          {subText && (
            <div className="mt-1 flex flex-col gap-0.5">
              {subText.split('\n').map((line, index) => (
                <span key={index} className="text-[10px] text-[#8c857c] leading-tight break-words opacity-90">
                  {line}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default MenuItem;