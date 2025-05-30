"use client"
import React, { useState } from "react"

import PortfolioCard from './components/PortfolioCard';
import { projects } from '../data/portfolio';
import ProjectSidebar from "./components/ProjectSidebar";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <div className="w-full mx-auto 2xl:container h-auto px-5 md:px-10 flex flex-col gap-5 font-ProductSans py-12 md:py-1">
      {/* Main Content */}
      <main className="px- py-12 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text_background">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              A collection of projects that showcase my skills and passion for creating impactful solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <PortfolioCard
                key={index}
                project={project}
                setSelectedProject={setSelectedProject} />
            ))}
          </div>
        </div>
      </main>

      <ProjectSidebar
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject} />
    </div>
  )
}

