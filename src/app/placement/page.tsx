"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { unsplash } from "@/lib/unsplash";

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

const JOBS = [
  {
    id: "soc-shieldworks",
    title: "SOC Analyst (L1)",
    company: "ShieldWorks MSSP",
    location: "Kolkata (on-site)",
    type: "Full-time",
    salary: "₹3.5–4.5 LPA",
    track: "Cyber Security",
    deadline: "Jul 25, 2026",
    deadlineISO: "2026-07-25",
    isNew: true,
    about:
      "ShieldWorks is a managed security services provider running 24/7 SOC operations for banking and SaaS clients across India.",
    description:
      "Monitor SIEM alerts, triage incidents, escalate confirmed threats, and document findings. You'll rotate across log analysis, phishing triage and threat-intel enrichment in your first six months.",
    requirements: [
      "Working knowledge of networking (TCP/IP, ports, protocols)",
      "Familiarity with SIEM concepts and log analysis",
      "Clear written incident documentation",
      "Willingness to work rotational shifts",
    ],
    eligibility: [
      "eduden Ethical Hacking or Advanced Pentesting completion",
      "Certificate verified (min 50% final score)",
      "2025–2026 batches preferred",
    ],
    apply:
      "Apply through the placement team with your verified certificate ID and portfolio. Shortlisted candidates get a mock interview with the placement team before the company round.",
  },
  {
    id: "ba-finedge",
    title: "Business Analyst Trainee",
    company: "FinEdge Analytics",
    location: "Kolkata / Remote",
    type: "Full-time",
    salary: "₹3–4 LPA",
    track: "Management & Analytics",
    deadline: "Jul 30, 2026",
    deadlineISO: "2026-07-30",
    isNew: true,
    about:
      "FinEdge builds reporting and analytics products for mid-size NBFCs and fintech startups.",
    description:
      "Prepare MIS reports, maintain Power BI dashboards, and support monthly business reviews. You'll work directly with the analytics lead on client reporting.",
    requirements: [
      "Strong Excel (pivot tables, lookups, conditional formatting)",
      "Basic SQL (SELECT, GROUP BY, joins)",
      "Power BI dashboard experience — portfolio required",
      "Clear business communication",
    ],
    eligibility: [
      "eduden Business Analytics & MIS Reporting completion",
      "MBA/BBA/B.Com or equivalent background",
      "Capstone dashboard project required in portfolio",
    ],
    apply:
      "Submit your dashboard portfolio and certificate ID via the placement team. The company round includes a 45-minute Excel + SQL practical.",
  },
  {
    id: "mis-orbit",
    title: "MIS Executive",
    company: "Orbit Retail Group",
    location: "Kolkata (on-site)",
    type: "Full-time",
    salary: "₹2.8–3.5 LPA",
    track: "Management & Analytics",
    deadline: "Aug 5, 2026",
    deadlineISO: "2026-08-05",
    isNew: true,
    about:
      "Orbit runs 40+ retail outlets across East India with a central operations and reporting team in Kolkata.",
    description:
      "Own daily sales and inventory reporting across outlets. Build and maintain Excel/Power BI reports for store managers and leadership.",
    requirements: [
      "Advanced Excel with large datasets",
      "Report automation mindset",
      "Attention to detail with reconciliations",
      "Power BI a strong plus",
    ],
    eligibility: [
      "eduden Business Analytics & MIS Reporting completion",
      "Any graduate background — no coding required",
    ],
    apply:
      "Apply via the placement team. Walk-in assessment at the Kolkata office: a 30-minute Excel reporting task.",
  },
  {
    id: "pentest-redcell",
    title: "Junior Penetration Tester",
    company: "RedCell Security",
    location: "Remote (India)",
    type: "Full-time",
    salary: "₹4.5–6 LPA",
    track: "Cyber Security",
    deadline: "Aug 10, 2026",
    deadlineISO: "2026-08-10",
    isNew: false,
    about:
      "RedCell is a boutique offensive-security firm doing web, network and mobile assessments for fintech and healthcare clients.",
    description:
      "Assist senior testers on scoped engagements: recon, vulnerability validation, exploitation under supervision, and drafting findings for client reports.",
    requirements: [
      "Solid OWASP Top 10 hands-on knowledge",
      "Burp Suite, Nmap, Metasploit proficiency",
      "One complete pentest report writing sample",
      "CTF or bug bounty activity a plus",
    ],
    eligibility: [
      "eduden Advanced Network Pentesting or Ethical Hacking + Bug Bounty completion",
      "Portfolio with at least 2 lab engagement reports",
    ],
    apply:
      "Send your report samples and certificate ID to the placement team. Company round: a 4-hour take-home lab followed by a findings walkthrough.",
  },
  {
    id: "pa-loopwork",
    title: "Product Analyst Trainee",
    company: "Loopwork (SaaS)",
    location: "Remote (India)",
    type: "Internship → Full-time",
    salary: "₹15k/mo stipend",
    track: "Management & Analytics",
    deadline: "Aug 12, 2026",
    deadlineISO: "2026-08-12",
    isNew: true,
    about: "Loopwork builds workflow software for service teams — a 30-person product-led startup.",
    description:
      "Support the product team with user research summaries, feature usage reports, competitor teardowns and PRD drafting. Six-month internship with conversion path.",
    requirements: [
      "User research and persona documentation skills",
      "One complete product case study (PRD + wireframes)",
      "Comfort with Notion, Figma basics and spreadsheets",
      "AI-assisted documentation workflow a plus",
    ],
    eligibility: [
      "eduden Product Management & Digital Business completion",
      "Capstone product plan required in portfolio",
    ],
    apply:
      "Share your capstone product plan via the placement team. Shortlist includes a product-thinking discussion with Loopwork's PM.",
  },
  {
    id: "da-metric",
    title: "Data Analyst Intern",
    company: "Metric Labs",
    location: "Kolkata (hybrid)",
    type: "Internship",
    salary: "₹12k/mo stipend",
    track: "Data & AI",
    deadline: "Aug 18, 2026",
    deadlineISO: "2026-08-18",
    isNew: false,
    about:
      "Metric Labs is a data consultancy serving e-commerce and D2C brands with reporting and experimentation.",
    description:
      "Clean client datasets, maintain weekly dashboards, and assist analysts with ad-hoc SQL pulls and chart preparation for client reviews.",
    requirements: [
      "Python or SQL for data handling",
      "Visualization fundamentals (Power BI or similar)",
      "Careful, documented work habits",
    ],
    eligibility: [
      "eduden Data Science with Python or Business Analytics completion",
      "Any 2025–2026 batch",
    ],
    apply:
      "Apply with your certificate ID and one dashboard or notebook sample. Interviews run weekly through the placement team.",
  },
  {
    id: "grc-assurexa",
    title: "GRC Analyst Trainee",
    company: "Assurexa Consulting",
    location: "Kolkata / Remote",
    type: "Full-time",
    salary: "₹3–4 LPA",
    track: "Cyber Security",
    deadline: "Aug 22, 2026",
    deadlineISO: "2026-08-22",
    isNew: true,
    about:
      "Assurexa helps mid-market companies with ISO 27001 readiness, vendor risk and privacy compliance.",
    description:
      "Support consultants on risk registers, policy drafting, evidence collection and audit preparation across 3–4 client accounts.",
    requirements: [
      "Risk register and policy documentation skills",
      "ISO 27001 awareness",
      "Strong written English",
      "Excel/Sheets fluency",
    ],
    eligibility: [
      "eduden Cyber GRC, Risk & Data Privacy completion",
      "Commerce, law, management or audit background welcome — no coding required",
    ],
    apply:
      "Submit your GRC documentation pack (capstone) via the placement team. Company round: a policy-writing exercise and case discussion.",
  },
];

const VIEWS = ["All", "Saved", "Applied"] as const;

function readJSON(key: string): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export default function Placement() {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [track, setTrack] = useState("All");
  const [view, setView] = useState("All");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState<string[]>([]);
  const [applied, setApplied] = useState<string[]>([]);

  // One-time hydration from browser storage on mount — there is no
  // synchronous way to read sessionStorage/localStorage during SSR.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      if (sessionStorage.getItem("eduden_placement_auth") === "1") {
        setAuth(true);
        setEmail(sessionStorage.getItem("eduden_placement_email") || "student@eduden.io");
      }
    } catch {}
    setSaved(readJSON("eduden_placement_saved"));
    setApplied(readJSON("eduden_placement_applied"));
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const withMeta = useMemo(() => {
    const now = new Date();
    return JOBS.map((j) => {
      const daysLeft = Math.max(
        0,
        Math.ceil((new Date(j.deadlineISO).getTime() - now.getTime()) / 86400000)
      );
      return {
        ...j,
        daysLeft,
        closingSoon: daysLeft <= 14 && !applied.includes(j.id),
        appliedFlag: applied.includes(j.id),
        savedFlag: saved.includes(j.id),
        daysLeftLabel: "Closes in " + daysLeft + " days",
      };
    });
  }, [applied, saved]);

  const tracks = ["All", ...Array.from(new Set(JOBS.map((j) => j.track)))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return withMeta.filter(
      (j) =>
        (track === "All" || j.track === track) &&
        (view === "All" ||
          (view === "Saved" && j.savedFlag) ||
          (view === "Applied" && j.appliedFlag)) &&
        (!q ||
          (j.title + " " + j.company + " " + j.track + " " + j.location + " " + j.requirements.join(" "))
            .toLowerCase()
            .includes(q))
    );
  }, [withMeta, track, view, query]);

  function login() {
    const ok =
      email.trim().toLowerCase() === "student@eduden.io" && password === "eduden2026";
    if (ok) {
      try {
        sessionStorage.setItem("eduden_placement_auth", "1");
        sessionStorage.setItem("eduden_placement_email", email.trim());
      } catch {}
      setAuth(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  }

  function logout() {
    try {
      sessionStorage.removeItem("eduden_placement_auth");
      sessionStorage.removeItem("eduden_placement_email");
    } catch {}
    setAuth(false);
    setSelected(-1);
    setPassword("");
  }

  function toggleSave(id: string) {
    const next = saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id];
    try {
      localStorage.setItem("eduden_placement_saved", JSON.stringify(next));
    } catch {}
    setSaved(next);
  }

  function apply(id: string) {
    const next = [...applied, id];
    try {
      localStorage.setItem("eduden_placement_applied", JSON.stringify(next));
    } catch {}
    setApplied(next);
  }

  const job = selected >= 0 ? withMeta[selected] : null;
  const showDetail = auth && selected >= 0 && job;

  const emptyByView: Record<string, [string, string]> = {
    Saved: ["No saved roles yet.", "Tap ☆ Save on any role to keep it here for later."],
    Applied: ["No applications yet.", 'Open a role and hit "Apply via Placement Team" to start.'],
  };
  const empty = emptyByView[view] || [
    "No roles match that search.",
    "Try a different keyword or clear the filters.",
  ];

  if (!auth) {
    return (
      <>
        <section className="bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-9 md:pt-26 pb-8 md:pb-18 grid gap-8 md:gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start">
            <div>
              <div className="flex items-center gap-2 mb-7">
                <span className="w-2 h-2 bg-accent rounded-sm" />
                <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
                  Placement portal
                </span>
              </div>
              <h1 className="m-0 text-[clamp(38px,5.2vw,72px)] font-black tracking-[-0.04em] uppercase leading-[0.95]">
                The course ends. The support doesn&apos;t.
              </h1>
              <p className="mt-7 text-[15.5px] leading-relaxed text-muted max-w-lg">
                Log in to see live job postings from our hiring partners — open
                roles, eligibility, company details and how to apply. Save
                roles, apply through the placement team, and track it all in
                one place.
              </p>
              <div className="mt-7 border-t border-border-strong max-w-lg">
                <div className="border-b border-border-strong py-3.5 px-1 flex justify-between gap-4 text-sm font-semibold">
                  <span>Live postings matched to your course track</span>
                  <span className="text-[#B98E00] font-bold whitespace-nowrap">
                    {JOBS.length} open now
                  </span>
                </div>
                <div className="border-b border-border-strong py-3.5 px-1 text-sm font-semibold">
                  Eligibility and requirements stated upfront
                </div>
                <div className="border-b border-border-strong py-3.5 px-1 text-sm font-semibold">
                  One-click apply through the placement team
                </div>
                <div className="py-3.5 px-1 text-sm font-semibold">
                  Save roles and track your applications
                </div>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] border-t border-border-strong mt-9 max-w-xl">
                <div className="pt-5 px-4.5 border-r border-border-strong">
                  <div className="text-[clamp(22px,2.2vw,30px)] font-extrabold tracking-[-0.02em]">
                    350+
                  </div>
                  <div className="text-[12.5px] text-muted mt-1">Students placed</div>
                </div>
                <div className="pt-5 px-4.5 border-r border-border-strong">
                  <div className="text-[clamp(22px,2.2vw,30px)] font-extrabold tracking-[-0.02em]">
                    40+
                  </div>
                  <div className="text-[12.5px] text-muted mt-1">Hiring partners</div>
                </div>
                <div className="pt-5 px-4.5 border-r border-border-strong">
                  <div className="text-[clamp(22px,2.2vw,30px)] font-extrabold tracking-[-0.02em]">
                    4 wks
                  </div>
                  <div className="text-[12.5px] text-muted mt-1">To first interview</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-3xl p-6 md:p-10 max-w-md w-full justify-self-end lg:sticky lg:top-24">
              <div className="text-xl font-extrabold tracking-[-0.01em]">Student login</div>
              <p className="mt-2 mb-6 text-[13.5px] leading-relaxed text-muted">
                Use the credentials sent to you at enrollment.
              </p>
              <div className="flex flex-col gap-4.5">
                <div className="flex flex-col gap-1.75">
                  <label className="text-[13px] font-bold">Email</label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setLoginError(false);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && login()}
                    placeholder="you@example.com"
                    className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg ${
                      loginError ? "border-[#D64040]" : "border-border"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1.75">
                  <label className="text-[13px] font-bold">Password</label>
                  <div
                    className={`flex items-center gap-2 border rounded-xl bg-bg pr-1.5 ${
                      loginError ? "border-[#D64040]" : "border-border"
                    }`}
                  >
                    <input
                      type={showPass ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setLoginError(false);
                      }}
                      onKeyDown={(e) => e.key === "Enter" && login()}
                      placeholder="••••••••"
                      className="flex-1 border-none outline-none bg-transparent px-4 py-3.25 font-[inherit] text-[14.5px] min-w-0"
                    />
                    <button
                      onClick={() => setShowPass((s) => !s)}
                      className="flex-none border-none bg-transparent font-[inherit] text-xs font-bold text-muted cursor-pointer px-2.5 py-2 hover:text-fg"
                    >
                      {showPass ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                {loginError && (
                  <span className="text-[12.5px] font-semibold text-[#D64040]">
                    Incorrect email or password. Try the demo credentials below.
                  </span>
                )}
                <button
                  onClick={login}
                  className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-[15px] py-4 rounded-full cursor-pointer hover:bg-accent"
                >
                  Log In
                </button>
                <div className="text-[12.5px] leading-relaxed text-muted text-center">
                  Demo:{" "}
                  <button
                    onClick={() => {
                      setEmail("student@eduden.io");
                      setPassword("eduden2026");
                      setLoginError(false);
                    }}
                    className="border-none bg-transparent font-[inherit] font-bold text-[12.5px] cursor-pointer text-fg border-b-2 border-accent pb-0.25"
                  >
                    student@eduden.io / eduden2026
                  </button>
                </div>
                <div className="border-t border-border pt-4 text-[13px] leading-relaxed text-muted text-center">
                  Not enrolled yet?{" "}
                  <Link href="/enroll" className="font-bold border-b-2 border-accent">
                    Start a course →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-fg text-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-7 py-9 md:py-22">
            <h2 className="mt-0 mb-10 text-[clamp(28px,3.8vw,52px)] font-black tracking-[-0.035em] uppercase leading-none">
              A process, not a promise.
            </h2>
            <div>
              {PROCESS.map((p) => (
                <div
                  key={p.n}
                  className="grid grid-cols-[minmax(32px,48px)_1fr] sm:grid-cols-[minmax(48px,80px)_minmax(140px,1fr)_2fr] gap-x-5 gap-y-2 sm:gap-y-0 sm:items-baseline border-t border-white/12 py-6"
                >
                  <div className="text-[13px] font-bold text-accent">{p.n}</div>
                  <div className="text-[clamp(16px,1.7vw,20px)] font-extrabold">{p.title}</div>
                  <p className="m-0 col-span-2 sm:col-span-1 text-[14.5px] leading-relaxed text-muted-dark max-w-xl">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative h-[clamp(200px,28vw,360px)] rounded-3xl overflow-hidden mt-9 md:mt-13">
              <Image
                src={unsplash("1522071820081-009f0129c71c")}
                alt="Placement drive / mock interview photo"
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-bg">
          <div className="max-w-[860px] mx-auto px-4 sm:px-7 py-11 md:py-28 text-center">
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
              &ldquo;The mock interviews were harder than my real one. When the
              actual panel asked me to walk through a pentest, I&apos;d
              already done it five times.&rdquo;
            </p>
            <div className="mt-8 text-sm font-bold">Ritwika Ghosh</div>
            <div className="text-[13px] text-muted mt-1">SOC Analyst · 2025 batch</div>
          </div>
        </section>
      </>
    );
  }

  if (showDetail && job) {
    return (
      <section className="bg-bg min-h-[70vh]">
        <div className="max-w-[980px] mx-auto px-4 sm:px-7 pt-8 md:pt-16 pb-10 md:pb-24">
          <div className="flex justify-between items-center gap-4 flex-wrap mb-9">
            <button
              onClick={() => setSelected(-1)}
              className="border-none bg-transparent font-[inherit] font-bold text-sm cursor-pointer text-fg border-b-2 border-accent pb-0.5"
            >
              ← All roles
            </button>
            <div className="flex items-center gap-2.5">
              <span className="text-[13px] font-semibold text-muted">
                {selected + 1} of {JOBS.length}
              </span>
              <button
                onClick={() => setSelected((selected - 1 + JOBS.length) % JOBS.length)}
                className="border border-border-strong bg-transparent w-9 h-9 rounded-full cursor-pointer text-sm text-fg font-[inherit] "
              >
                ←
              </button>
              <button
                onClick={() => setSelected((selected + 1) % JOBS.length)}
                className="border border-border-strong bg-transparent w-9 h-9 rounded-full cursor-pointer text-sm text-fg font-[inherit] "
              >
                →
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              {job.track} · {job.type} · {job.daysLeftLabel}
            </span>
          </div>
          <h1 className="m-0 text-[clamp(30px,4vw,54px)] font-black tracking-[-0.035em] uppercase leading-[0.98]">
            {job.title}
          </h1>
          <div className="text-[15px] font-semibold text-muted mt-3.5">
            {job.company} · {job.location} · {job.salary}
          </div>

          {!job.appliedFlag ? (
            <div className="flex gap-3 flex-wrap mt-7">
              <button
                onClick={() => apply(job.id)}
                className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-[14.5px] px-7 py-3.5 rounded-full cursor-pointer hover:bg-accent"
              >
                Apply via Placement Team
              </button>
              <button
                onClick={() => toggleSave(job.id)}
                className={`font-[inherit] font-semibold text-[14.5px] px-7 py-3.5 rounded-full cursor-pointer border  ${
                  job.savedFlag ? "bg-accent border-accent" : "bg-transparent border-border-strong"
                }`}
              >
                {job.savedFlag ? "★ Saved" : "☆ Save for later"}
              </button>
            </div>
          ) : (
            <div className="mt-7 bg-white border border-[#1DA954] rounded-2xl p-5 md:p-6 flex gap-3.5 items-start max-w-lg">
              <span className="flex-none w-7 h-7 rounded-full bg-[#1DA954] text-white flex items-center justify-center text-[13px] font-black">
                ✓
              </span>
              <div>
                <div className="text-[15px] font-extrabold">
                  Application sent to the placement team
                </div>
                <p className="mt-1.5 mb-0 text-[13.5px] leading-relaxed text-muted">
                  They&apos;ll review your profile against the eligibility
                  criteria and contact you on WhatsApp within one working day
                  with next steps.
                </p>
              </div>
            </div>
          )}

          <div className="mt-9 md:mt-13 border-t border-border-strong">
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,1fr)_2.4fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5.5">
              <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                About the company
              </div>
              <p className="m-0 text-[14.5px] leading-relaxed">{job.about}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,1fr)_2.4fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5.5">
              <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                Job description
              </div>
              <p className="m-0 text-[14.5px] leading-relaxed">{job.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,1fr)_2.4fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5.5">
              <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                Requirements
              </div>
              <div>
                {job.requirements.map((r) => (
                  <div key={r} className="flex gap-3 items-baseline py-1">
                    <span className="flex-none w-1.75 h-1.75 bg-accent rounded-sm -translate-y-0.5" />
                    <span className="text-[14.5px] leading-relaxed">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,1fr)_2.4fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5.5">
              <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                Eligibility
              </div>
              <div>
                {job.eligibility.map((e) => (
                  <div key={e} className="flex gap-3 items-baseline py-1">
                    <span className="flex-none w-1.75 h-1.75 bg-accent rounded-sm -translate-y-0.5" />
                    <span className="text-[14.5px] leading-relaxed">{e}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,1fr)_2.4fr] gap-1.5 sm:gap-5 sm:items-baseline py-5.5">
              <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                How to apply
              </div>
              <p className="m-0 text-[14.5px] leading-relaxed">{job.apply}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-bg min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-8 md:pt-16 pb-10 md:pb-24">
        <div className="flex flex-wrap justify-between items-end gap-5">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 bg-[#1DA954] rounded-sm" />
              <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
                Logged in · {email || "student@eduden.io"}
              </span>
            </div>
            <h1 className="m-0 text-[clamp(32px,4.4vw,60px)] font-black tracking-[-0.04em] uppercase leading-[0.95]">
              Open roles.
            </h1>
          </div>
          <button
            onClick={logout}
            className="border border-border-strong bg-transparent font-[inherit] font-semibold text-[13.5px] px-5.5 py-2.75 rounded-full cursor-pointer "
          >
            Log out
          </button>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-t border-border-strong mt-8 max-w-xl">
          <div className="pt-4.5 px-4.5 border-r border-border-strong">
            <div className="text-[clamp(20px,2vw,26px)] font-extrabold">{JOBS.length}</div>
            <div className="text-[12.5px] text-muted mt-0.75">Open roles</div>
          </div>
          <div className="pt-4.5 px-4.5 border-r border-border-strong">
            <div className="text-[clamp(20px,2vw,26px)] font-extrabold">{applied.length}</div>
            <div className="text-[12.5px] text-muted mt-0.75">Applied</div>
          </div>
          <div className="pt-4.5 px-4.5 border-r border-border-strong">
            <div className="text-[clamp(20px,2vw,26px)] font-extrabold">{saved.length}</div>
            <div className="text-[12.5px] text-muted mt-0.75">Saved</div>
          </div>
          <div className="pt-4.5 px-4.5 border-r border-border-strong">
            <div className="text-[clamp(20px,2vw,26px)] font-extrabold text-[#B98E00]">
              {withMeta.filter((j) => j.daysLeft <= 14).length}
            </div>
            <div className="text-[12.5px] text-muted mt-0.75">Closing this week</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center justify-between mt-9">
          <div className="flex items-center gap-2.5 bg-white border border-border rounded-full py-1.25 pl-4.5 pr-1.25 max-w-[400px] flex-1 min-w-[240px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search role, company, skill…"
              className="flex-1 border-none outline-none font-[inherit] text-sm text-fg bg-transparent min-w-0"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="flex-none border-none bg-bg text-fg w-8 h-8 rounded-full cursor-pointer text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {VIEWS.map((name) => (
              <button
                key={name}
                onClick={() => setView(name)}
                className={`font-[inherit] text-[13px] font-semibold px-4 py-2.25 rounded-full cursor-pointer border  ${
                  view === name ? "bg-fg text-bg border-fg" : "bg-white text-muted border-border"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3.5">
          {tracks.map((name) => {
            const count = name === "All" ? JOBS.length : JOBS.filter((j) => j.track === name).length;
            return (
              <button
                key={name}
                onClick={() => setTrack(name)}
                className={`font-[inherit] text-[13px] font-semibold px-4 py-2.25 rounded-full cursor-pointer border  ${
                  track === name ? "bg-fg text-bg border-fg" : "bg-white text-muted border-border"
                }`}
              >
                {name} ({count})
              </button>
            );
          })}
        </div>

        <div className="text-[13px] font-semibold text-muted mt-5.5 mb-2">
          {filtered.length} role{filtered.length === 1 ? "" : "s"}
          {view !== "All" ? " · " + view.toLowerCase() : ""}
          {track !== "All" ? " · " + track : ""}
        </div>

        {filtered.length > 0 ? (
          <div className="border-t border-border-strong">
            {filtered.map((j) => (
              <div
                key={j.id}
                onClick={() => setSelected(JOBS.findIndex((x) => x.id === j.id))}
                className="flex flex-col sm:grid sm:grid-cols-[minmax(200px,1.7fr)_minmax(130px,1fr)_minmax(150px,1fr)_auto] gap-3 sm:gap-5 sm:items-center border-b border-border-strong py-5.5 px-1 cursor-pointer hover:bg-white"
              >
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[clamp(16px,1.8vw,21px)] font-extrabold tracking-[-0.015em]">
                      {j.title}
                    </span>
                    {j.appliedFlag && (
                      <span className="text-[11px] font-bold tracking-[0.06em] uppercase bg-[#1DA954] text-white px-2.5 py-1 rounded-full">
                        ✓ Applied
                      </span>
                    )}
                    {j.closingSoon && (
                      <span className="text-[11px] font-bold tracking-[0.06em] uppercase bg-accent px-2.5 py-1 rounded-full">
                        Closes in {j.daysLeft}d
                      </span>
                    )}
                    {j.isNew && (
                      <span className="text-[11px] font-bold tracking-[0.06em] uppercase border border-border-strong text-muted px-2.5 py-0.75 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <div className="text-[13px] font-semibold text-muted mt-1.25">
                    {j.company} · {j.location}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 sm:contents">
                  <div className="text-[13px] font-semibold text-muted">
                    {j.type}
                    <br />
                    {j.salary}
                  </div>
                  <div className="text-[13px] font-semibold text-muted">
                    {j.track}
                    <br />
                    Apply by {j.deadline}
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:justify-self-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSave(j.id);
                    }}
                    title={j.savedFlag ? "Remove from saved" : "Save this role"}
                    className={`flex-none font-[inherit] text-xs font-bold px-3.5 py-2 rounded-full cursor-pointer border  ${
                      j.savedFlag ? "bg-accent border-accent" : "bg-white border-border"
                    }`}
                  >
                    {j.savedFlag ? "★ Saved" : "☆ Save"}
                  </button>
                  <span className="flex-none w-9.5 h-9.5 rounded-full border border-border-strong flex items-center justify-center text-[15px]">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-6 border border-dashed border-border-strong rounded-[20px]">
            <div className="text-[19px] font-extrabold">{empty[0]}</div>
            <p className="mx-auto mt-2 mb-5.5 text-sm text-muted max-w-sm">{empty[1]}</p>
            <button
              onClick={() => {
                setQuery("");
                setTrack("All");
                setView("All");
              }}
              className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-sm px-6.5 py-3.25 rounded-full cursor-pointer hover:bg-accent"
            >
              Show all roles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
