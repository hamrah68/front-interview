import React, { useEffect, useState } from "react";
import Layout from "../../components/base";
import Head from "next/head";
import baseURL from "../../url";
import { useRouter } from "next/router";
import NotificationSettingComponent from "../../components/auth/notificationSetting/NotificationSetting";

const NotificationSettingsPage = () => {
  const router = useRouter();

  const { user_token, action, user_id, followed_shop_id } =
    router.query;

  // useEffect(() => {
  //   console.log("user_token", user_token);
  //   console.log("action", action);
  //   console.log("user_id", user_id);
  //   console.log("followed_shop_id", followed_shop_id);
  // }, [router]);
  return (
    <>
      <Head>
        <title> {" انصراف از دریافت ایمیل | کانال تخفیف"} </title>
        <link
          rel="canonical"
          href={baseURL + "/auth/notification-settings"}
        />
      </Head>
      <Layout showHomeBanner={false}>
        <div className="cs-container">
          {action && user_token ? (
            <NotificationSettingComponent
              user_token={user_token}
              action={action}
              user_id={user_id}
              followed_shop_id={followed_shop_id}
            />
          ) : (
            <div
              style={{
                margin: "50px 0 20px 0",
                padding: "20px",
                fontSize: "2rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              مشخصات نامعتبر
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default NotificationSettingsPage;
