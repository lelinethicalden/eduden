"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import { unsplash } from "@/lib/unsplash";

const STATS = [
  { value: "2,500+", label: "Students trained" },
  { value: "30+", label: "Hands-on courses" },
  { value: "94%", label: "Completion rate" },
  { value: "4.8", label: "Average rating" },
];

const CATEGORIES = [
  "AI & Tech for Non-Tech Careers",
  "Cyber Security",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Programming",
  "Blockchain",
  "IoT",
  "Big Data",
  "Cloud Computing",
  "Linux",
  "DevOps",
  "App Development",
  "Networking",
  "Graphics Design",
  "Digital Marketing",
];

const FEATURED = [
  {
    cat: "Cyber Security",
    tag: "Bestseller",
    title: "Ethical Hacking for Beginners",
    meta: "45 days · 40 lectures · Hybrid",
    blurb:
      "Learn to legally break into systems, find security flaws, and build a cybersecurity career from scratch.",
    img: unsplash("1526374965328-7f61d4dc18c5"),
  },
  {
    cat: "Cyber Security",
    tag: "High demand",
    title: "Start Bug Bounty Hunting",
    meta: "50 days · 45 lectures · Online",
    blurb:
      "A complete roadmap from recon to reporting — for HackerOne, Bugcrowd and beyond.",
    img: unsplash("1550439062-609e1531270e"),
  },
  {
    cat: "Cyber Security",
    tag: "New batch",
    title: "Digital Forensics",
    meta: "90 days · 70 lectures · Hybrid",
    blurb:
      "Uncover hidden data, trace cybercrimes, and recover digital evidence with real lab simulations.",
    img: unsplash("1573164713988-8665fc963095"),
  },
];

const FEATURES = [
  "Mentor-verified assignments",
  "Real lab environments",
  "Live weekly sessions",
  "Portfolio projects",
  "Placement support",
  "Verifiable certificates",
];

const WHY = [
  {
    n: "01",
    title: "100% hands-on",
    body: "Labs, real-world tools, and live simulated environments — not slide decks. You learn by breaking and building things.",
  },
  {
    n: "02",
    title: "Verified assignments",
    body: "Every assignment is reviewed by mentors with feedback through Slack and GitHub. No auto-graded shortcuts.",
  },
  {
    n: "03",
    title: "Mentor-led, always",
    body: "Weekly live sessions, Q&A and 1:1 guidance from practitioners who work in the industry right now.",
  },
  {
    n: "04",
    title: "Career outcomes",
    body: "Resume support, interview prep, portfolio guidance and placement assistance built into career-track courses.",
  },
];

const FAQS = [
  {
    q: "What is eduden?",
    a: "Eduden is an EdTech platform offering innovative and accessible learning solutions",
  },
  {
    q: "How do i enroll in a course on eduden?",
    a: "Simple sign up, browse courses, and follow the easy registration process to get started.",
  },
  {
    q: "Do eduden courses come with certificates?",
    a: "Yes, eduden provides certificates upon successful course completion.",
  },
  {
    q: "Is the tutor support available on eduden?",
    a: "Yes, expert tutors are available to guide and support you throughout your learning journey.",
  },
  {
    q: "How do i make the payments for eduden courses?",
    a: "Payments can be made securely using credit/debit cards, digital wallets, or other online methods.",
  },
];

export default function Home() {
  const [trackOpen, setTrackOpen] = useState(false);

  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pt-16 md:pt-24 lg:pt-30 pb-12 md:pb-18">
          <h1 className="m-0 text-[clamp(44px,7.4vw,104px)] leading-[0.94] font-black tracking-[-0.04em] uppercase max-w-[1100px]">
            Where learning meets imagination &amp; innovation
          </h1>
          <div className="flex flex-wrap justify-between items-end gap-7 mt-10">
            <p className="m-0 text-[clamp(15px,1.4vw,17px)] leading-relaxed text-muted max-w-md text-pretty">
              We&apos;re your non-stop destination for unlocking your
              potential and conquering the digital realm with confidence.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/courses"
                className="bg-[#FFD300] text-fg font-bold text-[14.5px] px-7.5 py-3.75 rounded-full hover:bg-accent"
              >
                Explore Courses
              </Link>
              <Link
                href="/enroll"
                className="border border-border-strong text-fg font-semibold text-[14.5px] px-7.5 py-3.75 rounded-full"
              >
                Enroll Now
              </Link>
            </div>
          </div>
          <div className="relative h-[clamp(240px,34vw,440px)] rounded-3xl overflow-hidden border border-border mt-10 md:mt-14">
            <Image
              src={unsplash("1523240795612-9a054b0db644")}
              alt="Students in a live class or lab"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-t border-border-strong mt-12 md:mt-18">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="pt-6 pr-6 border-r border-border-strong pl-5"
              >
                <div className="text-[clamp(26px,2.6vw,36px)] font-extrabold tracking-[-0.02em]">
                  {s.value}
                </div>
                <div className="text-[13px] font-medium text-muted mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAC211] text-fg">
        <div className="max-w-7xl mx-auto px-7 py-16 md:py-26 grid gap-11 grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))]">
          <div>
            <div className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] uppercase text-fg">
              Learn.
            </div>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-fg max-w-xs">
              Short, focused lessons live and recorded taught by people with
              active industry careers.
            </p>
          </div>
          <div>
            <div className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] uppercase text-fg">
              Build.
            </div>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-fg max-w-xs">
              Guided labs and portfolio projects from day one. Every
              assignment reviewed by a mentor never an auto-grader.
            </p>
          </div>
          <div>
            <div className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] uppercase text-fg">
              Prove.
            </div>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-fg max-w-xs">
              A verifiable certificate, an interview-ready portfolio, and
              placement support until you land the role.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              16 tracks · New: AI &amp; Tech for Non-Tech Careers
            </span>
          </div>
          <div className="flex flex-wrap justify-between items-end gap-5 mb-9">
            <h2 className="m-0 text-[clamp(30px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none">
              Pick a track.
              <br />
              Go deep.
            </h2>
            <Link
              href="/courses"
              className="font-bold text-sm border-b-2 border-accent pb-0.75 whitespace-nowrap"
            >
              View all courses →
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 min-w-[260px] max-w-[440px]">
              <button
                onClick={() => setTrackOpen((o) => !o)}
                className="flex items-center justify-between gap-3.5 w-full bg-white border border-border rounded-full py-3.5 px-5.5 font-[inherit] text-[14.5px] font-semibold text-fg cursor-pointer"
              >
                <span>Browse all {CATEGORIES.length} tracks</span>
                <span className="flex-none text-[10px] text-muted">
                  {trackOpen ? "▲" : "▼"}
                </span>
              </button>
              {trackOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-border rounded-[18px] shadow-[0_24px_48px_rgba(17,17,17,0.14)] p-2 max-h-[340px] overflow-auto z-[60]">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c}
                      href={`/courses#cat=${encodeURIComponent(c)}`}
                      onClick={() => setTrackOpen(false)}
                      className="flex items-center justify-between gap-3 rounded-xl py-2.5 px-3.5 text-[13.5px] font-semibold text-muted hover:bg-bg hover:text-fg"
                    >
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {c}
                      </span>
                      <span className="flex-none text-[13px]">→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <span className="text-[13.5px] text-muted">
              or{" "}
              <Link
                href="/courses"
                className="font-bold text-fg border-b-2 border-accent pb-0.5"
              >
                see everything at once
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pb-14 md:pb-22">
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]">
            {FEATURED.map((c) => (
              <Link
                key={c.title}
                href="/courses/ethical-hacking-for-beginners"
                className="bg-white border border-border rounded-[20px] overflow-hidden flex flex-col text-fg "
              >
                <div className="relative h-[170px] flex-none">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3.5 left-3.5 pointer-events-none">
                    <span className="text-[11px] font-bold tracking-[0.06em] uppercase bg-accent px-2.75 py-1.25 rounded-full">
                      {c.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5.5 pt-5.5 flex flex-col gap-3 flex-1">
                  <span className="text-xs font-bold tracking-[0.12em] uppercase text-muted">
                    {c.cat}
                  </span>
                  <div className="text-[clamp(20px,1.8vw,24px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                    {c.title}
                  </div>
                  <div className="text-[13px] font-semibold text-muted">
                    {c.meta}
                  </div>
                  <p className="m-0 text-sm leading-relaxed text-muted flex-1">
                    {c.blurb}
                  </p>
                  <span className="font-bold text-sm border-b-2 border-accent pb-0.75 self-start">
                    View course →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-7 py-18 md:py-28 text-center">
          <p className="m-0 text-[clamp(24px,3.2vw,40px)] font-bold tracking-[-0.025em] leading-[1.25] text-balance">
            With Eduden it all comes together. You learn a skill, apply it in
            a real lab, get your work{" "}
            <span className="border-b-[3px] border-accent">
              verified by a mentor
            </span>
            , and walk away with proof.
          </p>
          <div className="flex flex-wrap gap-2.25 justify-center mt-10">
            {FEATURES.map((f) => (
              <span
                key={f}
                className="bg-white border border-border rounded-full px-4.25 py-2.25 text-[13px] font-semibold text-fg whitespace-nowrap"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pb-14 md:pb-22">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Why EduDen
            </span>
          </div>
          <h2 className="mt-0 mb-3 text-[clamp(30px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none max-w-3xl">
            Not another course website.
          </h2>
          <div className="mt-9">
            {WHY.map((w) => (
              <div
                key={w.n}
                className="grid grid-cols-[minmax(48px,80px)_minmax(160px,1fr)_2fr] gap-5 items-baseline border-t border-border-strong py-6.5"
              >
                <div className="text-[13px] font-bold text-muted">{w.n}</div>
                <div className="text-[clamp(17px,1.7vw,21px)] font-extrabold tracking-[-0.01em]">
                  {w.title}
                </div>
                <p className="m-0 text-[14.5px] leading-relaxed text-muted max-w-xl">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="max-w-4xl mx-auto px-7 py-18 md:py-28 text-center">
          <div className="relative w-19 h-19 rounded-full overflow-hidden mx-auto mb-7">
            <Image
              src={unsplash("1544005313-94ddf0286df2")}
              alt="Ritwika Ghosh"
              fill
              sizes="76px"
              className="object-cover"
            />
          </div>
          <p className="m-0 text-[clamp(21px,2.8vw,32px)] font-semibold tracking-[-0.02em] leading-[1.4] text-balance">
            &ldquo;I joined knowing nothing about cybersecurity. 45 days
            later I had 3 projects, a certificate, and the confidence to
            clear my SOC Analyst interview.&rdquo;
          </p>
          <div className="mt-8 text-sm font-bold">Ritwika Ghosh</div>
          <div className="text-[13px] text-muted-dark mt-1">
            SOC Analyst · 2025 batch
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-4xl mx-auto px-7 py-14 md:py-22">
          <h2 className="mt-0 mb-9 text-[clamp(30px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none">
            Questions? Sorted.
          </h2>
          <FaqAccordion items={FAQS} />
        </div>
      </section>
      
      <section className="bg-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22 grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          <Link
            href="/enroll"
            className="bg-accent rounded-3xl p-8 md:p-12 flex flex-col justify-between gap-12 text-fg hover:-translate-y-1 transition-transform"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="text-[30px] md:text-[46px] font-black tracking-tight leading-[0.98] uppercase">
                Enroll
                <br />
                Now
              </div>
              <span className="flex-none w-12 h-12 rounded-full bg-fg text-bg flex items-center justify-center text-lg">
                ↗
              </span>
            </div>
            <div className="text-sm font-semibold text-fg/70 max-w-xs">
              Two minutes. Our admissions team gets back within one working
              day.
            </div>
          </Link>
          <Link
            href="/contact"
            className="bg-white border border-border rounded-3xl p-8 md:p-12 flex flex-col justify-between gap-12 text-fg hover:-translate-y-1 transition-transform"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="text-[30px] md:text-[46px] font-black tracking-tight leading-[0.98] uppercase">
                Ask a
                <br />
                Question
              </div>
              <span className="flex-none w-12 h-12 rounded-full border border-border-strong text-fg flex items-center justify-center text-lg">
                ↗
              </span>
            </div>
            <div className="text-sm font-semibold text-muted max-w-xs">
              Not sure which course fits? Talk to us — we&apos;ll map one to
              your goal.
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
