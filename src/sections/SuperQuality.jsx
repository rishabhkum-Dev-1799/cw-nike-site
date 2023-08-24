import React from 'react'
import { shoe8 } from '../assets/images'
import { englishLang } from '../../locale'
import PrimaryButton from '../components/UI/PrimaryButton'
import { arrowRight } from '../assets/icons'

const SuperQuality = () => {
  return (
    <section className='max-container flex justify-between max-lg:flex-col gap-10 w-full '>
      <section className='flex-1 flex flex-col'>
        <h2 className='capitalize font-palanquin text-4xl font-bold lg:max-w-lg leading-normal '> We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h2>
        <p className='mt-5 info-text lg:max-w-lg'>{englishLang.qualityDescriptionOne}</p>
        <p className=' mt-5 info-text lg:max-w-lg'>{englishLang.qualityDescriptionTwo}</p>
        <div className='mt-5'>
          <PrimaryButton>
            {englishLang.btn_ShopNow}
              <img src={arrowRight} alt='arrow_btn' className='ml-5 w-5 h-5 rounded-full' />
          </PrimaryButton>
        </div>
      </section>
      <section className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt='shoes_quality' width={700} height={700} className='object-contain'/>
      </section>
    </section>
  )
}

export default SuperQuality