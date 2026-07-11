"use client";

import { useState } from "react";

export default function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState(-1);

  return (
    <div>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-t border-border-strong">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex justify-between items-center gap-4 py-5.5 px-1 bg-transparent border-none cursor-pointer text-left font-[inherit]"
            >
              <span className="text-[16.5px] font-bold text-fg">{f.q}</span>
              <span className="flex-none text-xl font-normal text-fg leading-none">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 px-1 text-[14.5px] leading-relaxed text-muted max-w-2xl">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
