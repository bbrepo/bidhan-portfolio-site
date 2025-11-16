import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "The University of Texas at Tyler, Tyler, TX",
      year: "May 2024",
      description: "GPA: 4.00/4.00",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution:
        "Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      year: "November 2011",
      description: "GPA: 3.07/4.00",
    },
  ];

  return (
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4">
        Education
      </h1>

      <div className="bg-gray-200 rounded-xl p-3">
        <div className="space-y-6">
          {educationData.map((education) => (
            <div
              key={education.id}
              className="p-3 sm:p-4 bg-gray-400/60 rounded-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {education.degree}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm ml-4 whitespace-nowrap">
                  {education.year}
                </p>
              </div>
              <p className="font-medium text-gray-800 mb-1 text-sm">
                {education.institution}
              </p>
              <p className="text-gray-800 leading-relaxed text-sm">
                {education.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
