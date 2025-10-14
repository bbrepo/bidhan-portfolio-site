import React from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Summary from "./sections/Summary";
import { BrowserRouter } from "react-router-dom";
import Education from "./sections/Education";
import Research from "./sections/Research";
import Articles from "./sections/articles";
import Tests from "./sections/Tests";
import Memberships from "./sections/Memberships";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <Navbar />
        <main>
          <Hero />
          <Summary />
          <Education />
          <Research />
          <Articles />
          <Tests />
          <Memberships />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
