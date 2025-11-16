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
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4">
        Trainings
      </h1>

      <div className="bg-gray-200 rounded-xl p-3">
        <div className="space-y-6">
          {trainingsData.map((training) => (
            <div
              key={training.id}
              className="p-3 sm:p-4 bg-gray-400/60 rounded-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {training.title}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm ml-4 whitespace-nowrap">
                  {training.year}
                </p>
              </div>
              <p className="font-medium text-gray-800 mb-1 text-sm">
                {training.organization}
              </p>
              <p className="text-gray-800 leading-relaxed text-sm">
                {training.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainings;
