import React from "react";
import { footerLinks, socialMedia } from "../../db";
import { englishLang } from "../../locale";
import {footerLogo} from '../assets/images/index'
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 max-lg:flex-col">
        <div className='flex flex-col items-start lg:w-2/6 p-2 overflow-hidden'>
          <div>
            <a href="/">
                <img src={footerLogo} alt="Nike"/>
            </a>
          </div>
          <p className="mt-6 font-montserrat text-white-400 font-normal">
            {englishLang.footerDescription}
          </p>
          <div className="flex gap-4 mt-6 overflow-hidden">
              {socialMedia.map((socialPlatform,index)=>(
                <button className='flex items-center justify-center rounded-full  bg-white w-12 h-12 ' key={index}>
                <img src={socialPlatform.src} alt={socialPlatform.alt} width={24} height={24} className="object-contain"/>
                </button>
              ))}
          </div>
        </div>
        <div className=" lg:w-4/6 flex flex-1 flex-wrap gap-20 items-start">
          {footerLinks && footerLinks.map((footerLink, index) =>( 
          <div key={index} >
            <h3 className='text-white font-montserrat text-xl font-medium mb-6'>{footerLink.title}</h3>
            <ul className=''>
                {
                    footerLink.links.map((link,index)=>(
                        <li key={index} className=' text-white-400 leading-normal font-normal font-montserrat mt-4  cursor-pointer'>
                            <p>{link.name}</p>
                        </li>
                    ))
                }
            </ul>
          </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center text-white mt-24 max-sm:flex-col sm:items-center">
        <div className='flex items-center justify-center gap-2'>
                <img src={copyrightSign} alt={englishLang.copyrightSign} width={20} height={20}/>
                <p className="font-montserrat text-white-400 text-sm ">{englishLang.footer_CopyRight}</p>
        </div>
        <p className="font-montserrat text-white-400 text-sm ">{englishLang.footerTerms_Conditions}</p>
      </div>
    </footer>
  );
};

export default Footer;
