"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { unsplash } from "@/lib/unsplash";

const COURSES = [
  "Business Analytics and MIS Reporting (New)",
  "AI for Business Strategy and Decision Making (New)",
  "Product Management and Digital Business with AI (New)",
  "GeoAI, GIS and Location Intelligence (New)",
  "Cyber GRC, Risk and Data Privacy (New)",
  "Economics, Policy and Development Analytics (New)",
  "Digital Business Operations and No Code Automation (New)",
  "Ethical Hacking for Beginners",
  "Start Bug Bounty Hunting",
  "Digital Forensics",
  "Android App Penetration Testing",
  "Advanced Network Pentesting",
  "AI Foundations with Python",
  "Data Science with Python",
  "Full-Stack Web Development",
  "Cloud Computing with AWS",
  "All courses (complete brochure)",
];

type Errors = Partial<Record<"name" | "phone" | "email" | "course", boolean>>;

function fieldBorder(hasError: boolean) {
  return hasError ? "border-[#D64040]" : "border-border";
}

export default function Brochure() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function submit() {
    const e: Errors = {};
    if (!name.trim()) e.name = true;
    if (phone.replace(/\D/g, "").length < 10) e.phone = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = true;
    if (!course) e.course = true;
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSent(true);
    setErrors({});
  }

  return (
    <section className="bg-bg">
      <div className="max-w-[1180px] mx-auto px-7 pt-12 md:pt-20 pb-16 md:pb-24 grid gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start">
        <div className="lg:sticky lg:top-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Download brochure
            </span>
          </div>
          <h1 className="m-0 text-[clamp(36px,4.8vw,64px)] font-black tracking-[-0.04em] uppercase leading-[0.95]">
            Everything, in one PDF.
          </h1>
          <p className="mt-7 text-[15px] leading-relaxed text-muted max-w-md">
            Full curriculum, batch schedules, fees, tools covered and
            certificate details — drop your info and the download starts
            instantly.
          </p>
          <div className="mt-7 border-t border-border-strong max-w-md">
            <div className="border-b border-border-strong py-3.5 px-1 flex justify-between gap-4 text-sm">
              <span className="font-bold">EduDen Course Brochure 2026</span>
              <span className="text-muted font-semibold">PDF · 2.4 MB</span>
            </div>
            <div className="py-3.5 px-1 text-sm text-muted font-semibold">
              Updated July 2026
            </div>
          </div>
          <div className="relative h-[clamp(180px,20vw,260px)] rounded-[20px] overflow-hidden border border-border mt-7 max-w-md">
            <Image
              src={unsplash("1543286386-713bdd548da4")}
              alt="Brochure cover preview"
              fill
              sizes="420px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white border border-border rounded-3xl p-6 md:p-10">
          {!sent ? (
            <div className="flex flex-col gap-4.5">
              <div className="flex flex-col gap-1.75">
                <label className="text-[13px] font-bold">Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((s) => ({ ...s, name: false }));
                  }}
                  placeholder="Your name"
                  className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg ${fieldBorder(!!errors.name)}`}
                />
                {errors.name && (
                  <span className="text-[12.5px] font-semibold text-[#D64040]">
                    Please enter your name.
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.75">
                <label className="text-[13px] font-bold">
                  WhatsApp number
                </label>
                <input
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setErrors((s) => ({ ...s, phone: false }));
                  }}
                  placeholder="+91 XXXXX XXXXX"
                  className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg ${fieldBorder(!!errors.phone)}`}
                />
                {errors.phone && (
                  <span className="text-[12.5px] font-semibold text-[#D64040]">
                    Please enter a valid number (10+ digits).
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.75">
                <label className="text-[13px] font-bold">Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((s) => ({ ...s, email: false }));
                  }}
                  placeholder="you@example.com"
                  className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg ${fieldBorder(!!errors.email)}`}
                />
                {errors.email && (
                  <span className="text-[12.5px] font-semibold text-[#D64040]">
                    Please enter a valid email address.
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.75">
                <label className="text-[13px] font-bold">Course</label>
                <select
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                    setErrors((s) => ({ ...s, course: false }));
                  }}
                  className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg text-fg ${fieldBorder(!!errors.course)}`}
                >
                  <option value="">Select a course</option>
                  {COURSES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                {errors.course && (
                  <span className="text-[12.5px] font-semibold text-[#D64040]">
                    Please pick a course.
                  </span>
                )}
              </div>

              <button
                onClick={submit}
                className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-[15px] py-4.25 rounded-full cursor-pointer hover:bg-accent"
              >
                Download Brochure ↓
              </button>
            </div>
          ) : (
            <div className="text-center py-6 px-2">
              <span className="w-12 h-12 rounded-full bg-[#1DA954] text-white inline-flex items-center justify-center text-xl font-black">
                ✓
              </span>
              <div className="text-xl font-extrabold mt-4.5">
                Your download has started!
              </div>
              <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-muted">
                We&apos;ve also sent a copy to your email. Didn&apos;t
                start?{" "}
                <a href="#" className="font-bold border-b-2 border-accent">
                  Download again
                </a>
                .
              </p>
              <div className="flex gap-3 justify-center flex-wrap mt-6">
                <Link
                  href="/courses/ethical-hacking-for-beginners"
                  className="bg-[#FFD300] text-fg font-bold text-[13.5px] px-6 py-3 rounded-full hover:bg-accent"
                >
                  View Course
                </Link>
                <Link
                  href="/enroll"
                  className="border border-border-strong font-semibold text-[13.5px] px-6 py-3 rounded-full "
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
