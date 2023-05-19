import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question4 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال چهارم</h1>
        <h2>
          از لینک داده شده به صورت{" "}
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            کلاینت
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
          pages/question4
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

export default Question4;
