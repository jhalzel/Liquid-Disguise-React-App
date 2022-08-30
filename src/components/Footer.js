import React from "react";

// images
import riskFree from "../icons/risk-free.png";
import estimate from "../icons/estimate.png";
import logo from "../images/ldLogo_update.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="risk-free">
          <img src={riskFree} alt="risk-free" />
        </div>

        <div className="copyright">
          <div className="card">
            <img src={logo} alt="ldLogo" />
          </div>
          <h3>
            Liquid Disguise &copy; Custom Decorative Painting of New England
            774-239-1074
          </h3>
          <h3>
            All contents of this site are proprietary and copyright 2009-2018,
            Liquid Disguise &copy;
          </h3>
        </div>

        <div className="estimate">
          <img src={estimate} alt="free-estimate" />
        </div>
      </footer>
    </>
  );
}
