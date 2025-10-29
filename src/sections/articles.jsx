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
    <div className="">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight p-2 mx-4 text-center md:text-left">
        Articles
      </h1>

      <div className="p-4 bg-gray-200 m-4 rounded-xl">
        <div className="space-y-6">
          {articlesData.map((article, index) => (
            <div key={article.id}>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
                Article {index + 1}
              </h3>
              <div className="p-4 sm:p-5 bg-gray-400/60 rounded-xl">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {article.title}
                </h4>
                <p className="font-medium text-gray-800 mb-1 text-sm">
                  {article.publication}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {article.year}
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
