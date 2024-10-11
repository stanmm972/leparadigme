import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <h1 className="text-3xl font-light   text-black sm:text-4xl lg:text-5xl">
          Le{" "}
          <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 lg:inline">
            Paradigme
          </span>{" "}
        </h1>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-md text-gray-600">
          <p>
            Bienvenue chez Le Paradigme, où nous redéfinissons les soins de
            santé. Notre clinique représente un nouveau paradigme dans le
            secteur médical, offrant des soins personnalisés, innovants et
            centrés sur le patient. Notre équipe de professionnels passionnés
            est dévouée à vous accompagner dans votre parcours de santé, en vous
            offrant les traitements les plus récents et les meilleures pratiques
            médicales.
          </p>

          <b className="text-gray-800">Notre vision</b>
          <p>
            Notre vision est de devenir la référence en matière de soins de
            santé. Nos soins sont orientés vers la personne, en tenant compte de
            tous ses aspects bio-psycho-sociaux, de son environnement, de sa
            qualité de vie, tout en visant à promouvoir la santé publique.
          </p>
        </div>
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_imagee}
          alt=""
        />
      </div>

      <div className="text-center text-md my-12">
        <p className="text-3xl font-light   text-black sm:text-4xl lg:text-5xl">
          Pourquoi{" "}
          <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 lg:inline">
            Nous choisir
          </span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICACE:</b>
          <p>
            Rendez-vous faciles à réserver, adaptés à votre rythme de vie actif.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PRATIQUE: </b>
          <p>
            Possibilité de consulter des professionnels de la santé près de chez
            vous.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONNALISÉ:</b>
          <p>
            Suggestions et notifications personnalisées pour vous aider à gérer
            votre santé efficacement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
