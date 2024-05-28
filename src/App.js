import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { Writing } from "./pages/Writing";
import { Home } from "./pages/Home";
import { Play } from "./pages/Play";
import { About } from "./pages/About";
import { Naviation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ClimateCountdown } from "./pages/Climate Countdown";
import { Porkify } from "./pages/Porkify";
import { Fortune } from "./pages/Fortune";

function App() {
  return (
    <BrowserRouter>
      <Naviation></Naviation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Home />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path="/writing" element={<Writing />}></Route>
        <Route
          path="/project/climate-countdown"
          element={<ClimateCountdown />}
        ></Route>
        <Route path="/porkify" element={<Porkify />}></Route>
        <Route path="/fortune" element={<Fortune />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
