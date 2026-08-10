import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Berapa hari awal saya perlu membuat tempahan?",
      answer: "Kami mengesyorkan anda membuat tempahan sekurang-kurangnya 3 hingga 5 hari lebih awal. Untuk tempahan khas (custom) atau dalam kuantiti yang besar, sila beritahu kami sekurang-kurangnya 1 minggu lebih awal supaya kami dapat menyediakan tempahan anda dengan sempurna."
    },
    {
      question: "Adakah anda menyediakan perkhidmatan penghantaran (delivery)?",
      answer: "Ya, kami menyediakan perkhidmatan penghantaran di sekitar kawasan Kuala Lumpur dan Selangor. Caj penghantaran akan dikenakan bergantung pada lokasi dan jarak. Anda juga boleh memilih untuk mengambil sendiri (self-pickup) di premis kami."
    },
    {
      question: "Bolehkah saya menukar atau memilih rekaan kek saya (custom design)?",
      answer: "Boleh! Kami menerima tempahan custom design mengikut citarasa anda. Walau bagaimanapun, kebolehan untuk merealisasikan rekaan bergantung kepada kepakaran dan jenis kek yang diminta. Sila hantar gambar rujukan kepada kami melalui WhatsApp untuk kami semak terlebih dahulu."
    },
    {
      question: "Adakah bahan-bahan yang digunakan diiktiraf Halal?",
      answer: "Ya, kami hanya menggunakan 100% bahan yang diiktiraf Halal untuk semua kek dan pastri kami. Kami sangat mementingkan kebersihan dan kualiti untuk ketenangan minda anda."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-[#FFF0F0]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-[#E11D48] uppercase mb-3">Questions & Answers</h2>
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#3F1D24]">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#FFF9F9] border border-[#3F1D24]/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#3F1D24]/5 transition-colors"
              >
                <span className="text-sm font-semibold text-[#3F1D24]">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#E11D48] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm font-light text-[#3F1D24]/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
