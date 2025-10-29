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
    <div className="">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight p-2 mx-4 text-center md:text-left">
        Internships
      </h1>

      <div className="p-4 bg-gray-200 m-4 rounded-xl">
        <div className="space-y-6">
          {internshipsData.map((internship, index) => (
            <div key={internship.id}>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">
                Internship {index + 1}
              </h3>
              <div className="p-4 sm:p-5 bg-gray-400/60 rounded-xl">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {internship.position}
                </h4>
                <p className="font-medium text-gray-800 mb-1 text-sm">
                  {internship.company}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {internship.year}
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {internship.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;
