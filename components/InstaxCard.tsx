"use client";

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
      className={`absolute ${rotation} transition-transform duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none group`}
    >
      {/* Metal clip */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        {/* Hook going into board hole */}
        <div className="w-2 h-2 rounded-full bg-[#b0b0b0] border border-[#999] shadow-sm" />
        {/* Clip body */}
        <div className="w-8 h-3 bg-gradient-to-b from-[#d8d8d8] to-[#b8b8b8] rounded-sm border border-[#a0a0a0] shadow-md -mt-0.5" />
      </div>

      {/* Instax frame */}
      <div className="bg-white shadow-lg w-44 pt-4 pb-10 px-3 rounded-sm">
        {/* Photo area */}
        <div className="w-full aspect-square bg-stone-100 rounded-sm flex flex-col items-center justify-center gap-2 overflow-hidden">
          {project.client && (
            <span className="text-stone-400 text-xs font-medium uppercase tracking-widest">
              {project.client}
            </span>
          )}
        </div>

        {/* Bottom text strip */}
        <div className="mt-2 min-h-[2.5rem] flex flex-col justify-center items-start gap-1">
          {project.title ? (
            <p className="text-stone-700 text-sm font-medium leading-tight">
              {project.title}
            </p>
          ) : (
            <p className="text-stone-300 text-xs italic">projekt</p>
          )}
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 bg-stone-100 text-stone-500 rounded-full text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
