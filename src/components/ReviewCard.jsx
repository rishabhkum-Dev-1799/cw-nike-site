import React from 'react'
import { star } from '../assets/icons'
const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <img src={imgURL} className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className='mt-6 info-text text-center max-w-lg'>{feedback}</p>
        <div className='mt-3 flex items-center justify-center gap-2'>
            <img src={star}/>
            <p className='info-text'>{`(${rating})`}</p>
        </div>
        <p className='mt-3 font-palanquin leading-4 font-bold text-xl'>{customerName}</p>
    </section>
  )
}

export default ReviewCard