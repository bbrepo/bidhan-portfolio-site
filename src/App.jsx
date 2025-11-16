import React from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Summary from "./sections/Summary";
import { BrowserRouter } from "react-router-dom";
import Education from "./sections/Education";
import Experiences from "./sections/Experiences";
import Internships from "./sections/Internships";
import Trainings from "./sections/Trainings";
import Publications from "./sections/Publications";
import Research from "./sections/Research";
import Articles from "./sections/articles";
import Tests from "./sections/Tests";
import Memberships from "./sections/Memberships";
import Certifications from "./sections/Certifications";
import Honors from "./sections/Honors";
import LanguageProficiency from "./sections/LanguageProficiency";
import Achievements from "./sections/Achievements";
import Extracurricular from "./sections/Extracurricular";
import Recommendations from "./sections/Recommendations";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <div className="w-[95%] md:w-[70%] mx-auto ">
          <Navbar />
          <main>
            <Hero />
            <Summary />
            <Education />
            <Honors />
            <Research />
            <Publications />
            <Articles />
            <Memberships />
            <Certifications />
            <Experiences />
            <Internships />
            <Trainings />

            <Tests />
            <Skills />
            <LanguageProficiency />
            <Achievements />
            <Extracurricular />
            <Recommendations />

            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
