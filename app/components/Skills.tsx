import { Code2, Server, Database, Brain, Cloud, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="text-blue-500" size={24} />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="text-green-500" size={24} />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Passport.js",
      "Prisma ORM",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="text-yellow-600" size={24} />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "AI & LLMs",
    icon: <Brain className="text-purple-500" size={24} />,
    skills: [
      "Large Language Models (LLM)",
      "Retrieval-Augmented Generation (RAG)",
      "Artificial Intelligence",
    ],
  },
  {
    title: "Architecture & DevOps",
    icon: <Cloud className="text-sky-500" size={24} />,
    skills: [
      "SaaS Architecture",
      "Systems Design",
      "CI/CD",
      "Linux",
      "GitHub",
      "Production Debugging",
    ],
  },
  {
    title: "Languages & Concepts",
    icon: <Terminal className="text-gray-700 dark:text-gray-300" size={24} />,
    skills: ["C++", "OOP", "Full-Stack Development", "Communication"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-gray-900 scroll-mt-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, production-ready
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
