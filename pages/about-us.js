import { useEffect, useRef } from "react";
import Layout from "../components/base";
import PageContent from "../components/static";
import host from "../host";
import fetch from "node-fetch";
import Head from "next/head";
import SamandehiNamad from "../components/shared/samandehi";
import EnamadLogo from "../components/shared/Enamad";
import { useRouter } from "next/router";
import baseURL from "../url";

export default function AboutUs({ page, deviceType }) {
  const router = useRouter();
  const namadRef = useRef();
  const { scroll } = router.query || {};
  useEffect(() => {
    scroll === "namad" &&
      namadRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [router, scroll]);

  return (
    <Layout>
      <Head>
        <title> درباره ما - کانال تخفیف </title>
        <meta
          name="description"
          content="سایت آف چنل (کانال تخفیف) با اشتراک گذاری جدیدترین کد تخفیف فروشگاه های اینترنتی به صورت رایگان، فرصت یک خرید ارزان و لذت بخش را برای کاربران فراهم نموده است"
        />

        <link rel="canonical" href={baseURL + "/" + page.page} />
      </Head>
      <div id="tg-wrapper" className="App tg-wrapper tg-haslayout">
        <PageContent page={page} />
      </div>

      <div className="cs-container">
        <div className="cs-card cs-card-bordered cs-card-rounded cs-card-body">
          <div ref={namadRef} className="cs-column cs-center">
            <h3>مجوزها (نماد اعتماد الکترونیکی و ساماندهی)</h3>
            <div className="cs-row cs-center-content">
              <div
                style={{
                  minWidth: "80px",
                  minHeight: "50px",
                  maxWidth: "95px",
                  borderRadius: "10px",
                  padding: "5px",
                  margin: "5px",
                  backgroundColor: "#FFF",
                  boxShadow:
                    "inset 20px 20px 60px #d6d6d6,  inset -20px -20px 60px #ffffff",
                }}
                className="cs-row cs-center-content"
              >
                <EnamadLogo from="about" />
              </div>
              <div
                style={{
                  minWidth: "80px",
                  minHeight: "50px",
                  maxWidth: "95px",
                  borderRadius: "10px",
                  padding: "5px",
                  margin: "5px",
                  backgroundColor: "#FFF",
                  boxShadow:
                    "inset 20px 20px 60px #d6d6d6,  inset -20px -20px 60px #ffffff",
                }}
                className="cs-row cs-center-content"
              >
                <SamandehiNamad from="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(host + "/page_contents/about-us");
  const page = await res.json();
  return {
    props: {
      page,
    },
  };
}
