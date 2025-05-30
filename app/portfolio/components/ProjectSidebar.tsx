import React from 'react'

// Components
import { Button } from '@/app/components/button';
import { Badge } from '@/app/components/badge';
import { LoadingImage } from './LoadingImage';

// Loadable Image
import { AsyncImage } from 'loadable-image'
import { Blur } from 'transitions-kit'

// Icons
import { Github, User, ArrowLeft, ExternalLink, X, Calendar, Users, Code2, LockKeyhole } from "lucide-react"

interface IProjectSidebar {
  selectedProject: any;
  setSelectedProject: any;

}
export default function ProjectSidebar({ selectedProject, setSelectedProject }: IProjectSidebar) {
  return (
    <>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />

          {/* Sidebar */}
          <div className="w-full max-w-lg bg-gray-900 border-l border-gray-700 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Project Image */}
              {/* Image */}
              <div className="relative w-full h-60">
                <AsyncImage
                  src={typeof selectedProject.image === "string" ? selectedProject.image : selectedProject.image.src}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem",
                  }}
                  loader={<LoadingImage />}
                  error={<LoadingImage />}
                  Transition={props => <Blur radius={10} {...props} />} />
              </div>

              {/* Project Info */}
              <div className="space-y-4 mb-6 mt-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {selectedProject.team}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tag: any, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features && selectedProject.features.map((feature: any, index: number) => (
                    <li
                      key={index} className="text-gray-300 text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#FFD200] rounded-full mt-2 flex-shrink-0" />
                      {feature && feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-gradient-to-r from-[#F7971E] to-[#FFD200]  hover:to-pink-700">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex flex-row items-center justify-center gap-2'>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  disabled={selectedProject.github.type == "private"}
                  variant="outline"
                  className={`flex-1 border-gray-600 text-gray-300 bg-gray-800 ${selectedProject.github.type == "private" && "cursor-not-allowed"}`}>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex flex-row items-center justify-center gap-2'>
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                    {
                      selectedProject.github.type == "private" &&
                      <LockKeyhole className="w-3 h-3 mr-2" />
                    }
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
