import { Link } from "react-router-dom";

export default function Kapcsolat() {
  const contact = {
    cimunk: "6800 Hódmezővásárhely, Aranyág kert 6.",
    telefon: "06 62 534-586",
    email: "boppehu@gmail.com",
    nyitvatartas: "Hétfő - Péntek, 8:00 – 15:00",
  };

  const Directions = () => {
    return (
      <a href="https://www.google.com/maps/place/H%C3%B3dmez%C5%91v%C3%A1s%C3%A1rhely,+Arany%C3%A1g+Kert+6,+6800+Hungary/@46.431227,20.3592618,17z/data=!3m1!4b1!4m6!3m5!1s0x47446f23eb8828fb:0x4909917fc05a20f1!8m2!3d46.431227!4d20.3618367!16s%2Fg%2F11y3ll0zzz?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D">
        {contact.cimunk}
      </a>
    );
  };
  const Email = () => {
    return <a href={`mailto:${contact.email}`}>boppehu@gmail.com</a>;
  };

  const Call = () => {
    return <a href={`tel:${contact.telefon}`}>{contact.telefon}</a>;
  };

  return (
    <>
      <nav className="nav">
        <Link to={"/"}>Címlap </Link>
        <Link to={"/termekeink"}>Termékeink </Link>
        <Link to={"/viszonteladoink"}>Viszonteladóink</Link>
      </nav>
      <div>
        <h2 className="navTitle">Kapcsolat</h2>
      </div>
      <footer className="kapcsolat">
        {/* <h3 id="cimunk">Címünk: {contact.cimunk}</h3> */}
        <h3 className="webLink" id="cimunk">
          Címünk:
          {Directions()}
        </h3>
        {/* <h3 id="email">Email: {contact.email}</h3> */}
        <h3 className="webLink" id="email">
          E-mail:
          {Email()}
        </h3>
        {/* <h3 id="telefon">Telefon: {contact.telefon}</h3> */}
        <h3 className="webLink" id="telefon">
          Telefon: {Call()}
        </h3>
        <h3 className="webLink" id="nyitva">
          Nyitvatartás: {contact.nyitvatartas}
        </h3>
      </footer>
    </>
  );
}
