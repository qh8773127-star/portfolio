import { ExternalLink, FolderGit2 } from "lucide-react";

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projectsData = [
  {
    title: "AI Document Chatbot (RAG)",
    description: "A production-ready chatbot that ingests PDF documents, chunks them, and uses vector search for accurate, context-aware answers using LLMs.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/rag-chatbot",
  },
  {
    title: "Multi-Tenant SaaS Platform",
    description: "A scalable SaaS architecture with role-based access control, subscription billing, and secure authentication.",
    tech: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/saas-app",
  },
  {
    title: "E-Commerce API & Dashboard",
    description: "High-performance RESTful API with caching and a responsive React dashboard for inventory management.",
    tech: ["React.js", "Express.js", "MySQL", "REST APIs", "CI/CD"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, focusing on scalability, AI integration, and solid architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              <div className="h-48 bg-gray-100 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700 flex items-center justify-center relative group">
                <FolderGit2 size={40} className="text-gray-300 dark:text-gray-600 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <GithubIcon size={18} /> GitHub
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto">
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}