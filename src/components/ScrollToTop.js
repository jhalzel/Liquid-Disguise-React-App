import {  useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToTop({ linkClick, setfalse }) {
  let location = useLocation();

  useEffect(() => {

    console.log('location.pathname:', location.pathname);
    console.log('location.hash:', location.hash);
    console.log('linkClick:', linkClick);


    if (linkClick && location.hash === '#about') {
      window.scrollTo({
        top: 1230,
        left: 0,
        behavior: "smooth",
      });

      } else {
      setTimeout(() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }, 1);
        }
      }, [linkClick, location]);
  return;
}
