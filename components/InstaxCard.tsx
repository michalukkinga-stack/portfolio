"use client";

import Image from "next/image";
import { Project } from "@/data/projects";

const ROTATIONS = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-3",
  "rotate-0",
];

const POSITIONS: { top: string; left: string }[] = [
  { top: "12%", left: "5%" },
  { top: "15%", left: "36%" },
  { top: "10%", left: "64%" },
  { top: "52%", left: "8%" },
  { top: "50%", left: "42%" },
  { top: "55%", left: "72%" },
];

interface InstaxCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function InstaxCard({ project, index, onClick }: InstaxCardProps) {
  const rotation = ROTATIONS[index % ROTATIONS.length];
  const position = POSITIONS[index % POSITIONS.length];

  return (
    <button
      onClick={onClick}
      style={{ top: position.top, left: position.left }}
      className={`absolute ${rotation} transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl focus:outline-none text-left`}
    >
      <div className="w-60 rounded-2xl overflow-hidden shadow-lg bg-white">
        {/* Image / illustration area */}
        <div className="relative w-full h-44 bg-[#3d2fa9] overflow-hidden">
          {project.images?.[0] ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#4c3bc4] to-[#2a1f7a]" />
          )}

          {/* PwC logo overlay */}
          {project.client === "PwC" && (
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1.5 shadow-sm">
              <Image
                src="/images/pwc-logo.png"
                alt="PwC"
                width={44}
                height={22}
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Content area */}
        <div className="px-5 py-4 flex flex-col gap-3">
          {/* Tags — pills without # */}
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
            <h3 className="text-[15px] font-bold text-stone-900 leading-snug">
              {project.title}
            </h3>
          ) : (
            <h3 className="text-[15px] font-bold text-stone-300 leading-snug italic">projekt</h3>
          )}

          {/* Subtitle / description */}
          {project.subtitle && (
            <p className="text-[11px] text-stone-500 leading-relaxed -mt-1">
              {project.subtitle}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}
