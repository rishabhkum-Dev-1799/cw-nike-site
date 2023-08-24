import React from "react";
import { englishLang } from "../../locale";
import PrimaryButton from "../components/UI/PrimaryButton";
import SecondaryButton from "../components/UI/SecondaryButton";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex max-lg:flex-col-reverse gap-10 max-container items-center">
      <div className="flex-1">
        <img src={offer} alt='special_offer' className='object-contain w-full'/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red mr-4">Special</span>
          Offer
        </h2>
        <p className="info-text mt-4 leading-10 lg:max-w-lg">
          {englishLang.offerDescriptionOne}
        </p>
        <p className="info-text mt-4 leading-10 lg:max-w-lg">
          {englishLang.offerDescriptionTwo}
        </p>
        <div className="flex lg:max-w-lg max-sm:flex-col gap-8 mt-10">
          <PrimaryButton>{englishLang.btn_viewDetails}</PrimaryButton>
          <SecondaryButton>{englishLang.btn_learnMore}</SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
