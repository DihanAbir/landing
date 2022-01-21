import logo from "./logo.svg";
import "./App.css";
import Layout from "./component/Layout";
import Banner from "./component/Banner";
import Inspiration from "./component/Inspiration";
import Services from "./component/Services";
import Innovation from "./component/Innovation";
import Journey from "./component/Journey";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <Layout>
        <Banner />
        <Inspiration />

        <Services />
        <Innovation />
        <Journey />
        <About />
      </Layout>
    </div>
  );
}

export default App;
