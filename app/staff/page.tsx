"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/breadcrum";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface StaffMember {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  department: string;
  bio: string;
  image: string;
}

const principal = {
  name: "Mr. Abdullah Malik",
  designation: "Principal",
  qualification: "M.Ed, University of Karachi",
  bio: "With over 20 years in education, Mr. Malik leads The Milestone Schooling System with a vision of academic excellence and character development. He believes every child has the potential to achieve greatness with the right guidance and environment.",
  image: "/principal-photo/img-1.jpg",
};

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Mrs. Sadia Farooq",
    designation: "Vice Principal",
    qualification: "M.A Education, KU",
    department: "Administration",
    bio: "Mrs. Farooq oversees academic operations and student welfare, ensuring a nurturing and productive school environment.",
    image: "https://placehold.co/300x300/1a56db/ffffff?text=SF",
  },
  {
    id: 2,
    name: "Mr. Tariq Hussain",
    designation: "Admin Coordinator",
    qualification: "BBA, IBA Karachi",
    department: "Administration",
    bio: "Mr. Hussain manages the school's administrative functions, ensuring smooth day-to-day operations.",
    image: "https://placehold.co/300x300/1a3272/ffffff?text=TH",
  },
  {
    id: 3,
    name: "Ms. Ayesha Noor",
    designation: "Senior English Teacher",
    qualification: "M.A English Literature, KU",
    department: "Teaching",
    bio: "Ms. Noor brings a passion for literature and language, helping students develop strong communication skills.",
    image: "https://placehold.co/300x300/1a56db/ffffff?text=AN",
  },
  {
    id: 4,
    name: "Mr. Bilal Ahmed",
    designation: "Mathematics Teacher",
    qualification: "M.Sc Mathematics, KU",
    department: "Teaching",
    bio: "Mr. Ahmed uses creative problem-solving methods to make mathematics accessible and enjoyable.",
    image: "https://placehold.co/300x300/1a3272/ffffff?text=BA",
  },
  {
    id: 5,
    name: "Ms. Hina Rizvi",
    designation: "Science Teacher",
    qualification: "M.Sc Physics, NED University",
    department: "Teaching",
    bio: "Ms. Rizvi inspires curiosity through hands-on experiments and real-world applications of scientific concepts.",
    image: "https://placehold.co/300x300/1a56db/ffffff?text=HR",
  },
  {
    id: 6,
    name: "Mr. Usman Ghani",
    designation: "Urdu Teacher",
    qualification: "M.A Urdu, KU",
    department: "Teaching",
    bio: "Mr. Ghani fosters a deep appreciation for Urdu language and literature, connecting students with their cultural heritage.",
    image: "https://placehold.co/300x300/1a3272/ffffff?text=UG",
  },
  {
    id: 7,
    name: "Ms. Zara Khan",
    designation: "Computer Science Teacher",
    qualification: "B.S Computer Science, FAST",
    department: "Teaching",
    bio: "Ms. Khan equips students with 21st-century digital skills covering programming and technology literacy.",
    image: "https://placehold.co/300x300/1a56db/ffffff?text=ZK",
  },
  {
    id: 8,
    name: "Mr. Kamran Iqbal",
    designation: "Pakistan Studies Teacher",
    qualification: "M.A History, KU",
    department: "Teaching",
    bio: "Mr. Iqbal brings history and civics to life through storytelling, discussions, and critical thinking activities.",
    image: "https://placehold.co/300x300/1a3272/ffffff?text=KI",
  },
  {
    id: 9,
    name: "Ms. Farah Siddiqui",
    designation: "Early Years Teacher",
    qualification: "B.Ed, Montessori Certified",
    department: "Teaching",
    bio: "Ms. Farah creates a warm, play-based learning environment for our youngest students.",
    image: "https://placehold.co/300x300/1a56db/ffffff?text=FS",
  },
  {
    id: 10,
    name: "Mr. Naveed Akhtar",
    designation: "Librarian",
    qualification: "B.A Library Sciences",
    department: "Support",
    bio: "Mr. Naveed manages the school library and promotes a culture of reading among all students.",
    image: "https://placehold.co/300x300/1a3272/ffffff?text=NA",
  },
  {
    id: 11,
    name: "Ms. Robia Saleem",
    designation: "Counselor",
    qualification: "M.A Psychology, KU",
    department: "Support",
    bio: "Ms. Robia supports students' emotional and academic well-being, providing guidance and a safe space.",
    image: "https://placehold.co/300x300/1a56db/ffffff?text=RS",
  },
];

const departments = ["All", "Administration", "Teaching", "Support"];

// ─── Round Staff Card ──────────────────────────────────────────────────────────

const StaffCard: React.FC<{ member: StaffMember }> = ({ member }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center text-center group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Round image with ring effect */}
      <div className="relative mb-4">
        {/* Animated outer ring */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #1a3272, #1a56db)",
            transform: hovered ? "scale(1.08)" : "scale(1.04)",
            opacity: hovered ? 1 : 0.5,
          }}
        />
        {/* White gap ring */}
        <div className="absolute inset-0.5 rounded-full bg-white" />
        {/* Image */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          />
        </div>

        {/* Department badge */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-white text-xs font-bold whitespace-nowrap"
          style={{ background: "#1a56db", fontSize: "0.6rem" }}
        >
          {member.department}
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 px-2">
        <h3
          className="font-extrabold text-sm leading-tight transition-colors duration-200"
          style={{ color: hovered ? "#1a56db" : "#1a3272" }}
        >
          {member.name}
        </h3>
        <p className="text-xs font-semibold mt-1" style={{ color: "#1a56db" }}>
          {member.designation}
        </p>
        <p className="text-xs text-gray-400 mt-1">{member.qualification}</p>

        {/* Bio on hover */}
        <div
          className="overflow-hidden transition-all duration-300 text-xs text-gray-500 leading-relaxed"
          style={{
            maxHeight: hovered ? "80px" : "0px",
            marginTop: hovered ? "8px" : "0px",
          }}
        >
          {member.bio}
        </div>
      </div>
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────────

const StaffPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = staffMembers.filter((m) => {
    const matchesDept = activeTab === "All" || m.department === activeTab;
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.designation.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <main>
      <Breadcrumb
        title="Our Staff"
        items={[{ label: "Home", href: "/" }, { label: "Staff" }]}
      />

      {/* ── STAFF GRID ── */}
      <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span
                className="h-0.5 w-8 rounded"
                style={{ background: "#1a56db" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#1a56db" }}
              >
                Meet The Team
              </span>
              <span
                className="h-0.5 w-8 rounded"
                style={{ background: "#1a56db" }}
              />
            </div>
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: "#1a3272" }}
            >
              Our Dedicated Staff
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
              Our passionate educators and administrators are committed to
              shaping the future of every student at The Milestone Schooling
              System.
            </p>
          </div>

          {/* ── PRINCIPAL BANNER ── */}
          <section
            style={{
              background: "linear-gradient(135deg, #1a3272 0%, #1a56db 100%)",
            }}
            className="py-16 px-4 md:px-10 lg:px-20 my-16 relative w-screen left-1/2 -translate-x-1/2"
          >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
              {/* Round image */}
              <div className="shrink-0">
                <div className="relative">
                  <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                    <img
                      src={principal.image}
                      alt={principal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badge */}
                  <div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold text-white whitespace-nowrap shadow-lg"
                    style={{ background: "#f6ad10" }}
                  >
                    Principal
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-white text-center md:text-left">
                {/* Label */}
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2">
                  Meet Our Principal
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-1">
                  {principal.name}
                </h2>
                <p className="text-blue-200 text-sm mb-4">
                  {principal.qualification}
                </p>
                {/* Divider */}
                <div className="w-12 h-0.5 bg-yellow-400 mb-4 mx-auto md:mx-0" />
                <p className="text-blue-100 text-sm leading-relaxed max-w-xl">
                  "{principal.bio}"
                </p>
              </div>
            </div>
          </section>

          {/* Filters + Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveTab(dept)}
                  className="px-5 py-2 rounded-full text-sm font-bold transition-all duration-200"
                  style={{
                    background: activeTab === dept ? "#1a56db" : "#fff",
                    color: activeTab === dept ? "#fff" : "#64748b",
                    boxShadow:
                      activeTab === dept
                        ? "0 4px 14px rgba(26,86,219,0.3)"
                        : "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by name or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-full border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
          </div>

          {/* Count */}
          <p className="text-xs text-gray-400 mb-8">
            Showing{" "}
            <span className="font-bold" style={{ color: "#1a56db" }}>
              {filtered.length}
            </span>{" "}
            staff member{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
              {filtered.map((member) => (
                <StaffCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto mb-4 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="font-semibold text-sm">No staff members found.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default StaffPage;
