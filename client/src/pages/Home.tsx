/*
 * WINDING ROAD DESIGN — Home Page
 * Main page assembling all sections: Hero, Navigation, Itinerary, Costs, Preparation, Tips, Footer
 */
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import MapSection from "@/components/MapSection";
import ItinerarySection from "@/components/ItinerarySection";
import CostSection from "@/components/CostSection";
import PreparationSection from "@/components/PreparationSection";
import TipsSection from "@/components/TipsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F2027]">
      <Navigation />
      <HeroSection />
      <MapSection />
      <ItinerarySection />
      <CostSection />
      <PreparationSection />
      <TipsSection />
      <Footer />
    </div>
  );
}
