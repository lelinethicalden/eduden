"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import apiClient, { type ApiError } from "@/lib/api-client";
import { unsplash } from "@/lib/unsplash";

type Certificate = {
  student_name: string;
  batch_id: number;
  course_name: string;
  certificate_number: string;
  verification_code: string;
  issue_date: string;
};

type CertificateResponse = {
  success: boolean;
  message: string;
  data: Certificate;
};

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function Verify() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<"valid" | "invalid" | null>(null);
  const [cert, setCert] = useState<Certificate | null>(null);
  const [searched, setSearched] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function verify(idOverride?: string) {
    const id = (idOverride ?? certId).trim();
    if (!id) return;
    setVerifying(true);
    setErrorMsg("");
    try {
      const data = await apiClient.get<CertificateResponse>(
        `/certificates/search/?student_batch_id=${encodeURIComponent(id)}`
      );
      if (data.success) {
        setCert(data.data);
        setResult("valid");
      } else {
        setCert(null);
        setResult("invalid");
      }
    } catch (err) {
      const apiErr = err as ApiError;
      if (apiErr.status === 404) {
        setCert(null);
        setResult("invalid");
      } else {
        setErrorMsg(apiErr.message || "Couldn't verify right now. Please try again.");
        setResult(null);
      }
    } finally {
      setSearched(id);
      setVerifying(false);
    }
  }

  function reset() {
    setCertId("");
    setResult(null);
    setCert(null);
    setSearched("");
    setErrorMsg("");
  }

  return (
    <>
      <section className="bg-bg">
        <div className="max-w-[760px] mx-auto px-4 sm:px-7 pt-10 md:pt-24 pb-8 md:pb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Certificate verification
            </span>
          </div>
          <h1 className="m-0 text-[clamp(36px,5.6vw,68px)] font-black tracking-[-0.04em] uppercase leading-[0.95]">
            Verify a certificate.
          </h1>
          <p className="mt-6 mx-auto max-w-md text-[15px] leading-relaxed text-muted">
            Enter the student batch ID printed on the certificate to confirm
            it was issued by eduden.
          </p>
          <div className="mt-9 flex gap-2 bg-white border border-border rounded-full py-1.5 pl-5.5 pr-1.5 items-center text-left">
            <input
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && verify()}
              placeholder="e.g. EDU-STU-IP-01-001"
              className="flex-1 border-none outline-none font-[inherit] text-[15px] text-fg bg-transparent min-w-0 tracking-[0.03em]"
            />
            <button
              onClick={() => verify()}
              disabled={verifying}
              className="flex-none border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-sm px-6 py-3.25 rounded-full cursor-pointer hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {verifying ? "Verifying…" : "Verify"}
            </button>
          </div>
          {errorMsg && (
            <div className="mt-3.5 text-[13px] font-semibold text-[#D64040]">{errorMsg}</div>
          )}
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-[760px] mx-auto px-4 sm:px-7 pb-10 md:pb-24">
          {result === "valid" && cert && (
            <div className="bg-white border border-border rounded-3xl p-5 sm:p-7 md:p-10">
              <div className="flex items-center gap-3.5 mb-7">
                <span className="w-10 h-10 rounded-full bg-[#1DA954] text-white flex items-center justify-center text-lg font-black flex-none">
                  ✓
                </span>
                <div>
                  <div className="text-[19px] font-extrabold">
                    Valid certificate
                  </div>
                  <div className="text-[13px] text-muted font-medium">
                    This certificate was issued by eduden.
                  </div>
                </div>
              </div>
              <div className="border-t border-border">
                <div className="flex justify-between gap-4 py-3.75 border-b border-border">
                  <span className="text-[13px] font-semibold text-muted">
                    Student name
                  </span>
                  <span className="text-[14.5px] font-bold">
                    {cert.student_name}
                  </span>
                </div>
                <div className="flex justify-between gap-4 py-3.75 border-b border-border">
                  <span className="text-[13px] font-semibold text-muted">
                    Course
                  </span>
                  <span className="text-[14.5px] font-bold">
                    {cert.course_name}
                  </span>
                </div>
                <div className="flex justify-between gap-4 py-3.75 border-b border-border">
                  <span className="text-[13px] font-semibold text-muted">
                    Issued on
                  </span>
                  <span className="text-[14.5px] font-bold">
                    {formatDate(cert.issue_date)}
                  </span>
                </div>
                <div className="flex justify-between gap-4 py-3.75 border-b border-border">
                  <span className="text-[13px] font-semibold text-muted">
                    Certificate No.
                  </span>
                  <span className="text-[14.5px] font-bold tracking-[0.04em]">
                    {cert.certificate_number}
                  </span>
                </div>
                <div className="flex justify-between gap-4 py-3.75">
                  <span className="text-[13px] font-semibold text-muted">
                    Verification code
                  </span>
                  <span className="text-[13px] font-bold tracking-[0.02em]">
                    {cert.verification_code}
                  </span>
                </div>
              </div>
            </div>
          )}

          {result === "invalid" && (
            <div className="bg-white border border-[#E8B4B4] rounded-3xl p-5 sm:p-7 md:p-10 text-center">
              <span className="w-10 h-10 rounded-full bg-[#D64040] text-white inline-flex items-center justify-center text-base font-black">
                ✕
              </span>
              <div className="text-[19px] font-extrabold mt-4">
                Certificate not found
              </div>
              <p className="mx-auto mt-2.5 max-w-sm text-sm leading-relaxed text-muted">
                No certificate matches student batch ID &ldquo;{searched}&rdquo;.
                Double-check for typos — or if you believe this is an
                error, contact us.
              </p>
              <div className="flex gap-3 justify-center flex-wrap mt-6">
                <button
                  onClick={reset}
                  className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-[13.5px] px-6 py-3 rounded-full cursor-pointer hover:bg-accent"
                >
                  Try Again
                </button>
                <Link
                  href="/contact"
                  className="border border-border-strong font-semibold text-[13.5px] px-6 py-3 rounded-full "
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}

          <div className="mt-14 border-t border-border-strong">
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(140px,1fr)_2fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5 px-1">
              <div className="text-[15px] font-extrabold">
                Tamper-proof
              </div>
              <p className="m-0 text-[13.5px] leading-relaxed text-muted">
                Every certificate ID maps to a permanent record in our
                system.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(140px,1fr)_2fr] gap-1.5 sm:gap-5 sm:items-baseline border-b border-border-strong py-5 px-1">
              <div className="text-[15px] font-extrabold">
                Instant checks
              </div>
              <p className="m-0 text-[13.5px] leading-relaxed text-muted">
                Employers can verify any candidate&apos;s certificate in
                seconds.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(140px,1fr)_2fr] gap-1.5 sm:gap-5 sm:items-baseline py-5 px-1">
              <div className="text-[15px] font-extrabold">
                Earned, not given
              </div>
              <p className="m-0 text-[13.5px] leading-relaxed text-muted">
                Issued only after all assignments and final exams are
                cleared (min 50%).
              </p>
            </div>
          </div>
          <div className="relative h-[clamp(200px,26vw,340px)] rounded-[20px] overflow-hidden border border-border mt-9">
            <Image
              src={unsplash("1543286386-713bdd548da4")}
              alt="Sample eduden certificate image"
              fill
              sizes="(min-width: 1280px) 760px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
