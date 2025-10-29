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
    <div className="">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight p-2 mx-4 text-center md:text-left">
        Publications
      </h1>

      <div className="p-4 bg-gray-200 m-4 rounded-xl">
        <div className="space-y-6">
          {publicationsData.map((publication, index) => (
            <div key={publication.id}>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
                Publication {index + 1}
              </h3>
              <div className="p-4 sm:p-5 bg-gray-400/60 rounded-xl">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {publication.title}
                </h4>
                <p className="font-medium text-gray-800 mb-1 text-sm">
                  {publication.publisher}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {publication.year}
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {publication.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
