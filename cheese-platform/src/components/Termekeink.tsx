import { Link } from "react-router-dom";

export default function Termekeink() {
  const termekLista = [
    {
      termekTipus: "Félkemény sajtok",
      termek: [
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
        <div id="termekSajtok">
          <ul className="sajtok">
            {termekLista.map((category, index) => (
              <div key={index}>
                <h3>{category.termekTipus}</h3>
                <ul>
                  {category.termek.map((sajt, sajtIndex) => (
                    <li key={sajtIndex}>{sajt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
