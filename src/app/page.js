import React from "react";
import "./globals.css";
import Hero from "./components/Hero";
import DonationRequests from "./components/DonationRequests";
import OurVision from "./components/OurVision";
import SponsorAnOrphan from "./components/SponsorAnOrphan";
import FundRaising from "./components/FundRaising";
import OurOrphanages from "./components/OurOrphanages";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <DonationRequests />
      <SponsorAnOrphan />
      <OurVision />
      <FundRaising />
      <OurOrphanages />
      <Footer />
    </div>
  );
}
