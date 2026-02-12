import { Link } from "react-router-dom";

export default function Termekeink() {
  const termekLista = [
    {
      termekTipus: "Félkemény sajtok",
      termek: [
        "gouda sajt",
        "öreg gouda",
        "négyhagymás gouda",
        "füstölt-fokhagymás gouda",
        "oregánó-bazomos gouda",
        "zöldborsos gouda",
        "köménymagos gouda",
        "chilis gouda",
        "medvehagymás gouda",
        "maasdammer sajt",
      ],
    },
    {
      termekTipus: "Egyéb termékek",
      termek: [
        "natúr joghurt",
        "áfonyás joghurt",
        "meggyes joghurt",
        "tejföl",
        "túró",
      ],
    },
  ];

  return (
    <>
      <nav className="nav">
        <Link to={"/"}>Címlap </Link>
        <Link to={"/kapcsolat"}>Kapcsolat </Link>
        <Link to={"/viszonteladoink"}>Viszonteladóink</Link>
      </nav>
      <div>
        <h2 className="navTitle">Termékeink</h2>
      </div>
      <div className="termekeink">
        <ul className="termekKategoria">
          {termekLista.map((category, index) => (
            <div key={index}>
              <h3>{category.termekTipus}</h3>
              <ul>
                {category.termek.map((sajt, sajtIndex) => (
                  <li className="termek" key={sajtIndex}>
                    {sajt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
