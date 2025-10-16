import React from "react";

const Experiences = () => {
  const experiencesData = [
    {
      id: 1,
      position: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      year: "2022 - Present",
      description:
        "Lead development of scalable web applications using React and Node.js. Mentor junior developers and collaborate with cross-functional teams.",
    },
    {
      id: 2,
      position: "Software Developer",
      company: "Digital Innovations Ltd.",
      year: "2020 - 2022",
      description:
        "Developed and maintained enterprise-level applications. Implemented RESTful APIs and optimized database performance.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Experiences
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {experiencesData.map((experience) => (
          <div
            key={experience.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {experience.position}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {experience.company}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {experience.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
