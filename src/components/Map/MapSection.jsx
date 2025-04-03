import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapSection = () => {

    const handleMapOpen = () => {
        const mapUrl = "https://maps.google.com/maps?width=540&height=470&hl=en&q=Taslama%20st%20100,%20Oguz%20han%20university+(I%20Club)&t=&z=14&ie=UTF8&iwloc=B&output=embed";
        window.open(mapUrl, "_blank"); // Opens the map in a new tab
      };

  return (
    <div className='map my-20 px-20'>
      <div className="mainMapSection flex flex-row h-[470px] gap-20 justify-between items-center">
            <div className="flex flex-col gap-20">
                <div className="text-white flex flex-col gap-5">
                    <h1 className='font-inter font-bold text-[50px] leading-[70px]'>Bizi nireden tapmaly?</h1>
                    <p className='font-inter font-normal text-[20px] leading-[30px]'>
                        Maşgalaňyz, dostlaryňyz ýa-da işdeş kärdeşleriňiz bilen 
                        ajaýyp ýerde ajaýyp nahar iýmek isleýärsiňizmi ine, salgymyz.
                    </p>
                </div>

                <div className="text-black">
                    <button onClick={handleMapOpen} className='w-[258px] h-[58px] bg-white rounded-[40px] font-inter font-semibold text-[18px] leading-[28px] cursor-pointer'>Kartadan tapmak</button>
                </div>
            </div>

            <div className="map">
                <div className="gmap-frame">
                    <div style={{ width: "100%" }}>
                        <iframe
                            width="540"
                            height="470"
                            className="rounded-[20px] border-0"
                            src="https://maps.google.com/maps?width=540&amp;height=470&amp;hl=en&amp;q=Taslama%20st%20100,%20Oguz%20han%20university+(I%20Club)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            
      </div>
    </div>
  )
}

export default MapSection
