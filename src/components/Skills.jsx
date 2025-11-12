import React from "react";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap"
    ],
    Backend: [
      "Python",
      "Flask",
      "Django",
      "PHP",
      "Java",
      "C++",
      "Symfony",
      "ASP.NET",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "JWT",
      "OAuth2"
    ],
    Databases: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Firebase",
      "NeonDB",
      "SQL Server"
    ],
    "DevOps & Cloud": [
      "Docker",
      "Kubernetes",
      "GitLab CI",
      "Vercel",
      "Netlify",
      "GitHub",
      "AWS",
      "Azure"
    ],
    "Tools & Platforms": [
      "Git",
      "Figma",
      "Postman",
      "Trello",
      "Jira",
      "Adobe Photoshop"
    ]
  };

  return (
    <section id="skills" className="bg-gray-950 text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-20">
          My Skills
        </h2>

        <div className="space-y-16">
          {/* Frontend */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              {skills.Frontend.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-transparent border-2 border-gray-700 rounded-lg text-lg font-medium hover:border-gray-500 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Backend</h3>
            <div className="flex flex-wrap gap-4">
              {skills.Backend.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-transparent border-2 border-gray-700 rounded-lg text-lg font-medium hover:border-gray-500 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Databases</h3>
            <div className="flex flex-wrap gap-4">
              {skills.Databases.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-transparent border-2 border-gray-700 rounded-lg text-lg font-medium hover:border-gray-500 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div>
            <h3 className="text-3xl font-bold mb-8">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-4">
              {skills["DevOps & Cloud"].map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-transparent border-2 border-gray-700 rounded-lg text-lg font-medium hover:border-gray-500 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-4">
              {skills["Tools & Platforms"].map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-transparent border-2 border-gray-700 rounded-lg text-lg font-medium hover:border-gray-500 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;