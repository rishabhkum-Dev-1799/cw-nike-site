import React from 'react'
import { star } from '../assets/icons'

const ProductCard = ({imgURL,name,price,rating}) => {
  return (
    <section className='flex flex-1 flex-col w-full max-sm:w-full'>
        <div>
          <img src={imgURL} alt={name} width={200} height={200} className='w-[280px] h-[280px]'/>
        </div>
        <div className='flex gap-2 items-center justify-start my-4'>
          <img src={star} alt='star' className='w-8 h-8'/>
          <p className='font-montserrat text-lg font-normal'>{`(${rating})`}</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className=' mt-2 font-montserrat text-lg font-semibold text-coral-red'>{price}</p>
    </section>
  )
}

export default ProductCard