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
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4">
        Internships
      </h1>

      <div className="bg-gray-200 rounded-xl p-3">
        <div className="space-y-6">
          {internshipsData.map((internship) => (
            <div
              key={internship.id}
              className="p-3 sm:p-4 bg-gray-400/60 rounded-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {internship.position}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm ml-4 whitespace-nowrap">
                  {internship.year}
                </p>
              </div>
              <p className="font-medium text-gray-800 mb-1 text-sm">
                {internship.company}
              </p>
              <p className="text-gray-800 leading-relaxed text-sm">
                {internship.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;
