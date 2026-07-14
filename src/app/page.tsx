"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import TestimonialSlider from "@/components/TestimonialSlider";
import { unsplash } from "@/lib/unsplash";
import { COURSES } from "@/data/courses";

const STATS = [
  { value: "750+", label: "Students trained" },
  { value: "30+", label: "Hands-on courses" },
  { value: "94%", label: "Completion rate" },
  { value: "4.8", label: "Average rating" },
];

const CATEGORIES = Array.from(new Set(COURSES.map((c) => c.cat)));

const FEATURED_SLUGS = ["business-analytics-mis-reporting", "policy-analytics", "ethical-hacking-for-beginners"];
const FEATURED = FEATURED_SLUGS.map(
  (slug) => COURSES.find((c) => c.slug === slug)!
).filter(Boolean);

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
    title: "Less Theory. More Practice.",
    body: "Classroom sessions backed by labs, projects, and practical exercises that help you learn by doing.",
  },
  {
    n: "02",
    title: "Build More Than Skills",
    body: "Every project you complete becomes part of a portfolio you can confidently showcase during internships and interviews.",
  },
  {
    n: "03",
    title: "Industry Experience Matters",
    body: "Learn from professionals who understand current technologies, workplace expectations, and real business challenges.",
  },
  {
    n: "04",
    title: "Focused on Careers",
    body: "From certification to interview preparation, every course is designed to help you move closer to your career goals.",
  },
];

const TESTIMONIALS = [
  {
    name: "Chitranjan Singh",
    role: "Student at Delhi University",
    quote:
      "This course assisted me in gaining a foothold in the cybersecurity area as a newbie. This is a good place to start for Ethical Hackers who want to pursue Cyber Security as career. Mr. Fardeen's teaching style is excellent; he will make it simple for you to comprehend. I definitely advise anyone interested in getting into cyber security course to take this course as a first step.",
    img: unsplash("1544005313-94ddf0286df2"),
  },
  {
    name: "Prem Prakash Dubey",
    role: "Presales Project Manager at UnifyCloud LLC",
    quote:
      "Being from a Cyber Security products pre-sale, I was looking for a course which could help me understand the client’s pain point in detail. Ethical Hacking course taught by Mr. Fardeen was more than adequate in gaining a strong foothold in a short span of time. The course was flexible and Fardeen’s one-on-one mentoring made it a personalized learning experience.",
    img: unsplash("1472099645785-5658abf4ff4e"),
  },
  {
    name: "Tejarsha M",
    role: "Information Security & Risk Professional, Wells Fargo",
    quote:
      "Good mentor, A warm thanks to Fardeen for amazing training session. Not only the session was very informative but the training material provided was also clear understandable and interesting on live scenario's",
    img: unsplash("1494790108377-be9c29b29330"),
  },
  {
    name: "Arun Kumar",
    role: "Student at Kingdom College, Bangalore",
    quote:
      "Fardeen sir is simply the best tutor in Cyber Science and constantly motivates and makes us think differently.",
    img: unsplash("1494790108377-be9c29b29330"),
  },
];

const FAQS = [
  {
    q: "Which course is right for me?",
    a: "Our team helps you choose a course based on your academic background, interests, and career goals. Whether you're a beginner or looking to specialize, we'll recommend a learning path that fits you.",
  },
  {
    q: "Do I need prior experience to join?",
    a: "Many of our beginner courses are designed for students with no prior technical experience. Advanced programs may have recommended prerequisites, which are clearly mentioned on each course page.",
  },
  {
    q: "How are the classes conducted?",
    a: "Classes are conducted in a classroom environment with experienced mentors, practical exercises, assignments, and project-based learning to ensure students gain hands-on experience.",
  },
  {
    q: "Will I work on real projects?",
    a: "Yes. Every course includes practical assignments, mini projects, and a capstone project that helps you build a portfolio and apply what you learn.",
  },
  {
    q: "Will this course help me prepare for my career?",
    a: "Our courses are designed to build practical skills, strengthen your portfolio, and improve your confidence for internships, placements, and future career opportunities.",
  },
];

export default function Home() {
  const [trackOpen, setTrackOpen] = useState(false);

  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-10 md:pt-24 lg:pt-30 pb-8 md:pb-18">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-7 py-10 md:py-26 grid gap-8 sm:gap-11 grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))]">
          <div>
            <div className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] uppercase text-fg">
              Learn.
            </div>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-fg max-w-xs">
              Learn practical skills through classroom training led by industry professionals.
            </p>
          </div>
          <div>
            <div className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] uppercase text-fg">
              PRACTICE.
            </div>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-fg max-w-xs">
              Build confidence through assignments, live projects, and hands-on learning.
            </p>
          </div>
          <div>
            <div className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] uppercase text-fg">
              GET HIRED.
            </div>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-fg max-w-xs">
              Graduate with a strong portfolio, industry-recognized certification, and interview-ready skills.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 py-9 md:py-22">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              {CATEGORIES.length} tracks · New: AI &amp; Tech for Non-Tech Careers
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
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pb-9 md:pb-22">
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]">
            {FEATURED.map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
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
                    {c.duration} · {c.lectures} · {c.mode}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-7 py-11 md:py-28 text-center">
          <p className="m-0 text-[clamp(24px,3.2vw,40px)] font-bold tracking-[-0.025em] leading-[1.25] text-balance">
            With eduden it all comes together. You learn a skill, apply it in
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
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pb-9 md:pb-22">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Why eduden
            </span>
          </div>
          <h2 className="mt-0 mb-3 text-[clamp(30px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none max-w-3xl">
            Not another course website.
          </h2>
          <div className="mt-9">
            {WHY.map((w) => (
              <div
                key={w.n}
                className="grid grid-cols-[minmax(32px,48px)_1fr] sm:grid-cols-[minmax(48px,80px)_minmax(140px,1fr)_2fr] gap-y-2 sm:gap-y-0 sm:items-baseline border-t border-border-strong py-6.5"
              >
                <div className="font-bold">{w.n}</div>
                <div className="font-extrabold tracking-[-0.01em]">
                  {w.title}
                </div>
                <p className="m-0 col-span-2 sm:col-span-1 text-[14.5px] leading-relaxed text-muted max-w-xl">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 py-11 md:py-28">
          <TestimonialSlider items={TESTIMONIALS} />
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-7 py-9 md:py-22">
          <h2 className="mt-0 mb-9 text-[clamp(30px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none">
            Questions? Sorted.
          </h2>
          <FaqAccordion items={FAQS} />
        </div>
      </section>
      
      <section className="bg-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 py-9 md:py-22 grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))]">
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
