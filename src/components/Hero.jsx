import { useState } from 'react';
import cupImage from '../assets/cup.png';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (email) {
      alert(`Thank you! You have been added to the list: ${email}`);
      setEmail(''); 
    }
  };

  return (
    <main className="relative z-10 w-full max-w-4xl flex flex-col items-center mt-2 md:mt-4 transition-all duration-500 pb-0">
      
      <div className="relative flex flex-col items-center mb-2">
        <div className="relative h-12 w-full flex justify-center opacity-80 mb-[-15px] z-0">
           <div className="steam steam-1 scale-125"></div>
           <div className="steam steam-2 scale-125"></div>
           <div className="steam steam-3 scale-125"></div>
           <div className="steam steam-4 scale-125"></div> 
           <div className="steam steam-5 scale-125"></div>
        </div>
        
        <img 
          src={cupImage} 
          alt="Royal Chai Cup" 
          className="w-28 md:w-48 drop-shadow-2xl z-10 relative"
        />
      </div>

      <h1 className="font-serif text-5xl md:text-7xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF8DC] to-[#D4AF37] animate-text-shimmer pb-2 drop-shadow-sm text-center leading-tight">
        Brew the Royal Tradition
      </h1>

      <p className="max-w-lg text-center text-sm md:text-base text-[#F5F5DC] opacity-90 mb-5 tracking-wide leading-relaxed px-4">
        Chai Culture brings the timeless elegance of royal Indian households
        into a premium instant chai experience.
      </p>

      <span className="uppercase tracking-widest text-[#D4AF37] text-[10px] font-bold mb-5 border-b border-[#D4AF37] pb-1">
        Launching Soon
      </span>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 w-full max-w-md relative z-20 px-4">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access" 
          className="flex-1 bg-transparent border-b-2 border-[#D4AF37] py-2 text-[#F5F5DC] placeholder-opacity-50 placeholder-[#F5F5DC] focus:outline-none text-base transition-all focus:border-[#F3E5AB]"
          required 
        />
        <button type="submit" className="bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-[#2C1A1D] px-6 py-2 font-bold uppercase tracking-wider text-sm hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 whitespace-nowrap">
          Notify Me
        </button>
      </form>

      <div className="mt-8 self-end text-right opacity-80 hover:opacity-100 transition-opacity duration-500 pr-6">
        <p className="font-serif italic text-[#D4AF37] text-lg">
          "A cup of heritage."
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] mt-1 opacity-60 text-[#F5F5DC]">
          — Jay Trivedi, Founder
        </p>
      </div>
      
    </main>
  );
}