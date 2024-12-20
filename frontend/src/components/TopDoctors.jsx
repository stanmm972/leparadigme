import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Helmet } from "react-helmet";
import ic1 from "../assets/ic1.png";
import ic2 from "../assets/ic2.png";
import ic3 from "../assets/ic3.png";
import ic4 from "../assets/ic4.png";

const TopDoctors = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Comment réserver un de nos services"
        />
        <meta
          name="keywords"
          content="Réserver, soin, spécialiste, date et heure, conseils personnalisés, clinique, Le paradigme"
        />
      </Helmet>
      <section className="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-light   text-red-700 sm:text-4xl lg:text-5xl">
            Comment Réserver un de nos services
          </h2>
          <p className="mb-20 text-lg text-gray-900">Rien de plus simple....</p>

          <div className="grid grid-cols-2 gap-6   lg:grid-cols-4 ">
            <a className=" shadow-2xl relative ">
              <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden group rounded-lg">
                <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500">
                  <div className="w-full h-full p-5 relative">
                    <div
                      className="absolute bottom-0   
  text-white text-left transition-all ease-in-out duration-500   
 opacity-0 group-hover:opacity-100"
                    >
                      <h2 className="text-2xl font-md text-white mb-0 pb-1">
                        Sélectionnez un service
                      </h2>
                      <p className="text-lg font-light text-white">
                        Trouvez le soin idéal parmi nos options.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={ic1}
                  className="w-full z-0 h-full object-fill example"
                />
              </div>
            </a>
            <a className=" shadow-2xl relative ">
              <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden group rounded-lg">
                <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500">
                  <div className="w-full h-full p-5 relative">
                    <div
                      className="absolute bottom-0  text-white text-left transition-all ease-in-out duration-500   
 opacity-0 group-hover:opacity-100"
                    >
                      <h2 className="text-2xl font-md text-white mb-0 pb-1">
                        Votre allié santé
                      </h2>
                      <p className="text-lg font-light text-white">
                        Notre équipe de spécialistes est à votre écoute.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={ic2}
                  className="w-full z-0 h-full object-fill example"
                />
              </div>
            </a>
            <a className=" shadow-2xl relative ">
              <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden group rounded-lg">
                <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500">
                  <div className="w-full h-full p-5 relative">
                    <div
                      className="absolute bottom-0   
  text-white text-left transition-all ease-in-out duration-500   
 opacity-0 group-hover:opacity-100"
                    >
                      <h2 className="text-2xl font-md text-white mb-0 pb-1">
                        Choisissez une date
                      </h2>
                      <p className="text-lg font-light text-white">
                        Choisissez la date et l'heure qui vous arrangent.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={ic3}
                  className="w-full z-0 h-full object-fill example"
                />
              </div>
            </a>
            <a className=" shadow-2xl relative ">
              <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden group rounded-lg">
                <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500">
                  <div className="w-full h-full p-5 relative">
                    <div
                      className="absolute bottom-0   
  text-white text-left transition-all ease-in-out duration-500   
 opacity-0 group-hover:opacity-100"
                    >
                      <h2 className="text-2xl font-md text-white mb-0 pb-1">
                        Venez nous voir
                      </h2>
                      <p className="text-lg font-light text-white">
                        Un accueil chaleureux et des conseils personnalisés.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={ic4}
                  className="w-full z-0 h-full object-fill example"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
        <h1 className="text-3xl font-light   text-red-700 sm:text-4xl lg:text-5xl">
          Notre Équipe
        </h1>
        <p className="sm:w-1/3 text-center text-sm">
          Par la collaboration d'une infirmière clinicienne en soins, nous
          sommes en mesure de traiter plusieurs problèmes de santé mineurs
        </p>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {doctors.slice(0, 10).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-[#EAEFFF]" src={item.image} alt="" />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <p
                    className={`w-2 h-2 rounded-full ${
                      item.available ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></p>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-[#262626] text-lg font-medium">
                  {item.name}
                </p>
                {/* <p className="text-[#5C5C5C] text-sm">{item.speciality}</p> */}
              </div>
            </div>
          ))}
        </div>
        {/*         <button
          onClick={() => {
            navigate("/doctors");
            scrollTo(0, 0);
          }}
          className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10"
        >
          et plus encore
        </button> */}
      </div>
    </>
  );
};

export default TopDoctors;
