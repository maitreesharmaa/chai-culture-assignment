export default function IntroCurtain() {
  return (
    <>
      <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none animate-fade-out">
         <div className="text-[#D4AF37] font-serif text-3xl md:text-5xl tracking-widest border-4 border-[#D4AF37] p-6 md:p-8 bg-[#2C1A1D] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
           CHAI CULTURE
         </div>
      </div>

      <div 
        className="fixed inset-y-0 left-0 w-1/2 z-50 border-r-4 border-[#D4AF37] flex items-center justify-end pr-4 animate-curtain-left shadow-[10px_0_60px_rgba(0,0,0,0.9)] origin-top-left"
        style={{
          background: "repeating-linear-gradient(90deg, #1a0f11 0%, #2C1A1D 10%, #1a0f11 20%)",
          borderBottomRightRadius: "100% 10%" 
        }}
      >
      </div>

      <div 
        className="fixed inset-y-0 right-0 w-1/2 z-50 border-l-4 border-[#D4AF37] flex items-center justify-start pl-4 animate-curtain-right shadow-[-10px_0_60px_rgba(0,0,0,0.9)] origin-top-right"
        style={{
          background: "repeating-linear-gradient(90deg, #1a0f11 0%, #2C1A1D 10%, #1a0f11 20%)",
          borderBottomLeftRadius: "100% 10%" 
        }}
      >
      </div>
    </>
  );
}