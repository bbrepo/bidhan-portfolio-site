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
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4">
        Membership
      </h1>

      <div className="bg-gray-200 rounded-xl p-3">
        <div className="space-y-6">
          {membershipData.map((membership) => (
            <div
              key={membership.id}
              className="p-3 sm:p-4 bg-gray-400/60 rounded-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {membership.organization}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm ml-4 whitespace-nowrap">
                  {membership.year}
                </p>
              </div>
              <p className="font-medium text-gray-800 mb-1 text-sm">
                {membership.role}
              </p>
              <p className="text-gray-800 leading-relaxed text-sm">
                {membership.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
