import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — EduDen",
  description:
    "We teach the skills the industry actually hires for. Hands-on, mentor-led courses with verified assignments.",
};

const STATS = [
  { value: "2,500+", label: "Students trained" },
  { value: "30+", label: "Hands-on courses" },
  { value: "15+", label: "Industry mentors" },
  { value: "94%", label: "Completion rate" },
];

const DIFFERENT = [
  {
    n: "01",
    title: "Practical education",
    body: "Labs and real tools from day one. If a lesson can't be practiced, we don't teach it that way.",
  },
  {
    n: "02",
    title: "Industry-focused learning",
    body: "Curricula built backwards from job descriptions and real engagements — not textbooks.",
  },
  {
    n: "03",
    title: "Expert instructors",
    body: "Practitioners with active industry careers: pentesters, ML engineers, cloud architects, designers.",
  },
  {
    n: "04",
    title: "Verified assignments",
    body: "Every submission is human-reviewed with feedback via Slack/GitHub. No auto-graded shortcuts.",
  },
  {
    n: "05",
    title: "Career growth",
    body: "Resume support, interview prep, portfolio guidance and placement assistance built in.",
  },
  {
    n: "06",
    title: "Learn your way",
    body: "Online, hybrid, or classroom-supported at our Kolkata center — same rigor in every mode.",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 py-16 md:py-30">
          <div className="flex items-center gap-2 mb-7">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              About EduDen
            </span>
          </div>
          <h1 className="m-0 text-[clamp(40px,6.4vw,92px)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-6xl">
            We teach the skills the industry actually hires for.
          </h1>
          <p className="mt-9 text-[clamp(15px,1.4vw,17px)] leading-relaxed text-muted max-w-xl">
            Too much education is theory-dumps and certificates that mean
            nothing. We build hands-on, mentor-led courses where every
            assignment is verified and every skill is job-relevant.
          </p>
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="max-w-7xl mx-auto px-7 py-16 md:py-26 grid gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center">
          <div>
            <div className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-accent mb-4.5">
              Our mission
            </div>
            <h2 className="m-0 text-[clamp(28px,3.8vw,52px)] font-black tracking-[-0.035em] uppercase leading-none">
              Where learning meets imagination &amp; innovation.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-dark max-w-lg">
              We bridge the gap between what colleges teach and what
              careers demand — through practical education, industry-focused
              curricula, and instructors who do the work they teach.
            </p>
          </div>
          <div className="grid grid-cols-2">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="border-l border-white/12 px-6 py-5"
              >
                <div className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-0.02em] text-accent">
                  {s.value}
                </div>
                <div className="text-[13px] text-muted-dark mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22">
          <h2 className="mt-0 mb-9 text-[clamp(30px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none max-w-3xl">
            No theory-dumps.
            <br />
            No shortcuts.
          </h2>
          <div>
            {DIFFERENT.map((d) => (
              <div
                key={d.n}
                className="grid grid-cols-[minmax(48px,80px)_minmax(160px,1fr)_2fr] gap-5 items-baseline border-t border-border-strong py-6"
              >
                <div className="text-[13px] font-bold text-muted">{d.n}</div>
                <div className="text-[clamp(16px,1.7vw,20px)] font-extrabold tracking-[-0.01em]">
                  {d.title}
                </div>
                <p className="m-0 text-[14.5px] leading-relaxed text-muted max-w-xl">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-7 py-18 md:py-28 text-center">
          <p className="m-0 text-[clamp(21px,2.8vw,32px)] font-semibold tracking-[-0.02em] leading-[1.4] text-balance">
            &ldquo;I was a commerce graduate with zero tech background.
            EduDen got me from &lsquo;what is Linux?&rsquo; to a paid
            cybersecurity internship in under six months.&rdquo;
          </p>
          <div className="mt-8 text-sm font-bold">Sayan Banerjee</div>
          <div className="text-[13px] text-muted mt-1">
            Security Intern → SOC Analyst · Kolkata
          </div>
          <Link
            href="/courses"
            className="inline-block mt-10 bg-fg text-bg font-bold text-[14.5px] px-8 py-3.75 rounded-full hover:bg-accent hover:text-fg"
          >
            Find Your Course
          </Link>
        </div>
      </section>
    </>
  );
}
