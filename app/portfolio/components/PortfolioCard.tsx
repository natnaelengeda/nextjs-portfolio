"use client"
import React from "react"

// Loadable Image
import { AsyncImage } from 'loadable-image'
import { Blur } from 'transitions-kit'

// Components
import { Badge } from "@/app/components/badge";
import { LoadingImage } from "./LoadingImage";

interface IPortfolioCard {
  project: any;
  setSelectedProject: any;
}
export default function PortfolioCard({ project, setSelectedProject }: IPortfolioCard) {


  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => setSelectedProject(project)}>

      {/* Image */}
      <div className="relative w-full h-60">
        <AsyncImage
          src={typeof project.image === "string" ? project.image : project.image.src}
          style={{
            width: "100%",
            height: "100%"
          }}
          loader={<LoadingImage />}
          error={<LoadingImage />}
          Transition={props => <Blur radius={10} {...props} />} />
      </div>


      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tag: any) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
              {tag}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
        {/* 
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{project.date}</span>
                    <span>{project.team}</span>
                  </div> */}
      </div>
    </div>
  )
}
