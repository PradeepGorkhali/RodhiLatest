import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Clientslider.css";

import paisa from "../images/logo/paisaexperience.png";
import tuddrom from "../images/logo/Bird.png";
import feltyarn from "../images/logo/feltyarncolor.png";
import gravitycolor from "../images/logo/gravitycolor.png";
import hangernepalcolor from "../images/logo/hangernepalcolor.png";
import ultimate from "../images/logo/ultimate.png";
import backseat from "../images/logo/backseat.png";

export const allCountryUniversity = [
  {
    id: 1,
    img: paisa,
  },
  {
    id: 2,
    img: tuddrom,
  },
  {
    id: 3,
    img: feltyarn,
  },
  {
    id: 4,
    img: gravitycolor,
  },
  {
    id: 5,
    img: hangernepalcolor,
  },
  {
    id: 6,
    img: ultimate,
  },
  {
    id: 7,
    img: backseat,
  },
];
const Clientslider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="Home_Affiliated_Container">
        <h1>Our Clients</h1>
        <div className="Carousel_Container">
          <Slider {...settings}>
            {allCountryUniversity.map((info, index) => {
              return (
                <div key={index}>
                  <img className="Carousel_item" src={info.img} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Clientslider;
