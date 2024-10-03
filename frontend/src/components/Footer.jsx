import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-80" src={assets.logo} alt="" />
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Le Paradigme</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Horaire:</li>
            <li>Lundi : 8h30 - 16h30</li>
            <li>Mardi : 8h30 - 16h30</li>
            <li>Mercredi : 8h30 - 16h30</li>
            <li>Jeudi : 8h30 - 16h30</li>
            <li>Vendredi : 8h30 - 16h30</li>
            <li>Samedi : 8h30 - 16h30</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Nous rejoindre</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>(450)-966-2951</li>
            <li>service@leparadigme.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ LeParadigme.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
