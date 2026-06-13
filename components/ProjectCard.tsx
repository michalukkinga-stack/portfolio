"use client";

import Image from "next/image";
import { Project } from "@/data/projects";

const ICONS: Record<number, string> = {
  0: "🖥",
  1: "📱",
  2: "</>",
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const isFeatured = index === 1;

  return (
    <button
      onClick={onClick}
      className={`flex-1 max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl focus:outline-none ${isFeatured ? "scale-105 shadow-xl" : ""}`}
    >
      {/* Image area — dark indigo, ~60% of card */}
      <div className="relative w-full bg-[#2d27a0] overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {project.images?.[0] ? (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d35c0] to-[#1e1870]" />
        )}

        {project.client === "PwC" && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 shadow-sm">
            <div className="flex gap-px items-end">
              <div className="w-1.5 h-3.5 rounded-full bg-[#e3001b]" />
              <div className="w-1.5 h-3.5 rounded-full bg-[#e3001b] opacity-65" />
              <div className="w-1.5 h-3.5 rounded-full bg-[#e3001b] opacity-35" />
            </div>
            <span className="text-[11px] font-bold text-[#2d2d2d] tracking-tight">PwC</span>
          </div>
        )}
      </div>

      {/* Text area — white */}
      <div className="px-5 py-4 flex flex-col gap-3">
        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-stone-100 text-stone-500 rounded-full text-[10px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        {project.title ? (
          <h3 className="text-[17px] font-bold text-stone-900 leading-snug">
            {project.title}
          </h3>
        ) : (
          <h3 className="text-[17px] font-bold text-stone-300 italic leading-snug">projekt</h3>
        )}

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-[13px] text-stone-500 leading-relaxed -mt-1">
            {project.subtitle}
          </p>
        )}
      </div>
    </button>
  );
}
