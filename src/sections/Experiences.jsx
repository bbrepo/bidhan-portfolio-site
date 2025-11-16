import React from "react";

const Experiences = () => {
  const experiencesData = [
    {
      id: 1,
      position: "Software Engineer",
      company: "Infosys Limited, Mississauga, Canada",
      year: "February 2024 - Present",
      description:
        "Developing and deploying scalable microservices using Java Spring Boot and Spring Cloud. Implementing RESTful APIs and SOAP web services with comprehensive API documentation using Swagger. Managing relational and NoSQL databases including PostgreSQL, MySQL, MongoDB, and Cassandra. Building responsive web applications with ReactJS, Redux, and modern JavaScript frameworks. Containerizing applications using Docker and orchestrating with Kubernetes. Implementing CI/CD pipelines with Jenkins and GitHub Actions. Utilizing AWS services including EC2, S3, Lambda, and RDS.",
    },
    {
      id: 2,
      position: "Software Engineer",
      company: "Ernst & Young LLP (EY), Dhaka, Bangladesh",
      year: "October 2019 - July 2022",
      description:
        "Developed enterprise-level Java applications using Spring Framework ecosystem including Spring Boot, Spring MVC, and Spring Security. Designed and implemented microservices architecture using Spring Cloud, Eureka, and API Gateway. Built RESTful and SOAP web services with JAX-RS and JAX-WS. Managed complex data operations using Hibernate ORM and Spring Data JPA. Implemented message-driven architecture using Apache Kafka and RabbitMQ. Developed responsive frontend applications using Angular, TypeScript, and Bootstrap. Performed database management with MySQL, Oracle, and MongoDB. Created automated test suites using JUnit and Mockito.",
    },
    {
      id: 3,
      position: "Software Engineer (Enterprise Application)",
      company:
        "Bangladesh Computer Council (BCC), ICT Division, Dhaka, Bangladesh",
      year: "January 2012 - September 2019",
      description:
        "Led development of Bangladesh e-Government ERP Project serving 50+ ministries. Architected and developed large-scale enterprise applications using Java EE, Spring Framework, and JSF. Implemented Service-Oriented Architecture (SOA) using Apache Axis and WSO2 ESB. Developed business process workflows using Camunda BPMN engine. Built web applications using PHP Laravel, WordPress, and Shopify platforms. Designed and optimized Oracle and MySQL databases with complex stored procedures. Implemented security features using Spring Security with JWT and OAuth2.0. Created data analytics solutions using Python Pandas, Matplotlib, and Seaborn. Managed big data processing with Hadoop and Apache Hive.",
    },
  ];

  return (
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4">
        Experiences
      </h1>

      <div className="bg-gray-200 rounded-xl p-3">
        <div className="space-y-6">
          {experiencesData.map((experience) => (
            <div
              key={experience.id}
              className="p-3 sm:p-4 bg-gray-400/60 rounded-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {experience.position}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm ml-4 whitespace-nowrap">
                  {experience.year}
                </p>
              </div>
              <p className="font-medium text-gray-800 mb-1 text-sm">
                {experience.company}
              </p>
              <p className="text-gray-800 leading-relaxed text-sm">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
