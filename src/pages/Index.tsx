import SidebarNav from "@/components/resume/SidebarNav";
import HeroSection from "@/components/resume/HeroSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import AboutSection from "@/components/resume/AboutSection";
import EducationSection from "@/components/resume/EducationSection";
import HobbiesSection from "@/components/resume/HobbiesSection";
import FooterSection from "@/components/resume/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SidebarNav />
      <main className="lg:pl-20">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <EducationSection />
        <HobbiesSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
