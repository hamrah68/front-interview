import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question8 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال هشتم</h1>

        <h3>به سوالات مربوط به گیت در این قسمت پاسخ دهید</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question8
        </p>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "right",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          <p>گیت چیست و تفاوت آن با گیت هاب چیست؟</p>
          {/* جواب خود را در اینجا بنویسید */}
        </div>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "right",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          <p>چند دستور مهم گیت را بنویسید با ذکر مثال</p>
          {/* جواب خود را در اینجا بنویسید */}
        </div>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "right",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          <p>به غیر از گیت هاب چند سایت مشابه نام ببرید</p>
          {/* جواب خود را در اینجا بنویسید */}
        </div>
      </div>
    </Layout>
  );
};

export default Question8;
