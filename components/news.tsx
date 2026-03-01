"use client";

import React, { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "https://placehold.co/400x250/1a56db/ffffff?text=Event+1",
    title: "Annual Prize Distribution Ceremony",
    date: "March 10, 2024",
    excerpt:
      "The Milestone Schooling System held its annual prize distribution ceremony honoring top students from all grades...",
  },
  {
    id: 2,
    image: "https://placehold.co/400x250/1a56db/ffffff?text=Event+2",
    title: "Science Exhibition 2024",
    date: "February 22, 2024",
    excerpt:
      "Students showcased innovative science projects at the annual Science Exhibition, drawing praise from faculty and parents...",
  },
  {
    id: 3,
    image: "https://placehold.co/400x250/1a56db/ffffff?text=Event+3",
    title: "New Academic Year Enrollment Open",
    date: "January 15, 2024",
    excerpt:
      "Admissions are now open for the new academic year. Register your child at the nearest Milestone campus today...",
  },
  {
    id: 4,
    image: "https://placehold.co/400x250/1a56db/ffffff?text=Event+4",
    title: "Teachers Training Workshop",
    date: "December 5, 2023",
    excerpt:
      "Our faculty participated in an intensive professional development workshop to enhance modern teaching methodologies...",
  },
  {
    id: 5,
    image: "https://placehold.co/400x250/1a56db/ffffff?text=Event+5",
    title: "Inter-School Sports Competition",
    date: "November 18, 2023",
    excerpt:
      "Milestone students excelled at the inter-school sports competition, bringing home multiple trophies and medals...",
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
              <div key={item.id} className="px-3">
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
                    <h3 className="text-sm font-bold text-[#1f5fc4] leading-snug hover:text-blue-800 cursor-pointer transition-colors">
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
              </div>
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
