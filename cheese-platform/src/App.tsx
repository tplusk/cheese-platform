import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cimlap from "./components/Cimlap";
import Termekeink from "./components/Termekeink";
import Kapcsolat from "./components/Kapcsolat";
import Viszonteladoink from "./components/Viszonteladoink";

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
      </div>
      <footer id="rights">© 2026 BOPPE KFT. Minden jog fenntartva.</footer>
    </>
  );
}

export default App;
