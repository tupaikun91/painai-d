import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { desserts, tradisi } from '../data/menu';

const MenuSlider = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
  const extendedMenuItems = [...items, ...items];
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let speed = 1; 
    let currentScroll = scrollContainer.scrollLeft;

    const initScroll = setTimeout(() => {
      if (reverse) {
         currentScroll = scrollContainer.scrollWidth / 2;
         scrollContainer.scrollLeft = currentScroll;
      }
    }, 100);

    const scroll = () => {
      if (!isDragging.current && scrollContainer) {
        if (reverse) {
          currentScroll -= speed;
          if (currentScroll <= 0) {
            currentScroll = scrollContainer.scrollWidth / 2;
          }
        } else {
          currentScroll += speed;
          if (currentScroll >= scrollContainer.scrollWidth / 2) {
            currentScroll = 0;
          }
        }
        scrollContainer.scrollLeft = currentScroll;
      } else if (isDragging.current && scrollContainer) {
        currentScroll = scrollContainer.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      clearTimeout(initScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reverse]);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grabbing';
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    
    let newScrollLeft = scrollLeft.current - walk;
    
    if (newScrollLeft >= scrollRef.current.scrollWidth / 2) {
      newScrollLeft -= scrollRef.current.scrollWidth / 2;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = newScrollLeft;
    } else if (newScrollLeft <= 0) {
      newScrollLeft += scrollRef.current.scrollWidth / 2;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = newScrollLeft;
    }
    
    scrollRef.current.scrollLeft = newScrollLeft;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    if (scrollRef.current) {
      startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    
    let newScrollLeft = scrollLeft.current - walk;
    
    if (newScrollLeft >= scrollRef.current.scrollWidth / 2) {
      newScrollLeft -= scrollRef.current.scrollWidth / 2;
      startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = newScrollLeft;
    } else if (newScrollLeft <= 0) {
      newScrollLeft += scrollRef.current.scrollWidth / 2;
      startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = newScrollLeft;
    }
    
    scrollRef.current.scrollLeft = newScrollLeft;
  };

  return (
    <div 
      ref={scrollRef}
      className="flex gap-10 px-6 overflow-x-hidden cursor-grab select-none hide-scrollbar py-10 touch-pan-y"
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {extendedMenuItems.map((item, index) => (
        <div 
          key={index} 
          className="w-[280px] md:w-[320px] shrink-0 group relative flex flex-col gap-5"
        >
          <div className="h-72 rounded-[2rem] overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(225,29,72,0.15)] group-hover:-translate-y-2">
            <img src={`${import.meta.env.BASE_URL}${item.img}`} alt={item.name} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3F1D24]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
          <div className="flex flex-col items-center text-center pointer-events-none px-4 w-full">
            <div className="h-[64px] flex items-center justify-center mb-3 w-full">
              <h5 className="text-2xl font-bold font-serif text-[#3F1D24] transition-colors group-hover:text-[#E11D48] leading-tight line-clamp-2">{item.name}</h5>
            </div>
            <p className="text-sm font-light text-[#3F1D24]/70 line-clamp-4 leading-relaxed mb-4 h-[92px] w-full">
              {item.details}
            </p>
            <span className="text-xl font-bold text-[#E11D48] whitespace-nowrap">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Menu() {
  return (
    <section id="menu" className="py-32 bg-[#FFF0F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs font-semibold tracking-widest text-[#E11D48] uppercase mb-3">Our Menu</h2>
            <h3 className="text-4xl font-semibold tracking-tight text-[#3F1D24]">Our Special Selection <br/><span className="text-2xl text-[#3F1D24]/80 font-normal mt-2 block">Pilihan Sajian Tradisi & Dessert Premium</span></h3>
          </div>
          <a 
            href="#full-menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3F1D24] text-white rounded-full text-sm font-medium hover:bg-[#E11D48] transition-colors group shadow-sm hover:shadow-md"
          >
            View All Menus
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mb-8 max-w-7xl mx-auto px-6">
          <h4 className="text-2xl font-medium tracking-tight text-[#3F1D24] mb-4 border-b border-[#3F1D24]/10 pb-2">Dessert</h4>
        </div>
        <MenuSlider items={desserts} />
        
        <div className="mt-20 mb-8 max-w-7xl mx-auto px-6">
          <h4 className="text-2xl font-medium tracking-tight text-[#3F1D24] mb-4 border-b border-[#3F1D24]/10 pb-2">Sajian Tradisi</h4>
        </div>
        <MenuSlider items={tradisi} reverse={true} />
      </div>
    </section>
  );
}
