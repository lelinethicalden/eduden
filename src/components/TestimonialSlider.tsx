"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  img: string;
};

export default function TestimonialSlider({
  items,
  intervalMs = 6000,
}: {
  items: Testimonial[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const paused = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Trailing clone of the first slide lets the track keep sliding left at
  // the loop point instead of snapping backward from last -> first.
  const slides = items.length > 1 ? [...items, items[0]] : items;

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => i + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  useEffect(() => {
    if (index !== items.length) return;
    const el = trackRef.current;
    if (!el) return;
    const onEnd = () => {
      setInstant(true);
      setIndex(0);
    };
    el.addEventListener("transitionend", onEnd, { once: true });
    return () => el.removeEventListener("transitionend", onEnd);
  }, [index, items.length]);

  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  const goTo = (i: number) => {
    setInstant(false);
    setIndex(i);
  };

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className={`flex ${instant ? "" : "transition-transform duration-700 ease-out"}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((t, i) => (
            <div key={i} className="w-full flex-none text-center">
              {/* <div className="relative w-19 h-19 rounded-full overflow-hidden mx-auto mb-7">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  sizes="76px"
                  className="object-cover"
                />
              </div> */}
              <p className="m-0 text-[clamp(21px,2.8vw,32px)] font-semibold tracking-[-0.02em] leading-[1.4] text-balance">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 text-sm font-bold">{t.name}</div>
              <div className="text-[13px] text-muted-dark mt-1">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          {items.map((t, i) => (
            <button
              key={t.name}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-none ${
                i === index % items.length
                  ? "w-6 bg-accent"
                  : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
