import React from "react";

const Tests = () => {
  const testsData = [
    {
      id: 1,
      title: "Advanced JavaScript Assessment",
      platform: "HackerRank",
      year: "2024",
      description:
        "Achieved top 5% ranking in comprehensive JavaScript testing covering ES6+, async programming, and design patterns.",
    },
    {
      id: 2,
      title: "System Design Interview",
      platform: "LeetCode",
      year: "2024",
      description:
        "Successfully completed advanced system design challenges focusing on scalability, distributed systems, and microservices architecture.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Tests
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {testsData.map((test) => (
          <div
            key={test.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {test.title}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {test.platform}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {test.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {test.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tests;
