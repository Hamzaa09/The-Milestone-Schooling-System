"use client";

import Breadcrumb from "@/components/breadcrum";
import React, { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ClassData {
  id: string;
  label: string;
  category: string;
  tagline: string;
  overview: string;
  subjects: string[];
  image: string;
}

const classes: ClassData[] = [
  {
    id: "pg",
    label: "Play Group (PG)",
    category: "Early Years",
    tagline: "The first step of every great journey.",
    overview:
      "Play Group is designed to give toddlers their first experience of a structured learning environment. Through play-based activities, children develop social skills, curiosity, and a love of learning at the earliest stage.",
    subjects: [
      "Oral Communication",
      "Basic Numeracy",
      "Arts & Crafts",
      "Story Time",
      "Physical Activity",
    ],
    image: "https://placehold.co/800x400/1a56db/ffffff?text=Play+Group",
  },
  {
    id: "nursery",
    label: "Nursery",
    category: "Early Years",
    tagline: "Where curiosity meets creativity.",
    overview:
      "Nursery builds on early foundations through guided play, storytelling, and basic literacy. Children are introduced to letters, numbers, and the world around them in a nurturing, stimulating environment.",
    subjects: [
      "English (Oral)",
      "Urdu (Oral)",
      "Mathematics (Oral)",
      "General Knowledge",
      "Arts & Crafts",
    ],
    image: "https://placehold.co/800x400/1a56db/ffffff?text=Nursery",
  },
  {
    id: "kg",
    label: "Kindergarten (KG)",
    category: "Early Years",
    tagline: "Building blocks for a bright future.",
    overview:
      "Kindergarten introduces children to formal learning in a warm, supportive setting. Students begin reading, writing, and basic arithmetic while developing confidence and essential classroom skills.",
    subjects: [
      "English",
      "Urdu",
      "Mathematics",
      "General Knowledge (Oral)",
      "Arts & Crafts",
    ],
    image: "https://placehold.co/800x400/1a3272/ffffff?text=Kindergarten",
  },
  {
    id: "class1",
    label: "Class I",
    category: "Primary",
    tagline: "Laying a strong academic foundation.",
    overview:
      "Class I marks the beginning of structured primary education. Students develop reading fluency, number skills, and begin to explore the world through Science and Social Studies.",
    subjects: [
      "English",
      "Urdu",
      "Mathematics",
      "General Knowledge",
      "Islamiyat",
    ],
    image: "https://placehold.co/800x400/1a56db/ffffff?text=Class+I",
  },
  {
    id: "class2",
    label: "Class II",
    category: "Primary",
    tagline: "Growing minds, growing skills.",
    overview:
      "Class II students strengthen core literacy and numeracy skills while being introduced to more structured Science and Social Studies content. Creative thinking and teamwork are actively encouraged.",
    subjects: [
      "English",
      "Urdu",
      "Mathematics",
      "Science",
      "Social Studies",
      "Islamiyat",
    ],
    image: "https://placehold.co/800x400/1a3272/ffffff?text=Class+II",
  },
  {
    id: "class3to5",
    label: "Class III – V",
    category: "Primary",
    tagline: "Expanding knowledge, building confidence.",
    overview:
      "Classes III to V provide a rich and balanced curriculum. Students develop analytical thinking, written expression, and a deeper understanding of the sciences and humanities.",
    subjects: [
      "English",
      "Urdu",
      "Mathematics",
      "Science",
      "Social Studies",
      "Islamiyat",
      "Computer Science",
    ],
    image: "https://placehold.co/800x400/1a56db/ffffff?text=Class+III–V",
  },
  {
    id: "class6to8",
    label: "Class VI – VIII",
    category: "Middle School",
    tagline:
      "The quality of secondary education is critical for a successful career.",
    overview:
      "Middle school expands and improves the students' mental and physical faculties so that they may play their role as useful citizens of Pakistan. Students are prepared for the academic demands of secondary school.",
    subjects: [
      "English",
      "Urdu",
      "Mathematics",
      "Science",
      "Pakistan Studies",
      "Islamiyat",
      "Computer Science",
    ],
    image: "https://placehold.co/800x400/1a3272/ffffff?text=Class+VI–VIII",
  },
  {
    id: "class9to10",
    label: "Class IX – X (Matric)",
    category: "Secondary",
    tagline: "Achieving excellence at the national level.",
    overview:
      "Matriculation prepares students for the Secondary School Certificate (SSC) examination. The curriculum is aligned with the national board standards and focuses on building subject-specific expertise.",
    subjects: [
      "English",
      "Urdu",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Pakistan Studies",
      "Islamiyat",
      "Computer Science",
    ],
    image: "https://placehold.co/800x400/1a56db/ffffff?text=Matric+(IX–X)",
  },
  {
    id: "olevel",
    label: "O Level",
    category: "Secondary",
    tagline: "International standards, local excellence.",
    overview:
      "The O Level programme offers students an internationally recognised qualification through Cambridge Assessment International Education. It prepares students for higher studies both within Pakistan and abroad.",
    subjects: [
      "English Language",
      "Urdu",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Pakistan Studies",
      "Islamiyat",
      "Computer Science",
    ],
    image: "https://placehold.co/800x400/1a3272/ffffff?text=O+Level",
  },
];

const categories = [
  "All",
  "Early Years",
  "Primary",
  "Middle School",
  "Secondary",
];

// ─── Main Component ──────────────────────────────────────────────────────────

const AcademicsPage: React.FC = () => {
  const [selected, setSelected] = useState<ClassData>(classes[0]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? classes
      : classes.filter((c) => c.category === activeCategory);

  return (
    <main>
      <Breadcrumb
        title="Academics"
        items={[{ label: "Home", href: "/" }, { label: "Academics" }]}
      />

      <section className="bg-gray-50 min-h-screen py-12 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* ── LEFT SIDEBAR ── */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden sticky top-6">
              {/* Sidebar header */}
              <div className="px-5 py-4" style={{ background: "#1a3272" }}>
                <h3 className="text-white font-extrabold text-sm uppercase tracking-widest">
                  Our Classes
                </h3>
              </div>

              {/* Category filter tabs */}
              {/* <div className="flex flex-wrap gap-2 p-3 border-b border-gray-100">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="text-xs px-3 py-1 rounded-full font-semibold transition-all duration-200"
                    style={{
                      background:
                        activeCategory === cat ? "#1f5fc4" : "#f1f5f9",
                      color: activeCategory === cat ? "#fff" : "#64748b",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div> */}

              {/* Class list */}
              <ul className="divide-y divide-gray-50">
                {filtered.map((cls) => (
                  <li key={cls.id}>
                    <button
                      onClick={() => setSelected(cls)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 transition-all duration-200 group"
                      style={{
                        background:
                          selected.id === cls.id ? "#eff6ff" : "transparent",
                        borderLeft:
                          selected.id === cls.id
                            ? "4px solid #1f5fc4"
                            : "4px solid transparent",
                      }}
                    >
                      <div>
                        <p
                          className="text-sm font-bold leading-snug"
                          style={{
                            color:
                              selected.id === cls.id ? "#1f5fc4" : "#1a3272",
                          }}
                        >
                          {cls.label}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {cls.category}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 shrink-0 transition-transform duration-200"
                        style={{
                          color: selected.id === cls.id ? "#1f5fc4" : "#cbd5e1",
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ── RIGHT CONTENT PANEL ── */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Hero image */}
              <div className="relative w-full h-56 md:h-72 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.label}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                {/* Overlay badge */}
                <div
                  className="absolute bottom-0 left-0 px-6 py-3"
                  style={{ background: "rgba(26,50,114,0.85)" }}
                >
                  <span className="text-xs text-blue-300 font-semibold uppercase tracking-widest">
                    {selected.category}
                  </span>
                  <h2 className="text-white text-xl md:text-2xl font-extrabold leading-tight">
                    {selected.label}
                  </h2>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 md:p-10">
                {/* Tagline */}
                <p
                  className="text-base md:text-lg font-bold mb-4"
                  style={{ color: "#1a3272" }}
                >
                  {selected.tagline}
                </p>

                {/* Overview */}
                <div className="mb-8">
                  <h3
                    className="text-xl font-extrabold mb-3"
                    style={{ color: "#1f5fc4" }}
                  >
                    Overview
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selected.overview}
                  </p>
                </div>

                <hr className="border-gray-100 mb-8" />

                {/* Subjects */}
                <div>
                  <h3
                    className="text-xl font-extrabold mb-5"
                    style={{ color: "#1f5fc4" }}
                  >
                    Subjects Offered
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {selected.subjects.map((sub, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 shrink-0"
                          style={{ background: "#1a3272" }}
                        />
                        <span className="text-gray-700 text-sm font-medium">
                          {sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href="/admissions"
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white uppercase tracking-wide rounded transition-all duration-200 hover:opacity-90 hover:scale-105"
                    style={{ background: "#1f5fc4" }}
                  >
                    Apply for Admission
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
                  </a>
                  <a
                    href="/contact"
                    className="text-sm font-semibold flex items-center gap-1 hover:underline"
                    style={{ color: "#1f5fc4" }}
                  >
                    Contact Us for More Info
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AcademicsPage;
