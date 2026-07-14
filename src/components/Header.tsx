"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import logo from "../../public/images/eduden-logo.png";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "What's New", href: "/whats-new" },
  { label: "Verify", href: "/verify" },
  { label: "Placement", href: "/placement" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  useLayoutEffect(() => {
    function measure() {
      const activeLink = linkRefs.current[pathname];
      if (activeLink) {
        setIndicator({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          visible: true,
        });
      } else {
        setIndicator((s) => ({ ...s, visible: false }));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-[1000] bg-bg/92 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-7 flex items-center justify-between gap-4 h-[68px]">
        <Link href="/" className="flex items-center flex-none">
          <Image src={logo} alt="eduden" className="h-7 w-auto" priority />
        </Link>

        <nav className="hidden min-[1080px]:flex items-center gap-6.5 relative">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                ref={(el) => {
                  linkRefs.current[l.href] = el;
                }}
                className={`text-[13.5px] whitespace-nowrap py-1 border-b-2 border-transparent transition-colors duration-200 hover:text-fg ${
                  active ? "font-bold text-fg" : "font-medium text-muted"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <span
            aria-hidden
            className="absolute bottom-0 h-0.5 bg-accent rounded-full transition-[left,width,opacity] duration-300 ease-out pointer-events-none"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.visible ? 1 : 0,
            }}
          />
        </nav>
        <Link
          href="/enroll"
          className="hidden min-[1080px]:block flex-none bg-[#FFD300] text-fg font-bold text-[13.5px] px-5.5 py-2.75 rounded-full hover:bg-accent"
        >
          Enroll Now
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
          className="max-[1079px]:flex hidden flex-col gap-1.25 justify-center items-center w-11 h-11 rounded-full border border-border-strong bg-white cursor-pointer"
        >
          <span
            className={`w-4.5 h-0.5 bg-fg block transition-transform duration-300 ease-out ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-4.5 h-0.5 bg-fg block transition-transform duration-300 ease-out ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`max-[1079px]:block hidden border-t border-border bg-bg overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-3 pb-6 flex flex-col">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-[17px] py-3.25 px-1 border-b border-border transition-colors duration-200 ${
                  active ? "font-bold text-fg" : "font-medium text-muted"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/enroll"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#FFD300] text-fg font-bold text-[15px] py-3.75 rounded-full text-center hover:bg-accent"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
