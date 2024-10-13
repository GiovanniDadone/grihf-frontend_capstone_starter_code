import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Reviews/Reviews";
import Appointments from "./Pages/Appointments/Appointments";
import HealthBlog from "./Pages/HealthBlog/Healthblog";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <div>
          {" "}
          <Link to="/">Home</Link>
        </div>
        <div>
          {" "}
          <Link to="/appointments">Appointments</Link>
        </div>
        <div>
          {" "}
          <Link to="/healthblog">Health Blog</Link>
        </div>
        <div>
          {" "}
          <Link to="/reviews">Reviews</Link>
        </div>
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
