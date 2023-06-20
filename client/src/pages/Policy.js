import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row footer-item ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p style={{ "text-align": "justify" }}>
            <b>Information Collection and Use: </b> <br />
            <ol>
              <li>Personal Information:</li>
              When you register an account on our web application, we may
              collect personal information such as your name, email address,
              shipping address, and contact details. We use this information to
              process your orders, provide customer support, and improve our
              services.
              <li>Order Information:</li>
              When you place an order through our web application, we collect
              information related to your purchases, including the products
              ordered, payment details, and shipping information. This
              information is used for order fulfillment and delivery purposes.
              <li>Usage Data:</li>
              We may collect information about your interaction with our web
              application, such as the pages visited, products viewed, and the
              time and date of your visits.
            </ol>
          </p>
          <p>
            <b>Your Rights:</b>
            <br /> You have the right to access, modify, or delete your personal
            information held by us. You can update your account information by
            logging into your account on our web application.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
