import { HotIcon, ColdIcon } from './Icons';

export default function MenuItem({ ar, en, price, priceHot, priceCold, img, subText }) {
  return (
    <div className="flex flex-row items-start justify-end gap-3 sm:gap-4 w-full group" dir="ltr">
      
      <div className="flex-1 flex flex-col text-right w-full min-w-0">
        
        <div className="border-b-[1.5px] border-[#d6d2cb] pb-1.5 mb-1.5 flex flex-col items-end w-full">
          <h3 className="font-bold text-[#4a443c] text-[14px] sm:text-[16px] leading-tight mb-0.5 truncate w-full">{ar}</h3>
          <p className="text-[#8c857c] text-[11px] sm:text-[12px] font-medium tracking-wide truncate w-full">{en}</p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex flex-row justify-end items-center gap-3 sm:gap-4 text-[#4a443c] text-[13px] sm:text-[14px] font-bold" dir="rtl">
            {price && <span>{price} <span className="text-[9px] sm:text-[10px]">ريال</span></span>}
            
            {priceHot && priceCold && (
              <>
                <span className="flex items-center"><HotIcon /> {priceHot} <span className="text-[9px] sm:text-[10px] mr-1">ريال</span></span>
                <span className="flex items-center"><ColdIcon /> {priceCold} <span className="text-[9px] sm:text-[10px] mr-1">ريال</span></span>
              </>
            )}
          </div>

          {subText && (
            <div className="mt-1.5 text-[9px] sm:text-[10px] text-[#8c857c] leading-relaxed text-right whitespace-pre-line" dir="rtl">
              {subText}
            </div>
          )}
        </div>
      </div>

      <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-stone-50 rounded-lg flex items-center justify-center border border-[#eceae6] transition-transform duration-300 group-hover:scale-105">
        <span className="text-xl sm:text-2xl">{img}</span>
      </div>

    </div>
  );
}