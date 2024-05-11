import Divider from "../atoms/Divider";
import Cards from "../molecules/Cards";
import FormSection from "../molecules/FormSection";
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
        <FormSection heading="How many months of summer have you lived through?" />
        <Divider />
      </PageContent>
    </Homepage>
  );
};

export default Home;
