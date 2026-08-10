import { ArrowLeft } from 'lucide-react';
import { desserts, tradisi } from '../data/menu';
import { useEffect } from 'react';

export default function FullMenuPage({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allItems = [
    { category: "Dessert", items: desserts },
    { category: "Sajian Tradisi", items: tradisi }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[#3F1D24] hover:text-[#E11D48] transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#3F1D24] mb-4">Our Full Menu</h1>
          <p className="text-[#3F1D24]/70 max-w-2xl mx-auto">Explore all our delicious offerings and compare them to find your perfect treat.</p>
        </div>

        {allItems.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-3xl font-semibold tracking-tight text-[#3F1D24] mb-10 border-b border-[#3F1D24]/10 pb-4">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#3F1D24]/5 group flex flex-col">
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={`${import.meta.env.BASE_URL}${item.img}`} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-serif text-[#3F1D24] mb-3 group-hover:text-[#E11D48] transition-colors">{item.name}</h3>
                    <p className="text-sm font-light text-[#3F1D24]/70 leading-relaxed mb-6 flex-grow">{item.details}</p>
                    <div className="mt-auto">
                      <span className="text-lg font-bold text-[#E11D48]">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
