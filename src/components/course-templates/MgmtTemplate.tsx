import Image from "next/image";
import Link from "next/link";
import ModulesAccordion from "@/components/ModulesAccordion";
import { unsplash } from "@/lib/unsplash";

const QUICK_STATS = [
  { value: "90 days", label: "Duration" },
  { value: "50+", label: "Lectures" },
  { value: "6", label: "Projects" },
  { value: "Classroom", label: "Mode" },
  { value: "No coding", label: "Prerequisite" },
];

const ELIGIBILITY = [
  "Students from MBA, BBA, B.Com, Economics, Commerce, Arts, Social Science and related backgrounds",
  "No coding background required",
  "Basic computer knowledge and interest in working with data will be helpful",
];

const PROJECTS = [
  { n: "01", title: "Sales performance dashboard" },
  { n: "02", title: "HR attendance and employee report" },
  { n: "03", title: "Customer data analysis using SQL" },
  { n: "04", title: "Finance summary dashboard" },
  { n: "05", title: "Marketing campaign reporting sheet" },
  { n: "06", title: "Final MIS dashboard with written business insights" },
];

const MODULES = [
  {
    title: "Introduction to Business Analytics and MIS",
    meta: "",
    topics: ["How companies use data and reports in daily decision making."],
  },
  {
    title: "Excel for Data Cleaning and Reporting",
    meta: "",
    topics: [
      "Formulas, sorting, filtering, pivot tables, charts, conditional formatting, and report layouts.",
    ],
  },
  {
    title: "SQL for Business Data",
    meta: "",
    topics: [
      "SELECT, WHERE, GROUP BY, ORDER BY, joins, and simple business query writing.",
    ],
  },
  {
    title: "Power BI Dashboarding",
    meta: "",
    topics: ["Data import, charts, slicers, cards, filters, and dashboard design."],
  },
  {
    title: "Business Metrics and KPI Reporting",
    meta: "",
    topics: ["Tracking sales, finance, HR, marketing, and operations metrics."],
  },
  {
    title: "Data Storytelling and Presentation",
    meta: "",
    topics: ["Explaining dashboards and writing short management summaries."],
  },
  {
    title: "Final Capstone Project",
    meta: "",
    topics: ["Prepare a full MIS dashboard and present business insights."],
  },
];

const TOOLS = [
  "Excel",
  "Google Sheets",
  "SQL",
  "Power BI",
  "Canva / PowerPoint",
  "AI tools for report explanation",
];

const ROLES = [
  "MIS Executive",
  "Business Analyst Trainee",
  "Data Analyst Intern",
  "Reporting Analyst",
  "Operations Analyst",
  "Marketing Analyst",
  "HR Analytics Assistant",
  "Power BI Dashboard Assistant",
  "Research Analyst",
];

const BENEFITS = [
  {
    title: "Course certificate",
    body: "Complete the assignments and final project to receive an EduDen certificate of completion.",
  },
  {
    title: "Practical projects",
    body: "Work on reports and dashboards similar to what companies use in real roles.",
  },
  {
    title: "Portfolio",
    body: "Excel files, SQL queries, Power BI dashboards and project summaries — proof for recruiters.",
  },
  {
    title: "Interview-ready",
    body: "Explain data projects confidently during internship and placement interviews.",
  },
];

export default function MgmtTemplate() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 pt-8 pb-12 md:pb-18">
          <nav className="flex flex-wrap items-center gap-2 text-[0.8125em] font-semibold text-muted mb-10">
            <Link href="/" className="text-muted hover:text-fg">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="text-muted hover:text-fg">
              Courses
            </Link>
            <span>/</span>
            <span className="text-fg">Business Analytics and MIS Reporting</span>
          </nav>
          <div className="flex items-center gap-2 mb-5.5">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[0.78125em] font-bold tracking-[0.14em] uppercase text-muted">
              AI &amp; Tech for Non-Tech Careers · Data Science · New
            </span>
          </div>
          <h1 className="m-0 text-[clamp(2.125em,4.8vw,4.25em)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-5xl">
            Business Analytics and MIS Reporting with Excel, SQL and Power BI.
          </h1>
          <div className="flex flex-wrap justify-between items-end gap-7 mt-9">
            <p className="m-0 text-[0.96875em] leading-relaxed text-muted max-w-lg text-pretty">
              Every company runs on reports. Built for MBA, BBA, Commerce, Economics
              and Arts students — learn Excel, SQL and Power BI in a practical
              classroom environment and build dashboards you can show in
              interviews. No coding background required.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/enroll"
                className="bg-[#FFD300] text-fg font-bold text-[0.90625em] px-7.5 py-3.75 rounded-full hover:bg-accent"
              >
                Admission Inquiry
              </Link>
              <Link
                href="/brochure"
                className="border border-border-strong text-fg font-semibold text-[0.90625em] px-7.5 py-3.75 rounded-full "
              >
                Brochure ↓
              </Link>
            </div>
          </div>
          <div className="relative h-[clamp(13.75em,32vw,26.25em)] rounded-3xl overflow-hidden border border-border mt-9 md:mt-13">
            <Image
              src={unsplash("1543286386-713bdd548da4")}
              alt="Course photo — dashboard / classroom session"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] border-t border-border-strong mt-10 md:mt-14">
            {QUICK_STATS.map((s) => (
              <div key={s.label} className="pt-5.5 px-5 border-r border-border-strong">
                <div className="text-[clamp(1.25em,2vw,1.625em)] font-extrabold tracking-[-0.02em]">
                  {s.value}
                </div>
                <div className="text-[0.78125em] font-medium text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22 grid gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]">
          <div>
            <h2 className="mt-0 mb-4.5 text-[clamp(1.625em,3.2vw,2.625em)] font-black tracking-[-0.03em] uppercase leading-none">
              Confident with data, not a heavy programmer.
            </h2>
            <p className="m-0 mb-3.5 text-[0.9375em] leading-relaxed text-muted-dark">
              Learn how to clean data, create reports, write basic SQL queries,
              build dashboards, and present insights clearly — practical
              analytics skills useful across industries.
            </p>
            <p className="m-0 text-[0.9375em] leading-relaxed text-muted-dark">
              By the end, you&apos;ll have dashboard projects, SQL practice
              files and reporting samples that add real value to your CV —
              proof you can handle business data, not just talk about it.
            </p>
          </div>
          <div>
            <div className="text-[0.78125em] font-bold tracking-[0.14em] uppercase text-accent mb-5">
              Who can join
            </div>
            {ELIGIBILITY.map((e) => (
              <div
                key={e}
                className="border-t border-white/12 py-4 text-[0.90625em] leading-relaxed text-white/85"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22">
          <h2 className="mt-0 mb-9 text-[clamp(1.75em,3.6vw,3em)] font-black tracking-[-0.035em] uppercase leading-none">
            6 projects you&apos;ll build.
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-12">
            {PROJECTS.map((p) => (
              <div key={p.n} className="flex gap-4 items-baseline border-t border-border-strong py-4.5">
                <span className="flex-none text-[0.8125em] font-bold text-muted">{p.n}</span>
                <span className="text-[0.90625em] font-semibold leading-snug">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-7 py-14 md:py-22">
          <h2 className="mt-0 mb-2 text-[clamp(1.75em,3.6vw,3em)] font-black tracking-[-0.035em] uppercase leading-none">
            Curriculum.
          </h2>
          <p className="m-0 mb-9 text-[0.90625em] text-muted">
            7 modules · 50+ lectures · 6 projects · Mentor-verified assignments
            &amp; quizzes
          </p>
          <ModulesAccordion modules={MODULES} />
          <div className="mt-9">
            <div className="text-[0.78125em] font-bold tracking-[0.14em] uppercase text-muted mb-3.5">
              Tools covered
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="bg-white border border-border rounded-full px-3.75 py-2 text-[0.8125em] font-semibold whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-7 py-14 md:py-22 grid gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start">
          <div>
            <h2 className="mt-0 mb-4 text-[clamp(1.75em,3.6vw,3em)] font-black tracking-[-0.035em] uppercase leading-none">
              Career path after this course.
            </h2>
            <p className="m-0 mb-6 text-[0.9375em] leading-relaxed text-muted max-w-lg">
              Apply for roles where reporting, data handling and dashboard
              skills are required. Complete the assignments and final project
              to earn a verifiable EduDen certificate — checkable on our{" "}
              <Link href="/verify" className="font-bold border-b-2 border-accent">
                Verify page
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2.25">
              {ROLES.map((r) => (
                <span
                  key={r}
                  className="bg-white border border-border rounded-full px-4.5 py-2.5 text-[0.84375em] font-semibold whitespace-nowrap"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[0.78125em] font-bold tracking-[0.14em] uppercase text-muted mb-2">
              What you&apos;ll gain
            </div>
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="grid grid-cols-[minmax(140px,1fr)_2fr] gap-5 items-baseline border-t border-border-strong py-4.5"
              >
                <div className="text-[0.9375em] font-extrabold">{b.title}</div>
                <p className="m-0 text-[0.84375em] leading-snug text-muted">{b.body}</p>
              </div>
            ))}
            <div className="mt-6 text-[0.84375em] leading-relaxed text-muted">
              <b className="text-fg">Next learning step:</b> AI for Business
              Strategy, Advanced Business Analytics, Data Science with Python,
              or Product Management.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
