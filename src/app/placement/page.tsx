import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placement — EduDen",
  description:
    "The course ends. The support doesn't. Resume support, portfolio guidance, interview preparation and placement assistance.",
};

const STATS = [
  { value: "350+", label: "Students placed & interning" },
  { value: "40+", label: "Hiring partner companies" },
  { value: "4 wks", label: "Avg. time to first interview" },
  { value: "1:1", label: "Career mentorship" },
];

const PROCESS = [
  {
    n: "01",
    title: "Resume support",
    body: "Line-by-line resume and LinkedIn reviews with the placement team until they're interview-ready.",
  },
  {
    n: "02",
    title: "Portfolio guidance",
    body: "Turn your course projects into a portfolio and GitHub profile that recruiters actually open.",
  },
  {
    n: "03",
    title: "Interview preparation",
    body: "Mock technical and HR interviews with real feedback — including role-specific question banks.",
  },
  {
    n: "04",
    title: "Placement assistance",
    body: "Referrals to hiring partners, job alerts matched to your track, and support through offer negotiation.",
  },
];

const ROLES = [
  "SOC Analyst",
  "Junior Penetration Tester",
  "Security Analyst",
  "Bug Bounty Hunter",
  "Data Analyst",
  "ML Engineer (Junior)",
  "Full-Stack Developer",
  "Cloud Support Engineer",
  "DevOps Engineer",
  "Network Administrator",
  "UI/Graphic Designer",
  "Digital Marketing Executive",
];

export default function Placement() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pt-16 md:pt-30 pb-12 md:pb-18">
          <div className="flex items-center gap-2 mb-7">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Placement &amp; career support
            </span>
          </div>
          <h1 className="m-0 text-[clamp(40px,6.4vw,92px)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-5xl">
            The course ends. The support doesn&apos;t.
          </h1>
          <p className="mt-9 text-[clamp(15px,1.4vw,17px)] leading-relaxed text-muted max-w-lg">
            From your first resume draft to your final interview round —
            our placement team works with you until you land the role.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-t border-border-strong mt-10 md:mt-14">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="pt-5.5 px-5 border-r border-border-strong"
              >
                <div className="text-[clamp(24px,2.4vw,32px)] font-extrabold tracking-[-0.02em]">
                  {s.value}
                </div>
                <div className="text-[12.5px] font-medium text-muted mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22">
          <h2 className="mt-0 mb-10 text-[clamp(28px,3.8vw,52px)] font-black tracking-[-0.035em] uppercase leading-none">
            A process, not a promise.
          </h2>
          <div>
            {PROCESS.map((p) => (
              <div
                key={p.n}
                className="grid grid-cols-[minmax(48px,80px)_minmax(160px,1fr)_2fr] gap-5 items-baseline border-t border-white/12 py-6"
              >
                <div className="text-[13px] font-bold text-accent">
                  {p.n}
                </div>
                <div className="text-[clamp(16px,1.7vw,20px)] font-extrabold">
                  {p.title}
                </div>
                <p className="m-0 text-[14.5px] leading-relaxed text-muted-dark max-w-xl">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22">
          <h2 className="mt-0 mb-8 text-[clamp(28px,3.8vw,48px)] font-black tracking-[-0.035em] uppercase leading-none">
            Roles our alumni hold today.
          </h2>
          <div className="flex flex-wrap gap-2.25">
            {ROLES.map((r) => (
              <span
                key={r}
                className="bg-white border border-border rounded-full px-4.5 py-2.5 text-[13.5px] font-semibold whitespace-nowrap"
              >
                {r}
              </span>
            ))}
          </div>
          <div className="text-[12.5px] text-muted mt-5">
            Representative outcomes — results vary by course, effort and
            market.
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-7 py-18 md:py-28 text-center">
          <p className="m-0 text-[clamp(21px,2.8vw,32px)] font-semibold tracking-[-0.02em] leading-[1.4] text-balance">
            &ldquo;The mock interviews were harder than my real one. When
            the actual panel asked me to walk through a pentest, I&apos;d
            already done it five times.&rdquo;
          </p>
          <div className="mt-8 text-sm font-bold">Ritwika Ghosh</div>
          <div className="text-[13px] text-muted mt-1">
            SOC Analyst · 2025 batch
          </div>
          <Link
            href="/courses"
            className="inline-block mt-10 bg-fg text-bg font-bold text-[14.5px] px-8 py-3.75 rounded-full hover:bg-accent hover:text-fg"
          >
            Start Learning
          </Link>
        </div>
      </section>
    </>
  );
}
