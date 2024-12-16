import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Tarrif from "./Pages/Tarrif";
import Wayanad from "./Pages/Wayanad";
import Contact from "./Pages/Contact";



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/tarrif" element={<Tarrif />} />
        <Route path="/wayanad" element={<Wayanad />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
