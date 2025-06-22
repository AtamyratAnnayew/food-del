import React, { useState } from "react";
import ReactPlayer from "react-player"; // Make sure this is imported
import { assets } from '../../assets/assets'// adjust to your actual path

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  const shortText = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...`;

  const fullText = `It is a long established fact that a reader will be distracted 
  layout. The point of using Lorem Ipsum is that it has a more-
  or-less normal distribution of letters, as opposed to using 
  English. Many desktop publishing packages and web page editors 
  now use Lorem Ipsum as their default model text, and a search 
  for 'lorem ipsum' will uncover many web sites still in their 
  infancy. Various versions have evolved over the years, sometimes 
  by accident, sometimes on purpose. It is a long established fact 
  that a reader will be distracted by the readable content of a 
  page when looking at its layout. The normal distribution of 
  letters, as opposed to using. 'Content  Many desktop publishing 
  packages and web page editors search for 'lorem ipsum' will 
  uncover many web sites still in humour and the like.`;

  return (
    <div className="about my-10 px-4 sm:px-10 md:px-20">
      <div className="mainContainer flex flex-col gap-12">
        <h1 className="text-white font-inter font-bold text-3xl sm:text-4xl md:text-[50px] leading-tight text-center">
          Näme üçin iň gowy iýmit öndüriji?
        </h1>

        <div className="textVideoContainer flex flex-col lg:flex-row gap-10 lg:gap-[87px]">
          <div className="textContainer text-white font-inter text-base sm:text-lg leading-7 w-full lg:w-[50%]">
            <p>
              {isExpanded ? fullText : shortText}
              <span
                className="font-bold cursor-pointer text-blue-300 block mt-2"
                onClick={toggleReadMore}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </span>
            </p>
          </div>

          <div className="videoContainer w-full lg:w-[50%] aspect-video">
            <ReactPlayer
              url={assets.video}
              controls
              width="100%"
              height="100%"
              style={{ borderRadius: "12px", overflow: "hidden" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
