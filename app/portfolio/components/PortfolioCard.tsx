"use client"
import { CiLink } from 'react-icons/ci';
import Image from 'next/image';


export default function PortfolioCard({ name, image, imageDescription, url, description, color }: { name: string, image: string, imageDescription: string, url: string, description: string, color: string }) {
  return (
    <div
      onClick={() => {
        window.open(url)
      }}
      className="normshad flex flex-col rounded-xl overflow-hidden shadow-md item-transition cursor-pointer">
      {/* Image */}
      <div className="w-full h-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt={imageDescription}
          width={500}
          height={500}
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2 bg-white px-5 py-5">
        <div className="flex flex-row gap-2 items-center">
          <h1
            style={{
              color: color,
              // WebkitTextStroke: `1px ${color}`,
              // WebkitTextFillColor: 'transparent',
            }}
            className={`text-2xl font-bold ]`}>{name}</h1>
          <CiLink
            onClick={() => {
              window.open(url)
            }}
            style={{
              color: color,
              WebkitTextStroke: `1px ${color}`,
              WebkitTextFillColor: 'transparent',
            }}
            className={`text-3xl font-bold cursor-pointer`} />
        </div>
        <p className="text-sm text-fontColor">{description}</p>
      </div>
    </div>
  )
}
