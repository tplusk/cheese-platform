import { Link } from "react-router-dom";

export default function Termekeink() {
  const cheese = [
    "gouda sajt",
    "öreg gouda",
    "4hagymás gouda",
    "füstölt-fokhagymás gouda",
    "oregánó-bazomos gouda",
    "zöldborsos gouda",
    "köménymagos gouda",
    "chilis gouda",
    "medvehagymás gouda",
    "maasdammer sajt",
  ];

  const other = [
    "natúr joghurt",
    "áfonyás joghurt",
    "meggyes joghurt",
    "tejföl",
    "túró",
  ];

  return (
    <>
      <nav className="nav">
        <Link to={"/"}>Címlap </Link>
        <Link to={"/kapcsolat"}>Kapcsolat </Link>
        <Link to={"/viszonteladoink"}>Viszonteladóink</Link>
      </nav>
      <div className="termekeink">
        <h2 className="termekeink">Termékeink</h2>
        <div id="list">
          <div>
            <ul>
              {cheese.map((cheeseType, index) => (
                <li key={index}>{cheeseType}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {other.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
