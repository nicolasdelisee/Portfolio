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
    fetch("Nicolas Delisée - CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Nicolas Delisée - CV.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    gsap.fromTo(".form__pdf", { x: -800, duration: 1.5 }, { x: 0, duration: 1.5 });
    gsap.fromTo(
      ".form__contact",
      { x: 800, duration: 1.5 },
      { x: 0, duration: 1.5 }
    );
  }, []);

  return (
    <div className="form">
      <div className="form__pdf">
        <img className="pdf" src={cv} alt="CV" />
        <button className="pdf__button" onClick={downloadPDF}>
          Télécharger le CV
        </button>
      </div>
      <div className="form__contact">
        <div className="form__title">
          <h2 className="form__title__name">Mes coordonnées</h2>
          <h4>07 69 92 73 99</h4>
          <a href="mailto:nicolas.delisee3@gmail.com" target="_blank">
            <h4 className="form__title__coord">nicolas.delisee3@gmail.com</h4>
          </a>
          <a href="https://github.com/nicolasdelisee" target="_blank">
            <h4 className="form__title__coord">GitHub/nicolasdelisee</h4>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-delis%C3%A9e-2b290b42/"
            target="_blank"
          >
            <h4 className="form__title__coord">LinkedIn/nicolasdelisee</h4>
          </a>
          <h2 className="form__title__name">Contact</h2>
        </div>
        <form className="form__div" action="../" name="contact" method="POST" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />

          <div className="inputBox__contact">
            <input type="text" name="name" required="required" />
            <span>Nom</span>
          </div>
          <div className="inputBox__contact">
            <input type="email" name="email" required="required" onChange={emailValidation} value={email} />
            <span>Email</span>
            <div
              className={email.length === 0 ? "icon initial-color" : message}
            >
              <ion-icon name={email.length === 0 ? "alert-circle" : icon} />
            </div>
          </div>
          <div className="inputBox__contact">
            <textarea type="message" name="message" required="required"></textarea>
            <span>Message</span>
          </div>
          <button className="buttonContact" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
