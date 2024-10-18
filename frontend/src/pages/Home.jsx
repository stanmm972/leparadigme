import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="La clinique Le Paradigme" />
        <meta
          name="keywords"
          content="soins de santé, rendez-vous, services, équipe, réserver, secteur médical, soins personnalisés, parcours de santé, traitements, clinique, Le paradigme"
        />
      </Helmet>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
