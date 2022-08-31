import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToTop({ linkClick, setfalse }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (linkClick === true) {
      window.scrollTo({
        top: 990,
        left: 0,
        behavior: "smooth",
      });
    } else if (linkClick === false && pathname !== "/contact/") {
      console.log(pathname);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 1);
    }
  }, [pathname, linkClick]);

  setfalse();

  return;
}
