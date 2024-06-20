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

  //contact button
  const contact = (
    <span
      className='contactButton'
      onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
      onClick={() => {
        var cont = document.getElementsByClassName("contact-com-wrapper")[0];
        var letters = document.getElementsByClassName("contact")[0];
        if (
          !cont.classList.contains("contact-com-wrapper2") &&
          !letters.classList.contains("contact2")
        ) {
          cont.classList.add("contact-com-wrapper2");
          letters.classList.add("contact2");
        }
        setTimeout(() => {
          cont.classList.remove("contact-com-wrapper2");
          letters.classList.remove("contact2");
          // console.log("animation done");
        }, 2000);
      }}
    >
      contact
    </span>
  );

  //subheader on each page
  const sub1 = (
    <>
      {" "}
      {contact} Gary Halzel for a no-obligation free estimate, call{" "}
      <a
        onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
        href='tel: 7742391074'
      >
        {" "}
        774-239-1074
      </a>
      . References are available. All work is backed by Liquid Disguise's
      Unconditional Guarantee of your satisfaction.
    </>
  );

  //smooth menu handling
  const handleMenu = (e) => {
    if (e.currentTarget.className === "home") {
      let r = document.getElementsByClassName("residential");
      r[0].parentElement.classList.remove("com-wrapper2");

      let d = document.getElementsByClassName("commercial");
      d[0].parentElement.classList.remove("com-wrapper2");

      let c = document.getElementsByClassName("contact");
      c[0].parentElement.classList.remove("com-wrapper2");
    }
  };

  //toggle menu on page change
  const handleMenubar = (e) => {
    var cur = e.currentTarget.parentElement;

    if (!cur.classList.contains("com-wrapper2")) {
      cur.classList.add("com-wrapper2");
      if (e.currentTarget.className === "commercial") {
        let r = document.getElementsByClassName("residential");
        r[0].parentElement.classList.remove("com-wrapper2");
        let c = document.getElementsByClassName("contact");
        c[0].parentElement.classList.remove("com-wrapper2");
      }
      if (e.currentTarget.className === "residential") {
        let d = document.getElementsByClassName("commercial");
        d[0].parentElement.classList.remove("com-wrapper2");
        let c = document.getElementsByClassName("contact");
        c[0].parentElement.classList.remove("com-wrapper2");
      }
      if (e.currentTarget.className === "contact") {
        let d = document.getElementsByClassName("commercial");
        d[0].parentElement.classList.remove("com-wrapper2");
        let r = document.getElementsByClassName("residential");
        r[0].parentElement.classList.remove("com-wrapper2");
      }
    } else {
      cur.classList.toggle("com-wrapper2");
    }
  };

  //drop-down menu on click
  const handleMenubar2 = (e) => {
    //toggle menu on page change
    var cur = e.currentTarget.parentElement.parentElement.parentElement;
    if (!cur.classList.contains("com-wrapper2")) {
      cur.classList.add("com-wrapper2");
    } else {
      cur.classList.toggle("com-wrapper2");
    }
  };

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
                <h4>{page}</h4>
              </div>
            </div>
            <ul>
              <li className='home' onClick={(e) => handleMenu(e)}>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <div className='com-wrapper'>
                  <span
                    className='commercial'
                    onClick={(e) => {
                      handleMenubar(e);
                    }}
                  >
                    Commercial
                  </span>
                  <div className='com-menu'>
                    <ul className='holder'>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
                        <Link to='/business'>Business & Office</Link>
                      </li>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
                        <Link to='/churchesAndTemples'>Churches & Temples</Link>
                      </li>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
                        <Link to='/signs'>Signs</Link>
                      </li>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
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
                    onClick={(e) => handleMenubar(e)}
                  >
                    Residential
                  </span>
                  <div className='com-menu'>
                    <ul className='holder'>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
                        <Link to='/kitchenAndDining'>Kitchens & Dining</Link>
                      </li>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
                        <Link to='/livingRooms'>Living Rooms</Link>
                      </li>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
                        <Link to='/bedrooms'>Bedrooms</Link>
                      </li>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
                        <Link to='/bathrooms'>Bathrooms</Link>
                      </li>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
                        <Link to='/woodwork'>Woodwork</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className='contact-com-wrapper'>
                  <span className='contact' onClick={(e) => handleMenubar(e)}>
                    Contact
                  </span>
                  <div className='com-menu'>
                    <ul className='holder'>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
                        }}
                      >
                        <Link to='contact'>Contact</Link>
                      </li>
                      <li
                        onClick={(e) => {
                          handleMenubar2(e);
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
                handleClick={handleClick}
                modal={<Modal />}
              />
            }
          />
          <Route exact path='contact/#about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
