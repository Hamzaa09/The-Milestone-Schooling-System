"use client";

import React, { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  achievement: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "ZAHRA NAWAZ",
    achievement: "3rd Position Federal Board - 1031/1050",
    quote:
      "I am extremely happy and thankful to be a part of The Milestone family. My teachers have always motivated and encouraged me and through their positive mentoring, I have finally achieved my goals. That is why I Love The Milestone.",
    image: "https://placehold.co/200x200/ffffff/1a3a6b?text=ZN",
  },
  {
    id: 2,
    name: "ALI HASSAN",
    achievement: "1st Position District Board - 1045/1050",
    quote:
      "The Milestone Schooling System gave me the confidence and knowledge to excel in my exams. The faculty here is outstanding and always ready to help. I owe my success to this institution.",
    image: "https://placehold.co/200x200/ffffff/1a3a6b?text=AH",
  },
  {
    id: 3,
    name: "SANA MALIK",
    achievement: "Top Scorer - Cambridge O-Levels 2024",
    quote:
      "Studying at Milestone was a life-changing experience. The teachers pushed us to think beyond textbooks and prepared us for real-world challenges. I am proud to be a Milestone student.",
    image: "https://placehold.co/200x200/ffffff/1a3a6b?text=SM",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 250);
  };

  const prev = () =>
    goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const t = testimonials[current];

  return (
    <section
      style={{ backgroundColor: "#1a3272" }}
      className="w-full py-16 px-4 relative"
    >
      {/* Main container */}
      <div className="max-w-5xl mx-auto relative">
        {/* Prev Arrow */}
        <button
          onClick={prev}
          className="absolute -left-8 md:-left-14 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-200 z-10 hidden md:block"
          aria-label="Previous"
          style={{ fontSize: "2.5rem", lineHeight: 1 }}
        >
          &#8249;
        </button>

        {/* Content */}
        <div
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-opacity duration-300"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {/* Left: Quote */}
          <div className="flex-1 text-white relative min-w-0">
            {/* Quote marks */}
            <div className="flex gap-1 mb-4">{/* <img src="" alt="" /> */}</div>

            <p
              className="italic leading-relaxed mb-6 text-center md:text-left flex"
              style={{ color: "#c8d4f0", fontSize: "0.95rem" }}
            >
              <img src="quote-img.png" alt="Quote mark" className="h-10 w-10 -mt-5 mr-2 inline-block" />

              {t.quote}
            </p>

            <div className="shrink-0 w-full flex items-center justify-center my-5">
              <div className="rounded-full overflow-hidden border-4 border-white/20 shadow-2xl h-24 w-24 md:hidden block">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-wide flex justify-center md:justify-start">
              {t.name}
            </h3>
            <p
              className="mt-1 text-sm flex justify-center md:justify-start"
              style={{ color: "#7a9fd4" }}
            >
              {t.achievement}
            </p>
          </div>

          {/* Right: Circular Image */}
          <div className="shrink-0">
            <div className="rounded-full overflow-hidden border-4 border-white/20 shadow-2xl h-32 w-32 md:block hidden">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          className="absolute -right-8 md:-right-14 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-200 z-10 hidden md:block"
          aria-label="Next"
          style={{ fontSize: "2.5rem", lineHeight: 1 }}
        >
          &#8250;
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5 md:mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === current ? "20px" : "8px",
              backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
