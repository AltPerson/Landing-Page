import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MoveSection from "../components/MoveSection";
import { cards } from "../components/MoveSection/Data";
import { offers } from "../components/OffersSection/Data";
import { phrases } from "../components/PhraseSection/Data";
import { lists } from "../components/Footer/Data";
import OffersSection from "../components/OffersSection";
import ReviewSection from "../components/ReviewSection";
import MotivationSection from "../components/MotivationSection";
import PhraseSection from "../components/PhraseSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };
  return (
    <>
      <Sidebar toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <HeroSection />
      <MoveSection cards={cards} />
      <OffersSection offers={offers} />
      <ReviewSection />
      <MotivationSection />
      <PhraseSection phrases={phrases} />
      <SubscribeSection />
      <Footer lists={lists} />
    </>
  );
}
