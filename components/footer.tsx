import Link from "next/link";
import { FaFacebookF, FaMap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <section className="w-full px-6 md:px-16">
      <div className="pt-10 pb-5 sm:pt-16 lg:pt-24">
        <div className=" mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-5">
            <div className="col-span-2 md:col-span-3 lg:col-span-3 lg:pr-20">
              <Link href="/" className="flex gap-3 justify-start items-center">
                <img className="w-auto h-15" src="logo.jpg" alt="" />

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

              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                tenetur, rerum inventore rem molestias delectus accusantium
                corrupti neque beatae tempora exercitationem non repellendus
                minima velit qui, veritatis dolore quam obcaecati.
              </p>

              <ul className="flex items-center space-x-3 mt-9">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100089885838245"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-[#1a2a5e] rounded-full w-7 h-7 hover:bg-[#2e6fd4] focus:bg-[#2e6fd4]"
                  >
                    <FaFacebookF />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.google.com/maps/place/The+Milestone+Schooling+System/@24.9140423,66.9620082,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb315f32131f1a7:0xbbd8b2ff3e169e5c!8m2!3d24.9140423!4d66.9620082!16s%2Fg%2F11tcztqtxx?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-[#1a2a5e] rounded-full w-7 h-7 hover:bg-[#2e6fd4] focus:bg-[#2e6fd4]"
                  >
                    <FaMap />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/923002371990"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-[#1a2a5e] rounded-full w-7 h-7 hover:bg-[#2e6fd4] focus:bg-[#2e6fd4]"
                  >
                    <IoLogoWhatsapp />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/923002371990"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-[#1a2a5e] rounded-full w-7 h-7 hover:bg-[#2e6fd4] focus:bg-[#2e6fd4]"
                  >
                    <SiGmail />
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-lg font-bold tracking-wide text-[#1f5fc4] uppercase">
                Quick Links
              </p>

              <ul className="mt-6 space-y-2 md:space-y-4">
                <li>
                  <Link
                    href={"/"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/about"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/admissions"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Admissions
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/academics"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/staff"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Staff
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Admission & Academics  */}
            <div>
              <p className="text-lg font-bold tracking-wide text-[#1f5fc4] uppercase">
                Related Links
              </p>

              <ul className="mt-6 space-y-2 md:space-y-4">
                <li>
                  <Link
                    href={"/contact"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/contact"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Locate Us
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/contact"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Send an Inquiry
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/admission"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Admission Process
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/academics"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/staff"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Staff
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Admission & Academics  */}
            {/* <div>
              <p className="text-lg font-bold tracking-wide text-[#1f5fc4] uppercase">
                Related Links
              </p>

              <ul className="mt-6 space-y-2 md:space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Locate Us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Send an Inquiry
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Admission Process
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Admission Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    Academics Details
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="col-span-2 md:col-span-1">
              <p className="text-lg font-bold tracking-wide text-[#1f5fc4] uppercase">
                Contact Us
              </p>

              <ul className="mt-6 space-y-2 md:space-y-4">
                <li>
                  <a
                    href="tel:+923485379552"
                    className="flex gap-2 justify-start items-center text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    <span className="text-[#1f5fc4] group-hover:text-[#f5c518] transition-colors duration-300 mt-0.5">
                      <PhoneIcon />
                    </span>
                    +92 300 2371 990
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:owaisabdulkhaliq17@gmail.com"
                    className="flex gap-2 justify-start items-center text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]"
                  >
                    <span className="text-[#1f5fc4] group-hover:text-[#f5c518] transition-colors duration-300 mt-0.5">
                      <MailIcon />
                    </span>
                    owaisabdulkhaliq17@gmail.com
                  </a>
                </li>

                <a
                  href="https://www.google.com/maps/place/The+Milestone+Schooling+System/@24.9140423,66.9620082,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb315f32131f1a7:0xbbd8b2ff3e169e5c!8m2!3d24.9140423!4d66.9620082!16s%2Fg%2F11tcztqtxx?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex gap-2 justify-start items-start text-base text-black transition-all duration-200 hover:text-[#2e6fd4] focus:text-[#2e6fd4]">
                    <span className="text-[#1f5fc4] mt-2">
                      <FaLocationDot />
                    </span>
                    5.G 8/4 Saeedabad, Baldia Town, Karachi. , Karachi,
                    Pakistan, 75760
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <hr className="mt-16 mb-5 border-gray-200" />

          <p className="text-sm text-center text-gray-600">
            © Copyright 2026, The Milestone Schooling System
          </p>
        </div>
      </div>
    </section>
  );
}

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
