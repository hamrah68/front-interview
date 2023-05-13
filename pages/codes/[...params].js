import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CouponItemPage from "../../components/coupon/page-mobile";
import fetch from "node-fetch";
import Head from "next/head";
import baseURL from "../../url";
import serverHost from "../../serverHost";
import Layout from "../../components/base";
import { bookmarkCouponAction } from "../../components/coupon/actions";
// import ShowErrorPage from "../../components/error/ErrorPage";
// const CouponItemPage = dynamic(() => import("../../components/coupon/page"));
const ShowErrorPage = dynamic(() => import("../../components/error/ErrorPage"));

export default function Post({ coupon, error, similarCouponListSSR }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token: userToken } = useSelector((state) => state.userReducer);

  const { canonical } = coupon || "";
  let image = null;

  if (!error) {
    image = coupon.shop.image;
    if (!image) {
      image = coupon.shop.logo;
    }

    image = "https://static.offch.com/" + image;
  }

  useEffect(() => {
    const CouponIdToSave = localStorage.getItem("CouponIdToSave");
    const token = localStorage.getItem("token");
    token &&
      CouponIdToSave &&
      setTimeout(() => {
        dispatch(bookmarkCouponAction(CouponIdToSave, token));
      }, 900);
    return () => {
      userToken && localStorage.removeItem("CouponIdToSave");
      userToken && localStorage.removeItem("savedUrlToReturn");
    };
  }, [router, userToken]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     localStorage.removeItem("CouponIdToSave")
  //     localStorage.removeItem("savedUrlToReturn")
  //   }, 2000);
  // }, [])

  return (
    <Layout>
      <div id="tg-wrapper" className="App tg-wrapper tg-haslayout">
        {!error ? (
          <Head>
            <title> {coupon.title + " | کانال تخفیف"} </title>
            <meta name="description" content={coupon.search_description} />
            <meta name="keywords" content={coupon.keywords} />

            {canonical ? (
              <link rel="canonical" href={baseURL + "/shops/" + coupon.shop.name} />
            ) : (
              <link rel="canonical" href={baseURL + coupon.url} />
            )}

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="کانال تخفیف" />
            <meta property="og:url" content={baseURL + coupon.url} />
            <meta property="og:title" content={coupon.title + " | کانال تخفیف"} />
            <meta property="og:image" content={image} itemProp="image primaryImageOfPage" />
            <meta property="og:description" content={coupon.search_description} />

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "کانال تخفیف",
                      item: `https://www.offch.com/`,
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: `${coupon.shop.category.persian_title}`,
                      item: `https://www.offch.com/categories/${coupon.shop.category.title}`,
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: `${coupon.shop.persian_name}`,
                      item: `https://www.offch.com/shops/${coupon.shop.name}`,
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      name: `${coupon.title}`,
                    },
                  ],
                }),
              }}
            />
          </Head>
        ) : null}

        {!error ? (
          <div
            style={{
              minHeight: "90vh",
            }}
          >
            <CouponItemPage serverCoupon={coupon} similarCouponListSSR={similarCouponListSSR} />
          </div>
        ) : (
          <div className="cs-text-center">
            <ShowErrorPage type="404" />
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(serverHost + "/coupons?limit=10&offset=0");
  const coupons = await res.json();

  const paths = coupons.results.map((coupon) => ({
    params: { params: [`${coupon.id}`] },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  let error = null;
  let res = null;
  let resSimilarCouponList = null;
  let coupon = null;
  let similarCouponListSSR = null;

  const couponIdParam = encodeURIComponent(params.params[0].split(".").join(""));

  res = await fetch(serverHost + "/coupons/" + couponIdParam);

  if (res.status > 200) {
    error = true;
  } else {
    resSimilarCouponList = await fetch(
      serverHost + "/coupons/" + couponIdParam + "/similar_coupons"
    );

    coupon = await res.json();

    similarCouponListSSR = await resSimilarCouponList.json();
  }

  let newCode = null;
  let newPersianTitle = null;
  let newCouponNumber = null;

  if (coupon) {
    if (coupon.redirect_to !== null) {
      if (coupon.redirect_to.length > 1) {
        if (coupon.redirect_to.includes("codes")) {
          newCouponNumber = coupon.redirect_to.split("/");
          newCode = newCouponNumber[newCouponNumber.length - 1];

          const redirectCoupon = await fetch(serverHost + "/coupons/" + newCode);

          const redirectCouponRes = await redirectCoupon.json();

          newPersianTitle = redirectCouponRes.title_in_url;

          if (redirectCouponRes) {
            if (redirectCouponRes.url !== null) {
              if (redirectCouponRes.url.length > 1) {
                return {
                  redirect: {
                    destination: `https://www.offch.com/codes/${newCode}/${encodeURIComponent(
                      newPersianTitle
                    )}`,
                    permanent: true,
                  },
                };
              }
            }
          }
        } else {
          return {
            redirect: {
              destination: `${coupon.redirect_to}`,
              permanent: true,
            },
          };
        }
      }
    }
  }

  return {
    props: {
      coupon,
      error,
      similarCouponListSSR,
    },
    revalidate: 300,
  };
}
