"use client";

import { useEffect } from "react";

interface AboutModalProps {
  onClose: () => void;
}

export default function AboutModal({ onClose }: AboutModalProps) {
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
          <p className="text-xs font-medium text-orange-500 uppercase tracking-widest">O mnie</p>
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
          {/* Hello section */}
          <section className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-stone-900">Hello, my name is Kinga</h1>
            <p className="text-stone-600 leading-relaxed">
              I've always been curious about how people think, make decisions, and deal with the
              challenges they face. This naturally led me to ask questions that go a bit deeper and to
              look for answers that actually bring understanding, not just surface-level explanations.
            </p>
            <p className="text-stone-600 leading-relaxed">
              I began my professional career in interior design, where I had the opportunity to conduct
              my first <strong className="text-stone-900">in-depth interviews</strong>, exploring the habits and needs of the residents whose
              spaces I was designing. When I discovered that design also plays a crucial role in the
              digital world, I decided to pursue this path and began my career as a{" "}
              <strong className="text-stone-900">UX Designer</strong>.
            </p>
          </section>

          {/* Current role section */}
          <section className="flex flex-col gap-4">
            <p className="text-stone-600 leading-relaxed">
              I am currently working as a UX Designer at{" "}
              <strong className="text-stone-900">PwC</strong> and have been in this role for over{" "}
              <strong className="text-stone-900">4 years</strong>, contributing to a wide range of
              projects. My work involves designing tools that address complex technical domains. These
              are applications focused on AI, data, and the workflows of specialist consultants.
              <br />
              My role requires translating highly complex, technical problems into clear and intuitive
              user experiences.
            </p>
            <p className="text-stone-600 leading-relaxed">
              I work in <strong className="text-stone-900">Scrum</strong> within{" "}
              <strong className="text-stone-900">cross-functional teams</strong> that combine strong
              business and technical expertise. On a daily basis, I collaborate closely with Product
              Owners, Business Analysts, Developers, Testers, Data Scientists, and Power BI developers
              to deliver <strong className="text-stone-900">user-centered solutions</strong>.
            </p>
            <p className="text-stone-600 leading-relaxed">
              I design scalable and accessible experiences using established{" "}
              <strong className="text-stone-900">design systems</strong>, ensuring{" "}
              <strong className="text-stone-900">consistency</strong> across products. My expertise
              includes UI design and creating{" "}
              <strong className="text-stone-900">interactive prototypes</strong> to validate concepts
              and effectively support the development process.
              <br />I also specialize in{" "}
              <strong className="text-stone-900">data visualization</strong>, translating complex
              datasets into clear, insightful, and user-friendly experiences that enable informed
              decision-making.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
