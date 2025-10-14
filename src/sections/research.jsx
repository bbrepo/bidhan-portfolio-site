import React from "react";

const Research = () => {
  const researchData = [
    {
      id: 1,
      title: "Machine Learning Applications in Web Development",
      journal: "Journal of Computer Science",
      year: "2024",
      description:
        "Explored the integration of ML algorithms in modern web applications for enhanced user experience and performance optimization.",
    },
    {
      id: 2,
      title: "Cloud Computing Security Frameworks",
      journal: "International Conference on Cloud Security",
      year: "2023",
      description:
        "Developed comprehensive security frameworks for cloud-based applications with focus on data protection and access control.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Research
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {researchData.map((research) => (
          <div
            key={research.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {research.title}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {research.journal}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {research.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {research.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
