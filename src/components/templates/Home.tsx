import Cards from "../molecules/Cards";
import Hero from "../molecules/Hero";
import Homepage from "../organisms/HomePage";
import Overlay from "../organisms/Overlay";
import PageContent from "../organisms/PageContent";
import TopBar from "../organisms/TopBar";
const Home = () => {
  return (
    <Homepage>
      <TopBar />
      <Hero />
      <Cards />
      <PageContent>
        <h2>Card Wrapper goes here</h2>
      </PageContent>
    </Homepage>
  );
};

export default Home;
