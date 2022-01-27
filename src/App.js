import { useState } from "react";
import About from "./Components/About/About";
import Barbers from "./Components/Barbers/Barbers";
import Copyright from "./Components/Copyright/Copyright";
import Cta from "./Components/Cta/Cta";
import Drop from "./Components/DropDownNav/Drop";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Info from "./Components/Info/Info";
import Marcacao from "./Components/Marcacao/Marcacao";
import Nav from "./Components/Navigation/Nav";
import Services from "./Components/OurServices/Services";
import Price from "./Components/Price/Price";
import Slider from "./Components/Slider/Slider";
import SliderText from "./Components/SliderText/SliderText";
import GlobalStyle from "./GlobalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(0);
  const toogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Info />
      <Nav isOpen={isOpen} toogle={toogle} />
      <Drop isOpen={isOpen} toogle={toogle} />
      <Slider />
      <About />
      <Services />
      <Marcacao />
      <Barbers />
      <SliderText />
      <Gallery />
      <Price />
      <Cta />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
