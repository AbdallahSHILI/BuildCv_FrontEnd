import LandingNavbar from "../../components/navbar/landingNavbar/LandingNavbar";
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import HowItWorks from "./components/HowItWorks";
import TemplatesSection from "./components/TemplatesSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import styles from "./Landing.module.css";

const Landing = () => (
  <div className={styles.page}>
    <LandingNavbar />
    <HeroSection />
    <StatsStrip />
    <HowItWorks />
    <TemplatesSection />
    <FeaturesSection />
    <TestimonialsSection />
    <CtaBanner />
    <Footer />
  </div>
);

export default Landing;
