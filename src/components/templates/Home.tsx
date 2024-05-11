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
      <PageContent>
        <Overlay>
          <h2>test</h2>
        </Overlay>
      </PageContent>
    </Homepage>
  );
};

export default Home;
