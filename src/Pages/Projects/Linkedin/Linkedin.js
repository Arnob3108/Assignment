import React from "react";
import img1 from "../../../Assets/linkedin/image1.png";
import img2 from "../../../Assets/linkedin/image2.png";
import img3 from "../../../Assets/linkedin/image3.png";
import { Link } from "react-router-dom";

const Linkedin = () => {
  return (
    <div className="w-[85%] mx-auto">
      <h3 className="text-[#FFFFFF99] text-sm md:text-2xl lg:text-4xl">
        The Passion Project
      </h3>
      <h1 className="text-[#0A66C2] lg:text-6xl md:text-4xl text-2xl font-bold my-5">
        LinkedIn{" "}
        <span>
          {" "}
          Redesign{" "}
          {/* <hr className="w-64 mt-4 ml-[10%] border-[#23D65C] border-2" /> */}
        </span>
      </h1>
      <div className="border-4 border-[#0A66C2] text-center rounded-3xl bg-[#1D1D1F] md:h-[469px] h-[211px] lg:h-[706px]">
        <div>
          <p className="text-[#FFFFFF99] md:text-lg text-[9px] lg:text-3xl mt-10">
            Witness the <span className="text-white">revamped version</span> of
            LinkedIn, which not only <br />
            incorporates the best features with a{" "}
            <span className=" text-white">greater allure</span>.{" "}
          </p>
          <Link
            to={"/projects/linkedIn"}
            className="text-[#007AF6] md:text-lg text-sm lg:text-3xl font-medium"
          >
            Know more {`>`}
          </Link>
        </div>
        <div className="flex flex-col items-center mt-10">
          <img
            className="relative w-[50%] lg:w-[75%] -top-5 right-[5rem] md:top-[4.8rem] md:right-[9rem] lg:top-7 lg:right-[9rem] hover:z-20"
            src={img2}
            alt=""
          />
          <img
            className="w-[50%] lg:w-[75%] relative -top-[7.2rem] md:-top-[9.6rem] lg:-top-[29.9rem]  z-10"
            src={img1}
            alt=""
          />
          <img
            className="w-[50%] lg:w-[75%] relative -top-[12.9rem] left-[5rem] md:-top-[23.4rem] md:left-[9rem] lg:-top-[60.1rem] lg:left-[9rem] hover:z-20 "
            src={img3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Linkedin;
