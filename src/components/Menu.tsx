import { useRef, useEffect } from 'react';

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

  return (
    <div 
      ref={scrollRef}
      className="flex gap-10 px-6 overflow-x-hidden cursor-grab select-none hide-scrollbar py-10"
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {extendedMenuItems.map((item, index) => (
        <div 
          key={index} 
          className="w-[280px] md:w-[320px] shrink-0 group relative flex flex-col gap-5"
        >
          <div className="h-72 rounded-[2rem] overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(225,29,72,0.15)] group-hover:-translate-y-2">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
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
  const desserts = [
    { name: "Burnt Cheesecake", details: "Baked cheesecake with a smooth, rich texture and a delicious cheesy flavor. Simple yet satisfying. Size : 7 inci", price: "RM 50.00", img: "Burnt1.png" },
    { name: "Signature Chocolate Ganache Kek Batik", details: "Kek batik lembut dengan kepekatan rasa coklat yang kaya. Dilitupi lapisan chocolate ganache licin yang tidak terlalu manis. Anggaran size dalam 8 inci.", price: "RM 40.00", img: "Kekbatik1.jpg" },
    { name: "Kek Marble Jelita", details: "Kek span klasik yang lembut, gebu dengan corak 'Jelita' yang menawan. Menggunakan bahan yang berkualiti untuk rasa yang kaya dan moist dalam setiap gigitan.", price: "RM 35.00", img: "MarbleJelita.png" },
    { name: "Kek Pisang", details: "Kek pisang yang lembut dan moist dengan kemanisan semula jadi pisang. Pilihan klasik yang sesuai untuk minum petang. Anggaran size 8 inci", price: "RM 35.00", img: "Kekpisang.png" },
    { name: "Victoria Sandwich Cake", details: "Kek span yang lembut dilapisi krim segar dan jem strawberi, dihiasi buah strawberi segar di atasnya. Anggaran size Loaf", price: "RM 25.00", img: "Victoria.png" },
    { name: "Bread Pudding with Custard Sauce", details: "Baked bread pudding with a golden crust and soft interior, served with rich and creamy custard sauce. 7 inch", price: "RM 25.00", img: "breadpudding.png" },
    { name: "Fudgy Brownies", details: "Brownies coklat jenis fudgy yang padat dan kaya rasa coklat, dilimpahi drizzle coklat di atasnya. Size : 7 inci", price: "RM 40.00", img: "Brownies.png" },
    { name: "Cheesekut Kek Batik Layer", details: "Kombinasi unik lapisan kek batik lembut di bawah dan cheesekut creamy di atas, dilitupi melimpah dengan parutan keju segar. Size 6 inci", price: "RM 60.00", img: "Cheesekut.png" },
    { name: "Mini Choc Cake Moist", details: "Super moist mini chocolate cakes packed with rich, premium chocolate flavor and topped with a smooth chocolate ganache drizzle. Perfectly portioned in a 20-piece pack, ideal for sharing.", price: "RM 25.00", img: "Minichoc.png" },
    { name: "Double Choc Chip Muffin", details: "Indulge in our rich, Double Choc Chip Muffins. These moist, decadent chocolate muffins are loaded with premium chocolate chips both inside and on top for the ultimate chocolate experience. Perfect as a quick treat or to share with family. 16 pcs", price: "RM 25.00", img: "MuffinChoc.png" },
  ];

  const tradisi = [
    { name: "Nasi Lemak Daun Pisang", details: "Nasi lemak tradisi bungkus daun pisang, Telur Suku, Ikan Bilis, Timun", price: "RM 2.00", img: "nasilemak-1.png" },
    { name: "Pulut Kuning Rendang", details: "Set sajian istimewa bersempena majlis keraian atau perayaan. Pulut Kuning yang berlemak santan dan lembut dipadankan sempurna dengan Rendang Daging yang kaya aroma rempah ratus tradisional.", price: "RM 10.00", img: "Pulutkuning.png" },
    { name: "Karipap Sardin", details: "Karipap berasaskan kulit yang rangup dan berlapis, diisi penuh dengan inti sardin yang enak, sedikit pedas, dan kaya dengan rasa rempah-ratus tradisional. 1 box ada 50 pcs.", price: "RM 40.00", img: "Karipapsardin.png" },
    { name: "Tauhu Bergedil", details: "Tauhu pok yang diisi padat dengan kentang lecek rempah, daun sup, dan bawang goreng, lalu dicelup telur dan digoreng garing. 1 box 25 pcs (Pilihan : Kentang / Ayam / Daging )", price: "RM 30.00 / RM 35.00 / RM 40.00 ", img: "Tauhubergedil.png" },
    { name: "Pogedil", details: "Pogedil adalah singkatan kepada Popia Bergedil, sebuah makanan ringan gabungan yang sangat popular di Malaysia. 1 box 25 pcs (Pilihan : Kentang / Ayam / Daging ) ", price: "RM 30.00 / RM 35.00 / RM 40.00", img: "Pogedil.png" },
    { name: "Pulut Inti Kelapa Pedas", details: "Pulut kukus berlemak santan diseri topping inti kelapa sambal pedas. Gabungan rasa lemak-pedas yang membangkitkan selera. 1 box ada 50 pcs.", price: "RM 40.00 ", img: "Pulutinti.png" },
    { name: "Karipap Kentang", details: "Karipap klasik dengan inti kentang yang dimasak bersama rempah ratus wangi, memberikan rasa savory yang memuaskan. 1 box ada 50 pcs.", price: "RM 40.00", img: "Karipapkentang.png" },
    { name: "Nasi Tomato Ayam Masak Merah", details: "Nasi tomato beraroma lengkap bersama Ayam Masak Merah pedas-manis dan acar jelatah segar. Sempurna untuk sebarang majlis. Min order : 15 pax", price: "RM 10.00", img: "nasitomato.png" },
    { name: "Nasi Putih Buttermilk Ayam", details: "Nasi putih lembut disajikan bersama ayam goreng rangup yang dilimpahi kuah buttermilk pekat, berlemak, dan wangi dengan aroma daun kari serta cili padi. Min order : 15 pax", price: "RM 10.00", img: "Buttermilk.png" },
    { name: "Kuih Kaswi Gedik", details: "Kuih tradisional kukus bertekstur sangat lembut, kenyal, dan beraroma pandan asli. Disajikan bersama taburan kelapa parut muda gurih manis untuk imbangan rasa yang sempurna. 1 box ada 50 pcs.", price: "RM 40.00", img: "Kuihkaswi.png" },
  ];

  return (
    <section id="menu" className="py-32 bg-[#FFF0F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs font-semibold tracking-widest text-[#E11D48] uppercase mb-3">Our Menu</h2>
            <h3 className="text-4xl font-semibold tracking-tight text-[#3F1D24]">Our Special Selection <br/><span className="text-2xl text-[#3F1D24]/80 font-normal mt-2 block">Pilihan Sajian Tradisi & Dessert Premium</span></h3>
          </div>
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
