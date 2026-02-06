import { Link } from "react-router-dom";
import cheese from "../assets/images/cheese.png";

export default function Cimlap() {
  return (
    <>
      <div>
        <header>
          <h1 id="boppeKFT">Boppe KFT</h1>
          <h3 className="holland">"HOLLAND SAJT MAGYARORSZÁGRÓL"</h3>
        </header>

        <nav
          className="nav"
          style={{
            fontFamily: "Courier",
            padding: "2rem",
            paddingBottom: "4rem",
          }}
        >
          <Link to={"/termekeink"}>Termékeink </Link>
          <Link to={"/kapcsolat"}>Kapcsolat </Link>
          <Link to={"/viszonteladoink"}>Viszonteladóink</Link>
        </nav>
      </div>
      <div className="cimlap-cheese">
        <img id="cheese" src={cheese} alt="Cheese" />
      </div>
    </>
  );
}
