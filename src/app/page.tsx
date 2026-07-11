import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const STATS = [
  { value: "2,500+", label: "Students trained" },
  { value: "30+", label: "Hands-on courses" },
  { value: "94%", label: "Completion rate" },
  { value: "4.8", label: "Average rating" },
];

const CATEGORIES = [
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
  },
  {
    cat: "Cyber Security",
    tag: "High demand",
    title: "Start Bug Bounty Hunting",
    meta: "50 days · 45 lectures · Online",
    blurb:
      "A complete roadmap from recon to reporting — for HackerOne, Bugcrowd and beyond.",
  },
  {
    cat: "Cyber Security",
    tag: "New batch",
    title: "Digital Forensics",
    meta: "90 days · 70 lectures · Hybrid",
    blurb:
      "Uncover hidden data, trace cybercrimes, and recover digital evidence with real lab simulations.",
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
    q: "Do I need prior experience to join?",
    a: "Most beginner courses start from zero — no coding or security background needed. Advanced courses list clear prerequisites on their detail pages.",
  },
  {
    q: "Are classes online, offline, or both?",
    a: "Both. Most courses run online with live sessions; many offer hybrid and classroom-supported modes at our Kolkata center.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes — complete every assignment and score at least 50% in the final exams to earn a verifiable EduDen certificate, checkable on our Verify page.",
  },
  {
    q: "Is there placement support?",
    a: "Career-track courses include resume support, interview preparation, portfolio guidance and placement assistance with our hiring partners.",
  },
  {
    q: "How do assignments work?",
    a: "You submit through Slack/GitHub and mentors review each one with feedback. Assignments are verified by humans, not auto-graders.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pt-16 md:pt-24 lg:pt-30 pb-12 md:pb-18">
          <div className="flex items-center gap-2 mb-7">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Admissions open · New batches monthly
            </span>
          </div>
          <h1 className="m-0 text-[clamp(44px,7.4vw,104px)] leading-[0.94] font-black tracking-[-0.04em] uppercase max-w-6xl">
            Skills that move
            <br />
            your career forward.
          </h1>
          <div className="flex flex-wrap justify-between items-end gap-7 mt-10">
            <p className="m-0 text-[clamp(15px,1.4vw,17px)] leading-relaxed text-muted max-w-md text-pretty">
              Hands-on courses led by industry mentors. Real projects,
              verified assignments, career-focused training. No
              theory-dumps. Ever.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/courses"
                className="bg-fg text-bg font-bold text-[14.5px] px-7.5 py-3.75 rounded-full"
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

      <section className="bg-fg text-bg">
        <div className="max-w-7xl mx-auto px-7 py-16 md:py-26 grid gap-11 grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))]">
          <div>
            <div className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] uppercase">
              Learn.
            </div>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-muted-dark max-w-xs">
              Short, focused lessons — live and recorded — taught by people
              with active industry careers.
            </p>
          </div>
          <div>
            <div className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] uppercase">
              Build.
            </div>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-muted-dark max-w-xs">
              Guided labs and portfolio projects from day one. Every
              assignment reviewed by a mentor — never an auto-grader.
            </p>
          </div>
          <div>
            <div className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] uppercase">
              Prove.
            </div>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-muted-dark max-w-xs">
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
              15 tracks
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
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                href="/courses"
                className="bg-white border border-border rounded-full px-5 py-2.75 text-sm font-semibold text-fg hover:border-fg"
              >
                {c}
              </Link>
            ))}
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
                className="bg-white border border-border rounded-[20px] p-7.5 flex flex-col gap-3.5 text-fg hover:border-fg"
              >
                <div className="flex justify-between items-center gap-3">
                  <span className="text-xs font-bold tracking-[0.12em] uppercase text-muted">
                    {c.cat}
                  </span>
                  <span className="text-[11.5px] font-bold bg-accent px-2.75 py-1 rounded-full whitespace-nowrap">
                    {c.tag}
                  </span>
                </div>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-7 py-18 md:py-28 text-center">
          <p className="m-0 text-[clamp(24px,3.2vw,40px)] font-bold tracking-[-0.025em] leading-[1.25] text-balance">
            With EduDen it all comes together. You learn a skill, apply it
            in a real lab, get your work{" "}
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
