import Head from "next/head";
import Layout from "../../components/base";
import baseURL from "../../url";
import LoginRegisterForm from "../../components/auth/login-register/login-register-form";
import { checkUserAgentSSR } from "../../components/shared/checkUserAgentSSR";

export default function LoginRegister({ serverUserAgent }) {
  return (
    <Layout>
      <Head>
        <title> {"ورود به سایت | کانال تخفیف"} </title>
        <link rel="canonical" href={baseURL + "/auth/login"} />
      </Head>
      <div
        style={{
          minHeight: "500px",
        }}
        id="tg-wrapper"
        className="App tg-wrapper tg-haslayout"
      >
        <LoginRegisterForm serverUserAgent={serverUserAgent} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  context.res.setHeader("vary", "Accept-Encoding,User-Agent");
  context.res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  const UA = context.req.headers["user-agent"];
  let isMobile = checkUserAgentSSR(UA);

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
      serverUserAgent: UA || "",
    },
  };
}
