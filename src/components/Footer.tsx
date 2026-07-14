import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/eduden-logo-white-1.png";

export default function Footer() {
  return (
    <div>
      <footer className="bg-fg text-muted-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-10 sm:pt-16">
          <div className="grid gap-8 sm:gap-10 pb-10 sm:pb-14 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            <div className="flex flex-col gap-3.5">
              <div className="text-xs font-bold tracking-[0.14em] uppercase text-bg">
                eduden
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Practical, classroom-based technology training designed to build skills, confidence, and career opportunities through real projects and expert mentorship
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
              alt="eduden"
              width={226}
              height={61}
              className="w-[226px] h-[61px]"
            />
          </div>
          <div className="border-t border-white/10 mt-6 sm:mt-10 py-4 sm:py-5 flex flex-wrap gap-3 justify-between text-[12.5px] text-muted">
            <span>© 2026 eduden. All rights reserved.</span>
            <span>The Learning Division of <Link href="https://www.ethicalden.com/" className="text-[#FFD300] hover:underline" target="_blank">
              Ethical Den
            </Link></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
