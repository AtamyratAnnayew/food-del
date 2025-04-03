import React from 'react'
import { assets } from '../../assets/assets'
import ReactPlayer from 'react-player';


const About = () => {
  return (
    <div className='about my-10 px-20 h-[570px]'>
        <div className="mainContainer flex flex-col gap-[70px]">
            <h1 className='text-white font-inter font-bold text-[50px] leading-[70px] tracking-normal text-center flex justify-center'>Näme üçin iň gowy iýmit öndüriji?</h1>
            <div className="textVideoContainer flex flex row gap-[87px] h-[430px]">
                <div className="textContainer w-[513px] h-[430px] text-white font-inter font-normal text-[18px] leading-[30px] tracking-normal">
                    <p>It is a long established fact that a reader will be distracted 
                        layout. The point of using Lorem Ipsum is that it has a more-
                        or-less normal distribution of letters, as opposed to using 
                        English. Many desktop publishing packages and web page editors 
                        now use Lorem Ipsum as their default model text, and a search 
                        for 'lorem ipsum' will uncover many web sites still in their 
                        infancy. Various versions have evolved over the years, sometimes 
                        by accident, sometimes on purpose It is a long established fact 
                        that a reader will be distracted by the readable content of a 
                        page when looking at its layout. The normal distribution of 
                        letters, as opposed to using 'Content  Many desktop publishing 
                        packages and web page editors search for 'lorem ipsum' will 
                        uncover many web sites still in  humour and the like. 
                        <span className='font-inter font-bold cursor-pointer'> Read More</span>
                    </p>
                </div>
                <div className="videoContainer w-[570px] h-[430px]">
                    <ReactPlayer url={assets.video} controls width="100%" height="100%" />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default About
