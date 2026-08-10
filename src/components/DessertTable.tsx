import { CalendarHeart, UtensilsCrossed } from 'lucide-react';

export default function DessertTable() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <img 
                src="DessertTable.png" 
                alt="Dessert Table Setup" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Circular Spinning Badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full shadow-xl border border-black/5 hidden md:flex items-center justify-center p-2">
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#3F1D24]">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[10px] font-bold tracking-widest uppercase" fill="currentColor">
                    <textPath href="#circlePath" startOffset="0%" textLength="230">
                      CUSTOM SETUP • FOR YOUR SPECIAL DAY • 
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center z-10 overflow-hidden shadow-inner">
                <img src="logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-xs font-semibold tracking-widest text-[#E11D48] uppercase mb-3">Event Services</h2>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Dessert Table Setup for Your Events</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Make your special occasions even sweeter! We offer custom Dessert Table setups for weddings, birthday parties, corporate events, Kenduri, and any celebration. We will beautifully arrange an assortment of our premium desserts and traditional kuih to match your event's theme.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFF9F9] flex items-center justify-center shrink-0 mt-1">
                  <CalendarHeart className="w-5 h-5 text-[#E11D48]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#3F1D24] mb-1">Perfect for Any Occasion</h4>
                  <p className="text-sm text-gray-500 font-light">Weddings, birthdays, corporate events, and traditional kenduri.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFF9F9] flex items-center justify-center shrink-0 mt-1">
                  <UtensilsCrossed className="w-5 h-5 text-[#E11D48]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#3F1D24] mb-1">Customizable Menu</h4>
                  <p className="text-sm text-gray-500 font-light">Choose from our wide selection of premium cakes, tarts, and traditional favorites.</p>
                </div>
              </div>
            </div>

            <a href="#booking" className="inline-flex items-center gap-2 px-8 py-4 bg-[#3F1D24] text-white text-sm font-medium rounded-full hover:bg-[#E11D48] transition-colors duration-300">
              Inquire Now
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
