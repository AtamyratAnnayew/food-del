import { assets } from '../../assets/assets'; 

const Header = () => {
  return (
    <div className='header -full h-[913px] bg-cover bg-center bg-no-repeat'style={{
        backgroundImage: `url(${assets.headerImage})`,
      }}>
      <div className="headerMain absolute flex flex-col items-start gap-[40px] w-[744px] h-[345px] left-[188px] top-[368px]">
        <p className="headerText text-4xl text-white font-inter font-extrabold text-[66px] leading-[79px]">Hoş geldiňiz!<br/>
        Biz siziň üçin ýakymly <br/>iýmitler taýýarladyk</p>
        <button className='w-[261px] h-[68px] rounded-[40px] pt-[20px] pr-[50px] pb-[20px] pl-[50px] gap-[10px] font-inter font-semibold text-[18px] leading-[28px] tracking-[0%] bg-white text-black cursor-pointer'>Onlaýn zakaz ediň</button>
      </div>
    </div>
  )
}

export default Header
