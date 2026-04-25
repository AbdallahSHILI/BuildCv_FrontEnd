import Navbar from "../navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>{children}</div>
    </>
  );
};

export default MainLayout;
