import React from "react";
import "./globals.css";
import Hero from "./components/Hero";
import DonationRequests from "./components/DonationRequests";

export default function Home() {
  return (
    <div>
      <Hero />
      <DonationRequests />
    </div>
  );
}
