import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Appointments from "./components/Appointments";
import HealthBlog from "./components/Healthblog";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <div>
          <Link className="no_underline" to="/">Home</Link>
        </div>
        <div>
          <Link className="no_underline" to="/appointments">Appointments</Link>
        </div>
        <div>
          <Link className="no_underline" to="/healthblog">Health Blog</Link>
        </div>
        <div>
          <Link className="no_underline" to="/reviews">Reviews</Link>
        </div>
        <button className="btn" >Login</button>
        <button className="btn" >Register</button>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home />}></Route>
        <Route
          path="/appointments"
          element={<Appointments />}></Route>
        <Route
          path="/healthblog"
          element={<HealthBlog />}></Route>
        <Route
          path="/reviews"
          element={<Reviews />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
