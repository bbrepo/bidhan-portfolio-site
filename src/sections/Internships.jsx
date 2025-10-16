import React from "react";

const Internships = () => {
  const internshipsData = [
    {
      id: 1,
      position: "Software Development Intern",
      company: "StartUp Ventures",
      year: "Summer 2021",
      description:
        "Contributed to the development of mobile applications using React Native. Participated in agile development processes and code reviews.",
    },
    {
      id: 2,
      position: "Web Development Intern",
      company: "Creative Agency Co.",
      year: "Winter 2020",
      description:
        "Assisted in building responsive websites for clients. Gained experience in HTML, CSS, JavaScript, and modern web frameworks.",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Internships
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {internshipsData.map((internship) => (
          <div
            key={internship.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-200">
              {internship.position}
            </h3>
            <div className="p-3 sm:p-4 bg-gray-300">
              <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                {internship.company}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {internship.year}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {internship.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
