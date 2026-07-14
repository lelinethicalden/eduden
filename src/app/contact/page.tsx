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
  "Machine Learning Bootcamp",
  "Data Science with Python",
  "Full-Stack Web Development",
  "Cloud Computing with AWS",
  "DevOps Essentials",
  "Graphics Design Pro",
  "Digital Marketing Launchpad",
  "Other / Not sure yet",
];

type Errors = Partial<Record<"name" | "email" | "phone" | "message", boolean>>;

function fieldBorder(hasError: boolean) {
  return hasError ? "border-[#D64040]" : "border-border";
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");

  function submit() {
    const e: Errors = {};
    if (!name.trim()) e.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = true;
    if (phone.replace(/\D/g, "").length < 10) e.phone = true;
    if (!message.trim()) e.message = true;
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSent(true);
    setSentName(name.trim().split(" ")[0]);
    setErrors({});
  }

  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-9 md:pt-24 pb-8 md:pb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Contact us
            </span>
          </div>
          <h1 className="m-0 text-[clamp(40px,6.4vw,88px)] font-black tracking-[-0.04em] uppercase leading-[0.95]">
            Questions?
            <br />
            We reply fast.
          </h1>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pb-10 md:pb-24 grid gap-6 sm:gap-7 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start">
          <div className="bg-white border border-border rounded-3xl p-5 sm:p-6 md:p-10">
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
                    placeholder="Your full name"
                    className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg ${fieldBorder(!!errors.name)}`}
                  />
                  {errors.name && (
                    <span className="text-[12.5px] font-semibold text-[#D64040]">
                      Please enter your name.
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
                      Please enter a valid phone number (10+ digits).
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.75">
                  <label className="text-[13px] font-bold">
                    Course interest
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="border border-border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg text-fg"
                  >
                    <option value="">Select a course (optional)</option>
                    {COURSES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.75">
                  <label className="text-[13px] font-bold">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setErrors((s) => ({ ...s, message: false }));
                    }}
                    placeholder="Tell us what you'd like to know…"
                    rows={4}
                    className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg resize-y ${fieldBorder(!!errors.message)}`}
                  />
                  {errors.message && (
                    <span className="text-[12.5px] font-semibold text-[#D64040]">
                      Please write a short message.
                    </span>
                  )}
                </div>

                <button
                  onClick={submit}
                  className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-[15px] py-4 rounded-full cursor-pointer hover:bg-accent"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="text-center py-8 px-2">
                <span className="w-12 h-12 rounded-full bg-[#1DA954] text-white inline-flex items-center justify-center text-xl font-black">
                  ✓
                </span>
                <div className="text-xl font-extrabold mt-4.5">
                  Message sent!
                </div>
                <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-muted">
                  Thanks, {sentName} — our team will get back to you
                  within one working day.
                </p>
                <Link
                  href="/courses"
                  className="inline-block mt-5.5 bg-[#FFD300] text-fg font-bold text-sm px-6.5 py-3.25 rounded-full hover:bg-accent"
                >
                  Explore Courses Meanwhile
                </Link>
              </div>
            )}
          </div>

          <div>
            <div className="border-t border-border-strong">
              <div className="grid grid-cols-1 sm:grid-cols-[minmax(110px,150px)_1fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5 px-1">
                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                  Visit
                </div>
                <div className="text-[15px] font-semibold leading-relaxed">
                  Nokia Care Building, South Dumdum, Kolkata, West Bengal
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[minmax(110px,150px)_1fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5 px-1">
                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                  WhatsApp
                </div>
                <div className="text-[15px] font-semibold">
                  Fastest response —{" "}
                  <a href="#" className="border-b-2 border-accent font-bold">
                    chat with us →
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[minmax(110px,150px)_1fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5 px-1">
                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                  Email
                </div>
                <a
                  href="mailto:hello@eduden.io"
                  className="text-[15px] font-bold border-b-2 border-accent justify-self-start"
                >
                  hello@eduden.io
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[minmax(110px,150px)_1fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5 px-1">
                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                  Hours
                </div>
                <div className="text-[15px] font-semibold">
                  Mon–Sat · 10:00–19:00 IST
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[minmax(110px,150px)_1fr] gap-1.5 sm:gap-5 sm:items-baseline py-5 px-1">
                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                  Social
                </div>
                <div className="flex gap-4 text-sm font-semibold flex-wrap">
                  <a href="#" className="border-b-2 border-transparent hover:border-accent">
                    LinkedIn
                  </a>
                  <a href="#" className="border-b-2 border-transparent hover:border-accent">
                    Instagram
                  </a>
                  <a href="#" className="border-b-2 border-transparent hover:border-accent">
                    Facebook
                  </a>
                  <a href="#" className="border-b-2 border-transparent hover:border-accent">
                    YouTube
                  </a>
                </div>
              </div>
              <div className="relative h-[clamp(200px,24vw,300px)] rounded-[20px] overflow-hidden border border-border mt-6">
                <Image
                  src={unsplash("1497366216548-37526070297c")}
                  alt="Kolkata center photo or map"
                  fill
                  sizes="(min-width: 1280px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-7 bg-fg rounded-[20px] min-h-[220px] relative overflow-hidden flex items-end p-6">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.06) 39px,rgba(255,255,255,0.06) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.06) 39px,rgba(255,255,255,0.06) 40px)",
                }}
              />
              <div className="absolute top-[34%] left-[56%] w-3 h-3 rounded-full bg-accent shadow-[0_0_0_9px_rgba(253,200,4,0.2)]" />
              <div className="relative text-bg flex justify-between items-center gap-4 w-full flex-wrap">
                <div className="text-sm font-bold">
                  eduden — South Dumdum, Kolkata
                </div>
                <a
                  href="#"
                  className="text-[12.5px] font-bold text-bg border border-white/35 px-4 py-2 rounded-full hover:border-accent hover:text-accent"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
