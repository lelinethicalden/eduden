import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { unsplash } from "@/lib/unsplash";

export const metadata: Metadata = {
  title: "About — eduden",
  description:
    "A large range of course learning paths — hands-on, mentor-led courses with verified assignments and industry-focused curricula.",
};

const STATS = [
  { value: "750+", label: "Students trained" },
  { value: "30+", label: "Hands-on courses" },
  { value: "15+", label: "Industry mentors" },
  { value: "94%", label: "Completion rate" },
];

const PILLARS = [
  {
    n: "01",
    title: "Course Certificate",
    body: "Every assignment and the final exams with a minimum 50% mark will earn a course certificate.",
  },
  {
    n: "02",
    title: "Best Instructors",
    body: "Learn from industry-leading instructors with years of experience in their respective fields.",
  },
  {
    n: "03",
    title: "Verified Assignments",
    body: "All assignments are carefully evaluated to ensure quality and accuracy before certification.",
  },
  {
    n: "04",
    title: "Career Growth",
    body: "Our courses are tailored to boost your professional growth and industry readiness.",
  },
];

const TECHS = [
  { name: "Adobe", icon: "logos:adobe" },
  { name: "AWS", icon: "logos:aws" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Linux", icon: "logos:linux-tux" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Nmap", icon: "mdi:magnify-scan" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Python", icon: "logos:python" },
];

export default function About() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-10 md:pt-30 pb-8 md:pb-18">
          <div className="flex items-center gap-2 mb-7">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              About eduden
            </span>
          </div>
          <h1 className="m-0 text-[clamp(40px,6.4vw,92px)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-[1100px]">
            A large range of course learning paths home
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-4 mt-10 md:mt-14">
            <div className="relative h-[clamp(220px,30vw,400px)] rounded-3xl overflow-hidden border border-border">
              <Image
                src={unsplash("1551288049-bebda4e38f71")}
                alt="Classroom / mentoring session"
                fill
                sizes="(min-width: 1280px) 800px, 66vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-[clamp(220px,30vw,400px)] rounded-3xl overflow-hidden border border-border">
              <Image
                src={unsplash("1497366216548-37526070297c")}
                alt="eduden Kolkata center"
                fill
                sizes="(min-width: 1280px) 400px, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 py-10 md:py-26 grid gap-8 md:gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center">
          <div>
            <h2 className="m-0 text-[clamp(28px,3.8vw,52px)] font-black tracking-[-0.035em] uppercase leading-none">
              Skills That Go Beyond The Classroom
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-dark max-w-lg">
              Well, because we&apos;re not your grandma&apos;s boring old
              school! At eduden, we&apos;re the rebels of education, the
              mavericks of learning, and the champions of fun-filled
              knowledge. We&apos;ll teach you how to slay dragons and code
              websites, all while cracking jokes and sipping on virtual
              coffee. So, why settle for snooze-worthy lectures when you can
              join the eduden revolution? Let&apos;s make learning epic
              together!
            </p>
          </div>
          <div className="grid grid-cols-2">
            {STATS.map((s) => (
              <div key={s.label} className="border-l border-white/12 px-6 py-5">
                <div className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-0.02em] text-accent">
                  {s.value}
                </div>
                <div className="text-[13px] text-muted-dark mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 py-9 md:py-22">
          <h2 className="mt-0 mb-9 text-[clamp(30px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none max-w-3xl">
            Core Pillars
          </h2>
          <div>
            {PILLARS.map((d) => (
              <div
                key={d.n}
                className="grid grid-cols-[minmax(32px,48px)_1fr] sm:grid-cols-[minmax(48px,80px)_minmax(140px,260px)_1fr] m:gap-x-8 gap-y-2 sm:gap-y-0 sm:items-baseline border-t border-border-strong py-6"
              >
                <div className="font-bold">{d.n}</div>
                <div className="font-extrabold tracking-[-0.01em]">
                  {d.title}
                </div>
                <p className="m-0 col-span-2 sm:col-span-1 text-[14.5px] leading-relaxed text-muted max-w-xl">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 py-9 md:py-22">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Technologies utilized
            </span>
          </div>
          <h2 className="m-0 text-[clamp(30px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none max-w-3xl">
            The technology behind our success
          </h2>
          <p className="mt-5 text-[clamp(15px,1.4vw,17px)] leading-relaxed text-muted max-w-xl">
            eduden combines AI innovation and cloud technology to deliver
            interactive, real-world learning. Our digital-first classrooms
            make education smarter, faster, and more engaging for every
            learner.
          </p>
          <div className="grid gap-3.5 grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))] mt-10">
            {TECHS.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-border rounded-2xl p-3.5 flex flex-col gap-3 items-stretch"
              >
                <div className="h-18 flex items-center justify-center">
                  <Icon icon={t.icon} width={40} height={40} />
                </div>
                <div className="text-[12.5px] font-bold tracking-[0.04em] text-center text-muted">
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-7 py-11 md:py-28 text-center">
          <p className="m-0 text-[clamp(21px,2.8vw,32px)] font-semibold tracking-[-0.02em] leading-[1.4] text-balance">
            &ldquo;I was a commerce graduate with zero tech background.
            eduden got me from &lsquo;what is Linux?&rsquo; to a paid
            cybersecurity internship in under six months.&rdquo;
          </p>
          <div className="mt-8 text-sm font-bold">Sayan Banerjee</div>
          <div className="text-[13px] text-muted mt-1">
            Security Intern → SOC Analyst · Kolkata
          </div>
          <Link
            href="/courses"
            className="inline-block mt-10 bg-[#FFD300] text-fg font-bold text-[14.5px] px-8 py-3.75 rounded-full hover:bg-accent"
          >
            Find Your Course
          </Link>
        </div>
      </section>
    </>
  );
}
