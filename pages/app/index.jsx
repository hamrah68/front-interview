import { useEffect } from "react";
import Head from "next/head";
import AppPage from "../../components/app/App.component";
import Layout from "../../components/base";
import baseURL from "../../url";

const AppsPage = () => {
  return (
    <Layout>
      <Head>
        <title> {"دانلود اپلیکیشن اندروید و افزونه ها | کانال تخفیف"} </title>
        <link rel="canonical" href={baseURL + "/app"} />
        <meta
          name="description"
          content="دانلود رایگان اپلیکیشن اندروید، اکستنشن و افزونه  کروم و فایرفاکس سایت کانال تخفیف. با نصب اپ آفچنل به کد تخفیف و پیشنهادات ویژه بیش از 1000 فروشگاه اینترنتی دسترسی دارید"
        />
      </Head>

      <AppPage />

      <div className="cs-container">
        <div>
          <h2>دانلود افزونه های کانال تخفیف</h2>
          <p
            style={{
              fontWeight: "400",
            }}
          >
            شما می‌توانید افزونه های کانال تخفیف را از روش های زیر دریافت نمایید
          </p>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <a
              href="https://link.offch.com/60ab59"
              target="_blank"
              rel="nofollow noopener noreferrer"
              style={{ margin: "5px" }}
            >
              <img
                src="/static/images/chromex.svg"
                alt="افزونه گوگل کروم"
                width="149px"
                height="46px"
              />
            </a>
            <a
              href="https://link.offch.com/5fae82"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "5px" }}
            >
              <img
                width="149px"
                height="46px"
                src="/static/images/firefoxex.svg"
                alt="افزونه موزیلا فایرفاکس"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AppsPage;
