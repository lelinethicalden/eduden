"use client";

import { useState } from "react";

export default function ModulesAccordion({
  modules,
}: {
  modules: { title: string; meta: string; topics: string[] }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {modules.map((m, i) => {
        const hasTopics = m.topics.length > 0;
        const isOpen = hasTopics && open === i;
        const n = (i + 1 < 10 ? "0" : "") + (i + 1);
        return (
          <div key={m.title} className="border-t border-border-strong">
            <button
              onClick={hasTopics ? () => setOpen(isOpen ? -1 : i) : undefined}
              disabled={!hasTopics}
              className={
                "w-full flex justify-between items-center gap-4 py-5.5 px-1 bg-transparent border-none text-left font-[inherit]" +
                (hasTopics ? " cursor-pointer" : " cursor-default")
              }
            >
              <div className="flex items-baseline gap-4.5">
                <span className="text-[13px] font-bold text-muted">{n}</span>
                <span className="text-[clamp(16px,1.7vw,19px)] font-extrabold text-fg">
                  {m.title}
                </span>
              </div>
              <div className="flex items-center gap-4 flex-none">
                <span className="text-[12.5px] font-semibold text-muted">
                  {m.meta}
                </span>
                {hasTopics && (
                  <span className="text-xl font-normal text-fg leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                )}
              </div>
            </button>
            {isOpen && (
              <div className="pb-6 pl-10 pr-1 flex flex-col gap-2.25">
                {m.topics.map((t) => (
                  <div key={t} className="text-sm text-muted leading-snug">
                    {t}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
