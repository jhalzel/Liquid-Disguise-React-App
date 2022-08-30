import React from "react";
import "./App.css";
import { useEffect, useState } from "react"; //react hook
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// components
// import ScrollToTop from "./components/ScrollToTop";
// import Modal from "./components/Modal";

function App() {
  //import images from folder function
  function importAll(r) {
    return r.keys().map(r);
  }
  // dark-backgrounds
  const darkBackgrounds = importAll(
    // @ts-ignore
    require.context("./assets/darkBackgrounds", false, /\.(png|jpe?g|svg)$/)
  );

  console.log(darkBackgrounds);
}
export default App;
