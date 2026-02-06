import { Link } from "react-router-dom";

export default function Kapcsolat() {
  return (
    <>
      <nav className="nav">
        <Link to={"/"}>Címlap </Link>
        <Link to={"/termekeink"}>Termékeink </Link>
        <Link to={"/viszonteladoink"}>Viszonteladóink</Link>
      </nav>
      <h2 className="kapcsolat">Kapcsolat</h2>
      <footer className="kapcsolat">
        <h3 id="cimunk">Címünk: 6800 Hódmezővásárhely, Aranyág kert 6.</h3>
        <h3 id="telefon">Telefon: 62/534-586</h3>
        <h3 id="email">Email: boppehu@gmail.com</h3>
      </footer>
    </>
  );
}
