import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cimlap from "./components/Cimlap";
import Termekeink from "./components/Termekeink";
import Kapcsolat from "./components/Kapcsolat";
import Viszonteladoink from "./components/Viszonteladoink";
import cheese from "../public/images/cheese.png";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Cimlap />} />
          <Route path="/termekeink" element={<Termekeink />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/viszonteladoink" element={<Viszonteladoink />} />
        </Routes>
        <div className="cimlap-cheese">
          <img src={cheese} alt="Cheese" />
        </div>
      </div>
    </>
  );
}

export default App;
