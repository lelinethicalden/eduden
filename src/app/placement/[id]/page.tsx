"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import HtmlContent from "@/components/HtmlContent";
import type { ApiError } from "@/lib/api-client";
import { findPlacementById, type Placement } from "@/lib/placements";
import { getToken } from "@/lib/token";

function readJSON(key: string): string[] {
    try {
        const v = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(v) ? v : [];
    } catch {
        return [];
    }
}

export default function PlacementDetail() {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const [authChecked, setAuthChecked] = useState(false);
    const [authed, setAuthed] = useState(false);
    const [job, setJob] = useState<Placement | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [saved, setSaved] = useState<string[]>([]);
    const [applied, setApplied] = useState<string[]>([]);

    /* eslint-disable react-hooks/set-state-in-effect */
    useEffect(() => {
        setAuthed(Boolean(getToken()));
        setAuthChecked(true);
        setSaved(readJSON("eduden_placement_saved"));
        setApplied(readJSON("eduden_placement_applied"));
    }, []);
    /* eslint-enable react-hooks/set-state-in-effect */

    /* eslint-disable react-hooks/set-state-in-effect */
    useEffect(() => {
        if (!authChecked || !authed) return;
        let cancelled = false;
        setLoading(true);
        setError("");
        findPlacementById(id, getToken())
            .then((found) => {
                if (cancelled) return;
                if (!found) setError("This role couldn't be found — it may have closed.");
                setJob(found);
            })
            .catch((err) => {
                if (cancelled) return;
                setError((err as ApiError).message || "Couldn't load this role.");
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => {
            cancelled = true;
        };
    }, [authChecked, authed, id]);
    /* eslint-enable react-hooks/set-state-in-effect */

    function toggleSave() {
        const next = saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id];
        try {
            localStorage.setItem("eduden_placement_saved", JSON.stringify(next));
        } catch { }
        setSaved(next);
    }

    function apply() {
        const next = [...applied, id];
        try {
            localStorage.setItem("eduden_placement_applied", JSON.stringify(next));
        } catch { }
        setApplied(next);
    }

    const daysLeft = useMemo(() => {
        if (!job) return 0;
        const now = new Date();
        return Math.max(0, Math.ceil((new Date(job.deadline).getTime() - now.getTime()) / 86400000));
    }, [job]);

    if (!authChecked) return null;

    if (!authed) {
        return (
            <section className="bg-bg min-h-[70vh]">
                <div className="max-w-[980px] mx-auto px-4 sm:px-7 pt-16 md:pt-24 pb-10 md:pb-24 text-center">
                    <div className="text-xl font-extrabold tracking-[-0.01em]">
                        Log in to view this role
                    </div>
                    <p className="mt-2 mb-7 text-[13.5px] leading-relaxed text-muted">
                        Placement details are only visible to logged-in students.
                    </p>
                    <Link
                        href="/placement"
                        className="inline-block border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-[14.5px] px-7 py-3.5 rounded-full hover:bg-accent"
                    >
                        Go to student login →
                    </Link>
                </div>
            </section>
        );
    }

    const savedFlag = saved.includes(id);
    const appliedFlag = applied.includes(id);

    return (
        <section className="bg-bg min-h-[70vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-8 md:pt-16 pb-10 md:pb-24">
                <div className="mb-9">
                    <Link
                        href="/placement"
                        className="border-none bg-transparent font-[inherit] font-bold text-sm cursor-pointer text-fg border-b-2 border-accent pb-0.5"
                    >
                        ← Back to List
                    </Link>
                </div>

                {loading && (
                    <div className="text-[13px] font-semibold text-muted">Loading role…</div>
                )}

                {!loading && error && (
                    <div className="border border-[#D64040] bg-white rounded-2xl p-5 text-[13.5px] font-semibold text-[#D64040]">
                        {error}
                    </div>
                )}

                {!loading && job && (
                    <>
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-2 h-2 bg-accent rounded-sm" />
                            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
                                {job.type} · Closes in {daysLeft} days
                            </span>
                        </div>
                        <h1 className="m-0 text-[clamp(30px,4vw,54px)] font-black tracking-[-0.035em] uppercase leading-[0.98]">
                            {job.title}
                        </h1>
                        <div className="text-[15px] font-semibold text-muted mt-3.5">
                            {job.company} · {job.location} · {job.salary}
                        </div>

                        {!appliedFlag ? (
                            <div className="flex gap-3 flex-wrap mt-7">
                                <button
                                    onClick={apply}
                                    className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-[14.5px] px-7 py-3.5 rounded-full cursor-pointer hover:bg-accent"
                                >
                                    Apply via Placement Team
                                </button>
                                <button
                                    onClick={toggleSave}
                                    className={`font-[inherit] font-semibold text-[14.5px] px-7 py-3.5 rounded-full cursor-pointer border  ${savedFlag ? "bg-accent border-accent" : "bg-transparent border-border-strong"
                                        }`}
                                >
                                    {savedFlag ? "★ Saved" : "☆ Save for later"}
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

                        <div className="mt-9 md:mt-13 pt-6.5">
                            <p className="text-accent font-semibold text-sm sm:text-base mb-2.5">
                                Job Description
                            </p>
                            <HtmlContent
                                html={job.description}
                                className="mb-6 text-[14.5px] leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_strong]:font-bold [&_a]:font-bold [&_a]:underline"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,1fr)_2.4fr] gap-1.5 sm:gap-5 sm:items-baseline py-5.5">
                                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">Experience</div>
                                <p className="m-0 text-[14.5px] leading-relaxed">
                                    {job.experience}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,1fr)_2.4fr] gap-1.5 sm:gap-5 sm:items-baseline py-5.5">
                                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                                    Remote work
                                </div>
                                <p className="m-0 text-[14.5px] leading-relaxed">
                                    {job.remoteAvailable === "Yes" ? "Remote available" : "On-site only"}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-[minmax(150px,1fr)_2.4fr] gap-1.5 sm:gap-5 sm:items-baseline py-5.5">
                                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-muted">
                                    Posted
                                </div>
                                <p className="m-0 text-[14.5px] leading-relaxed">
                                    {job.postedDate}
                                    {job.sourceUrl && (
                                        <>
                                            {" · "}
                                            <a
                                                href={job.sourceUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="font-bold border-b-2 border-accent pb-0.5"
                                            >
                                                View original posting →
                                            </a>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
