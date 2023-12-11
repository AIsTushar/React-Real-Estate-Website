import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/Footer/Footer";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Values />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
