"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { useLang } from "@/context/lang";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { lang } = useLang();
  const hasContent = !!project.title;

  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl overflow-hidden bg-white project-card border border-stone-100 text-left focus:outline-none flex flex-col"
      style={{ aspectRatio: "316 / 447" }}
    >
      {/* Image */}
      <div className="p-2.5">
        <div className="relative w-full overflow-hidden rounded-xl bg-[#ddd9f7]" style={{ aspectRatio: "16/10" }}>
          {project.images?.[0] ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#c7c2f0] to-[#a89de8]" />
          )}

          {project.client === "PwC" && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm">
              <Image
                src="/images/pwc-logo.png"
                alt="PwC"
                width={48}
                height={24}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1" style={{ padding: "10px" }}>
        {hasContent ? (
          <>
            {/* Tags */}
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3" style={{ maxHeight: "3.2em", overflow: "hidden" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[14px] font-medium text-[#7c6abf] bg-[#f0edfb] rounded-full px-2 py-0.5 leading-tight"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-[16px] font-bold text-stone-900 leading-snug mb-2">
              {project.title}
            </h3>

            {/* Subtitle / description */}
            {project.subtitle && (
              <p className="text-[13px] text-stone-500 leading-relaxed">
                {project.subtitle}
              </p>
            )}

            {/* View link */}
            <div className="mt-auto self-end flex items-center gap-1.5 text-[12px] font-medium text-stone-400 hover:text-stone-700 transition-colors">
              {lang === "en" ? "View project" : "Zobacz projekt"}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" />
              </svg>
            </div>
          </>
        ) : (
          <p className="text-[13px] text-stone-300 italic m-auto">{lang === "en" ? "project" : "projekt"}</p>
        )}
      </div>
    </button>
  );
}
