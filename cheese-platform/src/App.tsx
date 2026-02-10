import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cimlap from "./components/Cimlap";
import Termekeink from "./components/Termekeink";
import Kapcsolat from "./components/Kapcsolat";
import Viszonteladoink from "./components/Viszonteladoink";
import NotFound from "./components/NotFound";

function App() {
  const rights = "© 2026 BOPPE KFT. Minden jog fenntartva.";

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Cimlap />} />
          <Route path="/termekeink" element={<Termekeink />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/viszonteladoink" element={<Viszonteladoink />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer id="rights">{rights}</footer>
    </>
  );
}

export default App;
