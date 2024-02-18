import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" height={"80px"} />
        </div>
        <div>
          <h2>Decentralised FIR System</h2>
        </div>

        <Link to="/newFIR">File New FIR</Link>
      </nav>
    </>
  );
}
