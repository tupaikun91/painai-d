import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2A1116] text-white/60 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2 mb-6">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="PaiNai Delights Logo" className="w-10 h-10 object-contain" />
              PaiNai Delights
            </a>
            <p className="text-xs font-light leading-relaxed mb-6 max-w-xs text-white/50">
              Meraikan keaslian rasa tradisi dan keindahan dessert premium dalam setiap suapan. Di PaiNai Delights, kami menggabungkan resepi warisan dengan sentuhan teliti untuk mencipta kenangan terindah buat anda.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/painaidelights?igsh=MTdjbGZ4ZHhsa2IyMQ==" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#E11D48] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@painai.delight?_r=1&_t=ZS-98lABgI9kvq" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#E11D48] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.4V8.687a8.182 8.182 0 0 0 4.77 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                </svg>
              </a>
              <a href="mailto:painaidelight@gmail.com" className="text-white/40 hover:text-[#E11D48] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium tracking-wide mb-6">Explore</h4>
            <ul className="space-y-3 text-xs font-light">
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium tracking-wide mb-6">Contact</h4>
            <ul className="space-y-4 text-xs font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#E11D48]" />
                <span>Residensi Seri Wahyu, Taman Wahyu,<br/> Jalan Sibu, 68100 Kuala Lumpur.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E11D48]" />
                <span>+6016-6682652</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E11D48]" />
                <a href="mailto:painaidelight@gmail.com" className="hover:text-white transition-colors">painaidelight@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium tracking-wide mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Sunday <br/><span className="text-[10px] text-white/40">Isnin - Ahad</span></span>
                <span className="text-white font-medium text-[#FCA5A5] flex items-center">8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/30">
          <p>© 2026 PaiNai Delights. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
