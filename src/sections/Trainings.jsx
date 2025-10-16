import React from "react";

const Trainings = () => {
  const trainingsData = [
    {
      id: 1,
      title: "Advanced React Development",
      organization: "Online Learning Platform",
      year: "2023",
      description:
        "Completed comprehensive training on advanced React concepts including hooks, context API, and performance optimization techniques.",
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2022",
      description:
        "Gained foundational knowledge of AWS cloud services, architecture best practices, and cloud deployment strategies.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Trainings
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {trainingsData.map((training) => (
          <div
            key={training.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {training.title}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {training.organization}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {training.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {training.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainings;
