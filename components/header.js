import { memo } from "react";
import Link from "next/link";

import MobileMenu from "../components/mobile-menu.js";

const Header = ({ deviceType }) => {
  return (
    <>
      <div className="cs-mobile cs-tablet">
        <div
          style={{
            minHeight: "47px",
          }}
          className="cs-flex-space-between cs-fix cs-header-shadow"
        >
          <div
            className="cs-mr-sm"
            style={{
              minWidth: "38px",
              minHeight: "48px",
            }}
          >
            <MobileMenu />
          </div>
          <div
            style={{
              minWidth: "100px",
              minHeight: "20px",
            }}
            className="cs-mt-xs"
          >
            <Link prefetch={false} href="/">
              <a alt="go to home page" className="cs-center-image">
                <img
                  src="https://static.offch.com/storage/offch.png"
                  alt="کانال تخفیف"
                  width="125"
                  height="25"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
