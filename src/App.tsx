import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import DessertTable from './components/DessertTable';
import Booking from './components/Booking';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#FFF9F9] text-[#3F1D24] font-['Inter',sans-serif] antialiased selection:bg-[#E11D48] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <DessertTable />
      <Booking />
      <Faq />
      <Footer />
    </div>
  );
}
