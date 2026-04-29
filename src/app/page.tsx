import MenuCategory from '../components/MenuCategory';
import { menuData } from '../data/menuData';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white font-sans pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 sm:pt-16">
        
        <header className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 sm:mb-24 gap-4 sm:gap-0" dir="ltr">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4a443c] tracking-[0.15em] sm:tracking-[0.2em] text-center sm:text-left">
            CUP OF JOE
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a443c] text-center sm:text-right" dir="rtl">
            دايم أقرب
          </h2>
        </header>

        <div dir="ltr">
          {menuData.map((category) => (
            <MenuCategory 
              key={category.id} 
              title={category.title} 
              cols={category.cols} 
              items={category.items} 
            />
          ))}
        </div>

      </div>
    </main>
  );
}