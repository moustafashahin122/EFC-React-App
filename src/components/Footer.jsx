import React from "react";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center mt-4">
      <hr />
      <h4>
        Order Now
        <br />
        With <span id="pagelogo">EFC</span>
      </h4>
      <button type="button" className="btn btn-danger">
        PURCHASE NOW
      </button>
      <p>© 2023 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
