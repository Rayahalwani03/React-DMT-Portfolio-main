import React from "react";
import AboutHeader from "../components/AboutHeader";
import ProfessionalOverview from "../components/ProfessionalOverview";
import SkillsExpertiseSection from "../components/SkillsExpertiseSection";
import WebProjectsSection from "../components/WebProjectsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AboutHeader />
        <div className="mt-12 space-y-16">
          <ProfessionalOverview />
          <WebProjectsSection />
          <SkillsExpertiseSection />
        </div>
      </div>
    </div>
  );
};

export default About;
