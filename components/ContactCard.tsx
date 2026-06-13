"use client";

import { contact } from "@/data/projects";

interface ContactCardProps {
  onClick: () => void;
}

export default function ContactCard({ onClick }: ContactCardProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 rotate-1 transition-transform duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none z-20"
    >
      {/* Metal clip */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-[#b0b0b0] border border-[#999] shadow-sm" />
        <div className="w-8 h-3 bg-gradient-to-b from-[#d8d8d8] to-[#b8b8b8] rounded-sm border border-[#a0a0a0] shadow-md -mt-0.5" />
      </div>

      {/* Instax frame */}
      <div className="bg-white shadow-lg w-44 pt-4 pb-10 px-3 rounded-sm">
        <div className="w-full aspect-square bg-stone-50 rounded-sm flex flex-col items-center justify-center gap-1 px-2">
          <span className="text-stone-600 text-xs font-semibold">
            {contact.name}
          </span>
        </div>
        <div className="mt-2 min-h-[2.5rem] flex flex-col justify-center items-start gap-0.5">
          <p className="text-stone-600 text-[11px] font-medium">Kontakt</p>
          <p className="text-stone-400 text-[10px]">{contact.email}</p>
        </div>
      </div>
    </button>
  );
}
