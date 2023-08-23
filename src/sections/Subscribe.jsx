import React from 'react'
import { englishLang } from '../../locale'

const Subscribe = () => {
  return (
    <section className='flex max-lg:flex-col gap-10 max-container justify-between items-center '>
      <p className='text-4xl font-palanquin font-bold lg:max-w-md leading-[68px]'>
      {englishLang.signUpForm} <span className='text-coral-red'>{englishLang.updates}</span> {englishLang.newsletter}
      </p>
      <div className=' w-full lg:max-w-[40%] flex items-center justify-between border border-slate-gray gap-2 p-2.5 rounded-full'>
        <input className='text-sm p-2 focus:outline-none border-none outline-none' placeholder={englishLang.email_placeHolder}/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full overflow-hidden'>
        <button className='flex  font-montserrat items-center justify-center px-7 py-4 rounded-full text-md bg-coral-red text-white'>{englishLang.btn_signUp_Label}</button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe