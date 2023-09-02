import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Whitepaper from "./components/Whitepaper";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Refer from "./components/Refer";
import Tokenomics from "./components/Tokenomics";
import SignUp from "./components/Sign-up";

function App() {
  return (
    <div className="bg-[#060A14]">
      <Navbar />
      <Homepage />
      <About />
      <Whitepaper/>
      <Tokenomics/>
      <Roadmap />
      <Services />
      <Benefits />
      <SignUp/>
      <Refer />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
