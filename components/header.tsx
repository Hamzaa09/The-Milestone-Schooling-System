"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="hidden lg:block">
        <TopBar />
      </div>

      {/* Main Nav */}
      <div className="bg-white border-b border-gray-200 shadow-sm pt-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 pb-3">
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
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[#2e6fd4] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#2e6fd4] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#2e6fd4] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 mt-3" : "max-h-0"}`}
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

/* ── Inline SVG Icons ── */
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function TopBar() {
  return (
    <div className="bg-[#2e6fd4] flex justify-center items-center">
      <div className="w-full max-w-7xl text-white text-sm flex items-center justify-between gap-y-2 px-6 py-3">
        {/* Left: contact info */}

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="tel:+924211777800"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <PhoneIcon />
            <span>+92 348 5379 552</span>
          </a>

          <span className="text-white select-none lg:block hidden">|</span>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <MailIcon />
            <span>hamza036513@gmail.com</span>
          </a>
        </div>

        {/* Right: portal links */}
        <div className="flex items-center gap-y-2 gap-x-3 font-semibold tracking-wide text-sm md:text-xl flex-col md:flex-row">
          <FaFacebook className="hover:text-yellow-300 hover:cursor-pointer" />
          <FaXTwitter className="hover:text-yellow-300 hover:cursor-pointer" />
          <FaInstagram className="hover:text-yellow-300 hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
