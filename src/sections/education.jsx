import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2018 - 2022",
      description:
        "Focused on software development, algorithms, and data structures. Graduated with honors.",
    },
    {
      id: 2,
      degree: "Master of Software Engineering",
      institution: "Tech Institute",
      year: "2022 - 2024",
      description:
        "Specialized in web technologies, cloud computing, and project management methodologies.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Education
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {educationData.map((education) => (
          <div
            key={education.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {education.degree}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {education.institution}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {education.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {education.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
