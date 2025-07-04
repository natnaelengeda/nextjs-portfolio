import React from "react"

import Link from "next/link"
import { CiUser as User } from "react-icons/ci"
import { FaArrowLeft as ArrowLeft } from "react-icons/fa"
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGit,
  FaDatabase,
  FaLaravel,
} from "react-icons/fa"
import { RiFlutterFill } from "react-icons/ri"
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si"

export default function Skills() {
  const skills = [
    {
      name: "React",
      level: 90,
      color: "from-blue-500 to-cyan-500",
      icon: <FaReact className="text-2xl text-white" />,
    },
    {
      name: "Flutter",
      level: 75,
      color: "from-blue-400 to-cyan-400",
      icon: (
        <RiFlutterFill className="devicon-flutter-plain text-2xl text-white" />
      ),
    },
    {
      name: "TypeScript",
      level: 85,
      color: "from-blue-600 to-blue-400",
      icon: <SiTypescript className="text-2xl text-white" />,
    },
    {
      name: "Next.js",
      level: 88,
      color: "from-gray-800 to-gray-600",
      icon: <SiNextdotjs className="text-2xl text-white" />,
    },
    {
      name: "Node.js",
      level: 82,
      color: "from-green-600 to-green-400",
      icon: <FaNodeJs className="text-2xl text-white" />,
    },
    {
      name: "Python",
      level: 75,
      color: "from-yellow-500 to-yellow-300",
      icon: <FaPython className="text-2xl text-white" />,
    },
    {
      name: "Laravel",
      level: 70,
      color: "from-red-700 to-red-500",
      icon: <FaLaravel className="devicon-laravel-plain text-2xl text-white" />,
    },
    {
      name: "PostgreSQL",
      level: 80,
      color: "from-blue-700 to-blue-500",
      icon: <SiPostgresql className="text-2xl text-white" />,
    },
    {
      name: "MongoDB",
      level: 78,
      color: "from-green-700 to-green-500",
      icon: <SiMongodb className="text-2xl text-white" />,
    },
    {
      name: "AWS",
      level: 70,
      color: "from-orange-600 to-orange-400",
      icon: <FaAws className="text-2xl text-white" />,
    },
    {
      name: "Docker",
      level: 72,
      color: "from-blue-600 to-blue-400",
      icon: <FaDocker className="text-2xl text-white" />,
    },
    {
      name: "Git",
      level: 85,
      color: "from-red-600 to-red-400",
      icon: <FaGit className="text-2xl text-white" />,
    },
    {
      name: "GraphQL",
      level: 68,
      color: "from-pink-600 to-pink-400",
      icon: <SiGraphql className="text-2xl text-white" />,
    },
    {
      name: "Tailwind CSS",
      level: 90,
      color: "from-teal-500 to-cyan-500",
      icon: <SiTailwindcss className="text-2xl text-white" />,
    },
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
              Here are the technologies and tools I work with to bring ideas to
              life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${skill.color} backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:opacity-90 transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <div className="ml-2">{skill.icon}</div>
                </div>

                {/* Skill Level Text */}
                <div className="text-xs text-gray-100 drop-shadow">
                  {skill.level >= 85
                    ? "Expert"
                    : skill.level >= 70
                    ? "Advanced"
                    : "Intermediate"}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technology evolves rapidly, and {`I'm`} committed to continuous
              learning. Currently exploring AI/ML, Web3 technologies, and
              advanced cloud architectures.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400">
        <p>
          Made by 😊{" "}
          <span className="text-purple-400 font-medium">Natnael Engeda</span>
        </p>
      </footer>
    </div>
  )
}
