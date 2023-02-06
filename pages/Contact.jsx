import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import cv from "../src/assets/pictures/cv.jpg";
import { gsap } from "gsap";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const [icon, setIcon] = useState("close-circle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Email sent:", data);
      })
      .catch((error) => {
        console.error("Email not sent:", error);
      });
      
  };

  // const emailValidation = (e) => {
  //   const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,2})+$/;
  //   const emailValue = e.target.value;
  //   setEmail(emailValue);
  //   if (email.match(pattern)) {
  //     setMessage("icon success-color");
  //     setIcon("checkmark-circle");
  //   } else {
  //     setMessage("icon error-color");
  //     setIcon("close-circle");
  //   }
  // };
  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch("Nicolas Delisée - CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Nicolas Delisée - CV.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    gsap.fromTo(".form__pdf", { x: -800, duration: 3 }, { x: 0, duration: 3 });
    gsap.fromTo(
      ".form__contact",
      { x: 800, duration: 3 },
      { x: 0, duration: 3 }
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
          <h2>Mes coordonnées</h2>
          <h3>07 69 92 73 99</h3>
          <a href="mailto:nicolas.delisee3@gmail.com" target="_blank">
            <h3>nicolas.delisee3@gmail.com</h3>
          </a>
          <a href="https://github.com/nicolasdelisee" target="_blank">
            <h3>GitHub/nicolasdelisee</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-delis%C3%A9e-2b290b42/"
            target="_blank"
          >
            <h3>LinkedIn/nicolasdelisee</h3>
          </a>
          <h2>Contact</h2>
        </div>
        <form className="form__div" onSubmit={handleSubmit}>
          <div className="inputBox__contact">
              
            <input type="text" required="required" onChange={handleChange}/>
            <span>Nom</span>
          </div>
          <div className="inputBox__contact">
            <input
              type="email"
              required="required"
              onChange={handleChange}
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
