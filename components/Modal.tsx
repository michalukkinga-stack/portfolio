"use client";

import { useState, useEffect, useCallback } from "react";
import { Project, Slide, SlideSection, ProcessPhase, Concept } from "@/data/projects";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

function TagChip({ tag }: { tag: string }) {
  return (
    <span className="px-2.5 py-1 bg-orange-50 text-orange-500 border border-orange-200 rounded-full text-xs font-medium">
      #{tag}
    </span>
  );
}

function FooterTags({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5 pt-5 mt-auto border-t border-stone-100">
      {tags.map((tag) => <TagChip key={tag} tag={tag} />)}
    </div>
  );
}

/** Podświetla frazy bold w tekście na podstawie tablicy boldPhrases */
function BoldText({ text, boldPhrases }: { text: string; boldPhrases?: string[] }) {
  if (!boldPhrases || boldPhrases.length === 0) {
    return <>{text}</>;
  }
  const escaped = boldPhrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        boldPhrases.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
          <strong key={i} className="text-stone-900 font-semibold">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function SectionBlock({ section }: { section: SlideSection }) {
  return (
    <div>
      {section.label && (
        <p className="text-lg font-bold text-stone-900 mb-2">{section.label}</p>
      )}
      {section.text && !section.bullets && (
        <p className="text-stone-600 leading-relaxed">
          <BoldText text={section.text} boldPhrases={section.boldPhrases} />
        </p>
      )}
      {section.bullets && (
        <div>
          {section.text && (
            <p className="text-stone-600 leading-relaxed mb-2">
              <BoldText text={section.text} boldPhrases={section.boldPhrases} />
            </p>
          )}
          <ul className="flex flex-col gap-2.5">
            {section.bullets.map((b, j) => (
              <li key={j} className="flex gap-2 text-stone-600 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                <span>
                  {b.boldPrefix && <strong className="text-stone-900">{b.boldPrefix}</strong>}
                  {b.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {section.tags && section.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {section.tags.map((tag) => <TagChip key={tag} tag={tag} />)}
        </div>
      )}
    </div>
  );
}

/* --- COVER layout --- */
function CoverSlide({ slide }: { slide: Slide }) {
  const [imgLeft, imgRight] = slide.images ?? [];
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex gap-10 flex-1 items-start">
        {/* Left column: text + optional small mockup */}
        <div className="flex flex-col justify-between h-full flex-1">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4 leading-tight">{slide.title}</h2>
            {slide.subtitle && (
              <p className="text-xl text-stone-500 leading-relaxed">{slide.subtitle}</p>
            )}
          </div>
          {imgLeft && (
            <div className="mt-8 w-[85%] rounded-lg overflow-hidden shadow-md border border-stone-100">
              <img src={imgLeft} alt="" className="w-full h-auto object-cover" />
            </div>
          )}
        </div>
        {/* Right column: main mockup */}
        {imgRight && (
          <div className="w-[48%] shrink-0 rounded-lg overflow-hidden shadow-md border border-stone-100 self-end">
            <img src={imgRight} alt="" className="w-full h-auto object-cover" />
          </div>
        )}
      </div>
      <FooterTags tags={slide.footerTags ?? []} />
    </div>
  );
}

/* --- PROCESS layout --- */
function ProcessSlide({ slide }: { slide: Slide }) {
  const phases = slide.phases ?? [];
  return (
    <div className="flex flex-col h-full">
      {slide.title && (
        <h2 className="text-2xl font-bold text-stone-900 mb-8">{slide.title}</h2>
      )}
      <div className="flex gap-0 flex-1 items-start relative">
        {/* Connecting line */}
        <div className="absolute top-[22px] left-[28px] right-[28px] h-px bg-stone-200 z-0" />
        {phases.map((phase, i) => (
          <div key={i} className="flex-1 flex flex-col items-center relative z-10">
            {/* Circle */}
            <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mb-3 shrink-0 shadow-sm">
              {i + 1}
            </div>
            <p className="font-bold text-stone-900 text-sm mb-3 text-center">{phase.name}</p>
            <ul className="flex flex-col gap-1.5 w-full px-2">
              {phase.activities.map((act, j) => (
                <li key={j} className="flex gap-1.5 text-stone-500 text-xs leading-relaxed">
                  <span className="mt-1 w-1 h-1 rounded-full bg-stone-300 shrink-0" />
                  {act}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <FooterTags tags={slide.footerTags ?? []} />
    </div>
  );
}

/* --- CONCEPTS (A/B testing) layout --- */
function ConceptsSlide({ slide }: { slide: Slide }) {
  const concepts = slide.concepts ?? [];
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-5 flex-1">
        {concepts.map((concept, i) => (
          <div key={i} className="flex-1 flex flex-col border border-stone-100 rounded-xl overflow-hidden bg-stone-50">
            {concept.image && (
              <div className="w-full h-40 bg-stone-100 shrink-0">
                <img src={concept.image} alt={concept.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <p className="font-bold text-stone-900 text-sm mb-4">{concept.title}</p>
              {concept.pros.length > 0 && (
                <ul className="flex flex-col gap-2 mb-4">
                  {concept.pros.map((pro, j) => (
                    <li key={j} className="flex gap-2 text-stone-600 text-xs leading-relaxed">
                      <span className="mt-1 text-emerald-500 shrink-0 font-bold">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              )}
              {concept.cons.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {concept.cons.map((con, j) => (
                    <li key={j} className="flex gap-2 text-stone-600 text-xs leading-relaxed">
                      <span className="mt-1 text-orange-400 shrink-0 font-bold">–</span>
                      {con}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <FooterTags tags={slide.footerTags ?? []} />
    </div>
  );
}

/* --- PERSONAS layout --- */
function PersonasSlide({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col h-full">
      {slide.title && (
        <h2 className="text-2xl font-bold text-stone-900 mb-8">{slide.title}</h2>
      )}
      <div className="flex gap-6 flex-1">
        {(slide.personas ?? []).map((persona, i) => (
          <div key={i} className="flex-1 flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-stone-100 mb-4 overflow-hidden shrink-0">
              {persona.image ? (
                <img src={persona.image} alt={persona.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-stone-300 text-xs italic">foto</div>
              )}
            </div>
            <p className="font-bold text-stone-900 mb-3">{persona.name}</p>
            <ul className="text-left flex flex-col gap-1.5 w-full">
              {persona.bullets.map((b, j) => (
                <li key={j} className="flex gap-2 text-stone-600 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <FooterTags tags={slide.footerTags ?? []} />
    </div>
  );
}

/* --- CLIENT layout --- */
function ClientSlide({ slide }: { slide: Slide }) {
  return (
    <div className="flex h-full items-center gap-16">
      {/* Left: text */}
      <div className="flex flex-col gap-4 flex-1">
        {slide.sections.map((section, i) => (
          <div key={i}>
            {section.label && (
              <p className="text-sm font-bold text-stone-900 mb-1">{section.label}</p>
            )}
            {section.text && (
              <p className={section.label ? "text-3xl font-bold text-stone-900 leading-tight" : "text-stone-500 leading-relaxed mt-4"}>
                {section.label
                  ? <BoldText text={section.text} boldPhrases={section.boldPhrases} />
                  : <BoldText text={section.text} boldPhrases={section.boldPhrases} />}
              </p>
            )}
          </div>
        ))}
      </div>
      {/* Right: logo box */}
      {slide.image && (
        <div className="shrink-0 w-[38%] border border-blue-300 rounded-sm flex items-center justify-center p-10">
          <img src={slide.image} alt="Client logo" className="w-full h-auto object-contain" />
        </div>
      )}
    </div>
  );
}

/* --- TWO-COL layout --- */
function TwoColSlide({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col h-full">
      {slide.title && (
        <h2 className="text-2xl font-bold text-stone-900 mb-6">{slide.title}</h2>
      )}
      <div className="flex gap-8 flex-1">
        <div className="flex-1 flex flex-col gap-5">
          {slide.sections.map((section, i) => (
            <SectionBlock key={i} section={section} />
          ))}
        </div>
        {slide.image !== undefined && (
          <div className="w-72 shrink-0 bg-stone-100 rounded-xl flex items-center justify-center text-stone-300 text-sm italic">
            {slide.image ? (
              <img src={slide.image} alt="" className="w-full h-full object-contain rounded-xl" />
            ) : (
              "Zdjęcie wkrótce"
            )}
          </div>
        )}
      </div>
      <FooterTags tags={slide.footerTags ?? []} />
    </div>
  );
}

/* --- FULL IMAGE layout --- */
function FullImageSlide({ slide }: { slide: Slide }) {
  return (
    <div className="absolute inset-0 flex flex-col">
      {slide.image && (
        <img src={slide.image} alt={slide.title ?? ""} className="w-full h-full object-cover" />
      )}
    </div>
  );
}

/* --- DEFAULT layout --- */
function DefaultSlide({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col h-full">
      {slide.title && (
        <h2 className="text-2xl font-bold text-stone-900 mb-6">{slide.title}</h2>
      )}
      {slide.image !== undefined && !slide.title && (
        <div className="flex-1 bg-stone-100 rounded-xl flex items-center justify-center text-stone-300 text-sm italic">
          {slide.image ? (
            <img src={slide.image} alt="" className="w-full h-full object-contain rounded-xl" />
          ) : "Zdjęcie wkrótce"}
        </div>
      )}
      {slide.image !== undefined && slide.title && (
        <div className="w-full h-52 bg-stone-100 rounded-xl flex items-center justify-center text-stone-300 text-sm italic shrink-0 mb-5">
          {slide.image ? (
            <img src={slide.image} alt="" className="w-full h-full object-contain rounded-xl" />
          ) : "Zdjęcie wkrótce"}
        </div>
      )}
      <div className="flex flex-col gap-5 flex-1">
        {slide.sections.map((section, i) => (
          <SectionBlock key={i} section={section} />
        ))}
      </div>
      <FooterTags tags={slide.footerTags ?? []} />
    </div>
  );
}

function SlideView({ slide }: { slide: Slide }) {
  if (slide.layout === "cover") return <CoverSlide slide={slide} />;
  if (slide.layout === "process") return <ProcessSlide slide={slide} />;
  if (slide.layout === "concepts") return <ConceptsSlide slide={slide} />;
  if (slide.layout === "personas") return <PersonasSlide slide={slide} />;
  if (slide.layout === "client") return <ClientSlide slide={slide} />;
  if (slide.layout === "two-col") return <TwoColSlide slide={slide} />;
  if (slide.layout === "fullimage") return <FullImageSlide slide={slide} />;
  return <DefaultSlide slide={slide} />;
}

export default function Modal({ project, onClose }: ModalProps) {
  const slides = project.slides ?? [];
  const hasSlides = slides.length > 0;
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(slides.length - 1, c + 1)), [slides.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl flex flex-col"
        style={{ width: "1400px", maxWidth: "95vw", height: "80vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-[60px] pt-7 pb-4 border-b border-stone-100 shrink-0">
          <div>
            <p className="text-xs font-medium text-orange-500 uppercase tracking-widest mb-0.5">
              {project.client ?? ""}
            </p>
            <h1 className="text-lg font-bold text-stone-900 leading-tight">{project.title}</h1>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
            aria-label="Zamknij"
          >
            ✕
          </button>
        </div>

        {/* Slide content */}
        {hasSlides && slides[current].layout === "fullimage" ? (
          <div className="flex-1 relative overflow-hidden">
            <SlideView slide={slides[current]} />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-[60px] py-6">
            <div className="w-full max-w-[900px]">
              {hasSlides ? (
                <SlideView slide={slides[current]} />
              ) : (
                <p className="text-stone-400 italic text-center py-12">Treść wkrótce…</p>
              )}
            </div>
          </div>
        )}

        {/* Dot indicators */}
        {hasSlides && (
          <div className="flex items-center justify-center gap-1.5 pb-6 pt-3 shrink-0">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${
                  i === current
                    ? "w-5 h-2 bg-orange-500"
                    : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Side chevrons */}
        {hasSlides && (
          <>
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Poprzedni"
              className="absolute left-[30px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-stone-100 text-stone-500 hover:bg-stone-50 hover:text-stone-900 active:bg-stone-100 disabled:opacity-0 disabled:pointer-events-none transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="11 4 6 9 11 14" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={current === slides.length - 1}
              aria-label="Następny"
              className="absolute right-[30px] top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-stone-100 text-stone-500 hover:bg-stone-50 hover:text-stone-900 active:bg-stone-100 disabled:opacity-0 disabled:pointer-events-none transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="7 4 12 9 7 14" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
