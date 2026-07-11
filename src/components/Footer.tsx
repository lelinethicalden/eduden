import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/eduden-logo.png";

export default function Footer() {
  return (
    <div>
      <footer className="bg-fg text-muted-dark">
        <div className="max-w-7xl mx-auto px-7 pt-16">
          <div className="grid gap-10 pb-14 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            <div className="flex flex-col gap-3.5">
              <div className="text-xs font-bold tracking-[0.14em] uppercase text-bg">
                EduDen
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Hands-on, mentor-led tech education in Kolkata &amp; online.
                Real projects, verified assignments, career-focused training.
              </p>
            </div>
            <div className="flex flex-col gap-2.75">
              <div className="text-xs font-bold tracking-[0.14em] uppercase text-bg">
                Explore
              </div>
              <Link href="/about" className="text-sm text-[#9B978E]">
                About
              </Link>
              <Link href="/courses" className="text-sm text-[#9B978E]">
                All Courses
              </Link>
              <Link href="/faculty" className="text-sm text-[#9B978E]">
                Faculty
              </Link>
              <Link href="/placement" className="text-sm text-[#9B978E]">
                Placement
              </Link>
              <Link href="/whats-new" className="text-sm text-[#9B978E]">
                What&apos;s New
              </Link>
            </div>
            <div className="flex flex-col gap-2.75">
              <div className="text-xs font-bold tracking-[0.14em] uppercase text-bg">
                Students
              </div>
              <Link href="/verify" className="text-sm text-[#9B978E]">
                Verify Certificate
              </Link>
              <Link href="/brochure" className="text-sm text-[#9B978E]">
                Download Brochure
              </Link>
              <Link href="/enroll" className="text-sm text-[#9B978E]">
                Admission Inquiry
              </Link>
            </div>
            <div className="flex flex-col gap-2.75">
              <div className="text-xs font-bold tracking-[0.14em] uppercase text-bg">
                Contact
              </div>
              <div className="text-sm leading-snug">
                Nokia Care Building,
                <br />
                South Dumdum, Kolkata
              </div>
              <a
                href="mailto:hello@eduden.io"
                className="text-sm text-[#9B978E]"
              >
                hello@eduden.io
              </a>
              <div className="flex gap-3.5 mt-1.5 text-[13px] font-semibold">
                <a href="#" className="text-[#9B978E]">
                  LinkedIn
                </a>
                <a href="#" className="text-[#9B978E]">
                  Instagram
                </a>
                <a href="#" className="text-[#9B978E]">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="pt-2 overflow-hidden">
            <Image
              src={logo}
              alt="EduDen"
              className="w-[min(520px,72%)] h-auto opacity-90"
            />
          </div>
          <div className="border-t border-white/10 mt-10 py-5 flex flex-wrap gap-3 justify-between text-[12.5px] text-muted">
            <span>© 2026 EduDen. All rights reserved.</span>
            <span>Where learning meets imagination &amp; innovation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
