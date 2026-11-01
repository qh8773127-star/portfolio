"use client";
import { GraduationCap, Download, Code2, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A quick overview of my background, education, and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Hi, I&apos;m <strong className="text-gray-900 dark:text-white">Ali Haider</strong>, a passionate Full-Stack and AI Developer. I specialize in building scalable SaaS applications, robust backends, and integrating cutting-edge AI/LLM solutions (like RAG) into real-world products.
            </p>
            <p>
              I love solving complex problems using modern technologies like Next.js, TypeScript, Node.js, and PostgreSQL. Beyond coding, I have strong communication skills and a solid grasp of Object-Oriented Programming (OOP) and Systems Design.
            </p>
            
            <div className="pt-4">
              <a 
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
              >
                <Download size={20} /> Download Resume
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">Graduation</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Government Graduate College, Sheikhupura</p>
              </div>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Core Focus</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Full-Stack Development, SaaS Architecture, AI/LLM Integration, and Systems Design.</p>
              </div>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Soft Skills</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Strong Communication, Team Collaboration, and Problem Solving.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}