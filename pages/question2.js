import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question2 = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال دوم</h1>
        <h2>دکمه های زیر را </h2>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question2
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
            onClick={() => {
              setCount(count + 1);
            }}
            className="cs-btn cs-btn-primary cs-m-10"
          >
            +
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="cs-btn cs-btn-primary cs-m-10"
          >
            -
          </button>

          <button
            onClick={() => {
              setCount(0);
            }}
            className="cs-btn cs-btn-primary cs-m-10"
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
            {count}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Question2;
