import { Link } from "react-router-dom";

export default function Viszonteladoink() {
  const hmvhely = [
    "Nagyi Vegyeskereskedés Pálffy u.",
    "Béketelepi ABC Szent László u. 153.",
    "Pörkölt bolt Lehel u. 6.",
  ];

  const szeged = [
    "Kék Boci Tejbolt, Szent István tér A pavilon",
    "Riska tejbolt, Űrhajós utca 13/A.",
    "Zöldség-gyümölcs Bolt, Molnár utca 3-5.",
    "Lipóti Pékség, Széchenyi tér 16.",
    "Lipóti Pékség, (Anna-kút) Tisza Lajos körút 39.",
    "Lipóti Pékség, Algyői út 72. (Lukoil mellett)",
    "Lipóti Pékség, Derkovits Fasor 17.",
    "Nóri Csemegéje, Mars tér / Irén csarnok",
    "CBA Príma Nova, Újszeged, Szőregi út 80.",
    "Reál ABC, Fő fasor 100.",
    "Dél-Gasztró KFT, Kenyérgyári út 3.",
    "Coop 1101-es sz. ABC - Napsugár Áruház",
    "Pizza Box KFT. (online rendelés, csak kiszállítás) tehéntej.hu",
  ];

  const bp = [
    "Szega Camembert Sajtszaküzlet -Budagyöngye Bevásárlóközpont -I. szint 1026 Budapest, Szilágyi Erzsébet Fasor 121.",
    "Fény utcai piac 1024 Budapest, Lövőház u. 12. 4. em. 27-es üzlet",
    "Rózsakert Bevásárlóközpont, 1023 Budapest, Gábor Áron u. 74/A",
  ];

  return (
    <>
      <nav className="nav">
        <Link to={"/"}>Cimlap </Link>
        <Link to={"/termekeink"}>Termékeink </Link>
        <Link to={"/kapcsolat"}>Kapcsolat</Link>
      </nav>
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
