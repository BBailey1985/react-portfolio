import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";

//main app component
function App() {
  const [currentLink, setCurrentLink] = useState("about");
  
  const generateLink = () => {
    switch (currentLink) {
      case "about":
        return <About />;
      case 'contact':
        return <ContactForm />;
      case "resume":
        return <Resume />;
      case "portfolio":
        return <Portfolio />;
      default:
        return <About />;
    }
  };
   return (
    <div>
    <Header currentLink={currentLink} setCurrentLink={setCurrentLink}></Header>
    <main>
      {generateLink()}
    </main>
    <Footer></Footer>
  </div>
  );
}

export default App;
