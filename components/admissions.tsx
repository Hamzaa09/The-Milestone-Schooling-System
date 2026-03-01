import React from "react";

interface AdmissionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const cards: AdmissionCard[] = [
  {
    icon: (
      // Document / clipboard icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "ADMISSION\nPROCEDURE",
    description:
      "There is no written test for pre-school. The admission test for primary and secondary school...",
    bgColor: "bg-indigo-500",
  },
  {
    icon: (
      // Megaphone / bullhorn icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "ACADEMICS",
    description:
      "The Educators Academic / Training Department works very closely with teachers for a...",
    bgColor: "bg-emerald-500",
  },
  {
    icon: (
      // Bookmark icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    ),
    title: "EXAMINATIONS",
    description:
      "The academic year commences from April and continues till March of next year. There are 2...",
    bgColor: "bg-yellow-400",
  },
  {
    icon: (
      // Edit / pencil-square icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "APPLY ONLINE",
    description:
      "Register your child with us at the nearest branch of The Educators.",
    bgColor: "bg-blue-900",
  },
];

const Admissions: React.FC = () => {
  return (
    <div className="bg-gray-100 py-24 px-6 md:px-16 lg:px-24 w-full">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center uppercase tracking-wide mb-10">
        Admissions
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} flex flex-col items-center text-center text-white px-6 py-10 cursor-pointer hover:brightness-110 transition-all duration-200`}
          >
            {/* Icon */}
            <div className="mb-4">{card.icon}</div>

            {/* Title */}
            <h3 className="text-base font-extrabold uppercase tracking-wide mb-4 whitespace-pre-line leading-snug">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed opacity-90">
              {card.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Admissions;