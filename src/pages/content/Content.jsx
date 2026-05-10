import { useState } from "react";
import { Editor, ResumePreview } from "./components";
import styles from "./Content.module.css";

const defaultData = {
  fullName: "",
  title: "",
  phone: "",
  email: "",
  location: "",
};

const Content = () => {
  const [personalData, setPersonalData] = useState(defaultData);

  return (
    <div className={styles.page}>
      <Editor data={personalData} onChange={setPersonalData} />
      <ResumePreview data={personalData} />
    </div>
  );
};

export default Content;
