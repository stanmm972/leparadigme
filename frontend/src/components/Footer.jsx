import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm px-4 py-2">
        <div>
          <img className="mb-5 w-80" src={assets.logo} alt="" />
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Le Paradigme</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Horaire:</li>
            <li>Lundi : 7h - 15h</li>
            <li>Mardi : 7h - 15h</li>
            <li>Mercredi : 7h - 15h</li>
            <li>Jeudi : 7h - 15h</li>
            <li>Vendredi : 7h - 15h</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Nous rejoindre</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>(450)-966-2951</li>
            <a href="mailto:service@leparadigme.ca?subject=Help%20Needed">
              service@leparadigme.ca
            </a>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ LeParadigme.ca - All Right Reserved | Developed by
          FredMM
        </p>
      </div>
    </div>
  );
};

export default Footer;
