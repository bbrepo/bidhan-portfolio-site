import React from "react";

const Honors = () => {
  const honorsData = [
    {
      id: 1,
      title: "Dean's List Award",
      organization: "University of Technology",
      year: "2021",
    },
    {
      id: 2,
      title: "Best Innovation Award",
      organization: "Tech Conference 2023",
      year: "2023",
    },
  ];

  return (
    <div className="py-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Honors
        </h1>
      </div>

      <div className="w-full bg-gray-400/40 rounded-lg p-6">
        <ul className="space-y-3">
          {honorsData.map((honor) => (
            <li key={honor.id} className="text-gray-700">
              <span className="font-semibold">{honor.title}</span>
              {" - "}
              <span className="text-gray-600">{honor.organization}</span>{" "}
              <span className="text-gray-500 text-sm">({honor.year})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Honors;
