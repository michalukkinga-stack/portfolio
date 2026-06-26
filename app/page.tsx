"use client";

import { useState } from "react";
import { projectsByLang, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Modal from "@/components/Modal";
import AboutPanel from "@/components/AboutPanel";
import { LangProvider, useLang } from "@/context/lang";

function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-0.5 bg-white rounded-full shadow-md px-1 py-1 text-[11px] font-semibold select-none"
      aria-label="Zmień język"
    >
      <span className={`px-2.5 py-1 rounded-full transition-colors ${lang === "en" ? "bg-stone-900 text-white" : "text-stone-400"}`}>
        EN
      </span>
      <span className={`px-2.5 py-1 rounded-full transition-colors ${lang === "pl" ? "bg-stone-900 text-white" : "text-stone-400"}`}>
        PL
      </span>
    </button>
  );
}

function PageContent() {
  const { lang } = useLang();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const projects = projectsByLang[lang];
  const selectedProject: Project | null =
    selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 60% 40%, #e9e2d9 0%, #efeae3 30%, #f4f1ec 55%, #faf8f5 75%, #ffffff 100%)",
      }}
    >
    <main
      className="h-full flex flex-col p-6 gap-4 overflow-hidden mx-auto"
      style={{ maxWidth: "1200px" }}
    >
      <h1 className="text-3xl font-bold text-stone-900 shrink-0 px-1 mt-[80px] mb-[40px]">
        Hello, my name is Kinga
      </h1>

      <div className="flex gap-5 justify-center shrink-0 items-stretch">
        <div className="w-[484px] shrink-0 flex flex-col">
          <AboutPanel />
        </div>

        <div className="w-[648px] shrink-0 grid grid-cols-2 gap-4 auto-rows-fr">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedIndex(i)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedIndex(null)} />
      )}

      <LangToggle />
    </main>
    </div>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <PageContent />
    </LangProvider>
  );
}
