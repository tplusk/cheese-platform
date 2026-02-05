import { Link } from "react-router-dom";

export default function Termekeink() {
  return (
    <>
      <nav className="nav">
        <Link to={"/"}>Címlap </Link>
        <Link to={"/kapcsolat"}>Kapcsolat </Link>
        <Link to={"/viszonteladoink"}>Viszonteladóink</Link>
      </nav>
      <div className="termekeink">
        <h2 className="termekeink">Termékeink</h2>
        <div>
          <ul>
            <li>gouda sajt</li>
            <li>öreg gouda</li>
            <li>4hagymás gouda</li>
            <li>füstölt-fokhagymás gouda</li>
            <li>oregánó-bazsalikomos gouda</li>
            <li>zöldborsos gouda</li>
            <li>köménymagos gouda</li>
            <li>chilis gouda</li>
            <li>medvehagymás gouda</li>
            <li>maasdammer sajt</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>natúr joghurt</li>
            <li>áfonyás joghurt</li>
            <li>meggyes joghurt</li>
            <li>tejföl</li>
            <li>túró</li>
          </ul>
        </div>
      </div>
    </>
  );
}
