"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const POSTS = [
  {
    tag: "Course Launch",
    date: "Jul 11, 2026",
    title: "Management & non-tech track: 7 new courses now open",
    body: "Business Analytics with Power BI, AI for Business Strategy, Product Management, GeoAI & GIS, Cyber GRC, Policy Analytics, and No-Code Automation — built for MBA, BBA, Commerce, Arts and Social Science students.",
    href: "/courses",
  },
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
    title: "eduden CTF 2026 — registrations open",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-9 md:pt-24 pb-8 sm:pb-10">
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
                  className={`border font-[inherit] text-[13px] font-semibold px-4 py-2.25 rounded-full cursor-pointer  ${
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
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pb-8 sm:pb-10">
          <div className="bg-fg text-bg rounded-3xl p-6 sm:p-8 md:p-14">
            <div className="flex items-center gap-2.5 mb-5.5 flex-wrap">
              <span className="text-[11.5px] font-bold tracking-[0.06em] uppercase bg-accent text-fg px-3.5 py-1.5 rounded-full">
                New program launch
              </span>
              <span className="text-[12.5px] font-semibold text-muted-dark">
                July 2026
              </span>
            </div>
            <h2 className="m-0 text-[clamp(26px,3.6vw,48px)] font-black tracking-[-0.035em] uppercase leading-none max-w-3xl">
              7 new courses for management &amp; non-tech students.
            </h2>
            <p className="mt-5 mb-0 text-[15px] leading-relaxed text-muted-dark max-w-2xl">
              A full track — AI &amp; Tech for Non-Technical Careers — built
              for MBA, BBA, Commerce, Economics, Arts and Social Science
              students. Business Analytics, AI for Business Strategy, Product
              Management, GeoAI &amp; GIS, Cyber GRC, Policy Analytics, and
              No-Code Automation. No coding background required.
            </p>
            <div className="flex gap-3 flex-wrap mt-8">
              <Link
                href="/courses"
                className="bg-accent text-fg font-bold text-[14.5px] px-7 py-3.5 rounded-full hover:bg-bg"
              >
                Browse the New Courses
              </Link>
              <Link
                href="/courses/business-analytics-mis-reporting"
                className="border border-white/35 text-bg font-semibold text-[14.5px] px-7 py-3.5 rounded-full"
              >
                See a Course Detail
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-2 pb-10 md:pb-24">
          <div className="border-t border-border-strong">
            {posts.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="flex flex-col sm:grid sm:grid-cols-[minmax(100px,140px)_minmax(110px,150px)_1fr_auto] gap-3 sm:gap-5 sm:items-center border-b border-border-strong py-6.5 px-1 text-fg hover:bg-white"
              >
                <div className="flex items-center gap-3 sm:contents">
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
                </div>
                <div>
                  <div className="text-[clamp(16px,1.8vw,20px)] font-extrabold tracking-[-0.015em] leading-tight">
                    {p.title}
                  </div>
                  <p className="mt-1.25 mb-0 text-[13.5px] leading-snug text-muted max-w-2xl">
                    {p.body}
                  </p>
                </div>
                <span className="flex-none w-9.5 h-9.5 rounded-full border border-border-strong flex items-center justify-center text-[15px] self-end sm:self-auto sm:justify-self-end">
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
