import React from 'react'

import { services } from '../../db'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className='flex max-lg:flex-col gap-16 items-center justify-center flex-wrap'>
      {services.map((service,index)=>(
        <ServiceCard key={index} imgURL={service.imgURL} label={service.label} subtext={service.subtext}/>
      ))}
    </div>
  )
}

export default Services