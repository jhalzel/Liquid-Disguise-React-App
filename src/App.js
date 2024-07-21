// @ts-nocheck
import React from "react";
import "./App.css";
import { useEffect, useState } from "react"; //react hook
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// components
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./components/Modal";

//pages
import BusinessOffice from "./pages/business/Business";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact/Contact";
import Signs from "./pages/signs/Signs";
import Churches from "./pages/churches/Churches";
import Exteriors from "./pages/exterior/Exterior";
import Kitchen from "./pages/kitchen/Kitchen";
import LivingRooms from "./pages/livingrooms/LivingRoom";
import Bedrooms from "./pages/bedroom/Bedroom";
import Bathrooms from "./pages/bathroom/Bathroom";
import Woodwork from "./pages/woodwork/Woodwork.js";
import About from "./components/About";

function App() {
  // states
  const [linkClick, setLinkClick] = useState(false);
  const [page, setPage] = useState(""); //Subtitle
  const [back, setBack] = useState(""); //background color
  const [contactClassName, setContactClassName] = useState('contact')

  //import images from folder function
  const importAll = (r) => {
    return r.keys().map(r);
  };
  // dark-backgrounds
  const darkBackgrounds = importAll(
    require.context("./assets/darkBackgrounds", false, /\.(png|jpe?g|svg)$/)
  );

  // link-click function
  const setfalse = () => setLinkClick(false);

  //link for contact animation
  const lin = (
    <Link
    to={"/contact/#contact"}
    onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
    onClick={() => setLinkClick(true)}
    >
      Contact
    </Link>
  );

  //subheader on each page
  const sub1 = (
    <>
      {" "}
      {lin} Gary Halzel for a no-obligation free estimate, call{" "}
      {" "}
      <a
        onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
        href='tel:7742391074'
      >
        774-239-1074
      </a>
      . References are available. All work is backed by Liquid Disguise's
      Unconditional Guarantee of your satisfaction.
    </>
  );

  

  // (active) pallets array
  const pallets = [
    document.querySelector(".pallet1"),
    document.querySelector(".pallet2"),
    document.querySelector(".pallet3"),
    document.querySelector(".pallet4"),
    document.querySelector(".pallet5"),
    document.querySelector(".pallet6"),
  ];

  //subtitles
  const subtitle = document.querySelectorAll(".sub-headers h3");

  // add or remove white font for visibility
  useEffect(() => {
    // queries array (items to switch color on page)
    const paras = [
      document.querySelectorAll(".sub-headers .p1"),
      document.querySelectorAll(".sub-headers"),
      document.querySelectorAll(".bottom .p2"),
      document.querySelectorAll(".bottom ul"),
      document.querySelectorAll(".bottom .list2"),
      document.querySelectorAll(".main-body ul"),
      document.querySelectorAll(".main-body2 ul"),
      document.querySelectorAll(".ext-main-body ul"),
      document.querySelectorAll(".satisfied ul"),
      document.querySelectorAll(".bus-main-body ul"),
      document.querySelectorAll(".mural"),
      document.querySelectorAll(".churchMural"),
      document.querySelectorAll(".closer .p3 .s2 "),
      document.querySelectorAll(".closer .p3 .s1 "),
    ];

    if (darkBackgrounds.includes(back)) {
      console.log("includes");
      for (let i = 0; i < paras.length; i++) {
        if (paras[i]) {
          paras[i].forEach((cl) => cl.classList.add("li2"));
        }
      }
      subtitle.forEach((s) => s.classList.add("li3"));
    } else {
      for (let j = 0; j < paras.length; j++) {
        if (paras[j]) {
          paras[j].forEach((cl) => {
            if (cl.classList.contains("li2")) {
              cl.classList.replace("li2", "li1");
            }
          });
        }
      }
      subtitle.forEach((s) => {
        if (s) {
          if (s.classList.contains("li3")) {
            s.classList.replace("li3", "li4");
          }
        }
      });
    }
  }, [back, subtitle, darkBackgrounds]);
    
  // handle Contact menu click
  const handleContactClick = () => {
    setContactClassName('com-wrapper')
  }

  // changing backgrounds handle
  const handleClick = (e) => {
    //current pallet
    let curPal = e.currentTarget;

    // pallet's background image
    let color = e.target.attributes[2].nodeValue;

    // add invert class to pallets for effect
    if (curPal.parentNode.className !== "pallet1") {
      curPal.parentNode.classList.add("invert");
    }
    // remove styling from all other pallets
    pallets.forEach((pal) => {
      if (pal != null) {
        if (pal.classList.contains("invert") && pal !== curPal.parentNode) {
          pal.classList.remove("invert");
        }
      }
    });
  

    // get the "alt" attribute of the pallet
    let currentImg = color.toString();
    //set background image/color
    setBack(currentImg);
  };

  console.log(darkBackgrounds);
  // App begins
  return (
    <div className='App' style={{ background: `url(${back})` }}>
      <BrowserRouter>
        <ScrollToTop linkClick={linkClick} setfalse={setfalse} />
        {/* header */}
        <header className='main-head'>
          {/* NAVIGATION MENU */}
          <nav>
            <div id='logo'>
              <div>
                <h1>Liquid-Disguise</h1>
                <h6>Custom Decorative Painting of New England</h6>
                <h4>{page}</h4>
              </div>
            </div>
            <ul>
              <li className='home' >
                <Link to='/'>Home</Link>
              </li>
              <li>
                <div className='com-wrapper'>
                  <span className='commercial'>
                    Commercial
                  </span>
                  <div className='com-menu'>
                    <ul className='holder'>
                      <li>
                        <Link to='/business'>Business & Office</Link>
                      </li>
                      <li>
                        <Link to='/churchesAndTemples'>Churches & Temples</Link>
                      </li>
                      <li>
                        <Link to='/signs'>Signs</Link>
                      </li>
                      <li>
                        <Link to='/exteriors'>Exteriors</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className='com-wrapper'>
                  <span
                    className='residential'
                  >
                    Residential
                  </span>
                  <div className='com-menu'>
                    <ul className='holder'>
                      <li
                      >
                        <Link to='/kitchenAndDining'>Kitchens & Dining</Link>
                      </li>
                      <li
                      >
                        <Link to='/livingRooms'>Living Rooms</Link>
                      </li>
                      <li
                      >
                        <Link to='/bedrooms'>Bedrooms</Link>
                      </li>
                      <li
                      >
                        <Link to='/bathrooms'>Bathrooms</Link>
                      </li>
                      <li
                      >
                        <Link to='/woodwork'>Woodwork</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className='com-wrapper'>
                  <span className='contact'>
                    Contact
                  </span>
                  <div className='com-menu'>
                    <ul className='holder'>
                      <li
                      >
                        <Link to='contact'>Contact</Link>
                      </li>
                      <li
                        onClick={(e) => {
                          setLinkClick(true);
                        }}
                      >
                        <Link to='/contact/#about'>About</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Home
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
                setLinkClick={setLinkClick}
              />
            }
          />
          <Route
            path='/business'
            element={
              <BusinessOffice
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path='churchesAndTemples'
            element={
              <Churches
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path='signs'
            element={
              <Signs
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path='exteriors'
            element={
              <Exteriors
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path='kitchenAndDining'
            element={
              <Kitchen
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path='livingRooms'
            element={
              <LivingRooms
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path='bedrooms'
            element={
              <Bedrooms
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path='bathrooms'
            element={
              <Bathrooms
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path='woodwork'
            element={
              <Woodwork
                importAll={importAll}
                sub1={sub1}
                setBack={setBack}
                setPage={setPage}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path='contact'
            element={
              <Contact
                setBack={setBack}
                setPage={setPage}
                handleClick={handleContactClick}
                modal={<Modal />}
              />
            }
          />
          <Route exact path='contact/#contact' element={<Contact />} />
          <Route exact path='contact/#about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
