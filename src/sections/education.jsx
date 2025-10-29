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
    <div className="">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight p-2 mx-4 text-center md:text-left">
        Education
      </h1>

      <div className="p-4 bg-gray-200 m-4 rounded-xl">
        <div className="flex justify-center md:justify-start mb-4 sm:mb-6"></div>

        <div className="space-y-6">
          {educationData.map((education, index) => (
            <div key={education.id}>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
                Education {index + 1}
              </h3>
              <div className="p-4 sm:p-5 bg-gray-400/60 rounded-xl">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {education.degree}
                </h4>
                <p className="font-medium text-gray-800 mb-1 text-sm">
                  {education.institution}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {education.year}
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {education.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
