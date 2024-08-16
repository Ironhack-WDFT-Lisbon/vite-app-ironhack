import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { getUsers } from "./lib";
import HomePage from "./pages/HomePage";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage users={users} />} />
      </Routes>
    </>
  );
}

export default App;
