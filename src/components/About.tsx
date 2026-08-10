export default function About() {
  return (
    <section id="about" className="py-32 relative bg-[#FFF9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src={`${import.meta.env.BASE_URL}Ourstory.jpg`} 
              alt="Baking fresh cakes" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A1116]/60 via-transparent to-transparent opacity-80 transition-opacity duration-500"></div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-[#E11D48] uppercase mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#3F1D24] leading-tight">
                Bermula daripada Minat, Dihidangkan dengan Kualiti
              </h3>
            </div>
            <p className="text-base text-[#3F1D24]/80 font-light leading-relaxed">
              PaiNai Delights mula beroperasi pada awal tahun 2024, lahir daripada minat yang mendalam terhadap seni pembuatan kek, dessert, dan masakan tradisi. Sebagai perniagaan home-based, kami membawakan terus sajian autentik dari dapur rumah kami ke meja anda.
            </p>
            <p className="text-base text-[#3F1D24]/80 font-light leading-relaxed">
              Kami berpegang teguh pada komitmen untuk sentiasa menyajikan yang terbaik. Bagi memastikan mutu dan rasa berada pada tahap tertinggi, setiap sajian disediakan khas sebaik sahaja tempahan diterima demi membawakan pengalaman Sajian Tradisi & Dessert Premium yang sebenar dalam setiap suapan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
