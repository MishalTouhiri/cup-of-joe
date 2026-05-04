import MenuCategory from '@/components/MenuCategory';
import { menuData } from '@/data/menuData';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#f8f6f2] text-[#4a443c] font-sans pb-20">

      <div className="max-w-[1200px] mx-auto px-6 pt-16">

        {/* الهيدر */}
        <header className="flex flex-row-reverse flex-nowrap items-center justify-between gap-4 mb-16 overflow-hidden">
    <img
            src="/SVG/سلوقن.svg"
            alt="دايم أقرب slogan"
            className="h-auto max-w-[160px] min-w-[80px] shrink-0"
            dir="rtl"
          />
         
          <img
            src="/SVG/لوقو.svg"
            alt="Cup of Joe logo"
            className="h-auto max-w-[180px] min-w-[80px] shrink-0"
          />

       

        </header>

        {/* الأقسام */}
        {menuData.map((category) => (
          <MenuCategory
            key={category.id}
            title={category.title}
            items={category.items}
          />
        ))}

      </div>
    </main>
  );
}