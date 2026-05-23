import { useState } from "react";
import styles from "./Pricing.module.css";
import PricingHero from "./components/Pricinghero";
import PlanCard from "./components/PlanCard";
import { plans } from "./components/pricingdata";
import Navbar from "../../components/navbar/landingNavbar/LandingNavbar";

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Absolutely. Every paid plan comes with a 14-day free trial — no credit card required to start.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for Enterprise plans.",
  },
  {
    q: "What happens when I cancel?",
    a: "You keep full access until the end of your billing period. No questions asked, no hidden fees.",
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className={styles.page}>
      <Navbar />
      {/* Hero + toggle */}
      <PricingHero
        styles={styles}
        yearly={yearly}
        onToggle={() => setYearly((y) => !y)}
      />

      {/* Plan cards */}
      <div className={styles.grid}>
        {plans.map((plan, i) => (
          <PlanCard
            key={plan.name}
            styles={styles}
            plan={plan}
            yearly={yearly}
            animDelay={`${i * 0.1}s`}
          />
        ))}
      </div>

      {/* FAQ section */}
      <section className={styles.faq}>
        <h2 className={styles.faqTitle}>Frequently asked questions</h2>
        {faqs.map((item, i) => (
          <div key={i} className={styles.faqItem}>
            <p className={styles.faqQuestion}>{item.q}</p>
            <p className={styles.faqAnswer}>{item.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pricing;
