"use client";

import Link from "next/link";
import { useState } from "react";

function readInquiryName() {
  if (typeof window === "undefined") return "";
  try {
    return sessionStorage.getItem("eduden_inquiry_name") || "";
  } catch {
    return "";
  }
}

export default function ThankYou() {
  const [name] = useState(readInquiryName);

  return (
    <section className="bg-bg min-h-[calc(100vh-68px)] flex items-center">
      <div className="max-w-3xl mx-auto px-7 py-14 md:py-20 text-center w-full">
        <div className="inline-flex items-center gap-2 mb-7">
          <span className="w-2 h-2 bg-accent rounded-sm" />
          <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
            Inquiry submitted
          </span>
        </div>
        <h1
          className="m-0 text-[clamp(36px,5.6vw,72px)] font-black tracking-[-0.04em] uppercase leading-[0.95]"
          suppressHydrationWarning
        >
          Thank you{name ? `, ${name}` : ""}.
        </h1>
        <p className="mt-6 mx-auto max-w-md text-[15.5px] leading-relaxed text-muted">
          The EduDen admissions team will contact you soon — usually
          within one working day — with batch dates, fees and next steps.
        </p>
        <div className="flex gap-3 justify-center flex-wrap mt-9">
          <Link
            href="/courses"
            className="bg-fg text-bg font-bold text-[14.5px] px-7.5 py-3.75 rounded-full hover:bg-accent hover:text-fg"
          >
            Explore More Courses
          </Link>
          <Link
            href="/"
            className="border border-border-strong font-semibold text-[14.5px] px-7.5 py-3.75 rounded-full hover:border-fg"
          >
            Back to Home
          </Link>
        </div>
        <div className="mt-14 border-t border-border-strong pt-6 text-sm leading-relaxed text-muted max-w-md mx-auto">
          In a hurry? Message us on{" "}
          <a href="#" className="font-bold border-b-2 border-accent">
            WhatsApp
          </a>{" "}
          and mention your inquiry — we&apos;ll bump you up the queue.
        </div>
      </div>
    </section>
  );
}
