import Hero from "../molecules/Hero";
import Homepage from "../organisms/HomePage";
import TopBar from "../organisms/TopBar";
const Home = () => {
  return (
    <Homepage>
      <TopBar />
      <Hero />
    </Homepage>
  );
};

export default Home;
