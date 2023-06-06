import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="About_us">
        <div className="about">
          <h2 className="about_heading">About us</h2>
          <p>
            Rodhi, a young and experienced China sourcing company in Nepal,helps
            you in locating the ideal products for the Nepali market, the
            bestmanufacturers, reasonable rates, follow-up manufacturing,
            qualityinspection, and delivery to your door or warehouse. We will
            also keepyou informed of any future new goods, specials, or other
            types of offersthat may be of interest to you. Not only do we assist
            you in building yourbrand on the digital platform by providing
            digital marketing services. Rodhi, a young and experienced China
            sourcing company in Nepal.
          </p>
          <a href="/about" className="readmore">
            Explore More...
          </a>
        </div>
        <div className="about_mobile">
          <h2 className="about_heading_mobile">About us</h2>
          <p>
            Rodhi, a young and experienced China sourcing company in Nepal,
            helps you in locating the ideal products for the Nepali market, the
            best manufacturers, reasonable rates, follow-up manufacturing,
            {/* qualityinspection, and delivery to your door or warehouse. We will
          also keepyou informed of any future new goods, specials, or other
          types of offersthat may be of interest to you. Not only do we assist
          you in building yourbrand on the digital platform by providing digital
          marketing services. Rodhi, a young and experienced China sourcing
          company in Nepal. */}
          </p>
          <a href="/about" className="readmore_mobile">
            Explore More
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
