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
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4">
        Publications
      </h1>

      <div className="bg-gray-200 rounded-xl p-3">
        <div className="space-y-6">
          {publicationsData.map((publication) => (
            <div
              key={publication.id}
              className="p-3 sm:p-4 bg-gray-400/60 rounded-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {publication.title}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm ml-4 whitespace-nowrap">
                  {publication.year}
                </p>
              </div>
              <p className="font-medium text-gray-800 mb-1 text-sm">
                {publication.publisher}
              </p>
              <p className="text-gray-800 leading-relaxed text-sm">
                {publication.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
