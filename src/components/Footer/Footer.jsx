import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id="habarlasmak">
            <div className="footerContent bg-[#191919] h-[410px] px-28 pt-20 ">
                <div className="footerMenu flex flex-row justify-between text-white">
                    <div className="footerMenuItem_1 flex flex-col gap-5">
                        <h1 className='font-inter font-semibold text-2xl leading-6'>Önümlerimiz</h1>
                        <div className="flex flex-col gap-4 font-inter font-normal text-lg leading-4">
                            <span>Menýularymyz</span>
                            <span>Döwrümiziň taraplary</span>
                        </div>
                    </div>

                    <div className="footerMenuItem_2 flex flex-col gap-5 ">
                        <h1 className='font-inter font-semibold text-2xl leading-6'>Hukuk maglumatlary</h1>
                        <span className='font-inter font-normal text-lg leading-4'>Hukuk habarnamasy</span>
                    </div>

                    <div className="footerMenuItem_3 flex flex-col gap-5">
                        <h1 className='font-inter font-semibold text-2xl leading-6'>Biz bilen habarlaşyň</h1>
                        <div className="flex flex-col gap-4 font-inter font-normal text-lg leading-4">
                            <span>Aragatnaşyklar</span>
                            <span>Salgylarymyz</span>
                        </div>
                    </div>
                </div>
                <div className="footerSoscial flex flex-col gap-5 justify-center items-center mt-20">
                    <hr className='h-2 w-[1170px] border-t-[1px] border-[#4F4F4F]'/>
                    <div className="flex flex-row gap-6 cursor-pointer">
                        <img src={assets.facebook} alt="" />
                        <img src={assets.twitter} alt="" />
                        <img src={assets.instagram} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
