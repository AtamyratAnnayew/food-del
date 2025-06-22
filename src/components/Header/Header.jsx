import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import { assets } from '../../assets/assets'

const Header = () => {
  const { setIsModalOpen } = useContext(StoreContext);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${assets.headerImage})` }}
    >
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[744px] px-4 sm:px-6 flex flex-col items-start gap-6 sm:gap-8 md:gap-10 text-start">

        {/* Responsive Heading */}
        <p className="text-white font-inter font-extrabold text-3xl sm:text-4xl md:text-6xl leading-snug sm:leading-tight">
          Hoş geldiňiz!
          <br />
          Biz siziň üçin ýakymly <br />
          iýmitler taýýarladyk
        </p>

        {/* Responsive Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-[261px] h-[58px] sm:h-[68px] rounded-full px-6 sm:px-[50px] py-3 sm:py-[20px] bg-white text-black font-inter font-semibold text-base sm:text-lg leading-7 cursor-pointer transition hover:bg-gray-200"
        >
          Onlaýn zakaz ediň
        </button>
      </div>
    </div>

  );
};

export default Header;
