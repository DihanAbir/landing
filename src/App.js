import { SmoothProvider } from "react-smooth-scrolling";

import "./App.css";
import Layout from "./component/Layout";
import Banner from "./component/Banner";
import Inspiration from "./component/Inspiration";
import Services from "./component/Services";
import Innovation from "./component/Innovation";
import Journey from "./component/Journey";
import About from "./component/About";
import { useEffect, useState } from "react";

import introVideo from "./assets/Web-Intro.mp4";
import videoModal from "./component/VideoModal";
import Footer from "./component/Footer";
import JourneySection from "./component/JourneySection";

function App() {
  const [intro, setIntro] = useState(true);

  const removeIntro = () => {
    setIntro(false);
  };

  useEffect(() => {
    setInterval(() => {
      setIntro(false);
    }, 27000);
  });

  return (
    <div className="App">
      <Layout>
        <Banner />
        <Inspiration />
        <Services />
        <Innovation />
        <Journey />
        {/* <JourneySection /> */}
        <About />

        <Footer />
      </Layout>
    </div>

    // <div>
    //   {intro ? (
    //     <IntroVideo removeIntros={removeIntro} />
    //   ) : (
    //     <div className="App">
    //       <Layout>
    //         <Banner />
    //         <Inspiration />
    //         <Services />
    //         <Innovation />
    //         <Journey />
    //         <About />
    //       </Layout>
    //     </div>
    //   )}
    // </div>
  );
}

function IntroVideo({ removeIntros }) {
  return (
    <div className="Intro-video">
      <div className="Intro_video_wrap">
        <video width="100%" muted loop={true} autoPlay={true}>
          <source src={require("./assets/Web-Intro.mp4")} type="video/mp4" />
        </video>
        <span onClick={removeIntros} className="skip">
          Skip
        </span>
      </div>
    </div>
  );
}

export default App;
