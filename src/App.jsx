import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import IntroCurtain from './components/IntroCurtain';

export default function App() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-chai-dark text-chai-cream flex flex-col items-center px-6 font-sans">
      
      <IntroCurtain />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-[100px] opacity-10 pointer-events-none"></div>
      <div className="bg-noise"></div>

      <Navbar />
      <Hero />
      <Footer />
      
    </div>
  )
}