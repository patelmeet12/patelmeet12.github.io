import { Header } from "./components/Header";
import { AvailabilityBanner } from "./components/AvailabilityBanner";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { StartProjectSection } from "./components/StartProjectSection";
import { SocialSection } from "./components/SocialSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen">
        <AvailabilityBanner />
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <StartProjectSection />
        <SocialSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}