import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import FEQ from "./FEQ";
import JSQ21 from "./JSQ21";
import ReactQ31 from "./ReactQ31";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>Web Frontend Interview</h1>
          <Link to="/">Home</Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feq" element={<FEQ />} />
          <Route path="/jsq21" element={<JSQ21 />} />
          <Route path="/reactq31" element={<ReactQ31 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
