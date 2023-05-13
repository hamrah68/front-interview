import Layout from "../components/base";
import PageContent from "../components/static";
import host from "../host";
import fetch from "node-fetch";
import Head from "next/head";
import baseURL from "../url";

export default function AboutUs({ page }) {
  return (
    <Layout>
      <Head>
        <title> ارتباط با ما - کانال تخفیف </title>
        <meta
          name="description"
          content="کاربران کانال تخفیف و صاحبان فروشگاه های آنلاین میتوانند هرگونه پیشنهاد، انتقاد و نظر در مورد کد تخفیف و محتوای سایت را از راه های ارتباطی به ما اطلاع دهند."
        />

        <link rel="canonical" href={baseURL + "/" + page.page} />
      </Head>
      <div id="tg-wrapper" className="App tg-wrapper tg-haslayout">
        <PageContent page={page} />
        <div
          style={{
            padding: "0",
          }}
          className="cs-container"
        >
          <div className="cs-card cs-card-bordered cs-card-rounded cs-p-md cs-col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.369429975783!2d51.64704711566878!3d32.62298409912939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc37311dfe4e77%3A0x8c2d7dc6f1ac67f4!2z2LTYsdqp2Kog2b7Zhtiv2KfYsSDYs9m-2YfYsSDZvtmI24zYpyAo2qnYp9mG2KfZhCDYqtiu2YHbjNmBKQ!5e0!3m2!1sen!2s!4v1642058566481!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(host + "/page_contents/contact-us");
  const page = await res.json();
  return {
    props: {
      page,
    },
  };
}
