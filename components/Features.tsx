import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <div className='relative'>
            <h2 className="text-4xl lg:text-5xl mb-8 text-gray-800 font-bold">Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-1 lg:grid-cols-3 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div className="flex items-center mb-5">
        <div className="rounded-full p-4 bg-green-50 mr-4">
          <Image src={icon} alt="map" width={28} height={28} />
        </div>
        <h2 className="bold-20 lg:bold- capitalize">
          {title}
        </h2>
      </div>
      <p className="regular-16 text-gray-500">
        {description}
      </p>
    </li>
  )
}

export default Features
