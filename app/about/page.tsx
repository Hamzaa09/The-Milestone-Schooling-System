import Breadcrumb from "@/components/breadcrum";
import React from "react";
import AboutSection from "./aboutsection";
const AboutPage: React.FC = () => {
  return (
    <main>
      <Breadcrumb
        title="Principle's Message"
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <AboutSection />
    </main>
  );
};

export default AboutPage;
