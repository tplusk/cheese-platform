import { Link } from "react-router-dom";

export default function Viszonteladoink() {
  const hmvhely = [
    "Béketelepi ABC Szent László u. 153.",
    "Nagyi Vegyeskereskedés Pálffy u.",
    "Pörkölt bolt Lehel u. 6.",
  ];

  const szeged = [
    "CBA Príma Nova, Újszeged, Szőregi út 80.",
    "Coop 1101-es sz. ABC - Napsugár Áruház",
    "Dél-Gasztró KFT, Kenyérgyári út 3.",
    "Kék Boci Tejbolt, Szent István tér A pavilon",
    "Lipóti Pékség, Algyői út 72. (Lukoil mellett)",
    "Lipóti Pékség, (Anna-kút) Tisza Lajos körút 39.",
    "Lipóti Pékség, Széchenyi tér 16.",
    "Lipóti Pékség, Derkovits Fasor 17.",
    "Nóri Csemegéje, Mars tér / Irén csarnok",
    "Pizza Box KFT. (online rendelés, csak kiszállítás) tehéntej.hu",
    "Reál ABC, Fő fasor 100.",
    "Riska tejbolt, Űrhajós utca 13/A.",
    "Zöldség-gyümölcs Bolt, Molnár utca 3-5.",
  ];

  const bp = [
    "Fény utcai piac 1024 Budapest, Lövőház u. 12. 4. em. 27-es üzlet",
    "Rózsakert Bevásárlóközpont, 1023 Budapest, Gábor Áron u. 74/A",
    "Szega Camembert Sajtszaküzlet -Budagyöngye Bevásárlóközpont -I. szint 1026 Budapest, Szilágyi Erzsébet Fasor 121.",
  ];

  return (
    <>
      <nav className="nav">
        <Link to={"/"}>Cimlap </Link>
        <Link to={"/termekeink"}>Termékeink </Link>
        <Link to={"/kapcsolat"}>Kapcsolat</Link>
      </nav>
      <div>
        <h2 className="navTitle">Viszonteladóink</h2>
      </div>
      <div className="varosok">
        <div className="hmvhely">
          <h2>Hódmezővásárhely</h2>
          <ul>
            {hmvhely.map((storeName, address) => (
              <li key={address}>{storeName}</li>
            ))}
          </ul>
        </div>
        <div className="szeged">
          <h2>Szeged</h2>
          <ul>
            {szeged.map((storeName, address) => (
              <li key={address}>{storeName}</li>
            ))}
          </ul>
        </div>
        <div className="bp">
          <h2>Budapest</h2>
          <ul>
            {bp.map((storeName, address) => (
              <li key={address}>{storeName}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
