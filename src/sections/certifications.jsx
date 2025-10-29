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
    <div className="">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight p-2 mx-4 text-center md:text-left">
        Certifications
      </h1>

      <div className="p-4 bg-gray-200 m-4 rounded-xl">
        <div className="space-y-6">
          {certificationsData.map((certification, index) => (
            <div key={certification.id}>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
                Certification {index + 1}
              </h3>
              <div className="p-4 sm:p-5 bg-gray-400/60 rounded-xl">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {certification.title}
                </h4>
                <p className="font-medium text-gray-800 mb-1 text-sm">
                  {certification.issuer}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {certification.year}
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {certification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
