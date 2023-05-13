import { useEffect } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../../components/base";
import baseURL from "../../url";
import Loginconfirm from "../../components/auth/login-register/login/login-confirm";

export default function Login() {
  const router = useRouter();
  const { followInShopPage, profileFeature } = useSelector(
    (state) => state.FeatureSettingsReducer
  );

  useEffect(() => {
    !profileFeature && router.push("/");
  }, []);
  return (
    <Layout showHomeBanner={false}>
      <Head>
        <title> {"ورود به سایت | کانال تخفیف"} </title>
        <link rel="canonical" href={baseURL + "/auth/login"} />
      </Head>
      {profileFeature && <Loginconfirm />}
    </Layout>
  );
}
