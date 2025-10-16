import React from "react";

const Recommendations = () => {
  const recommendationsData = [
    {
      id: 1,
      name: "John Smith",
      position: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      relationship: "Former Manager",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Lead Developer",
      company: "Digital Innovations Ltd.",
      relationship: "Colleague",
    },
    {
      id: 3,
      name: "Dr. Michael Brown",
      position: "Professor",
      company: "University of Technology",
      relationship: "Academic Advisor",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Recommendations
        </h1>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold text-gray-700">
                Position
              </th>
              <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold text-gray-700">
                Company/Organization
              </th>
              <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold text-gray-700">
                Relationship
              </th>
            </tr>
          </thead>
          <tbody>
            {recommendationsData.map((rec, index) => (
              <tr
                key={rec.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
              >
                <td className="px-4 py-3 text-sm sm:text-base text-gray-800">
                  {rec.name}
                </td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-700">
                  {rec.position}
                </td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-700">
                  {rec.company}
                </td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-700">
                  {rec.relationship}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recommendations;
