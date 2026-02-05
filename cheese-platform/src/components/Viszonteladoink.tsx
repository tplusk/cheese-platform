import { Link } from "react-router-dom";

export default function Viszonteladoink() {
  return (
    <>
      <nav className="nav">
        <Link to={"/"}>Cimlap </Link>
        <Link to={"/termekeink"}>Termékeink </Link>
        <Link to={"/kapcsolat"}>Kapcsolat</Link>
      </nav>
      <div>
        <div>
          <h2>Hódmezővásárhely</h2>
          <ul>
            <li>Nagyi Vegyeskereskedés Pálffy u.</li>
            <li>Béketelepi ABC Szent László u. 153.</li>
            <li>Pörkölt bolt Lehel u. 6.</li>
          </ul>
        </div>
        <div>
          <h2>Szeged</h2>
          <ul>
            <li>Kék Boci Tejbolt, Szent István tér "A" pavilon</li>
            <li>Riska tejbolt, Űrhajós utca 13/A.</li>
            <li>Zöldség-gyümölcs Bolt, Molnár utca 3-5.</li>
            <li>Lipóti Pékség, Széchenyi tér 16.</li>
            <li>Lipóti Pékség, (Anna-kút) Tisza Lajos körút 39.</li>
            <li>Lipóti Pékség, Algyői út 72. (Lukoil mellett)</li>
            <li>Lipóti Pékség, Derkovits Fasor 17.</li>
            <li>Nóri Csemegéje, Mars tér / Irén csarnok</li>
            <li>CBA Príma Nova, Újszeged, Szőregi út 80.</li>
            <li>Reál ABC, Fő fasor 100.</li>
            <li>Dél-Gasztró KFT, Kenyérgyári út 3.</li>
            <li>Coop 1101-es sz. ABC - Napsugár Áruház</li>
            <li>
              Pizza Box KFT. (online rendelés, csak kiszállítás) tehéntej.hu
            </li>
          </ul>
        </div>
        <div>
          <h2>Budapest</h2>
          <ul>
            <li>
              Szega Camembert Sajtszaküzlet -Budagyöngye Bevásárlóközpont -I.
              szint 1026 Budapest, Szilágyi Erzsébet Fasor 121.
            </li>
            <li>
              Fény utcai piac 1024 Budapest, Lövőház u. 12. 4. em. 27-es üzlet
            </li>
            <li>
              Rózsakert Bevásárlóközpont, 1023 Budapest, Gábor Áron u. 74/A
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
