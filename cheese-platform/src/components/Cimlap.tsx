import { Link } from "react-router-dom";

export default function Cimlap() {
  return (
    <>
      <div>
        <header>
          <h1 className="boppeKFT">Boppe KFT</h1>
        </header>

        <nav className="nav">
          <Link to={"/termekeink"}>Termékeink </Link>
          <Link to={"/kapcsolat"}>Kapcsolat </Link>
          <Link to={"/viszonteladoink"}>Viszonteladóink</Link>
        </nav>
      </div>
    </>
  );
}
