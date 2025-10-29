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
    <div className="">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight p-2 mx-4 text-center md:text-left">
        Trainings
      </h1>

      <div className="p-4 bg-gray-200 m-4 rounded-xl">
        <div className="space-y-6">
          {trainingsData.map((training, index) => (
            <div key={training.id}>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
                Training {index + 1}
              </h3>
              <div className="p-4 sm:p-5 bg-gray-400/60 rounded-xl">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {training.title}
                </h4>
                <p className="font-medium text-gray-800 mb-1 text-sm">
                  {training.organization}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {training.year}
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {training.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainings;
