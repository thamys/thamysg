import React from "react";
import AboutSection from "./about";
import ServicesSection from "./services";
import CapabilitiesSection from "./capabilities";
import WorkHistorySection from "./work-history";
import ContactSection from "./contact";

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
      <section id="contact" className="section">
        <ContactSection />
      </section>
    </div>
  );
}
