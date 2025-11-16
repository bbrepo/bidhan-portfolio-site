import React from "react";

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      category: "Language",
      skills:
        "C, Java SE, Java EE, Java Core, Java OOP, Java 8, Java 11, Java 17, Python, PHP",
    },
    {
      id: 2,
      category: "Web design",
      skills:
        "HTML, CSS3, SASS, Bootstrap, JavaScript, Typescript, jQuery, AJAX, JSON, AngularJS, Angular, React JS, Redux, Node JS",
    },
    {
      id: 3,
      category: "Web development",
      skills: "PHP, Laravel, Wordpress, Shopify",
    },
    {
      id: 4,
      category: "Web application development",
      skills:
        "Django, Flask, JDBC, JPA, Servlets, JSP, JSTL, Struts, JSF, EJB, JMS, WebSphere MQ, RabbitMQ, Kafka, Camunda, Eureka, Spring Core, Spring MVC, Spring Boot, Spring AOP, Spring Data JPA, Spring Batch, Spring Cloud, Spring Netflix, Spring Security with JWT and OAuth2.0, IAM, Hibernate, GraphQL",
    },
    {
      id: 5,
      category: "Service Oriented Architecture (SOA)",
      skills:
        "REST, SOAP, WSDL, UDDI, JAX-WS, JAXB, JAX-RPC, JAX-RS, Apache Axis, SOAP UI, Swagger, Postman, WSO2 ESB, WSO2 AM, WSO2 DAS, WSO2 IS",
    },
    {
      id: 6,
      category: "BPMN",
      skills: "Camunda",
    },
    {
      id: 7,
      category: "Database Management Systems",
      skills:
        "MySQL, SQLite, Oracle, SQL Server, PostgreSQL, DB2, NoSQL database, Neo4j, Firebase, Mongo DB, HBase, Couch DB, Cassandra",
    },
    {
      id: 8,
      category: "Big Data",
      skills: "Hadoop, Cloudera, Yarn, Hive, Apache Pig (Pig Latin)",
    },
    {
      id: 9,
      category: "Data analytics",
      skills: "Panda, Seaborn, Matplotlib",
    },
    {
      id: 10,
      category: "Machine learning",
      skills: "Scikit-learn, TensorFlow",
    },
    {
      id: 11,
      category: "DevOps",
      skills:
        "Git, Github, CI/CD, Jenkins, Docker, Container, Kubernetes, Redis",
    },
    {
      id: 12,
      category: "Cloud",
      skills:
        "AWS, Azure, GCP, AWS EC2, AWS S3, Amazon Simple DB, Amazon RDS, Amazon SQS, AWS Lambda, DynamoDB, Elastic Load Balancing (EL), AWS Identity and access management, AWS CloudWatch, Cloudformation, Terraform",
    },
    {
      id: 13,
      category: "Documentation",
      skills: "PowerPoint, Visio, Latex",
    },
    {
      id: 14,
      category: "Graphics",
      skills: "Flash, Photoshop, Illustrator",
    },
    {
      id: 15,
      category: "OS",
      skills: "Windows XP/7, Linux (Ubuntu), CentOS",
    },
  ];

  return (
    <div className="py-4">
      <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Skills
        </h1>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full bg-gray-500 rounded-lg overflow-hidden shadow-sm border border-gray-500  ">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-3 text-left text-sm sm:text-base font-bold text-gray-800 border border-gray-500 w-1/4">
                Category
              </th>
              <th className="px-4 py-3 text-left text-sm sm:text-base font-bold text-gray-800 border border-gray-500">
                Skills
              </th>
            </tr>
          </thead>
          <tbody>
            {skillsData.map((skill, index) => (
              <tr
                key={skill.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-3 text-sm sm:text-base font-semibold text-gray-800 border border-gray-500 align-top">
                  {skill.category}
                </td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-700 border border-gray-500">
                  {skill.skills}
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
