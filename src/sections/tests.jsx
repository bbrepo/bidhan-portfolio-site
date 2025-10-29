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
    <div className="">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight p-2 mx-4 text-center md:text-left">
        Tests
      </h1>

      <div className="p-4 bg-gray-200 m-4 rounded-xl">
        <div className="space-y-6">
          {testsData.map((test, index) => (
            <div key={test.id}>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
                Test {index + 1}
              </h3>
              <div className="p-4 sm:p-5 bg-gray-400/60 rounded-xl">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {test.title}
                </h4>
                <p className="font-medium text-gray-800 mb-1 text-sm">
                  {test.platform}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {test.year}
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {test.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;
