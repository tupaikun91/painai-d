import { useRef, useEffect } from 'react';

export default function Gallery() {
  const images = [
    "Collection1.jpg",
    "Collection2.jpg",
    "Collection3.jpg",
    "Collection4.jpg",
    "Collection5.jpg",
    "Collection6.jpg",
    "Collection7.jpg",
    "Collection8.jpg",
    "Collection9.jpg",
    "C10.jpg",
    "C11.jpg",
    
  ];

  const extendedImages = [...images, ...images];
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

    const scroll = () => {
      if (!isDragging.current && scrollContainer) {
        currentScroll += speed;
        if (currentScroll >= scrollContainer.scrollWidth / 2) {
          currentScroll = 0;
        }
        scrollContainer.scrollLeft = currentScroll;
      } else if (isDragging.current && scrollContainer) {
        currentScroll = scrollContainer.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

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
    <section id="collections" className="py-32 bg-[#FFF9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-xs font-semibold tracking-widest text-[#E11D48] uppercase mb-3">Collections</h2>
        <h3 className="text-4xl font-semibold tracking-tight text-[#3F1D24]">Our Collections</h3>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 px-6 overflow-x-hidden cursor-grab select-none hide-scrollbar touch-pan-y"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {extendedImages.map((src, idx) => (
          <div key={idx} className="shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[350px] md:h-[450px] relative rounded-3xl overflow-hidden group shadow-[0_8px_30px_rgb(63,29,36,0.04)] pointer-events-none border border-[#3F1D24]/5">
            <img src={`${import.meta.env.BASE_URL}${src}`} alt="Gallery image" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none" />
            <div className="absolute inset-0 bg-[#2A1116]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
