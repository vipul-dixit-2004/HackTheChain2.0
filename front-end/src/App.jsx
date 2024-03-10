import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewFIR from "./components/NewFIR/NewFIR";
function App() {
  const [complain, setComplain] = useState("no complain");

  return (
    <Router>
      <Navbar location={window.location.href} />
      <div>
        <Routes>
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/newFIR" exact element={<NewFIR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
