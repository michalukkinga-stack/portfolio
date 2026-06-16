"use client";

import { useState } from "react";
import AboutModal from "./AboutModal";
import { useLang } from "@/context/lang";

const content = {
  en: [
    <>
      <p className="text-stone-600 leading-relaxed text-sm mb-3">
        I&apos;ve always been curious about how people think, make decisions, and deal with the
        challenges they face. This naturally led me to ask questions that go a bit deeper and to
        look for answers that actually bring understanding, not just surface-level explanations.
      </p>
      <p className="text-stone-600 leading-relaxed text-sm">
        I began my professional career in interior design, where I had the opportunity to conduct
        my first <strong className="text-stone-900">in-depth interviews</strong>, exploring the
        habits and needs of the residents whose spaces I was designing. When I discovered that
        design also plays a crucial role in the digital world, I decided to pursue this path and
        began my career as a <strong className="text-stone-900">UX Designer</strong>.
      </p>
    </>,
    <>
      <p className="text-stone-600 leading-relaxed text-sm mb-3">
        I am currently working as a UX Designer at{" "}
        <strong className="text-stone-900">PwC</strong> and have been in this role for over{" "}
        <strong className="text-stone-900">4 years</strong>, contributing to a wide range of
        projects. My work involves designing tools that address complex technical domains. These
        are applications focused on AI, data, and the workflows of specialist consultants.
        <br />
        My role requires translating highly complex, technical problems into clear and intuitive
        user experiences.
      </p>
      <p className="text-stone-600 leading-relaxed text-sm mb-3">
        I work in <strong className="text-stone-900">Scrum</strong> within{" "}
        <strong className="text-stone-900">cross-functional teams</strong> that combine strong
        business and technical expertise. On a daily basis, I collaborate closely with Product
        Owners, Business Analysts, Developers, Testers, Data Scientists, and Power BI developers
        to deliver <strong className="text-stone-900">user-centered solutions</strong>.
      </p>
      <p className="text-stone-600 leading-relaxed text-sm">
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
    </>,
  ],
  pl: [
    <>
      <p className="text-stone-600 leading-relaxed text-sm mb-3">
        Zawsze byłam ciekawa tego, jak ludzie myślą, podejmują decyzje i radzą sobie z wyzwaniami,
        przed którymi stają. To naturalnie skłaniało mnie do zadawania pytań sięgających nieco
        głębiej i szukania odpowiedzi, które rzeczywiście przynoszą zrozumienie — nie tylko
        powierzchowne wyjaśnienia.
      </p>
      <p className="text-stone-600 leading-relaxed text-sm">
        Swoją karierę zawodową rozpoczęłam w projektowaniu wnętrz, gdzie miałam okazję
        przeprowadzić pierwsze{" "}
        <strong className="text-stone-900">pogłębione wywiady</strong>, poznając nawyki i potrzeby
        mieszkańców, dla których tworzyłam przestrzenie. Kiedy odkryłam, że design odgrywa
        kluczową rolę również w świecie cyfrowym, postanowiłam obrać tę ścieżkę i rozpoczęłam
        karierę jako <strong className="text-stone-900">UX Designer</strong>.
      </p>
    </>,
    <>
      <p className="text-stone-600 leading-relaxed text-sm mb-3">
        Aktualnie pracuję jako UX Designer w{" "}
        <strong className="text-stone-900">PwC</strong> i pełnię tę rolę od ponad{" "}
        <strong className="text-stone-900">4 lat</strong>, uczestnicząc w szerokiej gamie
        projektów. Projektuję narzędzia dotykające złożonych dziedzin technicznych — aplikacje
        związane z AI, danymi i procesami pracy konsultantów specjalistycznych.
        <br />
        Moją rolą jest przekładanie wysoce skomplikowanych problemów technicznych na przejrzyste
        i intuicyjne doświadczenia użytkownika.
      </p>
      <p className="text-stone-600 leading-relaxed text-sm mb-3">
        Pracuję w metodologii <strong className="text-stone-900">Scrum</strong> w ramach{" "}
        <strong className="text-stone-900">interdyscyplinarnych zespołów</strong> łączących
        kompetencje biznesowe i techniczne. Na co dzień ściśle współpracuję z Product Ownerami,
        Business Analitykami, Deweloperami, Testerami, Data Scientistami oraz deweloperami Power BI,
        dostarczając <strong className="text-stone-900">rozwiązania zorientowane na użytkownika</strong>.
      </p>
      <p className="text-stone-600 leading-relaxed text-sm">
        Projektuję skalowalne i dostępne doświadczenia w oparciu o{" "}
        <strong className="text-stone-900">systemy projektowe</strong>, dbając o{" "}
        <strong className="text-stone-900">spójność</strong> produktów. Tworzę{" "}
        <strong className="text-stone-900">interaktywne prototypy</strong> służące walidacji
        konceptów i wsparciu procesu deweloperskiego.
        <br />
        Specjalizuję się również w{" "}
        <strong className="text-stone-900">wizualizacji danych</strong>, przekształcając złożone
        zbiory danych w przejrzyste i przyjazne użytkownikowi doświadczenia wspierające
        podejmowanie decyzji.
      </p>
    </>,
  ],
};

export default function AboutPanel() {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const { lang } = useLang();

  const slides = content[lang];
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <>
      <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full">
        {/* Title */}
        <div className="px-7 pt-8 pb-0 shrink-0">
          <h2 className="text-2xl font-bold text-stone-900">
            {lang === "en" ? "About me" : "O mnie"}
          </h2>
        </div>

        {/* Slide content */}
        <div className="flex-1 px-7 py-6 overflow-y-auto">
          {slides[index]}
        </div>

        {/* Bottom bar: dots + fullscreen */}
        <div className="px-7 pb-6 pt-3 flex items-center justify-between shrink-0">
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "bg-stone-700 w-4" : "bg-stone-300 w-1.5"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setFullscreen(true)}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
            aria-label="Pełny ekran"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 5V1h4M9 1h4v4M13 9v4H9M5 13H1V9" />
            </svg>
          </button>
        </div>

        {/* Left chevron */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-stone-500 hover:bg-white hover:text-stone-900 transition-all"
          aria-label="Poprzedni slajd"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 2L4 7l5 5" />
          </svg>
        </button>

        {/* Right chevron */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-stone-500 hover:bg-white hover:text-stone-900 transition-all"
          aria-label="Następny slajd"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 2l5 5-5 5" />
          </svg>
        </button>
      </div>

      {fullscreen && <AboutModal onClose={() => setFullscreen(false)} />}
    </>
  );
}
