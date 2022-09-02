import React from "react";
import { Link } from "react-router-dom";

//styles
import "./Modal.css";

export default function Modal({ setShowModal }) {
  const homelink = (
    <Link
      onClick={() => setShowModal(false)}
      onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
      to='/'
    >
      click me
    </Link>
  );

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        <div>
          <button onClick={() => setShowModal(false)} className='x'>
            x
          </button>
        </div>
        <h4>Submit Successful!</h4>
        <p>Thanks for visiting this site!</p>
        <p>{homelink} to go home</p>
      </div>
    </div>
  );
}
