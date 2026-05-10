import { useState } from "react";
// import { useAuth } from "../../../assets/context/AuthContext";

import { Sidebar, Hero, FilterBar, CVGrid } from "./index";

import styles from "./Resumes.module.css";

const Resumes = () => {
  // const { isAuthenticated, user } = useAuth();
  const isAuthenticated = false;

  const [activeFilter, setActiveFilter] = useState("All Templates");

  return (
    <div className={styles.page}>
      <Sidebar isAuthenticated={isAuthenticated} />
      <main className={styles.main}>
        <Hero />
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <CVGrid activeFilter={activeFilter} />
      </main>
    </div>
  );
};

export default Resumes;
