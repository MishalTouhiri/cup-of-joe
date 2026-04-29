import MenuItem from './MenuItem';

export default function MenuCategory({ title, cols, items }) {
  return (
    <section className="mb-12 sm:mb-20">
      
      <div className="flex flex-row items-center mb-8 sm:mb-12">
        <h2 className="text-[#6e665b] font-bold tracking-[0.1em] text-sm sm:text-base md:text-lg mr-4 sm:mr-6 shrink-0 uppercase">
          {title}
        </h2>
        <div className="flex-1 h-[1.5px] bg-[#d6d2cb]"></div>
      </div>
      
      <div className={`grid gap-x-6 sm:gap-x-10 lg:gap-x-16 gap-y-6 sm:gap-y-10 ${cols}`}>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

    </section>
  );
}