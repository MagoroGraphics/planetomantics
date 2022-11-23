import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Content } from "./containers/ContentSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
