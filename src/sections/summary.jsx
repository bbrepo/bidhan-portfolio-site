import React from "react";

const Summary = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-5  mt-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Career Summary
        </h1>
      </div>
      <div className="w-full bg-gray-400/40 rounded-lg">
        <p className="text-gray-700 leading-relaxed text-justify p-4">
          Experienced Software Engineer with 12+ years of expertise in
          full-stack development, microservices architecture, and cloud
          technologies. Proven track record in developing enterprise-level
          applications using Java, Spring Framework, and modern JavaScript
          frameworks. Strong background in designing and implementing scalable
          solutions using microservices, RESTful APIs, and cloud platforms (AWS,
          Azure). Skilled in database management, DevOps practices, and agile
          methodologies. Currently pursuing opportunities to leverage technical
          expertise in building innovative software solutions.
        </p>
      </div>
    </div>
  );
};

export default Summary;
