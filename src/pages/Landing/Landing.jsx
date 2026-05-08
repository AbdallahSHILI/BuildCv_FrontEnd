import LandingNavbar from "../../components/navbar/landingNavbar/LandingNavbar";
import HeroSection from "./components/HeroSection/HeroSection";
import StatsStrip from "./components/StatsStrip/StatsStrip";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TemplatesSection from "./components/TemplatesSection/TemplatesSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import CtaBanner from "./components/CtaBanner/CtaBanner";
import Footer from "./components/Footer/Footer";
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
