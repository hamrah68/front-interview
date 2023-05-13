import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../components/base";
import ProfileSidebar from "../../components/account/profile-sidebar";
import baseURL from "../../url";
import ProfileSideMenu from "../../components/account/profile-side-menu";
// import DisplayAccountOptions from "../../components/account/display-account-options";
import ProfileSideMenuShop from "../../components/account/profile-side-menu-shop";

import dynamic from "next/dynamic";
const DisplayAccountOptions = dynamic(() =>
  import("../../components/account/display-account-options")
);

export default function Profile() {
  const router = useRouter();
  const { followInShopPage, profileFeature } = useSelector(
    (state) => state.FeatureSettingsReducer
  );
  const { token } = useSelector((state) => state.userReducer);

  useEffect(() => {
    !token && router.push("/auth/login-register");
  }, [router]);

  useEffect(() => {
    !profileFeature && router.push("/");
  }, []);
  return (
    <>
      <Head>
        <title> {"حساب کاربری | کانال تخفیف"} </title>
        <link rel="canonical" href={baseURL + "/auth/profile-page"} />
      </Head>
      <Layout showHomeBanner={false}>
        {profileFeature && <ProfilePage />}
      </Layout>
    </>
  );
}

const ProfilePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user, token } = useSelector((state) => state.userReducer);
  const { shop = "" } = user;
  const { isProfileShopOptionsActive } = useSelector(
    (state) => state.FeatureSettingsReducer
  );

  useEffect(() => {
    token ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, [user]);

  return (
    <div className="cs-container">
      <div className="cs-mobile cs-tablet">
        <div className="cs-row cs-top-gap">
          <div className="cs-col-12">
            {isAuthenticated && <ProfileSidebar />}
            {isAuthenticated &&
              isProfileShopOptionsActive &&
              shop && <ProfileSideMenuShop />}
            {isAuthenticated && <ProfileSideMenu />}
            {isAuthenticated && <DisplayAccountOptions />}
            {/* <div className="cs-card cs-card-rounded">
                <div className="cs-card-body">
                <h1 className="cs-text-center">
                  کانال تخفیف را به دوستان خود معرفی کنید
                </h1>
                <ul className="cs-list-inline cs-list-large">
                  <li>
                    <a
                      href="https://t.me/off_channell"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <i className="fa fa-telegram" title="تلگرام" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/off_channell/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <i className="fa fa-instagram" title="اینستاگرام" />
                    </a>
                  </li>
                </ul>
              </div> 
              </div> */}
          </div>
        </div>
      </div>

      <div className="cs-desktop">
        <div className="cs-row cs-top-gap">
          <div className="cs-col-3">
            {isAuthenticated && <ProfileSidebar />}
            {isAuthenticated &&
              isProfileShopOptionsActive &&
              shop && <ProfileSideMenuShop />}
            {isAuthenticated && <ProfileSideMenu />}
          </div>
          <div className="cs-col-8">
            {isAuthenticated && <DisplayAccountOptions />}
            {/* <div className="cs-card cs-card-rounded">
              <div className="cs-card-body">
                <h1 className="cs-text-center">
                  کانال تخفیف را به دوستان خود معرفی کنید
                </h1>
                <ul className="cs-list-inline cs-list-large">
                  <li>
                    <a
                      href="https://t.me/off_channell"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <i className="fa fa-telegram" title="تلگرام" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/off_channell/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <i className="fa fa-instagram" title="اینستاگرام" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
