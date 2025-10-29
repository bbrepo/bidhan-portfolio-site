import React from "react";

const Recommendations = () => {
  const recommendationsData = [
    {
      id: 1,
      name: "Dr. Lidong Wu",
      title: "Assistant Professor, Computer Science",
      organization: "The University of Texas at Tyler",
      email: "lwu@uttyler.edu",
      phone: "(903) 566-7403",
    },
    {
      id: 2,
      name: "Dr. Alecia Wolf",
      title: "Assistant Dean, The Graduate School",
      organization: "The University of Texas at Tyler",
      email: "wolfalecia@gmail.com",
      phone: "(903) 504-9513",
    },
    {
      id: 3,
      name: "Jessica Miller",
      title: "Chief Graduate Admissions Recruiter,",
      organization: "The University of Texas at Tyler",
      email: "jessicamiller@uttyler.edu",
      phone: "(903) 565-5539",
    },
    {
      id: 4,
      name: "Brittany Riley",
      title: "Director, Graduate Admissions,",
      organization: "The University of Texas at Tyler",
      email: "briley@uttyler.edu",
      phone: "(409) 651-9832",
    },
    {
      id: 5,
      name: "Jennifer Moore",
      title: "Graduate Admission Representative,",
      organization: "The University of Texas at Tyler",
      email: "jennifermoore@uttyler.edu",
      phone: "(863) 202-6277",
    },
    {
      id: 6,
      name: "Parivesh Kumar",
      title: "Technology Lead, Infosys Canada",
      organization: "",
      email: "parivesh.kumar@infosys.com",
      phone: "(403) 607-3774",
    },
    {
      id: 7,
      name: "Ashish Verma",
      title: "Director, Ernst & Young LLP (EY) India",
      organization: "",
      email: "ashish.verma@in.ey.com",
      phone: "+919005200008",
    },
    {
      id: 8,
      name: "Dr. Ashok Kumar Roy",
      title: "Joint secretary, Government of Bangladesh and Project Director,",
      organization: "Bangladesh e-Government ERP Project",
      email: "ashoke1970@yahoo.com",
      phone: "+8801720516804",
    },
    {
      id: 9,
      name: "Dr. Jnanendra N Biswas",
      title:
        "Additional Secretary, Government of Bangladesh and Senior Consultant,",
      organization: "Bangladesh e-Government ERP Project",
      email: "drjnbiswas16@gmail.com",
      phone: "+88001768339515",
    },
    {
      id: 10,
      name: "Khaledur Rahman",
      title: "Joint Secretary, Government of Bangladesh and Senior Consultant,",
      organization: "Bangladesh e-Government ERP Project",
      email: "khaled.mp53@gmail.com",
      phone: "+8801715623799",
    },
    {
      id: 11,
      name: "Rajarshee Das",
      title: "Manager, Global Fraud management, American Express",
      organization: "",
      email: "rajarshee.das@aexp.com",
      phone: "(919) 413-6774",
      phone2: "+88017110842922",
    },
    {
      id: 12,
      name: "Tasnim Haider Chaudhury",
      title: "IT Specialist, Bangladesh Computer Council",
      organization: "",
      email: "tasnimhaiderchaudhury@gmail.com",
      phone: "",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-500">
          {recommendationsData.map((rec) => (
            <div key={rec.id} className="p-4 border border-gray-400 bg-white">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">
                {rec.name}
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm mb-1">
                {rec.title}
              </p>
              {rec.organization && (
                <p className="text-gray-700 text-xs sm:text-sm mb-2">
                  {rec.organization}
                </p>
              )}
              {rec.email && (
                <p className="text-gray-600 text-xs sm:text-sm break-all">
                  {rec.email}
                </p>
              )}
              {rec.phone && (
                <p className="text-gray-600 text-xs sm:text-sm">{rec.phone}</p>
              )}
              {rec.phone2 && (
                <p className="text-gray-600 text-xs sm:text-sm">{rec.phone2}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
