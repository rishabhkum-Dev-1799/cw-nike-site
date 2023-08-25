import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <section className=' border  flex flex-col flex-1 px-10 py-16 rounded-[20px] sm:w-[350px] sm:max-w-[350px] shadow-2xl w-full hover:-translate-y-10 hover:transition-all'>
        <div className='w-11 h-11 bg-coral-red flex items-center justify-center overflow-hidden rounded-full'>
            <img src={imgURL} alt={label} width={24} height={24}/>
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
        <p className='mt-3 font-montserrat leading-normal break-words8 text-lg text-slate-gray'>{subtext}</p>
    </section>
  )
}

export default ServiceCard