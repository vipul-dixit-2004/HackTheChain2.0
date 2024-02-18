import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navbar({ location }) {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/Dashboard">
            <img src={logo} alt="" height={"80px"} />
          </Link>
        </div>
        <div>
          <h2>DECENTRALISED FIR SYSTEM</h2>
        </div>
        {location == "http://localhost:5173/Dashboard" ? (
          <Link to="/newFIR">File New FIR</Link>
        ) : (
          <Link to="/Dashboard">Dashboard</Link>
        )}
      </nav>
    </>
  );
}
