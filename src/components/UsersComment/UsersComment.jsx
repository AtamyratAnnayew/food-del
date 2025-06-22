import { assets } from '../../assets/assets'

const UsersComment = () => {
    return (
        <div className='usersComment px-4 sm:px-8 md:px-15 lg:px-20'>
    <div className="mainUserComment flex justify-center items-center flex-col gap-8 sm:gap-12 md:gap-[70px] py-8 md:py-16">
        <div className="text-white font-inter font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-snug md:leading-[70px] text-center">
            <h1>Müşderilerimiziň aýdýanlary</h1>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-[30px] w-full max-w-7xl">
            <div className="userList flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-[30px]">
                {[...Array(3)].map((_, index) => (
                    <div key={`user1-${index}`} className="listItem bg-[#191919] w-full sm:w-[calc(50%-1rem)] lg:w-[370px] min-h-[300px] rounded-[16px] p-4 sm:p-6 md:p-[30px] flex flex-col gap-6 md:gap-[30px]">
                        <div className="imgName">
                            <div className="flex flex-row gap-3 md:gap-[12px]">
                                <img className='w-12 h-12 sm:w-16 sm:h-16 md:w-[72px] md:h-[74px] rounded-full' src="" alt="" />
                                <div className="text-white flex flex-col gap-2 md:gap-[8px]">
                                    <h3 className='font-inter font-bold text-base sm:text-lg md:text-[18px] leading-6 md:leading-[28px]'>Michal Gun</h3>
                                    <span className='font-inter font-normal text-xs sm:text-sm md:text-[14px] leading-5 md:leading-[22px]'>Tesla satuw bölüminiň başlygy</span>
                                    <div className="Stars flex flex-row gap-1 md:gap-2">
                                        {[...Array(5)].map((_, i) => (
                                            <img key={i} src={assets.star} alt="star" className='w-3 h-3 md:w-4 md:h-4' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center mt-3 md:mt-5">
                                <img src={assets.comment} alt="comment" className='w-5 h-5 md:w-6 md:h-6' />
                                <hr className='w-full max-w-[195px] h-[1px] bg-gray-300 ml-2' />
                            </div>
                        </div>
                        <div className="textAbout overflow-auto">
                            <p className='font-inter font-medium text-sm sm:text-base md:text-[18px] leading-6 md:leading-[28px] text-white'>
                                There are many variations of passages of Lorem Ipsum available but the majority. If you are
                                going to use a passage of Lorem Ipsum, you need to be sure there is nothing embarrassing hidden in
                                believable.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="userList flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-[30px]">
                {[...Array(3)].map((_, index) => (
                    <div key={`user2-${index}`} className="listItem bg-[#191919] w-full sm:w-[calc(50%-1rem)] lg:w-[370px] min-h-[300px] rounded-[16px] p-4 sm:p-6 md:p-[30px] flex flex-col gap-6 md:gap-[30px]">
                        <div className="imgName">
                            <div className="flex flex-row gap-3 md:gap-[12px]">
                                <img className='w-12 h-12 sm:w-16 sm:h-16 md:w-[72px] md:h-[74px] rounded-full' src="" alt="" />
                                <div className="text-white flex flex-col gap-2 md:gap-[8px]">
                                    <h3 className='font-inter font-bold text-base sm:text-lg md:text-[18px] leading-6 md:leading-[28px]'>Michal Gun</h3>
                                    <span className='font-inter font-normal text-xs sm:text-sm md:text-[14px] leading-5 md:leading-[22px]'>Tesla satuw bölüminiň başlygy</span>
                                    <div className="Stars flex flex-row gap-1 md:gap-2">
                                        {[...Array(5)].map((_, i) => (
                                            <img key={i} src={assets.star} alt="star" className='w-3 h-3 md:w-4 md:h-4' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center mt-3 md:mt-5">
                                <img src={assets.comment} alt="comment" className='w-5 h-5 md:w-6 md:h-6' />
                                <hr className='w-full max-w-[195px] h-[1px] bg-gray-300 ml-2' />
                            </div>
                        </div>
                        <div className="textAbout overflow-auto">
                            <p className='font-inter font-medium text-sm sm:text-base md:text-[18px] leading-6 md:leading-[28px] text-white'>
                                There are many variations of passages of Lorem Ipsum available but the majority. If you are
                                going to use a passage of Lorem Ipsum, you need to be sure there is nothing embarrassing hidden in
                                believable.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
    )
}

export default UsersComment
