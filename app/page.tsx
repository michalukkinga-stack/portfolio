"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import InstaxCard from "@/components/InstaxCard";
import ContactCard from "@/components/ContactCard";
import Modal from "@/components/Modal";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main
      className="relative w-full min-h-screen overflow-hidden bg-[#f0f0f0]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Crect width='32' height='32' fill='%23f7f7f7'/%3E%3Cellipse cx='16' cy='16' rx='4.5' ry='7' fill='%23dcdcdc'/%3E%3C/svg%3E")`,
        backgroundSize: "32px 32px",
      }}
    >
      <div className="absolute top-6 left-8 text-stone-400 text-xs uppercase tracking-[0.2em] select-none">
        Portfolio
      </div>

      {projects.map((project, i) => (
        <InstaxCard
          key={project.id}
          project={project}
          index={i}
          onClick={() => setSelectedProject(project)}
        />
      ))}

      <ContactCard onClick={() => setContactOpen(true)} />

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
      {contactOpen && (
        <ContactModal onClose={() => setContactOpen(false)} />
      )}
    </main>
  );
}
