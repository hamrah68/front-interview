import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question5 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال پنجم</h1>
        <h2>
          از لینک داده شده به صورت{" "}
          <span
            style={{
              fontWeight: "bold",
              color: "blue",
              fontSize: "22px",
            }}
          >
            سرور
          </span>{" "}
          ساید داده را fetch کنید و نام فارسی و انگلیسی فروشگاه را در صفحه نمایش دهید
        </h2>
        <p>https://api.offch.com/api/shops/digikala</p>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question5
        </p>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "left",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          {/* جواب خود را در اینجا بنویسید */}
        </div>
      </div>
    </Layout>
  );
};

export default Question5;
