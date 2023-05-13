import { useState, useEffect } from "react";
import Head from "next/head";
import baseURL from "../../url";
import { useSelector } from "react-redux";
import { useRouter } from "next/router"
import EditProfileForm from "../../components/account/edit-profile-form";
import ProfileSidebar from "../../components/account/profile-sidebar";
import Layout from '../../components/base';


export default function EditProfile() {
  const router = useRouter()
  const { followInShopPage, profileFeature } = useSelector((state) => state.FeatureSettingsReducer);
  useEffect(() => {
    !profileFeature && router.push('/')
  }, [])
  return (
    <>
      <Head>
        <title> {"ویرایش حساب کاربری | کانال تخفیف"} </title>
        <link rel="canonical" href={baseURL + "/auth/edit-profile"} />
      </Head>
      <Layout showHomeBanner={false}>
        {profileFeature &&
          <div className="cs-container">
            <div className="cs-mobile cs-tablet">
              <div className="cs-row cs-top-gap">
                <div className="cs-col-3">
                  <ProfileSidebar />
                </div>
                <div className="cs-col-12">
                  <EditProfileForm />
                </div>
              </div>
            </div>
            <div className="cs-desktop">
              <div className="cs-row cs-top-gap">
                <div className="cs-col-3">
                  <ProfileSidebar />
                </div>
                <div className="cs-col-8">
                  <EditProfileForm />
                </div>
              </div>
            </div>
          </div>
        }
      </Layout>
    </>
  );
}
