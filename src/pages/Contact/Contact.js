// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

// styles
import "./Contact.css";

// components
import About from "../../components/About";
import Footer from "../../components/Footer";
import Closer from "../../components/Closer";
import Modal from "../../components/Modal";

export default function Contact({ setPage }) {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();
  const location = useLocation();

  //reset background
  useEffect(() => {
    setPage("Contact");
  }, [location, setPage]);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowModal(true);
    emailjs
      .sendForm(
        "service_3ikf0bd",
        "template_9jg48ih",
        form.current,
        "3FVYjyArX0-WWretx"
      )
      .then(
        (result) => {
          console.log(result.text, result.status);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const list = [
    <h4>scenic murals</h4>,
    <h4>trompe l'oeil</h4>,
    <h4>faux finishes </h4>,
    <h4>simulated wood (faux bois)</h4>,
    <h4>faux Granite</h4>,
    <h4>Marbilizing</h4>,
    <h4>custom murals</h4>,
    <h4>custom stenciling</h4>,
    <h4>art</h4>,
    <h4>illustration</h4>,
  ];

  return (
    <section className="contactBody">
      <section id="contact">
        {/* <!-- from formpree.io service to submit actual forms to email --> */}
        <form
          ref={form}
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <h2>Contact Liquid Disguise</h2>
          <div className="name-form">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" required />
          </div>
          <div className="email-form">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className="phone-form">
            <label htmlFor="phone">Phone:</label>
            <input id="phone" type="phone" name="phone" required />
          </div>
          <div className="text-form">
            <label htmlFor="message"> Message:</label>
            <textarea
              style={{ width: "100%" }}
              name="message"
              id="message"
            ></textarea>
          </div>
          <button onSubmit={(e) => e.preventDefault()} type="submit">
            Submit
          </button>
        </form>
      </section>
      <About list={list} />
      <Closer
        sub1={"Thank you for visiting this site."}
        sub2="Liquid Disguise &copy; is dedicated to extensive and continual
          training of our painters, is committed to craftsmanship, and
          provides you an unconditional guarantee, so that, like hundreds of
          other New Englanders, you'll be glad you chose Liquid Disquise for
          your custom painting project!"
      />
      {showModal && <Modal setShowModal={setShowModal} />}
      <Footer />
    </section>
  );
}
