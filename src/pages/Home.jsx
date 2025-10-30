import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import HeroSection from "../components/HeroSection";
import SkillsExpertiseSection from "../components/SkillsExpertiseSection";
import WebProjectsSection from "../components/WebProjectsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <WebProjectsSection />

      {/* Skills Section */}
      <SkillsExpertiseSection />

      {/* Education Section */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
