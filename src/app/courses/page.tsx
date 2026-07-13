"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import AppIcon from "@/components/AppIcon";
import { COURSES } from "@/data/courses";

const CATS = ["All", ...Array.from(new Set(COURSES.map((c) => c.cat)))];
const MODES = ["Any", "Online", "Hybrid", "Classroom"];
const LENGTHS = ["Any", "Short (≤45d)", "Medium (46–75d)", "Long (76d+)"];
const SORTS = ["Featured", "A–Z", "Shortest"];

function useSlideIndicator(active: string) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  useLayoutEffect(() => {
    const el = refs.current[active];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
    }
  }, [active]);

  return { refs, indicator };
}

export default function Courses() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [mode, setMode] = useState("Any");
  const [length, setLength] = useState("Any");
  const [sort, setSort] = useState("Featured");
  const [catOpen, setCatOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const catMenuRef = useRef<HTMLDivElement>(null);
  const sortSlide = useSlideIndicator(sort);
  const modeSlide = useSlideIndicator(mode);
  const lengthSlide = useSlideIndicator(length);

  useEffect(() => {
    if (!catOpen) return;
    function onPointerDown(e: MouseEvent) {
      if (catMenuRef.current && !catMenuRef.current.contains(e.target as Node)) {
        setCatOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [catOpen]);

  // One-time hydration of the category filter from the #cat= hash
  // (used by the Home page track picker) — no synchronous way to read
  // location.hash during SSR.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const m = (window.location.hash || "").match(/cat=([^&]+)/);
    if (m) {
      const c = decodeURIComponent(m[1]);
      if (CATS.includes(c)) setCat(c);
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  function toggleSearch() {
    const open = !searchOpen;
    setSearchOpen(open);
    if (!open) setQuery("");
    else setTimeout(() => searchRef.current?.focus(), 220);
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const lengthTest = (c: (typeof COURSES)[number]) =>
      length === "Any" ||
      (length === "Short (≤45d)" && c.days <= 45) ||
      (length === "Medium (46–75d)" && c.days > 45 && c.days <= 75) ||
      (length === "Long (76d+)" && c.days > 75);

    let list = COURSES.filter(
      (c) =>
        (cat === "All" || c.cat === cat) &&
        (mode === "Any" || c.mode === mode) &&
        lengthTest(c) &&
        (!q ||
          (c.title + " " + c.cat + " " + c.blurb + " " + c.mode)
            .toLowerCase()
            .includes(q))
    );
    if (sort === "A–Z") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "Shortest") list = [...list].sort((a, b) => a.days - b.days);
    return list;
  }, [query, cat, mode, length, sort]);

  const anyFilterActive =
    cat !== "All" || mode !== "Any" || length !== "Any" || !!query;

  const resetAll = () => {
    setQuery("");
    setCat("All");
    setMode("Any");
    setLength("Any");
    setSort("Featured");
    setCatOpen(false);
  };

  const countLabel =
    results.length +
    (results.length === 1 ? " course" : " courses") +
    (cat !== "All" ? " · " + cat : "") +
    (mode !== "Any" ? " · " + mode : "") +
    (length !== "Any" ? " · " + length : "");

  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-9 md:pt-24 pb-8 sm:pb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[0.78125em] font-bold tracking-[0.14em] uppercase text-muted">
              All courses · {COURSES.length} tracks
            </span>
          </div>
          <h1 className="m-0 text-[clamp(2.5em,6.4vw,5.5em)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-225">
            Find your course.
          </h1>

          <div className="flex flex-wrap gap-3 items-center mt-10">
            <div
              className={`w-full flex items-center h-11.5 bg-white border rounded-full overflow-hidden flex-none transition-[max-width,box-shadow,border-color] duration-300 max-w-95 border-border shadow-[0_0.75em_1.75em_rgba(17,17,17,0.10)] ${
                searchOpen
                  ? "sm:max-w-95 sm:shadow-[0_0.75em_1.75em_rgba(17,17,17,0.10)]"
                  : "sm:max-w-11.5"
              }`}
            >
              <button
                onClick={toggleSearch}
                title="Search courses"
                className="flex-none w-11 h-11 border-none bg-transparent cursor-pointer flex items-center justify-center transition-transform hover:scale-115"
              >
                <AppIcon icon="hugeicons:search-02" size="sm" />
              </button>
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="hacking, python, excel, cloud…"
                className={`flex-1 border-none outline-none font-[inherit] text-sm text-fg bg-transparent min-w-0 transition-opacity duration-200 opacity-100 pointer-events-auto ${
                  searchOpen ? "" : "sm:opacity-0 sm:pointer-events-none"
                }`}
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

            <div ref={catMenuRef} className="relative flex-1 min-w-60 max-w-100">
              <button
                onClick={() => setCatOpen((o) => !o)}
                className="flex items-center justify-between gap-3.5 w-full bg-white border border-border rounded-full py-3 px-5 font-[inherit] text-sm font-semibold text-fg cursor-pointer "
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  {cat === "All" ? `All tracks (${COURSES.length})` : cat}
                </span>
                <AppIcon
                  icon={catOpen ? "hugeicons:arrow-up-01" : "hugeicons:arrow-down-01"}
                  size="xs"
                  className="flex-none text-muted"
                />
              </button>
              {catOpen && (
                <div className="scrollbar-thin absolute top-[calc(100%+0.5em)] left-0 right-0 bg-white border border-border rounded-[1.125em] shadow-[0_1.5em_3em_rgba(17,17,17,0.14)] p-2 max-h-85 overflow-auto z-[60]">
                  {CATS.map((name) => {
                    const count =
                      name === "All" ? COURSES.length : COURSES.filter((c) => c.cat === name).length;
                    const on = cat === name;
                    return (
                      <button
                        key={name}
                        onClick={() => {
                          setCat(name);
                          setCatOpen(false);
                        }}
                        className={`flex items-center justify-between gap-3 w-full border-none rounded-xl py-2.5 px-3.5 font-[inherit] text-[0.84375em] font-semibold cursor-pointer text-left hover:bg-bg hover:text-fg ${
                          on ? "bg-bg text-fg" : "bg-transparent text-muted"
                        }`}
                      >
                        <span className="flex items-center gap-2.25 min-w-0">
                          <span
                            className={`flex-none w-1.5 h-1.5 rounded-sm ${
                              on ? "bg-accent" : "bg-transparent"
                            }`}
                          />
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                            {name === "All" ? "All tracks" : name}
                          </span>
                        </span>
                        <span className="flex-none text-xs font-bold text-muted">{count}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-[0.78125em] font-bold tracking-[0.1em] uppercase text-muted">
                Sort
              </span>
              <div className="relative flex items-center gap-2.5">
                {SORTS.map((s) => (
                  <button
                    key={s}
                    ref={(el) => {
                      sortSlide.refs.current[s] = el;
                    }}
                    onClick={() => setSort(s)}
                    className={`border-none bg-transparent font-[inherit] text-[0.8125em] py-2 px-0.5 font-semibold cursor-pointer hover:text-fg ${
                      sort === s ? "text-fg" : "text-muted"
                    }`}
                  >
                    {s}
                  </button>
                ))}
                <span
                  aria-hidden
                  className="absolute bottom-0 h-0.5 bg-accent rounded-full transition-[left,width,opacity] duration-300 ease-out pointer-events-none"
                  style={{
                    left: sortSlide.indicator.left,
                    width: sortSlide.indicator.width,
                    opacity: sortSlide.indicator.visible ? 1 : 0,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-3 items-center">
            <span className="text-[0.78125em] font-bold tracking-[0.1em] uppercase text-muted mr-0.5">
              Mode
            </span>
            <div className="relative flex items-center gap-1.5 flex-wrap">
              {MODES.map((name) => (
                <button
                  key={name}
                  ref={(el) => {
                    modeSlide.refs.current[name] = el;
                  }}
                  onClick={() => setMode(name)}
                  className={`border-none bg-transparent font-[inherit] text-[0.78125em] py-1.5 px-0.5 font-semibold cursor-pointer hover:text-fg ${
                    mode === name ? "text-fg" : "text-muted"
                  }`}
                >
                  {name}
                </button>
              ))}
              <span
                aria-hidden
                className="absolute bottom-0 h-0.5 bg-accent rounded-full transition-[left,width,opacity] duration-300 ease-out pointer-events-none"
                style={{
                  left: modeSlide.indicator.left,
                  width: modeSlide.indicator.width,
                  opacity: modeSlide.indicator.visible ? 1 : 0,
                }}
              />
            </div>
            <div className="flex items-center gap-1.5 flex-wrap sm:ml-3.5">
              <span className="text-[0.78125em] font-bold tracking-[0.1em] uppercase text-muted">
                Length
              </span>
              <div className="relative flex items-center gap-1.5 flex-wrap">
                {LENGTHS.map((name) => (
                  <button
                    key={name}
                    ref={(el) => {
                      lengthSlide.refs.current[name] = el;
                    }}
                    onClick={() => setLength(name)}
                    className={`border-none bg-transparent font-[inherit] text-[0.78125em] py-1.5 px-0.5 font-semibold cursor-pointer hover:text-fg ${
                      length === name ? "text-fg" : "text-muted"
                    }`}
                  >
                    {name}
                  </button>
                ))}
                <span
                  aria-hidden
                  className="absolute bottom-0 h-0.5 bg-accent rounded-full transition-[left,width,opacity] duration-300 ease-out pointer-events-none"
                  style={{
                    left: lengthSlide.indicator.left,
                    width: lengthSlide.indicator.width,
                    opacity: lengthSlide.indicator.visible ? 1 : 0,
                  }}
                />
              </div>
            </div>
            {anyFilterActive && (
              <button
                onClick={resetAll}
                className="border-none bg-transparent font-[inherit] text-[0.78125em] font-bold text-fg cursor-pointer border-b-2 border-accent pb-0.25 ml-2.5"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-2 pb-10 md:pb-24">
          <div className="text-[0.8125em] font-semibold text-muted mb-5">{countLabel}</div>
          {results.length > 0 ? (
            <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(min(100%,20em),1fr))]">
              {results.map((c) => (
                <div
                  key={c.slug}
                  className="bg-white border border-border rounded-[1.25em] overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-[0_1.25em_2.5em_rgba(17,17,17,0.08)]"
                >
                  <div className="relative h-42.5 flex-none">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      sizes="(min-width: 1280px) 320px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                    {c.tag && (
                      <div className="absolute top-3.5 left-3.5 flex gap-1.5 flex-wrap pointer-events-none">
                        <span className="text-[0.6875em] font-bold tracking-[0.06em] uppercase bg-accent px-2.75 py-1.25 rounded-full">
                          {c.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="pt-5 px-5.5 pb-5.5 flex flex-col gap-2.5 flex-1">
                    <div className="flex justify-between items-center gap-2.5">
                      <span className="text-[0.71875em] font-bold tracking-[0.12em] uppercase text-muted">
                        {c.cat}
                      </span>
                      <span className="text-[0.71875em] font-bold bg-bg border border-border px-2.5 py-1 rounded-full whitespace-nowrap">
                        {c.mode}
                      </span>
                    </div>
                    <Link
                      href={`/courses/${c.slug}`}
                      className="text-[clamp(1.0625em,1.7vw,1.25em)] font-extrabold tracking-[-0.015em] leading-[1.2] text-fg hover:underline hover:decoration-accent hover:decoration-2"
                    >
                      {c.title}
                    </Link>
                    <p className="m-0 text-[0.84375em] leading-snug text-muted flex-1">{c.blurb}</p>
                    <div className="flex gap-3.5 border-t border-border pt-3 text-[0.78125em] font-semibold text-muted">
                      <span>{c.duration}</span>
                      <span>{c.lectures}</span>
                      <span>{c.projects}</span>
                    </div>
                    <div className="flex gap-2.5 mt-1">
                      <Link
                        href={`/courses/${c.slug}`}
                        className="flex-1 text-center bg-[#FFD300] text-fg font-bold text-[0.8125em] py-2.75 rounded-full hover:bg-accent"
                      >
                        View Course
                      </Link>
                      <Link
                        href="/enroll"
                        className="flex-1 text-center border border-border-strong text-fg font-semibold text-[0.8125em] py-2.75 rounded-full "
                      >
                        Inquiry
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-18 px-6 border border-dashed border-border-strong rounded-[1.25em]">
              <div className="text-xl font-extrabold">No courses match.</div>
              <p className="mx-auto mt-2 mb-5.5 text-sm text-muted max-w-90">
                Try a different keyword, or clear the filters below.
              </p>
              <button
                onClick={resetAll}
                className="border-none bg-[#FFD300] text-fg font-[inherit] font-bold text-sm px-6.5 py-3.25 rounded-full cursor-pointer hover:bg-accent"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
