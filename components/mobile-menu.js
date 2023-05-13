import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const iOS = typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
import { useStylesBurgerMenu } from "../public/static/jss/styles";
import MuiWrapper from "./ui/muiWrapper";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classes = useStylesBurgerMenu();
  const { token, user } = useSelector((state) => state.userReducer);
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsMenuOpen(open);
  };

  const list = () => (
    <div role="presentation">
      <MuiWrapper>
        <div className="cs-px-md">
          <Link href="/">
            <a alt="کد تخفیف" className="cs-menu-item cs-mb-sm">
              <span
                className={
                  typeof window !== "undefined" && window.location.pathname === "/"
                    ? "cs-menu-selected"
                    : undefined
                }
              >
                <LocalOfferOutlinedIcon className="cs-icon" fontSize="small" /> کد تخفیف
              </span>
            </a>
          </Link>
          <br />
          <Link href="/categories">
            <a alt="دسته‌بندی" className="cs-menu-item">
              <span
                className={
                  typeof window !== "undefined" && window.location.pathname === "/categories"
                    ? "cs-menu-selected"
                    : undefined
                }
              >
                <CategoryOutlinedIcon className="cs-icon" fontSize="small" />
                دسته‌بندی
              </span>
            </a>
          </Link>
          <br />
          <Link href="/shops">
            <a alt="فروشگاه‌ها" className="cs-menu-item">
              <span
                className={
                  typeof window !== "undefined" && window.location.pathname === "/shops"
                    ? "cs-menu-selected"
                    : undefined
                }
              >
                <StorefrontOutlinedIcon className="cs-icon" fontSize="small" />
                فروشگاه‌ها
              </span>
            </a>
          </Link>
        </div>
        <hr className="cs-dark-divider" />
        <div className="cs-px-md">
          <Link href="https://link.offch.com/7e5a9c">
            <a alt="دعوت دوستان" className="cs-menu-item">
              <img
                src="/static/images/icons/material/card_giftcard_black_18dp.svg"
                width="18px"
                height="18px"
                alt="card_giftcard"
                className="cs-ml-sm"
              />
              <span
                className={
                  typeof window !== "undefined" && window.location.pathname === "/invite"
                    ? "cs-menu-selected"
                    : undefined
                }
              >
                دعوت از دوستان
              </span>
            </a>
          </Link>

          <br />

          {!user.shop && (
            <>
              <Link href="/submit-coupon">
                <a alt="ارسال کد کاربران" className="cs-menu-item">
                  <img
                    src="/static/images/icons/material/ios_share_black_24dp.svg"
                    width="18px"
                    height="18px"
                    alt="Share Coupon"
                    className="cs-ml-sm"
                  />
                  <span
                    className={
                      typeof window !== "undefined" && window.location.pathname === "/submit-coupon"
                        ? "cs-menu-selected"
                        : undefined
                    }
                  >
                    ارسال کد کاربران
                  </span>
                </a>
              </Link>
              <br />
            </>
          )}

          <Link href="/auth/login-register">
            <a alt="ورود/ ثبت‌نام" className="cs-menu-item">
              {token ? (
                <span
                  className={
                    typeof window !== "undefined" &&
                    window.location.pathname === "/auth/profile-page"
                      ? "cs-menu-selected"
                      : undefined
                  }
                >
                  {" "}
                  <AccountCircleOutlinedIcon className="cs-icon" fontSize="small" />
                  حساب کاربری
                </span>
              ) : (
                <span
                  className={
                    typeof window !== "undefined" &&
                    window.location.pathname === "/auth/login-register"
                      ? "cs-menu-selected"
                      : undefined
                  }
                >
                  {" "}
                  <AccountCircleOutlinedIcon className="cs-icon" fontSize="small" />
                  ورود/ثبت‌نام
                </span>
              )}
            </a>
          </Link>
        </div>
        <hr className="cs-dark-divider" />

        <div className="cs-px-md">
          <Link href="https://blog.offch.com/">
            <a alt="وبلاگ" className="cs-menu-item" target="_blank">
              <span>وبلاگ</span>
            </a>
          </Link>
          <br />
          <Link href="/contact-us">
            <a alt="تماس با ما" className="cs-menu-item">
              <span
                className={
                  typeof window !== "undefined" && window.location.pathname === "/contact-us"
                    ? "cs-menu-selected"
                    : undefined
                }
              >
                تماس با ما
              </span>
            </a>
          </Link>
          <br />

          <Link href="/shops/new-shop">
            <a alt="ثبت فروشگاه" className="cs-menu-item">
              <span
                className={
                  typeof window !== "undefined" && window.location.pathname === "/shops/new-shop"
                    ? "cs-menu-selected"
                    : undefined
                }
              >
                ثبت فروشگاه
              </span>
            </a>
          </Link>
        </div>
        <div className="cs-px-md">
          <h5 className="cs-text-center">کانال تخفیف در شبکه های اجتماعی</h5>
          <ul className="cs-list-inline">
            <li>
              <a
                href="https://t.me/off_channell"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <TelegramIcon width="16" height="16" alt="Telegram Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/off_channell/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <InstagramIcon width="16" height="16" alt="instagram Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/off_channell"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <TwitterIcon width="16" height="16" alt="Twitter Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/offch/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <LinkedInIcon width="16" height="16" alt="LinkedIn Icon" />
              </a>
            </li>
          </ul>
        </div>
        {typeof window !== "undefined" && (
          <>
            {!navigator.userAgent.match(/Nexus/i) &&
              !navigator.userAgent.match(/iPhone/i) &&
              !navigator.userAgent.match(/iPad/i) && (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Link href="/app">
                    <a>
                      <img
                        width="200px"
                        src="/static/images/cafebazar.svg"
                        alt="دریافت اپلیکیشن از کافه بازار"
                      />
                    </a>
                  </Link>
                </div>
              )}
          </>
        )}
      </MuiWrapper>
    </div>
  );

  return (
    <MuiWrapper>
      <div
        style={{
          margin: "20px 10px 0 0",
          cursor: "pointer",
        }}
        onClick={toggleDrawer(true)}
      >
        <div className="cs-mobile-menu-image" />
      </div>
      <SwipeableDrawer
        classes={{
          paper: classes.paper, // class name, e.g. `disabled-x`
        }}
        anchor="left"
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div className="cs-mt-md cs-text-center">
          <Link href="/">
            <a alt="کانال تخفیف" className="cs-center-image">
              <img
                src="/static/images/logo/offchlogo.png"
                alt="کانال تخفیف"
                width="150px"
                height="33px"
              />
            </a>
          </Link>
        </div>
        <hr className="cs-dark-divider" />
        <div>{list()}</div>
      </SwipeableDrawer>
    </MuiWrapper>
  );
};

export default MobileMenu;
