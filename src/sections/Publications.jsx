import React from "react";

const Publications = () => {
  const publicationsData = [
    {
      id: 1,
      title: "Modern Web Development Practices",
      publisher: "Tech Publishing House",
      year: "2024",
      description:
        "Authored a comprehensive guide on modern web development practices, covering frontend frameworks, backend architectures, and deployment strategies.",
    },
    {
      id: 2,
      title: "Scalable Microservices Architecture",
      publisher: "Software Engineering Journal",
      year: "2023",
      description:
        "Published research on designing and implementing scalable microservices using containerization and orchestration tools.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Publications
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {publicationsData.map((publication) => (
          <div
            key={publication.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {publication.title}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {publication.publisher}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {publication.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {publication.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
