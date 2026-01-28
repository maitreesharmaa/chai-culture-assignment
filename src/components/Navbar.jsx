export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full flex justify-between items-center p-6 md:p-12 z-20">
      <div className="text-xl md:text-2xl font-serif font-bold tracking-widest text-[#D4AF37]">
        CHAI CULTURE
      </div>
      <div className="flex gap-6 text-[10px] md:text-xs font-bold tracking-widest opacity-70 text-[#F5F5DC]">
         <a href="#" className="hover:text-[#D4AF37] transition-colors">INSTAGRAM</a>
         <a href="#" className="hover:text-[#D4AF37] transition-colors">LINKEDIN</a>
      </div>
    </nav>
  );
}