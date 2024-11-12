import React from "react";
import AboutSection from "./about";
import ServicesSection from "./services";
import CapabilitiesSection from "./capabilities";
import WorkHistorySection from "./work-history";
import ContactSection from "./contact";

export default async function Page() {
  return (
    <div className="flex flex-col gap-12 max-w-screen-lg items-center">
      <AboutSection />
      <ServicesSection />
      <CapabilitiesSection />
      <WorkHistorySection />
      <ContactSection />
    </div>
  );
}