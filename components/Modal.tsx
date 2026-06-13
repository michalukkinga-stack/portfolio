"use client";

import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from "@/components/ui/dialog";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{project.title || "Projekt"}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {project.description && (
            <p className="text-stone-600 leading-relaxed mb-6">
              {project.description}
            </p>
          )}

          {project.images.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full rounded object-cover"
                />
              ))}
            </div>
          )}

          {!project.title && !project.description && (
            <p className="text-stone-400 italic text-center py-8">
              Treść wkrótce…
            </p>
          )}
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
