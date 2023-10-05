import React from "react";
import Clips from "./utils/Clips";
import SocialLinks from "./utils/SocialLinks"


const Hero = ({
  heroapi: { title, subtitle, img, btntext, videos, sociallinks },
}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        {/* bg */}
        <div className="bg-theme clip-path xl:h-[95vh] lg:h-[85vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 z-10 "></div>
        <div className="relative z-20 opacity-100 grid item-center justify-items-center store-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-xl font-extrabold filter drop-shadow-sm text-sky-200">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-xl font-extrabold filter drop-shadow-sm text-sky-200">
              {subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5"
            >
              {btntext}
            </button>
            <div
              className="grid items-center gap-5 md:gap-3 absolute top-[33vh] 
              lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto"
            >
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>
            <div className="grid items-center absolute top-[45vh] lg:top-[27vh] gap-3  right-[1%] lg:right-0"> 
              {sociallinks?.map((val,i)=>(
                <SocialLinks
                key={i}
                icon={val.icon}/>
              ))}
            </div>
          </div>
          <img
            src={img}
            alt="hero-image"
            className="w-auto  h-[45vh] lg:h-[35vh] md:h-[32vh] sm:h-[21vh] xsm:h-[19vh] transition-theme -rotate-[25deg] 
           hover:rotate-0 cursor-pointer object-fill"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
