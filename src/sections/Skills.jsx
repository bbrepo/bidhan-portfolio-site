import React from "react";

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      category: "Programming Languages",
      skills: "JavaScript, Python, Java, C++, TypeScript",
      proficiency: "Advanced",
    },
    {
      id: 2,
      category: "Web Technologies",
      skills: "React, Node.js, HTML5, CSS3, Tailwind CSS",
      proficiency: "Expert",
    },
    {
      id: 3,
      category: "Databases",
      skills: "MySQL, PostgreSQL, MongoDB, Redis",
      proficiency: "Advanced",
    },
    {
      id: 4,
      category: "Tools & Platforms",
      skills: "Git, Docker, AWS, VS Code, Postman",
      proficiency: "Intermediate",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Skills
        </h1>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold text-gray-700">
                Category
              </th>
              <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold text-gray-700">
                Skills
              </th>
              <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold text-gray-700">
                Proficiency
              </th>
            </tr>
          </thead>
          <tbody>
            {skillsData.map((skill, index) => (
              <tr
                key={skill.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
              >
                <td className="px-4 py-3 text-sm sm:text-base font-medium text-gray-800">
                  {skill.category}
                </td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-700">
                  {skill.skills}
                </td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-700">
                  {skill.proficiency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;
