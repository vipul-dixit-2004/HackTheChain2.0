import "./Navbar.css";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          {/* <i className="fa-solid fa-magnifying-glass"></i> */}
          <img src={logo} alt="" height={"80px"} />
          {/* <input type="text" className="searchbar" placeholder="Search" /> */}
        </div>
        <div>
          <h2>Decentralised FIR System</h2>
        </div>
        <div className="profile">
          <p>G</p>
        </div>
      </nav>
    </>
  );
}
