import { Link } from "react-router-dom";
import cheese from "../assets/images/cheese.png";

export default function Cimlap() {
  const title = "Boppe KFT";
  const holland = "HOLLAND SAJT MAGYARORSZÁGRÓL";

  // can be used for temporary messages
  // const welcomeMsg = "Üdv a honlapunkon!";

  return (
    <>
      <div>
        <header>
          <h1 id="boppeKFT">{title}</h1>
          <h3 id="holland">{holland}</h3>

          {/* for temporary use */}
          {/* <h3 id="welcomemsg">{welcomeMsg}</h3> */}
        </header>

        <nav
          className="nav"
          style={{
            fontFamily: "Courier",
            padding: "2rem",
            paddingBottom: "4rem",
          }}
        >
          <span>
            <Link to={"/termekeink"}>Termékeink </Link>
          </span>
          <span>
            <Link to={"/kapcsolat"}>Kapcsolat </Link>
          </span>
          <span>
            <Link to={"/viszonteladoink"}>Viszonteladóink</Link>
          </span>
        </nav>
      </div>
      <div className="cimlap-cheese">
        <img id="cheese" src={cheese} alt="Cheese" />
      </div>
    </>
  );
}
