import React from "react";
import Profile from "../components/Profile";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full">
        {/* Add relative positioning and height */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOiN6ISCV05eTM7Jqx7bxWdYNk_AE-d8F8w&s"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="hidden md:block md:absolute md:top-[6vh] md:left-[2rem] md:w-[250px] md:h-[250px]">
          {" "}
          {/* Position profile on top-left */}
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Hero;
