"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const POSTS = [
  {
    tag: "New Batch",
    date: "Jul 8, 2026",
    title: "Bug Bounty Hunting — September cohort announced",
    body: "50 days of recon-to-reporting training. Applications open now; mentor slots are limited.",
    href: "/enroll",
  },
  {
    tag: "Workshop",
    date: "Jul 2, 2026",
    title: "Free weekend workshop: Intro to OSINT",
    body: "A 3-hour hands-on session at the Kolkata center. Learn to find anything — legally. Open to all.",
    href: "/enroll",
  },
  {
    tag: "Course Launch",
    date: "Jun 24, 2026",
    title: "New micro course: Prompt Engineering for Developers",
    body: "10 days, project-based, built for developers who want to ship AI features that actually work.",
    href: "/courses",
  },
  {
    tag: "Event",
    date: "Jun 15, 2026",
    title: "EduDen CTF 2026 — registrations open",
    body: "Our annual capture-the-flag. Prizes, internship interviews for top finishers, and bragging rights.",
    href: "/enroll",
  },
  {
    tag: "Update",
    date: "Jun 5, 2026",
    title: "Certificate verification portal upgraded",
    body: "Instant lookups, QR support on new certificates, and downloadable verification reports.",
    href: "/verify",
  },
  {
    tag: "New Batch",
    date: "May 28, 2026",
    title: "Digital Forensics — hybrid batch filling fast",
    body: "90-day deep dive with lab simulations. Weekend classroom slots at South Dumdum are almost full.",
    href: "/enroll",
  },
  {
    tag: "Workshop",
    date: "May 18, 2026",
    title: "Resume & portfolio clinic for tech roles",
    body: "Placement-team session: get your resume and GitHub reviewed live. Free for enrolled students.",
    href: "/placement",
  },
  {
    tag: "Course Launch",
    date: "May 6, 2026",
    title: "Cloud Computing with AWS relaunched with new labs",
    body: "Fresh curriculum aligned to the latest certification paths, with 4 new deployment labs.",
    href: "/courses",
  },
];

const CATS = ["All", "New Batch", "Workshop", "Course Launch", "Event", "Update"];

export default function WhatsNew() {
  const [cat, setCat] = useState("All");

  const posts = useMemo(
    () => POSTS.filter((p) => cat === "All" || p.tag === cat),
    [cat]
  );

  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pt-14 md:pt-24 pb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              What&apos;s new
            </span>
          </div>
          <h1 className="m-0 text-[clamp(40px,6.4vw,88px)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-4xl">
            Batches, workshops &amp; updates.
          </h1>
          <div className="flex flex-wrap gap-2 mt-9">
            {CATS.map((name) => {
              const on = cat === name;
              return (
                <button
                  key={name}
                  onClick={() => setCat(name)}
                  className={`border font-[inherit] text-[13px] font-semibold px-4 py-2.25 rounded-full cursor-pointer hover:border-fg ${
                    on
                      ? "border-fg bg-fg text-bg"
                      : "border-border bg-white text-muted"
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pt-2 pb-16 md:pb-24">
          <div className="border-t border-border-strong">
            {posts.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="grid grid-cols-[minmax(100px,140px)_minmax(110px,150px)_1fr_auto] gap-5 items-center border-b border-border-strong py-6.5 px-1 text-fg hover:bg-white"
              >
                <div className="text-[13px] font-semibold text-muted">
                  {p.date}
                </div>
                <span
                  className={`text-[11.5px] font-bold tracking-[0.06em] uppercase border px-3 py-1.25 rounded-full whitespace-nowrap justify-self-start ${
                    p.tag === "New Batch"
                      ? "bg-accent border-accent"
                      : "bg-white border-border"
                  }`}
                >
                  {p.tag}
                </span>
                <div>
                  <div className="text-[clamp(16px,1.8vw,20px)] font-extrabold tracking-[-0.015em] leading-tight">
                    {p.title}
                  </div>
                  <p className="mt-1.25 mb-0 text-[13.5px] leading-snug text-muted max-w-2xl">
                    {p.body}
                  </p>
                </div>
                <span className="flex-none w-9.5 h-9.5 rounded-full border border-border-strong flex items-center justify-center text-[15px] justify-self-end">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
