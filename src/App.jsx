import React from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Summary from "./sections/Summary";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <Navbar />
        <main>
          <Hero />
          <Summary />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
