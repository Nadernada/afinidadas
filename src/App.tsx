import Activities from "./components/Activities";
import Appartment from "./components/Appartment";
import Espace from "./components/Espaces";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  

  return (
    <div className="w-full flex flex-col items-center 2xl:w-[1440px] mx-auto text-primary bg-illu">
      <Hero />
      
      <Espace />
      <Activities />
      <Reviews />
      <Appartment />

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
