import React from "react";

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: "Hackathon Winner",
      organization: "National Coding Competition",
      year: "2023",
    },
    {
      id: 2,
      title: "Open Source Contributor",
      organization: "GitHub Community",
      year: "2022 - Present",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Achievements & Activities
        </h1>
      </div>

      <div className="w-full bg-gray-400/40 rounded-lg p-4">
        <ul className="space-y-3">
          {achievementsData.map((achievement) => (
            <li key={achievement.id} className="text-gray-700">
              <span className="font-semibold">{achievement.title}</span>
              {" - "}
              <span className="text-gray-600">
                {achievement.organization}
              </span>{" "}
              <span className="text-gray-500 text-sm">
                ({achievement.year})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
