import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import ModulesAccordion from "@/components/ModulesAccordion";
import logo from "../../../../public/images/eduden-logo.png";

export const metadata: Metadata = {
  title: "Ethical Hacking for Beginners — EduDen",
  description:
    "Learn to legally break into systems, find security flaws, and help companies fix them — while building a career in cybersecurity.",
};

const QUICK_STATS = [
  { value: "45 days", label: "Duration" },
  { value: "40", label: "Lectures" },
  { value: "3", label: "Projects" },
  { value: "Hybrid", label: "Mode" },
  { value: "Beginner", label: "Level" },
];

const ELIGIBILITY = [
  "Students & freshers curious about cybersecurity — no coding background needed",
  "IT professionals who want to move into security roles",
  "Anyone preparing for bug bounty programs or security internships",
  "Basic computer literacy and your own laptop — that's it",
];

const LEARN = [
  "Think like a hacker: recon, scanning & enumeration",
  "Exploit real vulnerabilities in safe lab environments",
  "Use Kali Linux, Nmap, Burp Suite & Metasploit",
  "Web app attacks: XSS, SQLi, and the OWASP Top 10",
  "Wi-Fi and network security testing",
  "Write professional pentest reports",
  "Bug bounty basics: from finding to reporting",
  "Build a portfolio that gets interview calls",
];

const MODULES = [
  {
    title: "Hacking Foundations & Lab Setup",
    meta: "6 lectures",
    topics: [
      "How hacking actually works (and the law)",
      "Kali Linux setup & command line essentials",
      "Networking crash course: TCP/IP, ports, protocols",
      "Your safe practice lab",
    ],
  },
  {
    title: "Reconnaissance & Scanning",
    meta: "7 lectures",
    topics: [
      "Passive & active recon techniques",
      "Nmap deep dive: scanning like a pro",
      "Enumeration: users, shares, services",
      "Lab: map a target network",
    ],
  },
  {
    title: "Exploitation Basics",
    meta: "8 lectures",
    topics: [
      "Vulnerability analysis workflow",
      "Metasploit fundamentals",
      "Password attacks & privilege escalation",
      "Lab: capture your first flag",
    ],
  },
  {
    title: "Web Application Hacking",
    meta: "8 lectures",
    topics: [
      "OWASP Top 10 explained with live targets",
      "Burp Suite: intercept, repeat, intrude",
      "XSS & SQL injection hands-on",
      "Lab: full web app assessment",
    ],
  },
  {
    title: "Wireless & Network Attacks",
    meta: "5 lectures",
    topics: [
      "Wi-Fi security: WPA2 attacks & defenses",
      "Man-in-the-middle techniques",
      "Sniffing & spoofing with Wireshark",
      "Lab: audit a wireless network",
    ],
  },
  {
    title: "Reporting & Career Launch",
    meta: "6 lectures",
    topics: [
      "Writing reports clients actually read",
      "Bug bounty platforms: your first submission",
      "Resume, portfolio & interview prep",
      "Final project: end-to-end engagement",
    ],
  },
];

const TOOLS = [
  "Kali Linux",
  "Nmap",
  "Burp Suite",
  "Metasploit",
  "Wireshark",
  "John the Ripper",
  "Gobuster",
  "SQLmap",
  "Aircrack-ng",
  "OSINT Framework",
];

const OUTCOMES = [
  "Roles: SOC Analyst, Junior Pentester, Security Analyst",
  "Ready for bug bounty platforms like HackerOne & Bugcrowd",
  "Foundation for CEH, eJPT and Security+ certifications",
  "Placement support: resume, interviews, portfolio",
];

const FAQS = [
  {
    q: "Is this course really for total beginners?",
    a: "Yes. It's designed for people starting from scratch — we cover the networking and Linux basics you need in module 1. No coding background required.",
  },
  {
    q: "What happens after the course period ends?",
    a: "Buying the course entitles you to access all course content. Once the period ends, there are no recurring charges — ever.",
  },
  {
    q: "How do I get the certificate?",
    a: "Complete every assignment and the final exams with a minimum 50% mark. A digital certificate is available for download online.",
  },
  {
    q: "Can I attend labs in person?",
    a: "Yes — hybrid mode includes classroom-supported lab sessions at our Kolkata center (Nokia Care Building, South Dumdum).",
  },
];

export default function CourseDetail() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pt-8 pb-12 md:pb-18">
          <nav className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-muted mb-10">
            <Link href="/" className="text-muted hover:text-fg">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="text-muted hover:text-fg">
              Courses
            </Link>
            <span>/</span>
            <span className="text-fg">Ethical Hacking for Beginners</span>
          </nav>
          <div className="flex items-center gap-2 mb-5.5">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Cyber Security · Beginner-friendly · Bestseller
            </span>
          </div>
          <h1 className="m-0 text-[clamp(38px,5.8vw,80px)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-5xl">
            Ethical Hacking for Beginners.
          </h1>
          <div className="flex flex-wrap justify-between items-end gap-7 mt-9">
            <p className="m-0 text-[15.5px] leading-relaxed text-muted max-w-lg text-pretty">
              Learn to legally break into systems, find security flaws, and
              help companies fix them — while building a career in
              cybersecurity. This is not a theory-dump.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/enroll"
                className="bg-fg text-bg font-bold text-[14.5px] px-7.5 py-3.75 rounded-full hover:bg-accent hover:text-fg"
              >
                Admission Inquiry
              </Link>
              <Link
                href="/brochure"
                className="border border-border-strong text-fg font-semibold text-[14.5px] px-7.5 py-3.75 rounded-full hover:border-fg"
              >
                Brochure ↓
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] border-t border-border-strong mt-10 md:mt-14">
            {QUICK_STATS.map((s) => (
              <div
                key={s.label}
                className="pt-5.5 px-5 border-r border-border-strong"
              >
                <div className="text-[clamp(20px,2vw,26px)] font-extrabold tracking-[-0.02em]">
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
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22 grid gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]">
          <div>
            <h2 className="mt-0 mb-4.5 text-[clamp(26px,3.2vw,42px)] font-black tracking-[-0.03em] uppercase leading-none">
              Zero to job-ready in 45 days.
            </h2>
            <p className="m-0 mb-3.5 text-[15px] leading-relaxed text-muted-dark">
              This fully hands-on course teaches you to think like a
              hacker, use real-world tools, and apply those skills to bug
              bounty programs, internships, or job-ready IT roles.
            </p>
            <p className="m-0 text-[15px] leading-relaxed text-muted-dark">
              You work inside safe, guided lab environments from day one —
              scanning networks, exploiting vulnerabilities, and writing
              reports the way professionals do.
            </p>
          </div>
          <div>
            <div className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-accent mb-5">
              Who can join
            </div>
            {ELIGIBILITY.map((e) => (
              <div
                key={e}
                className="border-t border-white/12 py-4 text-[14.5px] leading-relaxed text-white/85"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22">
          <h2 className="mt-0 mb-9 text-[clamp(28px,3.6vw,48px)] font-black tracking-[-0.035em] uppercase leading-none">
            What you will learn.
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-12">
            {LEARN.map((l) => (
              <div
                key={l}
                className="flex gap-3.5 items-baseline border-t border-border-strong py-4.5"
              >
                <span className="flex-none w-1.75 h-1.75 bg-accent rounded-sm -translate-y-0.5" />
                <span className="text-[14.5px] font-semibold leading-snug">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-7 py-14 md:py-22">
          <h2 className="mt-0 mb-2 text-[clamp(28px,3.6vw,48px)] font-black tracking-[-0.035em] uppercase leading-none">
            Curriculum.
          </h2>
          <p className="m-0 mb-9 text-[14.5px] text-muted">
            6 modules · 40 lectures · 15+ labs · 11 mentor-verified
            assignments
          </p>
          <ModulesAccordion modules={MODULES} />
          <div className="mt-9">
            <div className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted mb-3.5">
              Tools you&apos;ll master
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="bg-white border border-border rounded-full px-3.75 py-2 text-[13px] font-semibold whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22 grid gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center">
          <div>
            <h2 className="mt-0 mb-4 text-[clamp(28px,3.6vw,48px)] font-black tracking-[-0.035em] uppercase leading-none">
              Finish strong.
              <br />
              Walk away verified.
            </h2>
            <p className="m-0 mb-5 text-[15px] leading-relaxed text-muted max-w-lg">
              Complete every assignment and score at least 50% in the final
              exams to earn a verifiable EduDen certificate — checkable
              anytime on our{" "}
              <Link
                href="/verify"
                className="font-bold border-b-2 border-accent"
              >
                Verify page
              </Link>
              .
            </p>
            {OUTCOMES.map((o) => (
              <div
                key={o}
                className="flex gap-3.5 items-baseline border-t border-border-strong py-3.5 max-w-lg"
              >
                <span className="flex-none w-1.75 h-1.75 bg-accent rounded-sm -translate-y-0.5" />
                <span className="text-sm font-semibold leading-snug">
                  {o}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-white border border-border rounded-3xl p-8 md:p-11">
            <Image src={logo} alt="EduDen" className="h-6 w-auto mb-7" />
            <div className="text-xs font-bold tracking-[0.14em] uppercase text-muted">
              Certificate of Completion
            </div>
            <div className="text-[clamp(20px,2.2vw,26px)] font-extrabold tracking-[-0.02em] mt-2.5">
              Ethical Hacking for Beginners
            </div>
            <div className="text-sm text-muted mt-1.5">
              Awarded to <b className="text-fg">Your Name Here</b>
            </div>
            <div className="flex justify-between items-end mt-9 border-t border-border pt-4.5">
              <div>
                <div className="text-[11px] font-bold tracking-[0.1em] text-muted">
                  CERTIFICATE ID
                </div>
                <div className="text-sm font-bold tracking-[0.05em] mt-0.75">
                  ED-EH45-XXXX
                </div>
              </div>
              <span className="bg-accent text-[11.5px] font-bold px-3.25 py-1.5 rounded-full">
                Verifiable
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22 grid gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center">
          <div>
            <div className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-accent mb-4.5">
              Your mentor
            </div>
            <div className="text-[clamp(24px,2.8vw,36px)] font-black tracking-[-0.03em] uppercase">
              Arindam Roy
            </div>
            <div className="text-sm font-semibold text-muted-dark mt-1.5">
              Cyber Security Lead · OSCP · 9+ years
            </div>
            <p className="mt-4.5 text-[14.5px] leading-relaxed text-muted-dark max-w-md">
              Professional pentester. Has reviewed 1,000+ student
              assignments and mentored students into SOC, pentesting and
              bug bounty roles.
            </p>
            <Link
              href="/faculty"
              className="inline-block mt-5.5 font-bold text-sm text-bg border-b-2 border-accent pb-0.75 hover:text-accent"
            >
              Know your faculty →
            </Link>
          </div>
          <div>
            <p className="m-0 text-[clamp(18px,2vw,24px)] font-semibold leading-relaxed tracking-[-0.01em]">
              &ldquo;I joined knowing nothing about cybersecurity. 45 days
              later I had 3 projects, a certificate, and the confidence to
              clear my SOC Analyst interview.&rdquo;
            </p>
            <div className="mt-5.5 text-sm font-bold">Ritwika Ghosh</div>
            <div className="text-[13px] text-muted-dark mt-0.75">
              SOC Analyst · 2025 batch
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-4xl mx-auto px-7 py-14 md:py-22">
          <h2 className="mt-0 mb-9 text-[clamp(28px,3.6vw,48px)] font-black tracking-[-0.035em] uppercase leading-none">
            Before you ask.
          </h2>
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
