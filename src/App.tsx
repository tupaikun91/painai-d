import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import DessertTable from './components/DessertTable';
import Booking from './components/Booking';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FullMenuPage from './components/FullMenuPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.hash || '#');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(window.location.hash || '#');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (currentPath === '#full-menu') {
    return (
      <div className="bg-[#FFF9F9] text-[#3F1D24] font-['Inter',sans-serif] antialiased selection:bg-[#E11D48] selection:text-white overflow-x-hidden">
        <FullMenuPage onBack={() => window.location.hash = '#'} />
      </div>
    );
  }

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
