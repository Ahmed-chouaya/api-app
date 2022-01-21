import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import UsersList from "./Component/UsersList/UsersList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UsersList />
    </div>
  );
}

export default App;
