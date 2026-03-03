import Link from "next/link";
import React from "react";

const AboutSchool: React.FC = () => {
  return (
    <div className="bg-white py-16 lg:py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left: Text Content */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 uppercase leading-tight mb-6">
            About
            <br />
            <span className="text-[#2e6fd4]">The Milestone</span>
            <br />
            <span className="text-[#2e6fd4]">Schooling System</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
            Established in November 1975 as the Les Anges Montessori Academy for
            toddlers, Beaconhouse has since grown into a global network of
            private schools, institutes, and universities, imparting distinctive
            and meaningful education to students from pre-school to
            post-graduation. The Educators, a Project of Beaconhouse, celebrates
            25 years of dedicated service to educational development across the
            country with remarkable success. Established in 2002, it now has
            1,000+ campuses and is a market leader in Pakistan's educational
            landscape, with a presence in over 275+ cities and a student
            strength exceeding 240,000+. This makes The Educators one of the
            largest private school networks across Pakistan.
          </p>

          {/* Learn More Button */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold uppercase tracking-wide px-6 py-3 transition-colors duration-200"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Right: Video Thumbnail */}
        <div className="w-full lg:w-[480px] flex-shrink-0">
          <div className="relative rounded overflow-hidden shadow-md bg-gray-900 aspect-video">
            {/* Simulated video thumbnail - replace src with actual image */}
            <img
              src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              alt="The Educators Campus"
              className="w-full h-full object-cover opacity-80"
            />

            {/* Top bar overlay */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-white/90">
              <div className="flex items-center gap-2">
                {/* Logo placeholder */}
                <div className="lg:w-7 lg:h-7 w-4 h-4 flex items-center justify-center">
                  <img src="logo.jpg" alt="" />
                </div>

                <div className="leading-tight">
                  <p className="text-gray-800 text-sm font-medium">
                    The Milestone Schooling System
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-1 text-gray-600 text-sm hover:text-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
            </div>

            {/* Play button */}
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>

            {/* Admissions Open text overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <p className="text-white text-xl font-extrabold uppercase tracking-widest drop-shadow-lg">
                Admissions
              </p>
              <p className="text-white text-xl font-extrabold uppercase tracking-widest drop-shadow-lg">
                Open
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;
