import React from "react";
import "./Contactus.css";
import { FaPhoneAlt, FaWhatsappSquare } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdDirections } from "react-icons/md";

function Contactus() {
  return (
    <div className="home_contact">
      <h1 className="home_contact_desktop_heading">
        Let's Talk about Business
      </h1>
      <h1 className="home_contact_mobile_heading">Let's Talk Business</h1>
      <div className="division">
        <div className="location">
          <h2>We're Here</h2>
          <p>Our office is always open to discuss about your business.</p>
          <div className="location-combine">
            <div className="firstlocation">
              <h1>China Office</h1>
              <p>
                No 043, 2nd Floor, Zone b, Poly Yuedu,
                <br />
                Longhua, Shenzhen.
                <br />
                +86-13823275584
              </p>
              <a
                className="direction"
                href="https://goo.gl/maps/dxLDDkcnCgqzroYJA"
                target="_blank"
              >
                Get Direction <MdDirections />
              </a>
            </div>
            <div className="secondlocation">
              <h1>Nepal Office</h1>
              <p>
                Gairegaun-9 Sinamangal
                <br />
                Opposite of TIA Import and Export Office
              </p>
              <a
                className="direction"
                href="https://goo.gl/maps/PxC1ziFxARrhkCkY9"
                target="_blank"
              >
                Get Direction <MdDirections />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <h1>Contact Us</h1>
          <div className="contact-content">
            <div className="contact-details">
              <h2>
                <span className="contact_span">
                  <FaPhoneAlt />
                </span>
                &nbsp;<a href="tel:9801976688"> 9801976688 </a>
              </h2>

              <h2>
                <span className="contact_span">
                  <FaPhoneAlt />
                </span>
                &nbsp;<a href="tel:01-5913806"> 01-5913806 </a>
              </h2>
              <h2>
                <span className="contact_span">
                  <FaPhoneAlt />
                </span>
                &nbsp;<a href="tel:9802315216"> 9802315216 </a>
              </h2>

              <h2>
                <span className="contact_span_whatapp">
                  <FaWhatsappSquare />
                </span>
                &nbsp;{" "}
                <a href="https://wa.me/9801976688" target="_blank">
                  {" "}
                  9801976688{" "}
                </a>
              </h2>

              <h2>
                <span className="contact_span_whatapp">
                  <FaWhatsappSquare />
                </span>
                &nbsp;{" "}
                <a href="https://wa.me/9802315216" target="_blank">
                  {" "}
                  9802315216{" "}
                </a>
              </h2>

              <h2>
                <span className="contact_span_wechat">
                  <AiFillWechat />
                </span>
                &nbsp; 9851325806
              </h2>
              <h2>
                <span className="contact_span_gmail">
                  <HiOutlineMail />
                </span>
                &nbsp;&nbsp;
                <a href="mailto: rodhisources@gmail.com">
                  rodhisources@gmail.com
                </a>
              </h2>
            </div>
            <div className="contact-form"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
