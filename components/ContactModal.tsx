"use client";

import { contact } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from "@/components/ui/dialog";

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>{contact.name}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <div className="space-y-4 text-stone-600 text-sm">
            <div>
              <span className="text-stone-400 text-xs uppercase tracking-widest block mb-0.5">
                Telefon
              </span>
              {contact.phone}
            </div>
            <div>
              <span className="text-stone-400 text-xs uppercase tracking-widest block mb-0.5">
                E-mail
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="underline hover:text-stone-800 transition-colors"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
