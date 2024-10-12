import React from "react";
import Header from "../Components/Header";
// import Filter from "../Components/Common/Filter";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import Card from "../Components/Common/Card";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Filter /> */}
      <HeroSection />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
