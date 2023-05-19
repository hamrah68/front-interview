import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question1 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال اول</h1>
        <h2>
          یک برنامه شمارنده بنویسید که با فشردن دکمه + یک عدد به متغیر count اضافه و با فشردن دکمه -
          یک عدد کم شود. اگر عدد شمارنده بالا تر از 10 بود رنگ دکمه ها قرمز شود
        </h2>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question1
        </p>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "center",
            direction: "rtl",
          }}
        >
          {/* جواب خود را در اینجا بنویسید */}

          <button
            className="cs-btn cs-btn-primary cs-m-10"
            style={{
              backgroundColor: "green",
            }}
          >
            +
          </button>
          <button
            className="cs-btn cs-btn-primary cs-m-10"
            style={{
              backgroundColor: "green",
            }}
          >
            -
          </button>

          <button
            className="cs-btn cs-btn-primary cs-m-10"
            style={{
              backgroundColor: "green",
            }}
          >
            Reset
          </button>

          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "roboto",
            }}
          >
            0
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Question1;
