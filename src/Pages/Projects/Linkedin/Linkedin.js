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
      <div className="border-4 flex flex-col justify-between  border-[#0A66C2] text-center rounded-3xl bg-[#1D1D1F] aspect-video max-w-[100%] z-30">
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
        <div className="relative  max-w-[100%] aspect-video">
          <div className="flex justify-center">
            <img
              className="absolute bottom-0 max-w-[60%] aspect-video -translate-x-14 hover:z-20 hover:-translate-x-20 md:-translate-x-28 md:hover:-translate-x-32 2xl:-translate-x-32 2xl:hover:-translate-x-36 translate-y-0.5 -rotate-3 scale-90  hover:-translate-y-4 hover:-rotate-6 hover:scale-100 transition-all"
              src={img1}
              alt=""
            />
            <img
              className="absolute bottom-0 max-w-[60%] aspect-video z-10 effect scale-110 -translate-y-1.5  sm:-translate-y-2.5 md:-translate-y-3.5 lg:-translate-y-5 hover:scale-[1.15] transition-all"
              src={img2}
              alt=""
            />
            <img
              className=" absolute bottom-0 max-w-[60%] aspect-video  translate-x-14 md:translate-x-28 md:hover:translate-x-32 translate-y-0.5 rotate-3 scale-90 hover:translate-x-20 hover:-translate-y-4 hover:rotate-6 hover:scale-100 transition-all hover:z-20 "
              src={img3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkedin;
