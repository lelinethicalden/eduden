"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const COURSES = [
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
  "Linux Administration",
  "Graphics Design Pro",
  "Digital Marketing Launchpad",
  "Blockchain & Web3 Basics",
  "IoT with Arduino & Raspberry Pi",
  "Networking Fundamentals",
  "Other / Not sure yet",
];

type Errors = Partial<
  Record<"name" | "phone" | "alt" | "email" | "course" | "consent", boolean>
>;

function segClasses(on: boolean) {
  return on
    ? "border-fg bg-fg text-bg"
    : "border-border bg-bg text-muted";
}

function fieldBorder(hasError: boolean) {
  return hasError ? "border-[#D64040]" : "border-border";
}

export default function Enroll() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [same, setSame] = useState<"yes" | "no">("yes");
  const [alt, setAlt] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [start, setStart] = useState<"now" | "later">("now");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function submit() {
    const e: Errors = {};
    if (!name.trim()) e.name = true;
    if (phone.replace(/\D/g, "").length < 10) e.phone = true;
    if (same === "no" && alt.replace(/\D/g, "").length < 10) e.alt = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = true;
    if (!course) e.course = true;
    if (!consent) e.consent = true;
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    try {
      sessionStorage.setItem("eduden_inquiry_name", name.trim().split(" ")[0]);
    } catch {}
    router.push("/thank-you");
  }

  return (
    <section className="bg-bg">
      <div className="max-w-6xl mx-auto px-7 pt-12 md:pt-20 pb-16 md:pb-24 grid gap-12 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start">
        <div className="lg:sticky lg:top-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Admission inquiry
            </span>
          </div>
          <h1 className="m-0 text-[clamp(36px,4.8vw,64px)] font-black tracking-[-0.04em] uppercase leading-[0.95]">
            Enroll now.
            <br />
            Two minutes.
          </h1>
          <p className="mt-7 text-[15px] leading-relaxed text-muted max-w-md">
            Our admissions team will call or WhatsApp you with batch
            dates, fees, and next steps. No spam — promise.
          </p>
          <div className="mt-7 border-t border-border-strong max-w-md">
            <div className="border-b border-border-strong py-3.5 px-1 text-sm font-semibold">
              Response within one working day
            </div>
            <div className="border-b border-border-strong py-3.5 px-1 text-sm font-semibold">
              Free counselling — no commitment
            </div>
            <div className="py-3.5 px-1 text-sm font-semibold">
              Your details stay private
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-3xl p-6 md:p-10">
          <div className="flex flex-col gap-4.5">
            <div className="flex flex-col gap-1.75">
              <label className="text-[13px] font-bold">Full name</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((s) => ({ ...s, name: false }));
                }}
                placeholder="Your full name"
                className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg focus:border-fg focus:bg-white ${fieldBorder(!!errors.name)}`}
              />
              {errors.name && (
                <span className="text-[12.5px] font-semibold text-[#D64040]">
                  Please enter your full name.
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
                className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg focus:border-fg focus:bg-white ${fieldBorder(!!errors.phone)}`}
              />
              {errors.phone && (
                <span className="text-[12.5px] font-semibold text-[#D64040]">
                  Please enter a valid number (10+ digits).
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-[13px] font-bold">
                Calling number same as WhatsApp?
              </label>
              <div className="flex gap-2.5">
                <button
                  onClick={() => {
                    setSame("yes");
                    setErrors((s) => ({ ...s, alt: false }));
                  }}
                  className={`flex-1 border font-[inherit] font-bold text-[13.5px] py-3 rounded-full cursor-pointer ${segClasses(same === "yes")}`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setSame("no")}
                  className={`flex-1 border font-[inherit] font-bold text-[13.5px] py-3 rounded-full cursor-pointer ${segClasses(same === "no")}`}
                >
                  No
                </button>
              </div>
            </div>

            {same === "no" && (
              <div className="flex flex-col gap-1.75">
                <label className="text-[13px] font-bold">
                  Alternate calling number
                </label>
                <input
                  value={alt}
                  onChange={(e) => {
                    setAlt(e.target.value);
                    setErrors((s) => ({ ...s, alt: false }));
                  }}
                  placeholder="+91 XXXXX XXXXX"
                  className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg focus:border-fg focus:bg-white ${fieldBorder(!!errors.alt)}`}
                />
                {errors.alt && (
                  <span className="text-[12.5px] font-semibold text-[#D64040]">
                    Please enter a valid alternate number.
                  </span>
                )}
              </div>
            )}

            <div className="flex flex-col gap-1.75">
              <label className="text-[13px] font-bold">Email ID</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((s) => ({ ...s, email: false }));
                }}
                placeholder="you@example.com"
                className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg focus:border-fg focus:bg-white ${fieldBorder(!!errors.email)}`}
              />
              {errors.email && (
                <span className="text-[12.5px] font-semibold text-[#D64040]">
                  Please enter a valid email address.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.75">
              <label className="text-[13px] font-bold">
                Course interested in
              </label>
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
                  Please pick a course (or &quot;Not sure yet&quot;).
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-[13px] font-bold">
                When would you like to start?
              </label>
              <div className="flex gap-2.5">
                <button
                  onClick={() => setStart("now")}
                  className={`flex-1 border font-[inherit] font-bold text-[13.5px] py-3 rounded-full cursor-pointer ${segClasses(start === "now")}`}
                >
                  Immediately
                </button>
                <button
                  onClick={() => setStart("later")}
                  className={`flex-1 border font-[inherit] font-bold text-[13.5px] py-3 rounded-full cursor-pointer ${segClasses(start === "later")}`}
                >
                  Later
                </button>
              </div>
            </div>

            <label
              className={`flex gap-3 items-start cursor-pointer bg-bg border rounded-xl px-4 py-3.5 ${errors.consent ? "border-[#D64040]" : "border-border"}`}
            >
              <input
                type="checkbox"
                checked={consent}
                onChange={() => {
                  setConsent((v) => !v);
                  setErrors((s) => ({ ...s, consent: false }));
                }}
                className="w-4.25 h-4.25 mt-0.25 accent-fg flex-none"
              />
              <span className="text-[13px] leading-snug text-muted">
                I agree to receive updates about courses, batches and
                offers from EduDen via WhatsApp, call or email.
              </span>
            </label>
            {errors.consent && (
              <span className="text-[12.5px] font-semibold text-[#D64040] -mt-2.5">
                Please tick the consent box so we can contact you.
              </span>
            )}

            <button
              onClick={submit}
              className="border-none bg-fg text-bg font-[inherit] font-bold text-[15px] py-4.25 rounded-full cursor-pointer hover:bg-accent hover:text-fg"
            >
              Submit Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
