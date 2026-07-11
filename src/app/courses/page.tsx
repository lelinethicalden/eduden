"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const COURSES = [
  {
    cat: "Cyber Security",
    title: "Ethical Hacking for Beginners",
    meta: "45 days · 40 lectures · Hybrid",
    tag: "Bestseller",
    blurb:
      "Legally break into systems, find security flaws, and help companies fix them — from absolute zero.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Cyber Security",
    title: "Start Bug Bounty Hunting",
    meta: "50 days · 45 lectures · Online",
    tag: "",
    blurb:
      "From recon to reporting — the complete roadmap for HackerOne, Bugcrowd and Synack.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Cyber Security",
    title: "Digital Forensics",
    meta: "90 days · 70 lectures · Hybrid",
    tag: "New batch",
    blurb:
      "Uncover hidden data, trace cybercrimes, and recover digital evidence using industry-standard tools.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Cyber Security",
    title: "Android App Penetration Testing",
    meta: "30 days · 26 lectures · Online",
    tag: "",
    blurb:
      "Reverse-engineer APKs, intercept traffic, and test apps against the OWASP Mobile Top 10.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Cyber Security",
    title: "Advanced Network Pentesting",
    meta: "75 days · 60 lectures · Online",
    tag: "",
    blurb:
      "Custom scripting with Python & Bash, exploitation, evasion and lateral movement.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Artificial Intelligence",
    title: "AI Foundations with Python",
    meta: "60 days · 50 lectures · Hybrid",
    tag: "",
    blurb:
      "From neural nets to real deployments — build AI features you can actually ship.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Machine Learning",
    title: "Machine Learning Bootcamp",
    meta: "60 days · 48 lectures · Online",
    tag: "",
    blurb:
      "Regression to recommendation engines — trained on real datasets, verified by mentors.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Data Science",
    title: "Data Science with Python",
    meta: "75 days · 58 lectures · Hybrid",
    tag: "",
    blurb:
      "Pandas, SQL, visualization and storytelling with data — a complete analyst toolkit.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Programming",
    title: "Full-Stack Web Development",
    meta: "90 days · 75 lectures · Hybrid",
    tag: "",
    blurb:
      "HTML to deployed apps: JavaScript, React, Node and databases with portfolio projects.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Cloud Computing",
    title: "Cloud Computing with AWS",
    meta: "45 days · 38 lectures · Online",
    tag: "",
    blurb:
      "Architect, deploy and secure real workloads on AWS — aligned to certification paths.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "DevOps",
    title: "DevOps Essentials",
    meta: "50 days · 42 lectures · Online",
    tag: "",
    blurb:
      "CI/CD, Docker, Kubernetes and infrastructure-as-code — the modern delivery pipeline.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Linux",
    title: "Linux Administration",
    meta: "30 days · 28 lectures · Classroom",
    tag: "",
    blurb:
      "Command line to server hardening — the foundation every tech career is built on.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Graphics Design",
    title: "Graphics Design Pro",
    meta: "60 days · 44 lectures · Hybrid",
    tag: "",
    blurb:
      "Branding, layout and visual systems with real client-style briefs and portfolio reviews.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Digital Marketing",
    title: "Digital Marketing Launchpad",
    meta: "45 days · 36 lectures · Online",
    tag: "",
    blurb:
      "SEO, ads, analytics and content strategy — run real campaigns, measure real results.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Blockchain",
    title: "Blockchain & Web3 Basics",
    meta: "40 days · 32 lectures · Online",
    tag: "",
    blurb:
      "Smart contracts, wallets and dApps — understand the tech behind the hype.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "IoT",
    title: "IoT with Arduino & Raspberry Pi",
    meta: "40 days · 30 lectures · Classroom",
    tag: "",
    blurb:
      "Build connected devices from scratch — sensors, boards, and cloud dashboards.",
    slug: "ethical-hacking-for-beginners",
  },
  {
    cat: "Networking",
    title: "Networking Fundamentals",
    meta: "35 days · 30 lectures · Hybrid",
    tag: "",
    blurb:
      "TCP/IP, routing, and packet analysis — the plumbing of the internet, demystified.",
    slug: "ethical-hacking-for-beginners",
  },
];

const CATS = ["All", ...Array.from(new Set(COURSES.map((c) => c.cat)))];

export default function Courses() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter(
      (c) =>
        (cat === "All" || c.cat === cat) &&
        (!q ||
          (c.title + " " + c.cat + " " + c.blurb).toLowerCase().includes(q))
    );
  }, [query, cat]);

  const countLabel =
    results.length +
    (results.length === 1 ? " course" : " courses") +
    (cat !== "All" ? " · " + cat : "");

  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pt-14 md:pt-24 pb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              All courses
            </span>
          </div>
          <h1 className="m-0 text-[clamp(40px,6.4vw,88px)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-4xl">
            Find your course.
          </h1>
          <div className="flex flex-wrap gap-4 items-center justify-between mt-10">
            <div className="flex items-center gap-2.5 bg-white border border-border rounded-full py-1.5 pl-5 pr-1.5 max-w-md flex-1 min-w-[260px]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search — hacking, python, cloud…"
                className="flex-1 border-none outline-none font-[inherit] text-[14.5px] text-fg bg-transparent min-w-0"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="flex-none border-none bg-bg text-fg w-8.5 h-8.5 rounded-full cursor-pointer text-[13px] font-bold"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="text-[13px] font-semibold text-muted">
              {countLabel}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
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
        <div className="max-w-7xl mx-auto px-7 pt-2 pb-14 md:pb-24">
          {results.length > 0 ? (
            <div className="border-t border-border-strong">
              {results.map((c) => (
                <Link
                  key={c.title}
                  href={`/courses/${c.slug}`}
                  className="grid grid-cols-[minmax(200px,1.6fr)_minmax(140px,1fr)_minmax(200px,1.6fr)_auto] gap-5 items-center border-b border-border-strong py-6.5 px-1 text-fg hover:bg-white"
                >
                  <div>
                    <div className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-muted mb-1.5">
                      {c.cat}
                    </div>
                    <div className="text-[clamp(17px,1.8vw,22px)] font-extrabold tracking-[-0.015em] leading-tight">
                      {c.title}
                    </div>
                  </div>
                  <div className="text-[13px] font-semibold text-muted">
                    {c.meta}
                  </div>
                  <p className="m-0 text-[13.5px] leading-snug text-muted">
                    {c.blurb}
                  </p>
                  <div className="flex items-center gap-2.5 justify-self-end">
                    {c.tag && (
                      <span className="text-[11.5px] font-bold bg-accent px-2.75 py-1 rounded-full whitespace-nowrap">
                        {c.tag}
                      </span>
                    )}
                    <span className="flex-none w-9.5 h-9.5 rounded-full border border-border-strong flex items-center justify-center text-[15px]">
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-18 px-6 border border-dashed border-border-strong rounded-[20px]">
              <div className="text-xl font-extrabold">
                No courses match that search.
              </div>
              <p className="mx-auto mt-2 mb-5.5 text-sm text-muted max-w-sm">
                Try a different keyword or category.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setCat("All");
                }}
                className="border-none bg-fg text-bg font-[inherit] font-bold text-sm px-6.5 py-3.25 rounded-full cursor-pointer hover:bg-accent hover:text-fg"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
