"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TopBar from "./topbar";
<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&family=Raleway:wght@600&display=swap');
`}</style>;

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "NEWS & EVENTS", href: "/events" },
  { label: "ADMISSIONS", href: "/admissions" },
  { label: "ACADEMICS", href: "/academics" },
  { label: "STAFF", href: "/staff" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 ${scrolled ? "shadow-xl" : ""}`}
    >
      {/* Main Nav */}
      <div className="bg-white border-b border-gray-200 shadow-sm pt-3 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between pb-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Shield logo placeholder — replace with <Image> if you have the asset */}
            <div className="lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center">
              <img src="logo.jpg" alt="" />
            </div>

            <div className="leading-tight">
              <div
                style={{ fontFamily: "'Cinzel', serif" }}
                className="text-[#1a2a5e] font-extrabold text-xl lg:text-2xl tracking-tight"
              >
                THE MILESTONE
              </div>
              <div
                style={{ fontFamily: "'Cinzel', serif" }}
                className="text-[#1f5fc4] text-xs tracking-widest font-semibold pl-1"
              >
                SCHOOLING SYSTEM
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#1a1a1a] text-[14px] font-bold tracking-wide px-4 py-2 border-b-2 border-b-transparent hover:border-blue-500 transition-all duration-200 ease-in-out whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[#2e6fd4] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#2e6fd4] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#2e6fd4] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-105 mt-3" : "max-h-0"}`}
        >
          <nav className="flex flex-col border-t border-gray-100 pt-2 px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#1a1a1a] text-[14px] font-semibold tracking-wide px-3 py-3 border-b border-gray-50 hover:text-[#2e6fd4] hover:bg-blue-50 transition-colors duration-150"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="block lg:hidden">
            <TopBar />
          </div>
        </div>
      </div>
    </header>
  );
}
