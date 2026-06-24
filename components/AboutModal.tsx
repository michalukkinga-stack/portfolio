"use client";

import { useEffect } from "react";
import { useLang } from "@/context/lang";
import { aboutContent } from "./AboutPanel";

interface AboutModalProps {
  onClose: () => void;
}

export default function AboutModal({ onClose }: AboutModalProps) {
  const { lang } = useLang();
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col overflow-y-auto"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-7 pb-4 border-b border-stone-100 shrink-0">
          <p className="text-xs font-medium text-orange-500 uppercase tracking-widest">{lang === "en" ? "About me" : "O mnie"}</p>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
            aria-label="Zamknij"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8 flex flex-col gap-8">
          <h1 className="text-2xl font-bold text-stone-900">Hello, my name is Kinga</h1>
          {aboutContent[lang].map((slide, i) => (
            <section key={i} className="flex flex-col gap-4">
              {slide}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
