import React from "react";

const Articles = () => {
  const articlesData = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      publication: "Dev.to",
      year: "2024",
      description:
        "A comprehensive guide on architecting large-scale React applications with best practices for state management and component design.",
    },
    {
      id: 2,
      title: "Modern JavaScript ES2024 Features",
      publication: "Medium",
      year: "2024",
      description:
        "Deep dive into the latest JavaScript features and how they improve developer productivity and code maintainability.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Articles
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {articlesData.map((article) => (
          <div
            key={article.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {article.title}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {article.publication}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {article.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
