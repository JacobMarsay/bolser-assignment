import Divider from "../atoms/Divider";
import React from "react";
import Cards from "../molecules/Cards";
import FormSection from "../molecules/FormSection";
import Hero from "../molecules/Hero";
import Homepage from "../organisms/HomePage";
import PageContent from "../organisms/PageContent";
import TopBar from "../organisms/TopBar";
import CityWeatherSection from "../molecules/CityWeatherSection";
const Home = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  console.log(apiKey);

  return (
    <Homepage>
      <TopBar />
      <Hero />
      <Cards />
      <PageContent>
        <FormSection heading="How many months of summer have you lived through?" />
        <Divider />
        <CityWeatherSection />
      </PageContent>
    </Homepage>
  );
};

export default Home;
