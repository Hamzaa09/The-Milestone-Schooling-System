"use client";

import Breadcrumb from "@/components/breadcrum";
import React, { useState } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const classGroups = [
  {
    label: "KG & I",
    color: "#e53e3e",
    subjects: "English, Urdu, Mathematics and General Knowledge (oral)",
  },
  {
    label: "Class II to VII",
    color: "#1a56db",
    subjects: "English, Urdu, Mathematics and Science",
  },
];

const ageData = [
  { level: "PG", min: "2 Years 6 Months", max: "3 Years 6 Months" },
  { level: "Nursery", min: "3 Years 6 Months", max: "4 Years 6 Months" },
  { level: "KG", min: "4 Years", max: "5 Years" },
  { level: "Class I", min: "5 Years", max: "6 Years" },
  { level: "Class II", min: "6 Years", max: "7 Years" },
  { level: "Class III", min: "7 Years", max: "8 Years" },
  { level: "Class IV", min: "8 Years", max: "9 Years" },
  { level: "Class V", min: "9 Years", max: "10 Years" },
  { level: "Class VI", min: "10 Years", max: "11 Years" },
  { level: "Class VII", min: "11 Years", max: "12 Years" },
  { level: "Class VIII", min: "12 Years", max: "13 Years" },
  { level: "Class IX", min: "13 Years", max: "14 Years" },
  { level: "Class X", min: "14 Years", max: "15 Years" },
];

const steps = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "#1a56db",
    text: "Schedule for date of interview and the admission test is announced",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    color: "#1a56db",
    text: "An oral and written test is conducted as per schedule (written test not applicable for pre-school)",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
        />
      </svg>
    ),
    color: "#1a56db",
    text: "Results of the admission test are announced",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    // color: "#f6ad10",
    color: "#1a56db",
    text: "The child and his/her parents are interviewed by the School Head (and possibly also by attending staff members)",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "#1a56db",
    text: "Should the child clear admission test and interview, the admission fee invoice is to be submitted at the school to complete the admission process",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-3 mb-3">
      <span className="h-0.5 w-10 rounded" style={{ background: "#1a56db" }} />
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: "#1a56db" }}
      >
        Admissions
      </span>
      <span className="h-0.5 w-10 rounded" style={{ background: "#1a56db" }} />
    </div>
    <h2
      className="text-2xl md:text-3xl font-extrabold"
      style={{ color: "#1a3272" }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

// Section 1 — Admission Test Info
const AdmissionTestSection = () => (
  <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title="Admission Test"
        subtitle="There is no written test for pre-school. The admission test for primary and secondary school is based on the following subjects and classes."
      />

      {/* Class circles */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-12">
        {classGroups.map((g, i) => (
          <div key={i} className="flex flex-col items-center gap-5">
            <div
              className="w-44 h-44 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: g.color }}
            >
              <span className="text-white font-extrabold text-2xl text-center leading-snug px-4">
                {g.label}
              </span>
            </div>
            <p
              className="text-center font-semibold text-sm max-w-45"
              style={{ color: "#1a2a5e" }}
            >
              {g.subjects}
            </p>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div
        className="rounded-xl p-6 md:p-8 text-white text-center space-y-4 text-sm leading-relaxed"
        style={{ background: "#4a5568" }}
      >
        <p className="font-semibold">
          The admission test is structured to fit onto one page with questions
          from all subjects and each paper is for 100 marks, which are spread
          evenly across all subjects.
        </p>
        <p className="font-semibold">
          No other personnel other than the designated invigilators are allowed
          at the time of the test. The invigilators provide guidance and support
          to the children during the test if required.
        </p>
      </div>
    </div>
  </section>
);

// Section 2 — Age Limit Table
const AgeLimitSection = () => (
  <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
    <div className="max-w-4xl mx-auto">
      <h2
        className="text-2xl md:text-3xl font-extrabold mb-2"
        style={{ color: "#1a2a5e" }}
      >
        Age Limit
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Please see details of minimum and maximum age standards defined for each
        class level:
      </p>

      <div className="overflow-x-auto rounded-xl shadow">
        <table className="w-full text-sm border-collapse bg-white">
          <thead>
            <tr style={{ borderBottom: "2px solid #1a2a5e" }}>
              {["Class Level", "Minimum", "Maximum"].map((h) => (
                <th
                  key={h}
                  className="text-left py-4 px-6 font-bold"
                  style={{ color: "#1a2a5e" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ageData.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="py-3 px-6 text-gray-700 font-medium">
                  {row.level}
                </td>
                <td className="py-3 px-6 text-gray-600">{row.min}</td>
                <td className="py-3 px-6 text-gray-600">{row.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-400 text-xs mt-4">
        Note: children who do not fall within the defined age limits can be
        considered for acceptance in exceptional cases.
      </p>
    </div>
  </section>
);

// Section 3 — Admission Steps Timeline
const AdmissionStepsSection = () => (
  <section
    className="py-16 px-6 md:px-16 lg:px-24"
    style={{ background: "#1a3272" }}
  >
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-0.5 w-10 rounded bg-blue-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
            How It Works
          </span>
          <span className="h-0.5 w-10 rounded bg-blue-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          Admission Process
        </h2>
      </div>

      <div className="flex flex-col items-center">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            {/* Step number + horizontal lines */}
            <div className="flex items-center w-full gap-3 mb-6">
              <div className="flex-1 h-px bg-blue-800 " />
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{
                  background: "#2d3f6e",
                  color: "#94a3b8",
                  border: "1px solid #3d5080",
                }}
              >
                {i + 1}
              </div>
              <div className="flex-1 h-px bg-blue-800" />
            </div>

            {/* Icon circle */}
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center text-white shadow-xl mb-5 bg-[#1a56db] hover:bg-[#f6ad10] hover:cursor-pointer transition-colors duration-200`}
            >
              {step.icon}
            </div>

            {/* Text */}
            <p className="text-white/90 text-center text-sm leading-relaxed max-w-md mb-2">
              {step.text}
            </p>

            {/* Spacer between steps */}
            {i < steps.length - 1 && <div className="h-8" />}
          </div>
        ))}

        {/* Final note */}
        <div className="mt-12 text-center">
          <p className="text-blue-300 text-sm">
            Please Note: Deposit fee at the designated bank or school along with
            the complete registration form.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ─── Main Page ───────────────────────────────────────────────────────────────

const AdmissionsPage: React.FC = () => {
  return (
    <main>
      <Breadcrumb
        title="Admissions"
        items={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      />
      <AdmissionTestSection />
      <AgeLimitSection />
      <AdmissionStepsSection />
    </main>
  );
};

export default AdmissionsPage;
