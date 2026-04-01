import React from "react";
import bannerImg from "../assets/banner.png";
import playIcon from "../assets/Play.png";





const Hero = () => {
  return (
    <section className="py-20 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-8 
                      grid grid-cols-1 lg:grid-cols-2 
                      gap-16 items-center">

   
        <div>

          {/* badge*/}
          <div className="inline-flex items-center gap-2 
                          bg-[#E1E7FF] text-purple-600 
                          text-xs font-semibold 
                          px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 bg-purple-600 rounded-full" />
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-[1.13] text-[#101727] mb-4 ">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-[15px] leading-relaxed mb-1">
            Access premium AI tools, design assets, templates, and
            productivity <br /> software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
        

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap items-center">

            {/* Primary Button */}
            <button
              className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-purple-700 hover:shadow-lg
                         text-white border-none rounded-lg 
                         px-6 font-semibold normal-case"
            >
              Explore Products
            </button>

            {/* Outline Button */}
            <button
              className="btn btn-outline border-gray-200 
                         text-gray-700 hover:border-purple-500 
                         hover:text-purple-600 hover:bg-purple-50 
                         rounded-lg font-semibold normal-case gap-2"
            >
              <img src={playIcon} alt="" /> Watch Demo
            </button>

          </div>
        </div>

    {/* right side */}
        <div className="flex justify-center">
          <div className="w-full
 
                          flex items-center justify-center">
                            <img src={bannerImg} alt="" />
          
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;