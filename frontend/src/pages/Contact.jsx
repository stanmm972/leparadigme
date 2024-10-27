import React from "react";
import { assets } from "../assets/assets";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Nous joindre - contacter" />
        <meta
          name="keywords"
          content="2953 rue Dupras,
Mascouche, Québec, J7K 1T3, (450) 966-2951, clinique, Le paradigme"
        />
      </Helmet>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <h1 className="text-3xl font-light   text-red-700 sm:text-4xl lg:text-5xl">
          Nous Contacter
        </h1>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-lg text-gray-600">Notre clinique</p>
          <p className=" text-gray-500">
            2953 rue Dupras <br /> Mascouche, Québec, J7K 1T3
          </p>
          <p className=" text-gray-500">
            Tel: (450) 966-2951 <br /> Email: service@leparadigme.ca
          </p>
          {/*           <p className=" font-semibold text-lg text-gray-600">
            Vous souhaitez appliquer chez nous. Rien de plus facile.
          </p>
          <p className=" text-gray-500">
            Envoyez nous un courriel avec votre résumé.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Envoyez
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
