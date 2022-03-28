import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentLink, setCurrentLink] = useState('about');

  //select with tab is clicked and then generate
  const generateLink = () => {
    switch (currentLink) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  }
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
