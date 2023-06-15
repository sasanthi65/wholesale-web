import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row footer-item ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about products feel free to call anytime we are
            available from 7am - 8pm
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@rajastores.lk
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 045-2323233
          </p>
          <p className="mt-3">
            <TiLocation /> : 23/B, Pothgul Vihara Mawatha, Ratnapura
          </p>

          <iframe src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Raja%20Stores,%2023/B,%20Pothgul%20Vihara%20Mawatha,%20Ratnapura,%20Sri%20Lanka+(Raja%20Stores)&t=&z=14&ie=UTF8&iwloc=B&output=embed">
            &lt;a href="https://www.maps.ie/distance-area-calculator.html"&gt;
            measure acres/hectares on map &lt;/a&gt;
          </iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
