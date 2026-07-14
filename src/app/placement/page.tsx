"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import AppIcon from "@/components/AppIcon";
import apiClient, { type ApiError } from "@/lib/api-client";
import { mapPlacement, type Placement, type PlacementsResponse } from "@/lib/placements";
import { getToken, removeToken, setToken } from "@/lib/token";
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

const VIEWS = ["All", "Saved", "Applied"] as const;

type ApiUser = {
  id: number;
  username: string;
  email: string;
  user_type: string;
};

type LoginResponse = {
  success: boolean;
  message: string;
  user_data: ApiUser & { token: string };
};

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
  const [user, setUser] = useState<ApiUser | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [view, setView] = useState<(typeof VIEWS)[number]>("All");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState<string[]>([]);
  const [applied, setApplied] = useState<string[]>([]);

  const [jobs, setJobs] = useState<Placement[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [jobsError, setJobsError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [totalCount, setTotalCount] = useState<number | null>(null);

  // One-time hydration from browser storage on mount — there is no
  // synchronous way to read the token cookie / sessionStorage during SSR.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (getToken()) {
      try {
        const raw = sessionStorage.getItem("eduden_placement_user");
        if (raw) setUser(JSON.parse(raw));
      } catch {}
      setAuth(true);
    }
    setSaved(readJSON("eduden_placement_saved"));
    setApplied(readJSON("eduden_placement_applied"));
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  async function fetchPlacements(pageNum: number) {
    setJobsLoading(true);
    setJobsError("");
    try {
      const data = await apiClient.get<PlacementsResponse>(
        `/placements/?page=${pageNum}`,
        getToken()
      );
      const mapped = data.data.map(mapPlacement);
      setJobs((prev) => (pageNum === 1 ? mapped : [...prev, ...mapped]));
      setHasMore(Boolean(data.next));
      setTotalCount(data.count);
      setPage(pageNum);
    } catch (err) {
      setJobsError((err as ApiError).message || "Couldn't load placements.");
    } finally {
      setJobsLoading(false);
    }
  }

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (auth) fetchPlacements(1);
  }, [auth]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const withMeta = useMemo(() => {
    const now = new Date();
    return jobs.map((j) => {
      const daysLeft = Math.max(
        0,
        Math.ceil((new Date(j.deadline).getTime() - now.getTime()) / 86400000)
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
  }, [jobs, applied, saved]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return withMeta.filter(
      (j) =>
        (view === "All" ||
          (view === "Saved" && j.savedFlag) ||
          (view === "Applied" && j.appliedFlag)) &&
        (!q ||
          (j.title + " " + j.company + " " + j.type + " " + j.location + " " + j.experience)
            .toLowerCase()
            .includes(q))
    );
  }, [withMeta, view, query]);

  async function login() {
    setLoginErrorMsg("");
    setLoggingIn(true);
    try {
      const data = await apiClient.post<LoginResponse>("/login/", {
        username: username.trim(),
        password,
      });
      if (!data.success) {
        setLoginErrorMsg(data.message || "Incorrect username or password.");
        return;
      }
      const { token, ...u } = data.user_data;
      setToken(token);
      try {
        sessionStorage.setItem("eduden_placement_user", JSON.stringify(u));
      } catch {}
      setUser(u);
      setAuth(true);
    } catch (err) {
      setLoginErrorMsg((err as ApiError).message || "Incorrect username or password.");
    } finally {
      setLoggingIn(false);
    }
  }

  function logout() {
    removeToken();
    try {
      sessionStorage.removeItem("eduden_placement_user");
    } catch {}
    setAuth(false);
    setUser(null);
    setPassword("");
  }

  function toggleSave(id: string) {
    const next = saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id];
    try {
      localStorage.setItem("eduden_placement_saved", JSON.stringify(next));
    } catch {}
    setSaved(next);
  }

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
                    Updated weekly
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
                  <label className="text-[13px] font-bold">Username</label>
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setLoginErrorMsg("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && login()}
                    placeholder="EDU-STU-00003"
                    className={`border rounded-xl px-4 py-3.25 font-[inherit] text-[14.5px] outline-none bg-bg ${
                      loginErrorMsg ? "border-[#D64040]" : "border-border"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1.75">
                  <label className="text-[13px] font-bold">Password</label>
                  <div
                    className={`flex items-center gap-2 border rounded-xl bg-bg pr-1.5 ${
                      loginErrorMsg ? "border-[#D64040]" : "border-border"
                    }`}
                  >
                    <input
                      type={showPass ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setLoginErrorMsg("");
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
                {loginErrorMsg && (
                  <span className="text-[12.5px] font-semibold text-[#D64040]">
                    {loginErrorMsg}
                  </span>
                )}
                <button
                  onClick={login}
                  disabled={loggingIn}
                  className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-[15px] py-4 rounded-full cursor-pointer hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loggingIn ? "Logging in…" : "Log In"}
                </button>
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

  return (
    <section className="bg-bg min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-8 md:pt-16 pb-10 md:pb-24">
        <div className="flex flex-wrap justify-between items-end gap-5">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 bg-[#1DA954] rounded-sm" />
              <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
                Logged in · {user?.email || user?.username}
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

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-t border-border-strong mt-12 md:mt-18">
          <div className="pt-6 pr-6 border-r border-border-strong pl-5">
            <div className="text-[clamp(26px,2.6vw,36px)] font-extrabold tracking-[-0.02em]">
              {totalCount ?? jobs.length}
            </div>
            <div className="text-[13px] font-medium text-muted mt-1">Open roles</div>
          </div>
          <div className="pt-6 pr-6 border-r border-border-strong pl-5">
            <div className="text-[clamp(26px,2.6vw,36px)] font-extrabold tracking-[-0.02em]">
              {applied.length}
            </div>
            <div className="text-[13px] font-medium text-muted mt-1">Applied</div>
          </div>
          <div className="pt-6 pr-6 border-r border-border-strong pl-5">
            <div className="text-[clamp(26px,2.6vw,36px)] font-extrabold tracking-[-0.02em]">
              {saved.length}
            </div>
            <div className="text-[13px] font-medium text-muted mt-1">Saved</div>
          </div>
          <div className="pt-6 pr-6 border-r border-border-strong pl-5">
            <div className="text-[clamp(26px,2.6vw,36px)] font-extrabold tracking-[-0.02em]">
              {withMeta.filter((j) => j.daysLeft <= 14).length}
            </div>
            <div className="text-[13px] font-medium text-muted mt-1">Closing this week</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center justify-between mt-9">
          <div className="flex items-center h-11.5 bg-white border border-border rounded-full overflow-hidden max-w-[400px] flex-1 min-w-[240px] shadow-[0_0.75em_1.75em_rgba(17,17,17,0.10)]">
            <span className="flex-none w-11 h-11 flex items-center justify-center">
              <AppIcon icon="hugeicons:search-02" size="sm" />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search role, company, skill…"
              className="flex-1 border-none outline-none font-[inherit] text-sm text-fg bg-transparent min-w-0"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="flex-none border-none bg-bg text-fg w-8 h-8 mr-1.75 rounded-full cursor-pointer flex items-center justify-center transition-transform hover:scale-110"
              >
                <AppIcon icon="hugeicons:cancel-01" size="xs" />
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

        <div className="text-[13px] font-semibold text-muted mt-5.5 mb-2">
          {jobsLoading && jobs.length === 0
            ? "Loading roles…"
            : `${filtered.length} role${filtered.length === 1 ? "" : "s"}${
                view !== "All" ? " · " + view.toLowerCase() : ""
              }`}
        </div>

        {jobsError && (
          <div className="border border-[#D64040] bg-white rounded-2xl p-5 text-[13.5px] font-semibold text-[#D64040] mb-4">
            {jobsError}
          </div>
        )}

        {filtered.length > 0 ? (
          <div className="border-t border-border-strong">
            {filtered.map((j) => (
              <Link
                key={j.id}
                href={`/placement/${j.id}`}
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
                    {j.experience}
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
              </Link>
            ))}
          </div>
        ) : (
          !jobsLoading && (
            <div className="text-center py-16 px-6 border border-dashed border-border-strong rounded-[20px]">
              <div className="text-[19px] font-extrabold">{empty[0]}</div>
              <p className="mx-auto mt-2 mb-5.5 text-sm text-muted max-w-sm">{empty[1]}</p>
              <button
                onClick={() => {
                  setQuery("");
                  setView("All");
                }}
                className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-sm px-6.5 py-3.25 rounded-full cursor-pointer hover:bg-accent"
              >
                Show all roles
              </button>
            </div>
          )
        )}

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => fetchPlacements(page + 1)}
              disabled={jobsLoading}
              className="border border-border-strong bg-white font-[inherit] font-bold text-[13.5px] px-6.5 py-3.25 rounded-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {jobsLoading ? "Loading…" : "Load more roles"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
