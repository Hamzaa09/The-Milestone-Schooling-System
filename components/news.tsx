"use client";

import Link from "next/dist/client/link";
import React, { useEffect, useState } from "react";

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

const NewsEvents: React.FC = () => {
  const [SliderComponent, setSliderComponent] = useState<any>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    // Dynamically import react-slick only on client side
    Promise.all([
      import("react-slick"),
      import("slick-carousel/slick/slick.css" as any),
      import("slick-carousel/slick/slick-theme.css" as any),
    ]).then(([mod]) => {
      setSliderComponent(() => mod.default);
    });
  }, []);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 md:-translate-x-6 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-md"
      aria-label="Previous"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 md:translate-x-6 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-md"
      aria-label="Next"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="bg-[#2e6fd4] py-24 px-6 md:px-16 lg:px-24 w-full">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center uppercase tracking-widest mb-10">
        News &amp; Events
      </h2>

      {/* Slider */}
      <div className="max-w-5xl mx-auto relative">
        {SliderComponent ? (
          <SliderComponent {...settings}>
            {newsItems.map((item) => (
              <Link href="/events" key={item.id} className="px-3">
                <div className="bg-white flex flex-col overflow-hidden shadow-lg">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <span className="text-xs text-gray-400 font-medium">
                      {item.date}
                    </span>
                    <h3 className="text-sm font-bold text-[#1f5fc4] leading-snug hover:text-blue-800 cursor-pointer transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                    <button className="mt-2 self-start bg-green-500 hover:bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2 transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </SliderComponent>
        ) : (
          // Loading skeleton while slick loads
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/20 animate-pulse h-72 rounded" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsEvents;
