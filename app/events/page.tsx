"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/breadcrum";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { ArrowRight, ArrowRightIcon } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Annual Prize Distribution Ceremony 2024",
    excerpt:
      "The Milestone Schooling System held its grand annual prize distribution ceremony, honoring top-performing students across all grade levels with awards and certificates.",
    content: "",
    date: "March 10, 2024",
    category: "Events",
    image: "/news-events/img-1.jpg",
    author: "Admin",
  },
  {
    id: 2,
    title: "Science Exhibition Showcases Student Innovation",
    excerpt:
      "Students from Class V to X presented remarkable science projects at the annual Science Exhibition, impressing faculty, parents, and guest judges with their creativity.",
    content: "",
    date: "February 22, 2024",
    category: "Academics",
    image: "/news-events/img-2.jpg",
    author: "Admin",
  },
  {
    id: 3,
    title: "PAF Museum Educational Visit",
    excerpt:
      "Students of The Milestone Schooling System enjoyed an enriching educational trip to the PAF Museum, exploring the history of Pakistan's Air Force through interactive exhibits and historic aircraft displays.",
    content: "",
    date: "March 5, 2024",
    category: "Events",
    image: "/news-events/img-5.jpg",
    author: "Admin",
  },
  {
    id: 4,
    title: "Namaz Education Course Launched for All Students",
    excerpt:
      "The Milestone Schooling System has introduced a dedicated Namaz Education Course to help students learn the correct method, importance, and spiritual significance of daily prayers in Islam.",
    content: "",
    date: "February 10, 2024",
    category: "Academics",
    image: "/news-events/img-6.jpg",
    author: "Admin",
  },
  {
    id: 5,
    title: "Pakistan Independence Day Celebrated with Enthusiasm",
    excerpt:
      "Students, teachers, and staff came together for a vibrant Independence Day celebration featuring speeches, national songs, flag hoisting, and cultural performances.",
    content: "",
    date: "August 14, 2023",
    category: "Events",
    image: "/news-events/img-3.jpg",
    author: "Admin",
  },
];

const categories = [
  "All",
  "Events",
  "Academics",
  "Admissions",
  "Achievements",
  "Staff",
];

const categoryColors: Record<string, string> = {
  Events: "#2e6fd4",
  Academics: "#0e9f6e",
  Admissions: "#f6ad10",
  Achievements: "#e53e3e",
  Staff: "#7c3aed",
};

// ─── News Card ─────────────────────────────────────────────────────────────────

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row group hover:scale-102 transition-transform duration-300 hover:shadow-xl hover:cursor-pointer">
      {/* Left: Image */}
      <div className="w-full sm:w-56 md:w-64 shrink-0 overflow-hidden hover:scale-105 transition-transform duration-300">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 sm:h-full object-cover"
        />
      </div>

      {/* Right: Info */}
      <div className="flex flex-col justify-between p-5 md:p-6 flex-1 min-w-0">
        <div>
          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span
              className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-white"
              style={{ background: categoryColors[item.category] || "#2e6fd4" }}
            >
              {item.category}
            </span>
            <div className="flex items-center gap-1.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs">{item.date}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className="font-extrabold text-base md:text-lg leading-snug mb-2 transition-colors duration-200 group-hover:text-blue-600 line-clamp-2"
            style={{ color: "#1a3272" }}
          >
            {item.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {item.excerpt}
          </p>
        </div>

        {/* Bottom: Author + Read More */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "#2e6fd4" }}
            >
              {item.author[0]}
            </div>
            <span className="text-xs text-gray-400 font-medium">
              {item.author}
            </span>
          </div>

          <button className="mt-2 self-start bg-green-600 hover:bg-green-700 hover:cursor-pointer text-white text-xs font-bold uppercase tracking-wider px-5 py-2 transition-colors duration-200 flex items-center gap-1.5 rounded">
            Read More
            <ArrowRightIcon className="size-4"/>
          </button>

          {/* <button
            className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide transition-all duration-200 group-hover:gap-3"
            style={{ color: "#2e6fd4" }}
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button> */}
        </div>
      </div>
    </article>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────────

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = newsItems.filter((n) => {
    const matchesCat =
      activeCategory === "All" || n.category === activeCategory;
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main>
      <Breadcrumb
        title="News & Events"
        items={[{ label: "Home", href: "/" }, { label: "News & Events" }]}
      />

      <section className="bg-gray-50 min-h-screen py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span
                className="h-0.5 w-8 rounded"
                style={{ background: "#2e6fd4" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#2e6fd4" }}
              >
                Latest Updates
              </span>
              <span
                className="h-0.5 w-8 rounded"
                style={{ background: "#2e6fd4" }}
              />
            </div>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
              Stay up to date with the latest happenings, achievements, and
              announcements from The Milestone Schooling System.
            </p>
          </div>

          {/* Filters + Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
                  style={{
                    background: activeCategory === cat ? "#2e6fd4" : "#fff",
                    color: activeCategory === cat ? "#fff" : "#64748b",
                    boxShadow:
                      activeCategory === cat
                        ? "0 4px 14px rgba(26,86,219,0.3)"
                        : "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-60">
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
                placeholder="Search news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-full border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
          </div>

          {/* Count */}
          <p className="text-xs text-gray-400 mb-6">
            Showing{" "}
            <span className="font-bold" style={{ color: "#2e6fd4" }}>
              {filtered.length}
            </span>{" "}
            article{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* News List */}
          {filtered.length > 0 ? (
            <div className="flex flex-col gap-6">
              {filtered.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-gray-400">
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <p className="font-semibold text-sm">No news articles found.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearch("");
                }}
                className="mt-3 text-xs underline font-semibold"
                style={{ color: "#2e6fd4" }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
