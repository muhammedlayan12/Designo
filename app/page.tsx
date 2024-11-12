import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Talk from "./components/Talk";
import Footer from "./components/Footer";

function Home() {
  return (
  <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <Services></Services>
    <Features></Features>
    <Talk></Talk>
    <Footer></Footer>
  </div>
  );
}

export default Home;