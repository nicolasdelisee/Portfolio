import React, { useState, useEffect } from "react";
import "./contact.css";
import cv from "../src/assets/pictures/cv.jpg";
import { gsap } from "gsap";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const [icon, setIcon] = useState("close-circle");

  const emailValidation = (e) => {
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,2})+$/;
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      setMessage("icon success-color");
      setIcon("checkmark-circle");
    } else {
      setMessage("icon error-color");
      setIcon("close-circle");
    }
  };
    const downloadPDF = () => {
      // using Java Script method to get PDF file
      fetch('Nicolas Delisée - CV.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Nicolas Delisée - CV.pdf';
              alink.click();
          })
      })
  }

useEffect(() => {
gsap.fromTo(".form__pdf", {x: -800, duration: 3}, { x: 0, duration: 3 });
gsap.fromTo(".form__contact", {x: 800, duration: 3}, { x: 0, duration: 3});
}, []);

  return (
    <div className="form">
      <div className="form__pdf">
        <img className="pdf" src={cv} alt="CV" />
        <button className="pdf__button" onClick={downloadPDF}>Télécharger le CV</button>
      </div>
      <div className="form__contact">
        <div className="form__title">
          <h2>Contact</h2>
        </div>
        <form className="form__div">
          <div className="inputBox__contact">
            <input type="text" required="required" />
            <span>Nom</span>
          </div>
          <div className="inputBox__contact">
            <input
              type="email"
              required="required"
              onChange={emailValidation}
              value={email}
            />
            <span>Email</span>
            <div
              className={email.length === 0 ? "icon initial-color" : message}
            >
              <ion-icon name={email.length === 0 ? "alert-circle" : icon} />
            </div>
          </div>
          <div className="inputBox__contact">
            <input type="message" required="required" />
            <span>Message</span>
          </div>
          <input className="buttonContact" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
