import React from 'react'

const ShoeCard = ({thumbNail,onClick}) => {
  return (
    <div onClick={onClick} className=' relative flex justify-center items-center rounded-lg sm:w-[40] sm:h-[40] max-sm:p-4 border-2 bg-card bg-center bg-cover cursor-pointer hover:-translate-y-1  hover:transition-all z-20'>
        <img src={thumbNail} alt='img' width={127} height={103} className='object-contain'  />
    </div>
  )
}

export default ShoeCard