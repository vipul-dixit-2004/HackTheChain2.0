import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import NewFIR from "./components/NewFIR/NewFIR";
function App() {
  const [complain, setComplain] = useState("no complain");

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/newFIR" exact element={<NewFIR />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </div>
      <Dashboard />
    </Router>
  );
}

export default App;
