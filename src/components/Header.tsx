"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
    <div className="sticky top-0 z-[1000] bg-bg/92 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-7 flex items-center justify-between gap-4 h-[68px]">
        <Link href="/" className="flex items-center flex-none">
          <Image src={logo} alt="EduDen" className="h-7 w-auto" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-6.5">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13.5px] whitespace-nowrap py-1 border-b-2 hover:text-fg ${
                  active
                    ? "font-bold text-fg border-accent"
                    : "font-medium text-muted border-transparent"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/enroll"
          className="hidden lg:block flex-none bg-fg text-bg font-bold text-[13.5px] px-5.5 py-2.75 rounded-full hover:bg-accent hover:text-fg"
        >
          Enroll Now
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          className="lg:hidden flex flex-col gap-1.25 justify-center items-center w-11 h-11 rounded-full border border-border-strong bg-white cursor-pointer"
        >
          <span className="w-4.5 h-0.5 bg-fg block" />
          <span className="w-4.5 h-0.5 bg-fg block" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-bg px-6 pt-3 pb-6 flex flex-col">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-[17px] py-3.25 px-1 border-b border-border ${
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
            className="mt-4 bg-fg text-bg font-bold text-[15px] py-3.75 rounded-full text-center"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </div>
  );
}
