// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapSection = () => {

    const handleMapOpen = () => {
        const mapUrl = "https://maps.google.com/maps?width=540&height=470&hl=en&q=Taslama%20st%20100,%20Oguz%20han%20university+(I%20Club)&t=&z=14&ie=UTF8&iwloc=B&output=embed";
        window.open(mapUrl, "_blank"); // Opens the map in a new tab
      };

  return (
    <div className="map my-20 px-4 sm:px-10 md:px-20">
  <div className="mainMapSection flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:justify-between h-auto lg:h-[470px]">
    
    {/* Left Content */}
    <div className="flex flex-col gap-10 lg:gap-20 max-w-xl">
      <div className="text-white flex flex-col gap-4 sm:gap-5">
        <h1 className="font-inter font-bold text-2xl sm:text-4xl md:text-[50px] leading-tight sm:leading-[60px] md:leading-[70px]">
          Bizi nireden tapmaly?
        </h1>
        <p className="font-inter font-normal text-base sm:text-lg md:text-[20px] leading-[26px] sm:leading-[28px] md:leading-[30px]">
          Maşgalaňyz, dostlaryňyz ýa-da işdeş kärdeşleriňiz bilen 
          ajaýyp ýerde ajaýyp nahar iýmek isleýärsiňizmi ine, salgymyz.
        </p>
      </div>

      <div className="text-black">
        <button
          onClick={handleMapOpen}
          className="w-full sm:w-[258px] h-[50px] sm:h-[58px] bg-white rounded-full font-inter font-semibold text-base sm:text-[18px] leading-[28px] cursor-pointer hover:bg-gray-200 transition"
        >
          Kartadan tapmak
        </button>
      </div>
    </div>

    {/* Google Map */}
    <div className="map w-full lg:w-[540px] h-[300px] sm:h-[400px] lg:h-[470px]">
      <iframe
        width="100%"
        height="100%"
        className="rounded-[20px] border-0"
        src="https://maps.google.com/maps?width=540&amp;height=470&amp;hl=en&amp;q=Taslama%20st%20100,%20Oguz%20han%20university+(I%20Club)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>

  )
}

export default MapSection
