import React from "react";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
// import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <div className="animated-background  min-h-screen bg-base-100 flex flex-col">
      <Navbar />
      <Signin />
    </div>
  );
};

export default App;
