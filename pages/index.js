import Head from "next/head";
import Layout from "../components/base";

export default function Index() {
  return (
    <div>
      <Head>
        <title>کانال تخفيف، مرجع رایگان اشتراک گذاری کوپن و کد تخفیف</title>
      </Head>
      <Layout>
        <div
          style={{
            textAlign: "center",
            minHeight: "40vh",
            paddingTop: "50px"
          }}
          className="cs-container"
        >
          <h1>آزمون مصاحبه کانال تخفیف</h1>
          <h2>ReactJS and NextJS</h2>
        </div>
      </Layout>
    </div>
  );
}
