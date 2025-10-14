import React from "react";

const Membership = () => {
  const membershipData = [
    {
      id: 1,
      organization: "Association for Computing Machinery (ACM)",
      role: "Professional Member",
      year: "2022 - Present",
      description:
        "Active member contributing to computing research and professional development in software engineering and computer science.",
    },
    {
      id: 2,
      organization: "IEEE Computer Society",
      role: "Student Member",
      year: "2020 - 2022",
      description:
        "Participated in technical conferences and workshops focusing on emerging technologies and industry best practices.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Membership
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {membershipData.map((membership) => (
          <div
            key={membership.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {membership.organization}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {membership.role}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {membership.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {membership.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
