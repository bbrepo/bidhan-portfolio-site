import React from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
