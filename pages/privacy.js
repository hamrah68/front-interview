import Layout from "../components/base";
import PageContent from "../components/static";
import host from "../host";
import fetch from "node-fetch";
import Head from "next/head";
import baseURL from "../url";

export default function Privacy({ page }) {
  return (
    <Layout>
      <Head>
        <title> {page.title} - کانال تخفیف </title>
        <meta
          name="description"
          content="حریم خصوصی و توافق‌نامه های استفاده از داده"
        />
        <link rel="canonical" href={baseURL + "/" + page.page} />
      </Head>
      <div id="tg-wrapper" className="App tg-wrapper tg-haslayout">
        <PageContent page={page} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(host + "/page_contents/privacy");
  const page = await res.json();
  return {
    props: {
      page,
    },
  };
}
