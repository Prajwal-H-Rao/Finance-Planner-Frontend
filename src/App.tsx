import React from "react";
import Navbar from "./components/Navbar";
import RouteRender from "./routes/RouteRender";

const App: React.FC = () => {
  return (
    <div className="animated-background  min-h-screen bg-base-100 flex flex-col">
      <Navbar />
      <div className="items-center justify-center p-4">
        <RouteRender />
      </div>
    </div>
  );
};

export default App;
