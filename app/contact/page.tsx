"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/breadcrum";

// ─── Data ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "When does the admission process start?",
    a: "Admissions typically open at the beginning of the new academic year in January. We recommend checking our Admissions page or contacting us directly for the latest schedule.",
  },
  {
    q: "Is there an admission test for pre-school?",
    a: "No. There is no written test for pre-school (PG, Nursery, KG). Admission tests apply only from Class I onwards.",
  },
  {
    q: "What documents are required for admission?",
    a: "You will need the child's Birth Certificate (B-Form), parent/guardian CNIC copies, recent passport-size photographs, and the previous school's leaving certificate (if applicable).",
  },
  {
    q: "What are the school timings?",
    a: "School timings are typically from 8:00 AM to 2:00 PM, Monday to Saturday. Timings may vary by class level — please contact us for exact schedules.",
  },
  {
    q: "Do you offer transportation facilities?",
    a: "Yes, we provide school van/bus transport services for students. Please contact the school office for routes and availability in your area.",
  },
  {
    q: "How can I meet the Principal?",
    a: "You can request an appointment with the Principal by visiting the school during office hours or calling us. Walk-in meetings are subject to availability.",
  },
];

const contactInfo = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Phone",
    value: "+92 300 2371 990",
    href: "tel:+923485379552",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "owaisabdulkhaliq17@gmail.com",
    href: "mailto:owaisabdulkhaliq17@gmail.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Address",
    value: "The Milestone Schooling System, Karachi, Pakistan",
    href: "https://www.google.com/maps/place/The+Milestone+Schooling+System/@24.9140423,66.9620082,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb315f32131f1a7:0xbbd8b2ff3e169e5c!8m2!3d24.9140423!4d66.9620082!16s%2Fg%2F11tcztqtxx?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Office Hours",
    value: "Mon – Sat: 8:00 AM – 2:00 PM",
    href: "#",
  },
];

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

const FAQItem: React.FC<{ q: string; a: string; index: number }> = ({
  q,
  a,
  index,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-200"
      style={{ boxShadow: open ? "0 4px 20px rgba(26,86,219,0.08)" : "none" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:cursor-pointer"
        style={{ background: open ? "#eff6ff" : "#fff" }}
      >
        <div className="flex items-center gap-4">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 text-white"
            style={{ background: open ? "#2e6fd4" : "#cbd5e1" }}
          >
            {index + 1}
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: open ? "#2e6fd4" : "#1a3272" }}
          >
            {q}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 transition-transform duration-300"
          style={{
            color: open ? "#2e6fd4" : "#94a3b8",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "200px" : "0px" }}
      >
        <p className="px-6 pb-5 pt-1 text-sm text-gray-500 leading-relaxed pl-17">
          {a}
        </p>
      </div>
    </div>
  );
};

// ─── Contact Form ──────────────────────────────────────────────────────────────

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ background: "#eff6ff" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#2e6fd4"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          className="text-xl font-extrabold mb-2"
          style={{ color: "#1a3272" }}
        >
          Message Sent!
        </h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Thank you for reaching out. We'll get back to you within 1–2 business
          days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          }}
          className="mt-6 text-sm font-semibold underline"
          style={{ color: "#2e6fd4" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 transition-all duration-200 bg-gray-50 focus:bg-white";
  const inputStyle = { focusRingColor: "#2e6fd4" };

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1 block">
            Full Name *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handle}
            required
            placeholder="e.g. Ahmed Khan"
            className={inputClass}
            style={{ borderColor: "#e2e8f0" }}
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1 block">
            Email Address *
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            required
            placeholder="e.g. ahmed@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1 block">
            Phone Number
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="e.g. 0300 1234567"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1 block">
            Subject *
          </label>
          <select
            name="subject"
            value={form.subject}
            onChange={handle}
            required
            className={inputClass}
          >
            <option value="">Select a subject...</option>
            <option>Admission Enquiry</option>
            <option>Fee Structure</option>
            <option>Academic Information</option>
            <option>Transport</option>
            <option>General Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1 block">
          Message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handle}
          required
          rows={5}
          placeholder="Write your message here..."
          className={inputClass}
          style={{ resize: "none" }}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg text-white text-sm font-extrabold uppercase tracking-widest transition-all duration-200 hover:opacity-90 active:translate-y-1 flex items-center justify-center gap-2"
        style={{
          background: "#2e6fd4",
        }}
      >
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
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        Send Message
      </button>
    </form>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────────

const ContactPage: React.FC = () => {
  return (
    <main>
      <Breadcrumb
        title="Contact Us"
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="bg-gray-50 py-16">
        <div className="space-y-16">
          {/* ── ROW 1: Contact Info cards + Form ── */}
          <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-6">
            {/* Left: Info cards */}
            <div className="w-full lg:w-80 flex-shrink-0 space-y-4">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="h-0.5 w-8 rounded"
                    style={{ background: "#2e6fd4" }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#2e6fd4" }}
                  >
                    Get In Touch
                  </span>
                </div>
                <h2
                  className="text-2xl font-extrabold"
                  style={{ color: "#1a3272" }}
                >
                  We'd Love to Hear From You
                </h2>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  Have a question or want to learn more about The Milestone
                  Schooling System? Reach out to us.
                </p>
              </div>

              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-white transition-transform duration-200 group-hover:scale-110"
                    style={{ background: "#2e6fd4" }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      {info.label}
                    </p>
                    <p
                      className="text-sm font-semibold mt-0.5"
                      style={{ color: "#1a3272" }}
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}

              {/* Social links */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      label: "whatsapp",
                      src: "/icons/whatsapp.png",
                      href: "https://wa.me/923002371990",
                    },
                    {
                      label: "facebook",
                      src: "/icons/facebook.png",
                      href: "https://www.facebook.com/profile.php?id=100089885838245",
                    },
                    {
                      label: "map",
                      src: "/icons/map.png",
                      href: "https://www.google.com/maps/place/The+Milestone+Schooling+System/@24.9140423,66.9620082,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb315f32131f1a7:0xbbd8b2ff3e169e5c!8m2!3d24.9140423!4d66.9620082!16s%2Fg%2F11tcztqtxx?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold hover:scale-110 transition-transform duration-200"
                      aria-label={s.label}
                    >
                      <img src={s.src} alt={s.label} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex-1 bg-white rounded-2xl shadow-md p-6 md:p-10">
              <h3
                className="text-xl font-extrabold mb-1"
                style={{ color: "#1a3272" }}
              >
                Send Us a Message
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Fill in the form below and we'll get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* ── ROW 3: Map placeholder ── */}
          <div className="w-full overflow-hidden shadow-md">
            <div
              className="relative w-full h-64 md:h-120 bg-cover bg-center"
              style={{ backgroundImage: "url('/map.png')" }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-3 opacity-80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="font-bold text-lg drop-shadow-lg">
                    The Milestone Schooling System
                  </p>
                  <p className="text-blue-200 text-sm mt-1 drop-shadow">
                    Karachi, Pakistan
                  </p>
                  <a
                    href="https://www.google.com/maps/place/The+Milestone+Schooling+System/@24.9140423,66.9620082,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb315f32131f1a7:0xbbd8b2ff3e169e5c!8m2!3d24.9140423!4d66.9620082!16s%2Fg%2F11tcztqtxx?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-2 rounded-full text-sm font-bold bg-white hover:bg-blue-50 transition-colors duration-200"
                    style={{ color: "#1a3272" }}
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── ROW 2: FAQs ── */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span
                  className="h-0.5 w-8 rounded"
                  style={{ background: "#2e6fd4" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#2e6fd4" }}
                >
                  FAQs
                </span>
                <span
                  className="h-0.5 w-8 rounded"
                  style={{ background: "#2e6fd4" }}
                />
              </div>
              <h2
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "#1a3272" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
                Can't find the answer you're looking for? Send us a message
                above.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
