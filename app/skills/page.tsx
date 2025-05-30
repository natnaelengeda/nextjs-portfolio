import React from 'react';

import Link from "next/link"
import { CiUser as User } from 'react-icons/ci';
import { FaArrowLeft as ArrowLeft } from 'react-icons/fa';


export default function Skills() {
  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
    { name: "Next.js", level: 88, color: "from-gray-800 to-gray-600" },
    { name: "Node.js", level: 82, color: "from-green-600 to-green-400" },
    { name: "Python", level: 75, color: "from-yellow-500 to-yellow-300" },
    { name: "PostgreSQL", level: 80, color: "from-blue-700 to-blue-500" },
    { name: "MongoDB", level: 78, color: "from-green-700 to-green-500" },
    { name: "AWS", level: 70, color: "from-orange-600 to-orange-400" },
    { name: "Docker", level: 72, color: "from-blue-600 to-blue-400" },
    { name: "Git", level: 85, color: "from-red-600 to-red-400" },
    { name: "GraphQL", level: 68, color: "from-pink-600 to-pink-400" },
    { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-cyan-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Content */}
      <main className="px-6 py-12 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text_background">
              Skills & Technologies
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                {/* Skill Level Text */}
                <div className="text-xs text-gray-500">
                  {skill.level >= 85 ? "Expert" : skill.level >= 70 ? "Advanced" : "Intermediate"}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Always Learning</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technology evolves rapidly, and {`I'm`} committed to continuous learning. Currently exploring AI/ML, Web3
              technologies, and advanced cloud architectures.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400">
        <p>
          Made by 😊 <span className="text-purple-400 font-medium">Natnael Engeda</span>
        </p>
      </footer>
    </div>
  )
}
