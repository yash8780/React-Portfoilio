import "./styles.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Skills from "./Skills";
import Project from "./Project";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="Project" element={<Project />} /> */}
          <Route path="/project" element={<Project />} />
          <Route path="Skills" element={<Skills />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}
