import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Signin from "./pages/Signin";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/series" exact component={Series} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

