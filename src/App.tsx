import React from "react";
import Navbar from "./components/Navbar";
// import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <div className="animated-background  min-h-screen bg-base-100 flex flex-col">
      <Navbar />
      <Login />
    </div>
  );
};

export default App;
