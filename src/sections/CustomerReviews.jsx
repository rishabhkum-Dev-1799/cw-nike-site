import React from 'react'
import { englishLang } from '../../locale'
import { reviews } from '../../db'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
        <h3 className='text-center font-palanquin text-coral-red text-4xl font-bold'>{englishLang.customerReviewTitle}</h3>
        <p className='info-text m-auto text-center mt-4 max-w-lg'>{englishLang.customerReviewText}</p>
        <div className='flex flex-1 items-center justify-evenly mt-24 max-lg:flex-col gap-12'>
          {reviews.map((review,index)=>(
            <ReviewCard key={index} imgURL={review.imgURL} rating={review.rating} customerName={review.customerName} feedback={review.feedback}/>
          ))}
        </div>
    </section>
  )
}

export default CustomerReviews