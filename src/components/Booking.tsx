import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = [
      "Hi PaiNai Delights, I would like to place an order:",
      "",
      `Name : ${formData.name}`,
      `Phone Number : ${formData.phone}`,
      `Pickup/Delivery Date : ${formData.date}`,
      `Time : ${formData.time}`,
      `Delivery Address : ${formData.address}`,
      "",
      "Order details :",
      formData.details,
      "",
      "Thank you!"
    ].join('\n');

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/60166682652?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-32 relative bg-[#2A1116] overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2000&auto=format&fit=crop" 
          alt="Cake Background" 
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-[#2A1116]/80"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-14 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-xs font-semibold tracking-widest text-[#FCA5A5] uppercase mb-3">Order Now</h2>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">Place Your Order</h3>
            <p className="text-sm text-white/60 font-light max-w-md mx-auto">Order your favorite cakes and desserts from PaiNai Delights via WhatsApp.</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-white/80 tracking-wide">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-[#3F1D24]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E11D48] focus:bg-[#2A1116] transition-all duration-300" placeholder="Your Name" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-white/80 tracking-wide">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-[#3F1D24]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E11D48] focus:bg-[#2A1116] transition-all duration-300" placeholder="Your Phone Number" />
            </div>
            
            <div className="flex flex-col gap-2 relative">
              <label className="text-xs font-medium text-white/80 tracking-wide">Pickup / Delivery Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full bg-[#3F1D24]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[#E11D48] focus:bg-[#2A1116] transition-all duration-300 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-60 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 cursor-pointer" />
            </div>
            
            <div className="flex flex-col gap-2 relative">
              <label className="text-xs font-medium text-white/80 tracking-wide">Time (6 AM to 10 PM)</label>
              <div className="relative">
                <select name="time" value={formData.time} onChange={handleChange} required className="w-full bg-[#3F1D24]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[#E11D48] focus:bg-[#2A1116] transition-all duration-300 appearance-none cursor-pointer">
                  <option value="" disabled className="text-white/50">Select Time</option>
                  <option value="6:00 AM" className="text-[#3F1D24]">6:00 AM</option>
                  <option value="7:00 AM" className="text-[#3F1D24]">7:00 AM</option>
                  <option value="8:00 AM" className="text-[#3F1D24]">8:00 AM</option>
                  <option value="9:00 AM" className="text-[#3F1D24]">9:00 AM</option>
                  <option value="10:00 AM" className="text-[#3F1D24]">10:00 AM</option>
                  <option value="11:00 AM" className="text-[#3F1D24]">11:00 AM</option>
                  <option value="12:00 PM" className="text-[#3F1D24]">12:00 PM</option>
                  <option value="1:00 PM" className="text-[#3F1D24]">1:00 PM</option>
                  <option value="2:00 PM" className="text-[#3F1D24]">2:00 PM</option>
                  <option value="3:00 PM" className="text-[#3F1D24]">3:00 PM</option>
                  <option value="4:00 PM" className="text-[#3F1D24]">4:00 PM</option>
                  <option value="5:00 PM" className="text-[#3F1D24]">5:00 PM</option>
                  <option value="6:00 PM" className="text-[#3F1D24]">6:00 PM</option>
                  <option value="7:00 PM" className="text-[#3F1D24]">7:00 PM</option>
                  <option value="8:00 PM" className="text-[#3F1D24]">8:00 PM</option>
                  <option value="9:00 PM" className="text-[#3F1D24]">9:00 PM</option>
                  <option value="10:00 PM" className="text-[#3F1D24]">10:00 PM</option>
                </select>
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-white/50">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-medium text-white/80 tracking-wide">Delivery Address (Leave blank if pickup)</label>
              <textarea name="address" value={formData.address} onChange={handleChange} rows={2} className="w-full bg-[#3F1D24]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E11D48] focus:bg-[#2A1116] transition-all duration-300 resize-none" placeholder="Your Delivery Address..."></textarea>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-medium text-white/80 tracking-wide">Order Details</label>
              <textarea name="details" value={formData.details} onChange={handleChange} required rows={4} className="w-full bg-[#3F1D24]/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E11D48] focus:bg-[#2A1116] transition-all duration-300 resize-none" placeholder="E.g. 1x Strawberry Shortcake, 2x Cheese Tart"></textarea>
            </div>
            
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="w-full py-4 text-sm font-semibold text-white bg-[#E11D48] rounded-xl hover:bg-[#BE123C] hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2">
                Order via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
