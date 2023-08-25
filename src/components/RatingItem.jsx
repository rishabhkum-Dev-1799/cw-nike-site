import React from 'react'

const RatingItem = ({value,label}) => {
  return (
    <div>
    <p className='text-4xl font-montserrat font-bold'>{value}</p>
    <p className='font-montserrat text-slate-gray text-lg leading-7'>{label}</p>
    </div>
  )
}

export default RatingItem