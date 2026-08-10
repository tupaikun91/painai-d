import { Cake, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#2A1116] overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={`${import.meta.env.BASE_URL}hero-cake.jpg`} 
          alt="Strawberry Cake Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay transform scale-105" 
          style={{ filter: 'contrast(1.2) brightness(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1116]/80 via-[#3F1D24]/60 to-[#2A1116]/90 pointer-events-none"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E11D48]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="absolute left-[10%] animate-float-1 w-16 h-auto opacity-0" />
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="absolute left-[30%] animate-float-2 w-12 h-auto opacity-0" />
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="absolute left-[50%] animate-float-3 w-20 h-auto opacity-0" />
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="absolute left-[70%] animate-float-4 w-14 h-auto opacity-0" />
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="absolute left-[90%] animate-float-5 w-10 h-auto opacity-0" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.1] mb-6 drop-shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-[#FCA5A5]">PaiNai Delights</span>
        </h1>
        
        <p className="text-base md:text-xl text-[#FFF9F9]/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide drop-shadow-md animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
          Sajian Tradisi & Dessert Premium
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <a href="#menu" className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-[#E11D48] rounded-full hover:bg-[#BE123C] hover:shadow-[0_0_25px_rgba(225,29,72,0.4)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2">
            View Menu
            <Cake className="w-4 h-4" />
          </a>
          <a href="#booking" className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2">
            Order Now
            <Calendar className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-[bounce_2s_infinite]">
        <span className="text-xs tracking-widest uppercase">SCROLL</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
}
