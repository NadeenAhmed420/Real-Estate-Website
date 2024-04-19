
import Header from "../Components/Header/header";
import Hero from "../Components/Hero/hero";
import Residencies from "../Components/Residencies/Residencies";
import Value from "../Components/Value/value";
import Companies from "../Components/companies/companies";
import Contact from "../Components/Contact/contatct";
import "./App.css";
import GetStarted from "../Components/GetsStarted/getStarted";
import Footer from "../Components/Footer/footer";

function App() {
  return (
    <>
      <div className="App">
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </>
  );
}

export default App;
