import React from 'react'
import { products } from '../../db'
import ProductCard from '../components/ProductCard'
import {englishLang} from '../../locale/index'

const PopularProducts = () => {
  return (
    <section className='max-container'>
      <div className='flex flex-col gap-6 justify-start'>
      <h2 className='font-palanquin text-4xl leading-10 font-bold lg:max-w-lg mt'>Our <span className='text-coral-red'>Popular</span> Products</h2>
      <p className='info-text lg:max-w-lg mt-2'>{englishLang.popularProductsDescription}</p>
      </div>
      <div className='mt-16 grid gap-14 sm:gap-4  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {products.map((product,index)=>(
          <ProductCard key={index} imgURL={product.imgURL} name={product.name} price={product.price} rating={product.rating} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts