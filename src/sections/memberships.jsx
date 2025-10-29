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
    <div className="">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight p-2 mx-4 text-center md:text-left">
        Membership
      </h1>

      <div className="p-4 bg-gray-200 m-4 rounded-xl">
        <div className="space-y-6">
          {membershipData.map((membership, index) => (
            <div key={membership.id}>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
                Membership {index + 1}
              </h3>
              <div className="p-4 sm:p-5 bg-gray-400/60 rounded-xl">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {membership.organization}
                </h4>
                <p className="font-medium text-gray-800 mb-1 text-sm">
                  {membership.role}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {membership.year}
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {membership.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
