import { FaFacebook, FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { FaMap, FaSquareWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function TopBar() {
  return (
    <div className="bg-[#2e6fd4] flex justify-center items-center">
      <div className="w-full max-w-7xl text-white text-sm flex items-center justify-between gap-y-2 px-6 py-3">
        {/* Left: contact info */}

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="tel:+923002371990"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <PhoneIcon />
            <span>+92 300 2371 990</span>
          </a>

          <span className="text-white select-none lg:block hidden">|</span>

          <a
            href="mailto:owaisabdulkhaliq17@gmail.com"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <MailIcon />
            <span>owaisabdulkhaliq17@gmail.com</span>
          </a>
        </div>

        {/* Right: portal links */}
        <div className="flex items-center gap-y-2 gap-x-3 font-semibold tracking-wide text-sm md:text-xl flex-col md:flex-row">
          <a
            href="https://www.facebook.com/profile.php?id=100089885838245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-yellow-300 hover:cursor-pointer" />
          </a>

          <a
            href="https://www.google.com/maps/place/The+Milestone+Schooling+System/@24.9140423,66.9620082,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb315f32131f1a7:0xbbd8b2ff3e169e5c!8m2!3d24.9140423!4d66.9620082!16s%2Fg%2F11tcztqtxx?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMap className="hover:text-yellow-300 hover:cursor-pointer" />
          </a>
          
          <a
            href="https://wa.me/923002371990"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className="hover:text-yellow-300 hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
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
