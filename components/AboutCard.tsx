"use client";

interface AboutCardProps {
  onClick: () => void;
}

export default function AboutCard({ onClick }: AboutCardProps) {
  return (
    <button
      onClick={onClick}
      style={{ top: "5%", left: "74%" }}
      className="absolute -rotate-2 transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl focus:outline-none text-left z-10"
    >
      <div className="w-60 rounded-2xl overflow-hidden shadow-lg bg-white">
        {/* Image area */}
        <div className="relative w-full h-44 overflow-hidden bg-gradient-to-br from-[#f5c6a0] to-[#e8956d] flex items-center justify-center">
          <span className="text-white text-5xl font-black opacity-20 select-none">KK</span>
        </div>

        {/* Content */}
        <div className="px-5 py-4 flex flex-col gap-2">
          <span className="px-2.5 py-1 bg-stone-100 text-stone-500 rounded-full text-[10px] font-medium w-fit">
            UX Designer
          </span>
          <h3 className="text-[15px] font-bold text-stone-900 leading-snug">O mnie</h3>
          <p className="text-[11px] text-stone-500 leading-relaxed -mt-1">
            PwC · 4+ lata doświadczenia
          </p>
        </div>
      </div>
    </button>
  );
}
