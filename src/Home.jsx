import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <ul>
        <li>
          <Link to="/feq">{">> Frontend Questions"}</Link>
        </li>
        <li>
          <Link to="/jsq21">{">> JavaScript Question 21"}</Link>
        </li>
        <li>
          <Link to="/reactq31">{">> React Question 31"}</Link>
        </li>
      </ul>
    </div>
  );
}
