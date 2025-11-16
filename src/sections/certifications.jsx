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
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4">
        Certifications
      </h1>

      <div className="bg-gray-200 rounded-xl p-3">
        <div className="space-y-6">
          {certificationsData.map((certification) => (
            <div
              key={certification.id}
              className="p-3 sm:p-4 bg-gray-400/60 rounded-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {certification.title}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm ml-4 whitespace-nowrap">
                  {certification.year}
                </p>
              </div>
              <p className="font-medium text-gray-800 mb-1 text-sm">
                {certification.issuer}
              </p>
              <p className="text-gray-800 leading-relaxed text-sm">
                {certification.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
