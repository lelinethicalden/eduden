import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty — EduDen",
  description:
    "Mentors who do the work, then teach it. Every EduDen instructor has an active industry career.",
};

const FACULTY = [
  {
    name: "Arindam Roy",
    role: "Cyber Security Lead · OSCP",
    exp: "9+ yrs experience",
    count: "4 courses",
    bio: "Professional pentester who has assessed banks, fintechs and SaaS platforms. Has reviewed 1,000+ student assignments.",
    courses: ["Ethical Hacking", "Adv. Pentesting", "Bug Bounty"],
  },
  {
    name: "Sohini Mukherjee",
    role: "AI & Data Science",
    exp: "7+ yrs experience",
    count: "3 courses",
    bio: "ML engineer who has shipped recommendation systems and NLP products at scale. Believes models belong in production, not just notebooks.",
    courses: ["AI Foundations", "ML Bootcamp", "Data Science"],
  },
  {
    name: "Rajat Das",
    role: "Cloud & DevOps Architect",
    exp: "10+ yrs experience",
    count: "3 courses",
    bio: "AWS-certified architect who has migrated enterprise workloads to the cloud. Teaches infrastructure the way it's actually run.",
    courses: ["Cloud with AWS", "DevOps", "Linux Admin"],
  },
  {
    name: "Priya Sen",
    role: "Design & Marketing Lead",
    exp: "8+ yrs experience",
    count: "2 courses",
    bio: "Brand designer and growth marketer who has led campaigns for D2C brands. Brings real client briefs into every classroom.",
    courses: ["Graphics Design", "Digital Marketing"],
  },
  {
    name: "Tanmay Kundu",
    role: "Full-Stack Engineering",
    exp: "8+ yrs experience",
    count: "2 courses",
    bio: "Full-stack engineer and open-source contributor. His students ship deployed, working apps — not todo-list clones.",
    courses: ["Full-Stack Web Dev", "App Development"],
  },
  {
    name: "Nilanjana Bose",
    role: "Forensics & Networking",
    exp: "6+ yrs experience",
    count: "3 courses",
    bio: "Digital forensics investigator with law-enforcement casework experience. Teaches evidence handling with real lab simulations.",
    courses: ["Digital Forensics", "Networking", "OSINT"],
  },
];

export default function Faculty() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pt-14 md:pt-24 pb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Know your faculty
            </span>
          </div>
          <h1 className="m-0 text-[clamp(40px,6.4vw,88px)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-5xl">
            Mentors who do the work, then teach it.
          </h1>
          <p className="mt-8 text-[15.5px] leading-relaxed text-muted max-w-lg">
            Every EduDen instructor has an active industry career. They
            review your assignments, run your labs, and answer your
            questions — personally.
          </p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pb-16 md:pb-24">
          <div className="border-t border-border-strong">
            {FACULTY.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-[minmax(180px,1.2fr)_minmax(160px,1fr)_1.6fr_minmax(180px,1fr)] gap-5 items-start border-b border-border-strong py-7.5 px-1"
              >
                <div>
                  <div className="text-[clamp(19px,2vw,24px)] font-extrabold tracking-[-0.02em]">
                    {f.name}
                  </div>
                  <div className="text-[13px] font-semibold text-muted mt-1.25">
                    {f.role}
                  </div>
                </div>
                <div className="text-[13px] font-semibold text-muted leading-relaxed">
                  {f.exp}
                  <br />
                  {f.count}
                </div>
                <p className="m-0 text-sm leading-relaxed text-muted max-w-lg">
                  {f.bio}
                </p>
                <div className="flex flex-wrap gap-1.5 justify-start">
                  {f.courses.map((c) => (
                    <span
                      key={c}
                      className="bg-white border border-border rounded-full px-3.25 py-1.5 text-xs font-semibold whitespace-nowrap"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="max-w-4xl mx-auto px-7 py-16 md:py-24 text-center">
          <h2 className="m-0 text-[clamp(28px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none">
            Want feedback like this on your work?
          </h2>
          <Link
            href="/courses"
            className="inline-block mt-9 bg-accent text-fg font-bold text-[14.5px] px-8 py-3.75 rounded-full hover:bg-bg"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </>
  );
}
