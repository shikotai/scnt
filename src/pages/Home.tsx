import React from "react";
import NavigationHeader from "../components/NavigationHeader/NavigationHeader";
import HomeHero from "../components/HomeHero/HomeHero";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <NavigationHeader />
      <HomeHero />
      <NewsCarousel />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default Home;
