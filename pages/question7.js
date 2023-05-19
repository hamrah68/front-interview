import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question7 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال هفتم</h1>
        <h2>ورژن کنترل چیست توضیح دهید؟</h2>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question7
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

export default Question7;
