import React from 'react'

const Statistics = () => {
  return (
    <div className='statistics flex justify-center items-center my-20'>
      <div className="statisticsMain flex flex-col gap-10">
            <div className="letter pl-14">
                <h1 className='font-inter font-semibold text-[44px] leading-[60px] text-white'>Hil taýdan iýmit öndürmäge ynanýarys</h1>
            </div>
            <div className="usersWorkers text-white flex flex-row gap-28">
                <div className="users flex flex-col gap-2">
                    <span className='font-inter font-bold text-[56px] leading-[66px]'>2M+</span>
                    <span className='font-inter font-normal text-[18px] leading-[30px]'>Ulanýan Müşderiler</span>
                </div>
                <div className="likedUsers flex flex-col gap-2">
                    <span className='font-inter font-bold text-[56px] leading-[66px]'>98%</span>
                    <span className='font-inter font-normal text-[18px] leading-[30px]'>Halan Müşderiler</span>
                </div>
                <div className="ourSection flex flex-col gap-2">
                    <span className='font-inter font-bold text-[56px] leading-[66px]'>20+</span>
                    <span className='font-inter font-normal text-[18px] leading-[30px]'>Biziň Bölümlerimiz</span>
                </div>
                <div className="totalWorkers flex flex-col gap-2">
                    <span className='font-inter font-bold text-[56px] leading-[66px]'>100+</span>
                    <span className='font-inter font-normal text-[18px] leading-[30px]'>Jemi Işgärler</span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Statistics
