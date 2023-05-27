import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Profile from "./components/Profile.jsx";
import NavBar from "./components/Navbar.jsx";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
