import React from "react";

const Extracurricular = () => {
  const extracurricularData = [
    {
      id: 1,
      title: "President of Computer Science Club",
      organization: "University of Technology",
      year: "2021 - 2022",
    },
    {
      id: 2,
      title: "Volunteer Tech Instructor",
      organization: "Community Learning Center",
      year: "2020 - Present",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Extracurricular Activities
        </h1>
      </div>

      <div className="w-full bg-gray-400/40 rounded-lg p-4">
        <ul className="space-y-3">
          {extracurricularData.map((activity) => (
            <li key={activity.id} className="text-gray-700">
              <span className="font-semibold">{activity.title}</span>
              {" - "}
              <span className="text-gray-600">
                {activity.organization}
              </span>{" "}
              <span className="text-gray-500 text-sm">({activity.year})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Extracurricular;
