import { Link } from "react-router-dom";

export default function Kapcsolat() {
  const contact = {
    cimunk: "6800 Hódmezővásárhely, Aranyág kert 6.",
    telefon: "62/534-586",
    email: "boppehu@gmail.com",
    nyitva: "Hétfő - Péntek 8:00 – 15:00",
  };

  return (
    <>
      <nav className="nav">
        <Link to={"/"}>Címlap </Link>
        <Link to={"/termekeink"}>Termékeink </Link>
        <Link to={"/viszonteladoink"}>Viszonteladóink</Link>
      </nav>
      <h2 className="kapcsolat">Kapcsolat</h2>
      <footer className="kapcsolat">
        <h3 id="cimunk">Címünk: {contact.cimunk}</h3>
        <h3 id="telefon">Telefon: {contact.telefon}</h3>
        <h3 id="email">Email: {contact.email}</h3>
        <h3 id="nyitva">Nyitvatartás: {contact.nyitva}</h3>
      </footer>
    </>
  );
}
