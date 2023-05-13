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
        <title> قوانین و شرایط استفاده - کانال تخفیف </title>
        <meta
          name="description"
          content="قوانین و شرایط استفاده از کد تخفیف و سایر محتوای موجود در سایت آف چنل (کانال تخفیف) که تمامی کاربران باید نسبت به آن آگاهی داشته باشند و مفاد آن را رعایت کنند"
        />
      </Head>
      <link rel="canonical" href={baseURL + "/" + page.page} />
      <div id="tg-wrapper" className="App tg-wrapper tg-haslayout">
        <PageContent page={page} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(host + "/page_contents/terms");
  const page = await res.json();
  return {
    props: {
      page,
    },
  };
}
