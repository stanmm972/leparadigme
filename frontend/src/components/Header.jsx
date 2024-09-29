import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-400 rounded-lg px-6 md:px-10 lg:px-20 ">
      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Soins personnalisés, <br /> apaisement assuré.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Sélectionnez simplement votre spécialiste en soin de santé,{" "}
            <br className="hidden sm:block" /> et planifiez votre rendez-vous
            sans tracas.
          </p>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Prenez un rendez-vous{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </button>
      </div>

      {/* --------- Header Right --------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
