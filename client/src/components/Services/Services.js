import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="service_container">
        <h1 className="service_heading">Our Services</h1>

        <table className="service_table">
          <tr className="service_row">
            <td className="service_firstrow1">
              <img src="/productsourcess.png" />
              <h2 className="items1">Product Sourcing</h2>
            </td>
            <td className="service_firstrow2">
              <img src="/buildownband.png" />
              <h2 className="items2">OEM to build your own brand</h2>
            </td>
          </tr>

          <tr className="service_rowsecond">
            <td className="service_secondrow1">
              <img src="/transportcustomer.png" />
              <h2 className="items3">Transport and Custom</h2>
            </td>
            <td className="service_secondrow2">
              <a className="service_links" href="http://rodhi.digital/">
                <img src="/digitalmarketing.png" />
              </a>
              <h2 className="items4">Digital Marketing Service</h2>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Services;
