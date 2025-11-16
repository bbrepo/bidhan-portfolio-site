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
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4">
        Tests
      </h1>

      <div className="bg-gray-200 rounded-xl p-3">
        <div className="space-y-6">
          {testsData.map((test) => (
            <div key={test.id} className="p-3 sm:p-4 bg-gray-400/60 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {test.title}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm ml-4 whitespace-nowrap">
                  {test.year}
                </p>
              </div>
              <p className="font-medium text-gray-800 mb-1 text-sm">
                {test.platform}
              </p>
              <p className="text-gray-800 leading-relaxed text-sm">
                {test.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;
