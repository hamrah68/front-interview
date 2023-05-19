import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question3 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال سوم</h1>
        <h2>
          یک برنامه بنویسید که یک فرم داشته باشد دو ورودی از کاربر بگیرید و با زدن دکمه نتیجه جمع آن
          دو عدد را حساب کند و با زدن دکمه ریست مجدد همه اعداد 0 شود
        </h2>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question3
        </p>

        <p style={{ fontSize: "18px", fontWeight: "bold", color: "red" }}>
          خروجی باید مشابه عکس زیر باشد:
        </p>

        <div className="cs-center">
          <img
            className="cs-responsive-image cs-image-border"
            src="/images/question3.jpg"
            alt="سوال سوم"
          />
        </div>

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

export default Question3;
