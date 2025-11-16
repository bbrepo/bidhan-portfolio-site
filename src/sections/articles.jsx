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
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4">
        Articles
      </h1>

      <div className="bg-gray-200 rounded-xl p-3">
        <div className="space-y-6">
          {articlesData.map((article) => (
            <div
              key={article.id}
              className="p-3 sm:p-4 bg-gray-400/60 rounded-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {article.title}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm ml-4 whitespace-nowrap">
                  {article.year}
                </p>
              </div>
              <p className="font-medium text-gray-800 mb-1 text-sm">
                {article.publication}
              </p>
              <p className="text-gray-800 leading-relaxed text-sm">
                {article.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
