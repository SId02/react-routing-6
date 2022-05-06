import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
     <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <div> Footer </div>
    </Router>
  );
}

export default App;
