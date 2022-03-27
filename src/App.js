import About from "./components/About";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    // <Router>
      <div>
        <Header></Header>
        <main>
          <About></About>
        </main>
      </div>
    // </Router>
  );
}

export default App;
