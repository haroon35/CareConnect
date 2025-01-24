import React from "react";
import "./globals.css";
import Hero from "./components/Hero";
import DonationRequests from "./components/DonationRequests";
import OurVision from "./components/OurVision";
import SponsorAnOrphan from "./components/SponsorAnOrphan";

export default function Home() {
  return (
    <div>
      <Hero />
      <SponsorAnOrphan />
      <DonationRequests />
      <OurVision />
    </div>
  );
}
