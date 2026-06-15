import { useNavigate } from "react-router-dom";
import LandingNavbar from "../../components/navbar/landingNavbar/LandingNavbar";
import styles from "./about.module.css";
import {
  AboutHero,
  AboutTeam,
  AboutDifference,
  AboutTestimonials,
  AboutCta,
  AboutPartner,
  AboutFooter,
} from "./components";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <LandingNavbar />

      <main className={styles.main}>
        <AboutHero styles={styles} />
        <AboutTeam styles={styles} />
        <AboutDifference styles={styles} />
        <AboutTestimonials styles={styles} />
        <AboutCta styles={styles} onNavigate={navigate} />
        <AboutPartner styles={styles} onNavigate={navigate} />
      </main>

      <AboutFooter styles={styles} onNavigate={navigate} />
    </div>
  );
};

export default About;
