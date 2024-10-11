import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";
import b8 from "../assets/b8.png";
import b9 from "../assets/b9.png";
import b10 from "../assets/b10.png";
import b11 from "../assets/b11.png";
import b12 from "../assets/b12.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

const SpecialityMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        id="speciality"
        className="flex flex-col items-center gap-4 py-16 text-[#262626]"
      >
        <section className="py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-36 ">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center ">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-light text-red-700 sm:text-4xl lg:text-5xl">
                Nos Services
              </h2>
            </div>

            <div className=" grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4  ">
              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-8
                 mx-auto"
                  src={b1}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-10 mx-auto"
                  src={b2}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src={b3}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full mx-auto h-7"
                  src={b4}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src={b5}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src={b6}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src={b7}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src={b8}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src={b9}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full mx-auto h-7"
                  src={b10}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src={b11}
                  alt=""
                />
              </div>

              <div className="bg-white h-12 flex shadow-lg items-center justify-center hover:bg-slate-50 cursor-pointer">
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src={b12}
                  alt=""
                />
              </div>
            </div>

            <button
              onClick={() => {
                navigate("/doctors");
                scrollTo(0, 0);
              }}
              className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10"
            >
              et plus encore
            </button>
          </div>
        </section>
        <p className="text-black font-normal text-base px-14 py-8">
          Le Paradigme une clinique infirmière basée sur une pratique
          intégrative de la santé à travers une vision d'équilibre biologique,
          psychologique et social de la personne, la pierre angulaire pour une
          santé durable.
          <br /> Par la collaboration d'une infirmière clinicienne en soins,
          nous sommes en mesure de traiter plusieurs problèmes de santé mineurs.
          <br />
          Notre travail vous permet d'accéder rapidement à une infirmière
          clinicienne pour de l'accompagnement dans le maintien de votre santé.
          <br />
          Votre santé, notre priorité. Découvrez nos soins personnalisés pour
          vous sentir au mieux chaque jour. Prendre soin de soi, c'est s'offrir
          le meilleur cadeau, c 'est s'accorder une pause bien-être.
        </p>
        <section>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={img3}
                  alt=""
                />
              </div>
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src={img6} alt="" />
            </div>

            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={img7}
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={img5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpecialityMenu;
