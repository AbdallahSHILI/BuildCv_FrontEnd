import "./App.css";
import Login from "./components/auth/Login"; // Import Login component, not AuthLayout
// import Signup from "./components/auth/Signup"; // Uncomment to use Signup

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Signup /> */}
    </div>
  );
}

export default App;
