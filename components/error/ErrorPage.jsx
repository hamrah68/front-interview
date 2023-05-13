import React, { memo } from "react";
import Link from "next/link";

const ShowErrorPage = ({ type = "404" }) => {
  return (
    <div
      style={{
        minHeight: "20vh",
      }}
      className="cs-flex-box-column cs-center-align"
    >
      <h1 style={{ fontSize: "3rem" }}>خطای {type}</h1>
      <p className="cs-list-large">چنین صفحه ای یافت نشد</p>

      <div className="cs-flex-box cs-center-content cs-center-align cs-p-md">
        <p style={{ fontSize: "2rem", marginLeft: "5px"}} className="cs-bold">
          ورود به
        </p>{" "}
        <Link href="/">
          <a>
            <p style={{ fontSize: "2rem" }} className="cs-link-normal-bold">
              کانال تخفیف
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default memo(ShowErrorPage);
