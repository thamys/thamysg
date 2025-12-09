import React from "react";
import AboutSection from "./about";
import ServicesSection from "./services";
import CapabilitiesSection from "./capabilities";
import WorkHistorySection from "./work-history";
import ContactSection from "./contact";
import EducationSection from "../education";
// import CertificationsSection from "../certifications";
import ProjectsSection from "../projects";
import ArticlesSection from "../articles";

export default async function Page() {
  return (
    <div className="flex flex-col gap-12 max-w-screen-lg items-center">
      <section id="about" className="section">
        <AboutSection />
      </section>
      <section id="services" className="section">
        <ServicesSection />
      </section>
      <section id="capabilities" className="section">
        <CapabilitiesSection />
      </section>
      <section id="journey" className="section">
        <WorkHistorySection />
      </section>
      <section id="education" className="section">
        <EducationSection />
      </section>
      {/* <section id="certifications" className="section">
        <CertificationsSection />
      </section> */}
      <section id="projects" className="section">
        <ProjectsSection />
      </section>
      <section id="articles" className="section">
        <ArticlesSection />
      </section>
      <section id="contact" className="section">
        <ContactSection />
      </section>
    </div>
  );
}
