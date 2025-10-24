import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="animated-background  min-h-screen bg-base-100 flex flex-col">
      <Navbar />
      <div className=" flex-1 w-full  flex items-center">
        <Form />
      </div>
    </div>
  );
};

export default App;
