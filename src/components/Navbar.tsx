import { Menu, Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FFF9F9]/80 backdrop-blur-lg border-b border-[#3F1D24]/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-semibold tracking-tighter text-[#3F1D24] uppercase flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="PaiNai Delights Logo" className="w-8 h-8 object-contain" />
          PaiNai Delights
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3F1D24]/70">
          <a href="#about" className="hover:text-[#E11D48] transition-colors">About</a>
          <a href="#menu" className="hover:text-[#E11D48] transition-colors">Menu</a>
          <a href="#collections" className="hover:text-[#E11D48] transition-colors">Collections</a>
          <a href="#faq" className="hover:text-[#E11D48] transition-colors">FAQ</a>
        </div>
        <a href="#booking" className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#3F1D24] rounded-full hover:bg-[#E11D48] hover:shadow-[0_0_15px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 transition-all duration-300">
          <Calendar className="w-4 h-4" />
          Order Now
        </a>
        <button className="md:hidden text-[#3F1D24]">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
