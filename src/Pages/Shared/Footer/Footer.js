import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-3">
            <h2> Our Branches</h2>
            <ul>
              <li>Rangpur</li>
              <li>Dhaka</li>
              <li>Khulna</li>
              <li>Rajshahi</li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
              <li>Gallery </li>
              <li>Review</li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3">
            <h2>Contact info</h2>
            <ul>
              <li>0178654...</li>
              <li>0178622...</li>
              <li>sourov@gmail.com</li>
              <li>Rangpur Co bazar</li>
              <li>Main office : Dhaka</li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3">
            <h2>Follow us</h2>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <p>&copy;All right reserved by sourov</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
