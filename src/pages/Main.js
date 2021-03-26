import Cover from "../components/Cover";
import Videos from "../components/Videos";
import MainPageStories from "../components/MainPageStories";
import Instagram from "../components/Instagram";
import TellYourStory from "../components/TellYourStory";
import Statistic from "../components/Statistic";
import About from "../components/About";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Main(props) {
  return (
    <>
      <Header />
      <main>
        <Cover />
        <Videos />
        <MainPageStories cards={props.cards} />
        <Instagram />
        <TellYourStory />
        <Statistic />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Main;
