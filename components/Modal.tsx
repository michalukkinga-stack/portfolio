"use client";

import { useEffect, useRef, useState } from "react";
import { Project, Slide, SlideSection, Concept, Lang } from "@/data/projects";
import { useLang } from "@/context/lang";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

/* ── helpers ─────────────────────────────────────────────── */

function TagChip({ tag }: { tag: string }) {
  return (
    <span className="px-2.5 py-1 bg-violet-50 text-violet-600 border border-violet-100 rounded-full text-[11px] font-medium">
      #{tag}
    </span>
  );
}

function BoldText({ text, boldPhrases }: { text: string; boldPhrases?: string[] }) {
  if (!boldPhrases?.length) return <>{text}</>;
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
  const { lang } = useLang();
  return (
    <div className="flex flex-col gap-2">
      {section.label && (
        <p className="text-sm font-bold text-stone-900 uppercase tracking-wide">{section.label}</p>
      )}
      {section.text && !section.bullets && (
        <p className={`text-stone-600 leading-relaxed text-[15px] ${section.italic ? "italic" : ""}`}>
          <BoldText text={section.text} boldPhrases={section.boldPhrases} />
        </p>
      )}
      {section.cite && (
        <p className="text-right text-sm font-bold text-stone-900 uppercase tracking-wide">{section.cite}</p>
      )}
      {section.bullets && (
        <div className="flex flex-col gap-1">
          {section.text && (
            <p className="text-stone-600 leading-relaxed text-[15px] mb-1">
              <BoldText text={section.text} boldPhrases={section.boldPhrases} />
            </p>
          )}
          <ul className="flex flex-col gap-2.5">
            {section.bullets.map((b, j) => (
              <li key={j} className="flex gap-2.5 text-stone-600 leading-relaxed text-[15px]">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-300 shrink-0" />
                <span>
                  {b.boldPrefix && <strong className="text-stone-900">{b.boldPrefix}</strong>}
                  {b.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {section.table && section.table.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-stone-100 mt-1">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr className="bg-violet-50">
                <th className="text-left font-semibold text-violet-700 px-4 py-2.5 w-[38%]">{lang === "en" ? "Feature" : "Funkcjonalność"}</th>
                <th className="text-left font-semibold text-violet-700 px-4 py-2.5">{lang === "en" ? "Technical solution" : "Rozwiązanie techniczne"}</th>
              </tr>
            </thead>
            <tbody>
              {section.table.map((row, i) => (
                <tr key={i} className="border-t border-stone-100 align-top">
                  <td className="px-4 py-3 font-semibold text-stone-900">{row.feature}</td>
                  <td className="px-4 py-3 text-stone-600 leading-relaxed">{row.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.tags && section.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {section.tags.map((tag) => <TagChip key={tag} tag={tag} />)}
        </div>
      )}
    </div>
  );
}

/* ── section renderers ────────────────────────────────────── */

function CoverSection({ slide }: { slide: Slide }) {
  const [imgLeft, imgRight] = slide.images ?? [];
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 items-start">
        <div className="flex-1 flex flex-col gap-3">
          {slide.subtitle && (
            <p className="text-stone-500 text-[16px] leading-relaxed">{slide.subtitle}</p>
          )}
        </div>
      </div>
      {(imgLeft || imgRight) && (
        <div className="flex gap-5">
          {imgLeft && (
            <div className="flex-1 rounded-xl overflow-hidden border border-stone-100 shadow-sm">
              <img src={imgLeft} alt="" className="w-full h-auto object-cover" />
            </div>
          )}
          {imgRight && (
            <div className="flex-1 rounded-xl overflow-hidden border border-stone-100 shadow-sm">
              <img src={imgRight} alt="" className="w-full h-auto object-cover" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ClientSection({ slide }: { slide: Slide }) {
  return (
    <div className="flex items-center gap-12">
      <div className="flex flex-col gap-3 flex-1">
        {slide.sections.map((s, i) =>
          s.label ? null : (
            <p key={i} className="text-stone-500 leading-relaxed text-[15px]">{s.text}</p>
          )
        )}
      </div>
      {slide.image && (
        <div className="shrink-0 w-48 flex items-center justify-center p-8">
          <img src={slide.image} alt="Client logo" className="w-full h-auto object-contain" />
        </div>
      )}
    </div>
  );
}

function ProcessSection({ slide }: { slide: Slide }) {
  const phases = slide.phases ?? [];
  return (
    <div className="relative">
      <div className="absolute top-[22px] left-[22px] right-[22px] h-px bg-stone-200" />
      <div className="flex gap-0">
        {phases.map((phase, i) => (
          <div key={i} className="flex-1 flex flex-col items-center relative">
            <div className="w-11 h-11 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-bold mb-4 shrink-0 shadow-sm z-10">
              {i + 1}
            </div>
            <p className="font-bold text-stone-900 text-sm mb-3 text-center">{phase.name}</p>
            <ul className="flex flex-col gap-1.5 w-full px-3">
              {phase.activities.map((act, j) => (
                <li key={j} className="flex gap-1.5 text-stone-500 text-[13px] leading-relaxed">
                  <span className="mt-1 w-1 h-1 rounded-full bg-violet-200 shrink-0" />
                  {act}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonasSection({ slide }: { slide: Slide }) {
  return (
    <div className="flex gap-8">
      {(slide.personas ?? []).map((persona, i) => (
        <div key={i} className="flex-1 flex flex-col items-center text-center">
          <div className="w-[105px] h-[105px] rounded-full mb-4 overflow-hidden shrink-0 bg-stone-100">
            {persona.image ? (
              <img src={persona.image} alt={persona.name} className="block w-full h-full object-cover object-center" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-stone-300 text-xs italic">foto</div>
            )}
          </div>
          <p className="font-bold text-stone-900 mb-3 text-[15px]">{persona.name}</p>
          <ul className="text-left flex flex-col gap-1.5 w-full">
            {persona.bullets.map((b, j) => (
              <li key={j} className="flex gap-2 text-stone-500 text-[14px] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-300 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ConceptsSection({ slide }: { slide: Slide }) {
  const concepts: Concept[] = slide.concepts ?? [];
  return (
    <div className="flex gap-5">
      {concepts.map((concept, i) => (
        <div key={i} className="flex-1 flex flex-col border border-stone-100 rounded-xl overflow-hidden bg-stone-50">
          {concept.image && (
            <div className="w-full h-44 bg-stone-100 shrink-0">
              <img src={concept.image} alt={concept.title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="p-5 flex flex-col gap-3 flex-1">
            <p className="font-bold text-stone-900 text-sm">{concept.title}</p>
            {concept.pros.length > 0 && (
              <ul className="flex flex-col gap-1.5">
                {concept.pros.map((pro, j) => (
                  <li key={j} className="flex gap-2 text-stone-600 text-[13px] leading-relaxed">
                    <span className="mt-0.5 text-emerald-500 shrink-0 font-bold text-xs">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            )}
            {concept.cons.length > 0 && (
              <ul className="flex flex-col gap-1.5">
                {concept.cons.map((con, j) => (
                  <li key={j} className="flex gap-2 text-stone-600 text-[13px] leading-relaxed">
                    <span className="mt-0.5 text-orange-400 shrink-0 font-bold text-xs">–</span>
                    {con}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function TwoColSection({ slide }: { slide: Slide }) {
  return (
    <div className="flex gap-10 items-start">
      <div className="flex-1 flex flex-col gap-5">
        {slide.sections.map((s, i) => <SectionBlock key={i} section={s} />)}
      </div>
      {slide.image && (
        <div className="w-72 shrink-0 rounded-xl overflow-hidden border border-stone-100 shadow-sm">
          <img src={slide.image} alt="" className="w-full h-auto object-cover" />
        </div>
      )}
    </div>
  );
}

function FullImageSection({ slide }: { slide: Slide }) {
  return slide.image ? (
    <div className="rounded-xl overflow-hidden border border-stone-100 shadow-sm">
      <img src={slide.image} alt={slide.title ?? ""} className="w-full h-auto object-cover" />
    </div>
  ) : null;
}

function DefaultSection({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col gap-6">
      {slide.image && (
        <div className="rounded-xl overflow-hidden border border-stone-100 shadow-sm">
          <img src={slide.image} alt="" className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-5">
        {slide.sections.map((s, i) => <SectionBlock key={i} section={s} />)}
      </div>
    </div>
  );
}

function SlideBody({ slide }: { slide: Slide }) {
  if (slide.layout === "cover") return <CoverSection slide={slide} />;
  if (slide.layout === "client") return <ClientSection slide={slide} />;
  if (slide.layout === "process") return <ProcessSection slide={slide} />;
  if (slide.layout === "personas") return <PersonasSection slide={slide} />;
  if (slide.layout === "concepts") return <ConceptsSection slide={slide} />;
  if (slide.layout === "two-col") return <TwoColSection slide={slide} />;
  if (slide.layout === "fullimage") return <FullImageSection slide={slide} />;
  return <DefaultSection slide={slide} />;
}

/* ── section title derivation ────────────────────────────── */

function getSectionTitle(slide: Slide, index: number, lang: Lang): string {
  if (slide.title) return slide.title;
  if (slide.layout === "cover") return lang === "en" ? "Overview" : "Przegląd";
  if (slide.layout === "client") return lang === "en" ? "Client" : "Klient";
  if (slide.layout === "concepts") return lang === "en" ? "Concept testing" : "Testowanie koncepcji";
  // Derive from image filename: "/images/hce-reports.png" → "Reports"
  if (slide.image) {
    const base = slide.image.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
    const name = base.replace(/^[a-z]+-/, "").replace(/-/g, " ");
    if (name) return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return lang === "en" ? `Section ${index + 1}` : `Sekcja ${index + 1}`;
}

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

/* ── TOC sidebar ─────────────────────────────────────────── */

function Toc({ sections, activeId }: { sections: { id: string; label: string }[]; activeId: string }) {
  return (
    <nav className="flex flex-col gap-1 w-full">
      {sections.map((s) => {
        const isActive = s.id === activeId;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`group flex items-center gap-2.5 py-1.5 text-[13px] leading-snug transition-colors ${
              isActive ? "text-violet-700 font-semibold" : "text-stone-400 hover:text-stone-700"
            }`}
          >
            <span
              className={`shrink-0 w-0.5 h-4 rounded-full transition-all ${
                isActive ? "bg-violet-500" : "bg-stone-200 group-hover:bg-stone-300"
              }`}
            />
            {s.label.replace(/^\d+\.\s*/, "")}
          </a>
        );
      })}
    </nav>
  );
}

/* ── main modal ─────────────────────────────────────────── */

export default function Modal({ project, onClose }: ModalProps) {
  const { lang } = useLang();
  const slides = project.slides ?? [];
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>("");

  const allSlideMeta = slides.map((slide, i) => ({
    id: slugify(getSectionTitle(slide, i, lang)),
    label: getSectionTitle(slide, i, lang),
    hidden: !!slide.hideFromNav,
  }));
  const tocSections = allSlideMeta.filter((s) => !s.hidden);

  useEffect(() => {
    if (tocSections.length > 0) setActiveId(tocSections[0].id);
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    function onScroll() {
      const sectionEls = tocSections.map(({ id }) => document.getElementById(id));
      let current = tocSections[0]?.id ?? "";
      for (const sec of sectionEls) {
        if (sec && sec.getBoundingClientRect().top < el!.getBoundingClientRect().top + 120) {
          current = sec.id;
        }
      }
      setActiveId(current);
    }

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [tocSections.map((s) => s.id).join(",")]);

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
        className="relative bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        style={{ width: "1200px", maxWidth: "95vw", height: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-10 py-3.5 border-b border-stone-100 shrink-0">
          <h1 className="text-base font-bold text-stone-900 leading-tight" style={{ fontFamily: "var(--font-lora)" }}>
            {project.title}
          </h1>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body: sidebar + scrollable content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar TOC */}
          <aside className="w-52 shrink-0 border-r border-stone-100 px-6 py-8 overflow-y-auto">
            <Toc sections={tocSections} activeId={activeId} />
          </aside>

          {/* Scrollable article */}
          <div ref={contentRef} className="flex-1 overflow-y-auto">
            <div className="max-w-[820px] mx-auto px-12 py-10 flex flex-col gap-[60px]">
              {slides.map((slide, i) => {
                const { id, label, hidden } = allSlideMeta[i];
                const isFirst = slide.layout === "cover";
                return (
                  <section key={id} id={id} className="scroll-mt-6">
                    {isFirst ? (
                      <>
                        {slide.footerTags && slide.footerTags.length > 0 && (
                          <div className="flex flex-wrap justify-end gap-1.5 mb-4">
                            {slide.footerTags.map((t) => <TagChip key={t} tag={t} />)}
                          </div>
                        )}
                        <h2
                          className="text-4xl font-bold text-stone-900 mb-6 leading-tight"
                          style={{ fontFamily: "var(--font-lora)" }}
                        >
                          {slide.title}
                        </h2>
                      </>
                    ) : !hidden ? (
                      <div className="mb-6">
                        <h2
                          className="text-2xl font-semibold text-stone-900 leading-snug"
                          style={{ fontFamily: "var(--font-lora)" }}
                        >
                          {label.replace(/^\d+\.\s*/, "")}
                        </h2>
                      </div>
                    ) : null}
                    <SlideBody slide={slide} />
                    {slide.footerTags && slide.footerTags.length > 0 && !isFirst && (
                      <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-stone-100">
                        {slide.footerTags.map((t) => <TagChip key={t} tag={t} />)}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
