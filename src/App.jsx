import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Component/Contact";
import Guide from "./Component/Guide";
import Information from "./Component/Information";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <Navbar />
        </div>
        <div className="right">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="information" element={<Information />}></Route>
            <Route path="guide" element={<Guide />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
