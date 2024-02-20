import Activities from "./components/Activities";
import Appartment from "./components/Appartment";
import Espace from "./components/Espaces";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="w-full flex flex-col items-center text-primary bg-illu">
      <Hero />
      
      <Espace />
      <Activities />
      <Reviews />
      <Appartment />

      <Footer />
    </div>
  );
}

export default App;
