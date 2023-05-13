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
          }}
          className="cs-container"
        >
          <h1>آزمون مصاحبه کانال تخفیف</h1>
        </div>
      </Layout>
    </div>
  );
}