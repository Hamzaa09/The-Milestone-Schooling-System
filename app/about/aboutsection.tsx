import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-0.5 w-10" style={{ background: "#1a56db" }} />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#1a56db" }}
          >
            Who We Are
          </span>
        </div>
        {/* Main content: image + text */}
        <div className="max-w-6xl mx-auto">
          {/* Float left image */}
          <div className="float-left mr-8 mb-4 w-64 md:w-80">
            <div
              className="overflow-hidden shadow-md/30"
            >
              <img
                src="/principal-photo/img-1.jpg"
                alt="Principal"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text flows and wraps under image */}
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-2 leading-snug"
            style={{ color: "#1a3272" }}
          >
            Mr. Owais Abdul Khaliq
          </h2>

          <div
            className="h-1 w-16 rounded mb-6"
            style={{ background: "#1a56db" }}
          />

          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              "Welcome to The Milestone Schooling System. We believe every child
              deserves an education that nurtures not just academic excellence,
              but character, confidence, and curiosity. Our mission is to create
              a safe, inclusive, and inspiring environment where students can
              discover their true potential.
            </p>
            <p>
              Since our establishment, we have remained committed to delivering
              quality education that meets both national and international
              standards. Our experienced faculty, modern curriculum, and caring
              community make Milestone a place where students don't just learn —
              they grow.
            </p>
            <p>
              We are proud of the achievements of our students and remain
              dedicated to upholding the trust that parents and families place
              in us. Together, we are building the next generation of
              thoughtful, capable, and compassionate leaders.
            </p>
            <p>
              We invite you to be a part of the Milestone family — where every
              child's journey matters."
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="font-extrabold text-lg" style={{ color: "#1a3272" }}>
              Mr. Owais Abdul Khaliq
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Principal — The Milestone Schooling System
            </p>
          </div>

          {/* Clear float */}
          <div className="clear-both" />
        </div>
        {/* Bottom highlight cards
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              title: "Our Mission",
              desc: "To provide quality, accessible education that empowers every student to achieve their fullest potential.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
              title: "Our Vision",
              desc: "To be a leading institution that shapes confident, compassionate, and globally aware citizens.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Our Values",
              desc: "Integrity, excellence, respect, and a deep commitment to the holistic development of every child.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-3 border-t-4 hover:shadow-lg transition-shadow duration-200"
              style={{ borderColor: "#1a56db" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{ background: "#1a56db" }}
              >
                {card.icon}
              </div>
              <h3
                className="font-extrabold text-base"
                style={{ color: "#1a3272" }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
