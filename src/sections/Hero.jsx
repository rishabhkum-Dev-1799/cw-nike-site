import React, { useState } from "react";

import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { shoes,statistics } from "../../db";
import PrimaryButton from "../components/UI/PrimaryButton";
import { englishLang } from "../../locale";
import { arrowRight } from "../assets/icons";
import RatingItem from "../components/RatingItem";

const Hero = () => {
  const [imageState, setImageState] = useState(bigShoe1);
  const clickHandler=(event,shoe)=>{
    setImageState((prevValue)=>shoe.bigShoe);
  }
  return (
    <section className="max-container w-full min-h-screen  flex flex-col lg:flex-row gap-10 justify-center">
      <section className="relative  w-full xl:w-2/5 flex flex-col items-start justify-center pt-28 max-xl:padding-x  ">
        <p className="font-montserrat text-2xl text-coral-red">
          {englishLang.heroSubtitle}
        </p>
        <h1 className=' mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 '>The New Arrival</span> <br/> <span className="text-coral-red inline-block mt-3">Nike</span> Shoes</h1>
        <p className="info-text mt-6 mb-14 sm:max-w-sm">{englishLang.heroDescription}</p>
        <div>
          <PrimaryButton >
            {englishLang.btn_ShopNow}
            <img src={arrowRight} alt='arrow_btn' className='ml-5 w-5 h-5 rounded-full' />
          </PrimaryButton>
        </div>
        <div className="mt-20 w-full flex justify-start items-center gap-16 flex-wrap">
            {statistics.map((data,index)=>(
              <RatingItem key={index} label={data.label} value={data.value}/>
            ))}
      </div>
      </section>
      <section className="relative flex-1 flex items-center justify-center xl:min-h-screen max-sm:py-40  bg-hero bg-center bg-cover">
        <img src={imageState} alt="nike" width={610} height={500} className="relative z-10" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[8%] sm:left-[10%] max-sm:p-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              thumbNail={shoe.thumbnail}
              selectedShoe={imageState===shoe.bigShoe?true:false}
              onClick={(event) => clickHandler(event, shoe)}
              key={index}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
