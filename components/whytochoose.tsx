import React from "react";

interface FeatureItem {
  label: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    label: "Quality Education",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.5c0 3.314-4.03 6-9 6s-9-2.686-9-6a12.083 12.083 0 012.84-1.922L12 14z" />
      </svg>
    ),
  },
  {
    label: "Expert Faculty",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Modern Curriculum",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    label: "Safe Environment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Enroll Now",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const WhyMilestone: React.FC = () => {
  return (
    <div className="bg-gray-100 py-24 px-6 md:px-16 lg:px-24 w-full">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center uppercase tracking-wide mb-12">
        Why Milestone?
      </h2>

      {/* Icons Row */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            {/* Circle */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1f5fc4] flex items-center justify-center text-white shadow-md group-hover:bg-[#1f5fc4] group-hover:scale-105 transition-all duration-200">
              {feature.icon}
            </div>

            {/* Label */}
            <span className="text-sm text-gray-600 font-medium text-center group-hover:text-[#1f5fc4] transition-colors duration-200">
              {feature.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyMilestone;