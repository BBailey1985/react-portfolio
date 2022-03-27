import About from "./components/About";
import Navigation from "./components/Navigation";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    // <Router>
      <div>
        <Navigation></Navigation>
        <main>
          <About></About>
        </main>
      </div>
    // </Router>
  );
}

export default App;
