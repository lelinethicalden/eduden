import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-bg min-h-[calc(100vh-68px)] flex items-center">
      <div className="max-w-3xl mx-auto px-7 py-14 md:py-20 text-center w-full">
        <div className="text-[clamp(100px,18vw,200px)] font-black tracking-[-0.05em] leading-[0.9]">
          4<span className="text-accent">0</span>4
        </div>
        <h1 className="mt-7 text-[clamp(24px,3.4vw,38px)] font-black tracking-[-0.03em] uppercase leading-[1.05]">
          This page went out of syllabus.
        </h1>
        <p className="mt-4 mx-auto max-w-sm text-[15px] leading-relaxed text-muted">
          Let&apos;s get you back to learning.
        </p>
        <div className="flex gap-3 justify-center flex-wrap mt-9">
          <Link
            href="/"
            className="bg-fg text-bg font-bold text-[14.5px] px-7.5 py-3.75 rounded-full hover:bg-accent hover:text-fg"
          >
            Go Home
          </Link>
          <Link
            href="/courses"
            className="border border-border-strong font-semibold text-[14.5px] px-7.5 py-3.75 rounded-full hover:border-fg"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
