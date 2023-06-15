import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Retail Shop"}>
      <div className="row footer-item ">
        <div className="col-md-6 ">
          <img src="/images/about.jpg" alt="about" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At Raja Stores, we believe in the power of retail to transform lives
            and build connections. We understand that shopping is more than just
            a transaction; it's an opportunity to discover unique products that
            enhance your lifestyle and reflect your personal style. That's why
            we curate a diverse range of handpicked items that embody quality,
            craftsmanship, and value.
            <br />
            Thank you for choosing Raja Stores. We appreciate your support and
            trust in our brand.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
