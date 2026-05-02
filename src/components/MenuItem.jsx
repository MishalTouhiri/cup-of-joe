"use client";

import { useEffect, useState } from 'react';

const MenuItem = ({ ar, en, price, priceHot, priceCold, img, subText }) => {
  const [imgError, setImgError] = useState(false);

  const normalizedImg =
    typeof img === 'string' ? img.trim().replace(/\\/g, '/') : img;

  const isImagePath =
    typeof normalizedImg === 'string' &&
    /\.(svg|png|jpe?g|gif|webp)$/i.test(normalizedImg);

  const imageUrl = isImagePath
    ? normalizedImg.startsWith('/') || normalizedImg.startsWith('http')
      ? normalizedImg
      : `/${normalizedImg}`
    : normalizedImg;

  const fallbackIcon = '☕';

  useEffect(() => {
    setImgError(false);
  }, [imageUrl]);

  console.log('Rendering MenuItem:', { ar, en, imageUrl, imgError });

  return (
    <div
      dir="rtl"
      className="flex items-center w-full max-w-[220px] min-w-0 gap-3 px-1 py-1"
    >
      
      {/* ================= IMAGE ================= */}
      <div className="w-[25px] h-[25px] shrink-0 flex items-center justify-center overflow-hidden rounded-full">
        {imageUrl && isImagePath && !imgError ? (
          <img
            src={imageUrl}
            alt={en || ar}
            className="w-full h-full object-contain"
            onLoad={() => console.log('Image loaded:', imageUrl)}
            onError={() => {
              console.log('Image error:', imageUrl);
              setImgError(true);
            }}
          />
        ) : (
          <span className="text-[10px] flex items-center justify-center w-full h-full">
            {imgError ? fallbackIcon : normalizedImg}
          </span>
        )}
      </div>

      {/* ================= TEXT ================= */}
      <div className="flex flex-col flex-1 min-w-0 gap-0.5">

        {/* الاسم */}
        <div className="flex flex-col items-start leading-tight">

          <span className="font-bold text-[#4a443c] text-[11px] sm:text-[13px] md:text-[14px] break-words w-full">
            {ar}
          </span>

          <span className="text-[#8c857c] text-[8px] sm:text-[10px] truncate w-full font-medium">
            {en}
          </span>

        </div>

        {/* الخط */}
        <div className="border-b-[1px] border-[#d6d2cb] my-1 w-[42%]"></div>

        {/* السعر */}
        <div className="flex items-center gap-1 font-bold text-[#4a443c] flex-wrap mb-1">

          {price && (
            <span className="text-[10px] sm:text-[11px] whitespace-nowrap">
              {price}{" "}
              <span className="text-[7px] sm:text-[9px] text-[#8c857c] font-normal">
                ريال
              </span>
            </span>
          )}

          {(priceHot || priceCold) && (
            <div className="flex gap-1 text-[9px] sm:text-[10px]">
              {priceHot && <span>☀️{priceHot}</span>}
              {priceCold && <span>❄️{priceCold}</span>}
            </div>
          )}

        </div>

        {/* الوصف */}
        {subText && (
          <div className="mt-1 flex flex-col gap-0.5">
            {subText.split('\n').map((line, index) => (
              <div
                key={index}
                className="text-[9px] sm:text-[11px] text-[#8c857c] flex items-center gap-1 leading-relaxed"
              >
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