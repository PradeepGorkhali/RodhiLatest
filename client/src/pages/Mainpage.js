import React from "react";
import Talk from "../components/Talk/Talk";
import Clientslider from "../components/Clients/Clientslider";
import About from "../components/About us/About";
import Whyrodhi from "../components/WhyRodhi/Whyrodhi";
import Services from "../components/Services/Services";
import Contactus from "../components/Contact/Contactus";

const Mainpage = () => {
  return (
    <div className="main__page" style={{ marginTop: "90px" }}>
      <Clientslider />
      <About />
      <Whyrodhi />
      <Services />
      <Contactus />
    </div>
  );
};

export default Mainpage;
