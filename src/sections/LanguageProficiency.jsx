import React from "react";

const LanguageProficiency = () => {
  const languageData = [
    {
      id: 1,
      language: "English",
      level: "Native/Fluent",
    },
    {
      id: 2,
      language: "Spanish",
      level: "Intermediate (B2 Level)",
    },
  ];

  return (
    <div className="py-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Language Proficiency
        </h1>
      </div>

      <div className="w-full bg-gray-400/40 rounded-lg p-4">
        <ul className="space-y-3">
          {languageData.map((language) => (
            <li key={language.id} className="text-gray-700">
              <span className="font-semibold">{language.language}</span>
              {" - "}
              <span className="text-gray-600">{language.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageProficiency;
