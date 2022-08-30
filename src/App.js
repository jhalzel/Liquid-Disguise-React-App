import React from "react";
import "./App.css";
import { useEffect, useState } from "react"; //react hook
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// components
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./components/Modal";

//pages
// import BusinessOffice from "./pages/";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
// import Signs from "./pages/Commercial/Signs/Signs";
// import Churches from "./pages/Commercial/ChurchesAndTemples/Churches";
// import Exteriors from "./pages/Commercial/Exterior/Exteriors";
// import Kitchen from "./pages/Residential/Kitchen/Kitchen";
// import LivingRooms from "./pages/Residential/Living Rooms/LivingRooms";
// import Bedrooms from "./pages/Residential/Bedrooms/Bedrooms";
// import Bathrooms from "./pages/Residential/baths/Bathrooms";
// import Woodwork from "./pages/Residential/woodwork/Woodwork";
// import About from "./components/About";

function App() {
  // states
  const [linkClick, setLinkClick] = useState(false);
  const [page, setPage] = useState(""); //Subtitle
  const [back, setBack] = useState(""); //background color

  //import images from folder function
  function importAll(r) {
    return r.keys().map(r);
  }
  // dark-backgrounds
  const darkBackgrounds = importAll(
    require.context("./assets/darkBackgrounds", false, /\.(png|jpe?g|svg)$/)
  );

  // link-click function
  const setfalse = () => setLinkClick(false);

  //subheader on each page
  const sub1 = (
    <>
      {" "}
      {contact} Gary Halzel for a no-obligation free estimate, call{" "}
      <a
        onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
        href="tel: 7742391074"
      >
        {" "}
        774-239-1074
      </a>
      . References are available. All work is backed by Liquid Disguise's
      Unconditional Guarantee of your satisfaction.
    </>
  );

  console.log(darkBackgrounds);
}
export default App;
