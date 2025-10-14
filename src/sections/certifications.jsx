import React from "react";

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
      description:
        "Professional certification demonstrating expertise in designing distributed systems and applications on AWS platform.",
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2023",
      description:
        "Certified in building scalable and reliable cloud-native applications using Google Cloud technologies and best practices.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Certifications
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {certificationsData.map((certification) => (
          <div
            key={certification.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {certification.title}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {certification.issuer}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {certification.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {certification.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
