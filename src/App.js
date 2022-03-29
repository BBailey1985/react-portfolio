import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
// import Contact from "./components/Contact";
import Project from "./components/Project";
import ContactForm from "./components/Contact";



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
        return <Project />;
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
