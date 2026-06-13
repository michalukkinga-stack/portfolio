"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Modal from "@/components/Modal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-8"
      style={{
        background: "radial-gradient(ellipse at 60% 40%, #c7c2f0 0%, #ddd9f7 30%, #edeaf8 55%, #f5f4fc 75%, #fafafe 100%)",
      }}
    >
      <div className="absolute top-6 left-8 text-stone-400 text-xs uppercase tracking-[0.2em] select-none">
        Portfolio
      </div>

      <div className="flex flex-row items-center justify-center gap-6 w-full max-w-5xl">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  );
}
