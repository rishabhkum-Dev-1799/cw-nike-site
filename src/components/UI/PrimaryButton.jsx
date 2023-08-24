import React from 'react'

const PrimaryButton = ({children,...props}) => {
  return (
    <button className='border-none focus:outline-none flex items-center justify-center gap-2 p-4 rounded-full bg-coral-red text-white text-lg' {...props}>
        {children}
    </button>
  )
}

export default PrimaryButton