import Container from "@mui/material/Container";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const FooterResponsive = () => {
  return (
    <footer className="cs-footer-responsive-background">
      <Container maxWidth="lg">
        <div className="cs-footer-row-responsive">
          <div className="cs-column cs-center-content cs-center-align">
            <p className="cs-text-justify cs-px-sm">
              سایت آف چنل (کانال تخفیف)، مرجع اشتراک گذاری رایگان کوپن و کد تخفیف فروشگاه های آنلاین
              و کسب و‌ کارهای اینترنتی است. در حال حاضر با همراهی استارت آپ ها انواع کد تخفیف،
              مسابقه، کمپین و جشنواره های صدها برند معتبر، اپلیکیشن و مراکز خدمات آنلاین را به اطلاع
              مخاطبان می‌رسانیم.
              <Link prefetch={false} href="/shops/digikala">
                <a className="cs-text-green-footer-link">دیجی کالا</a>
              </Link>
              ،
              <Link prefetch={false} href="/shops/snapp">
                <a className="cs-text-green-footer-link"> اسنپ</a>
              </Link>
              ،
              <Link prefetch={false} href="/shops/snappfood">
                <a className="cs-text-green-footer-link"> اسنپ فود</a>
              </Link>
              ، استادکار، تپسی، سینماتیکت، بانی مد،
              <Link prefetch={false} href="/shops/alibaba">
                <a className="cs-text-green-footer-link"> علی بابا</a>
              </Link>
              ،
              <Link prefetch={false} href="/shops/filimo">
                <a className="cs-text-green-footer-link"> فیلیمو</a>
              </Link>
              ،
              <Link prefetch={false} href="/shops/namava">
                <a className="cs-text-green-footer-link"> نماوا</a>
              </Link>
              ،
              <Link prefetch={false} href="/shops/snappmarket">
                <a className="cs-text-green-footer-link"> اسنپ مارکت</a>
              </Link>
              ،
              <Link prefetch={false} href="/shops/bimebazar">
                <a className="cs-text-green-footer-link"> بیمه بازار</a>
              </Link>
              ،
              <Link prefetch={false} href="/shops/basalam">
                <a className="cs-text-green-footer-link"> باسلام</a>
              </Link>{" "}
              و بیمیتو از جمله این وبسایت ‌هاست. کاربران در کانال تخفیف می توانند در کوتاه ترین زمان
              و با چند کلیک ساده به جدیدترین تخفیف ها در گروه تاکسی اینترنتی، سفارش آنلاین غذا،
              اپراتورهای مخابراتی، موسیقی و سینما، گردشگری، مد و پوشاک، کتاب و کتابخوانی و ...
              دسترسی پیدا کنند.
              <br />
              بستر تبلیغ بر پایه بن هدیه و آفر، علاوه بر کمک به بهتر شناخته شدن فروشگاه ها در صحنه
              رقابت و افزایش بازدید و آمار فروش آن‌ها، باعث کاهش هزینه و ایجاد تجربه‌ای لذت بخش از
              خریدی ارزان تر در ذهن مشتریان خواهد شد. چنین کمپین های تبلیغی و تخفیفی ضمن جذب مشتریان
              جدید باعث ترغیب کاربر به خرید مجدد شده و توسعه و رونق کسب و کار در فضای آنلاین را در
              پی خواهد داشت.
            </p>
          </div>

          <div className="cs-footer-responsive-links-container">
            {/* <h2>همراه با کانال تخفیف</h2> */}
            <ul className="cs-ul-style-none">
              <li>
                <Link prefetch={false} href="/about-us">
                  <a rel="nofollow">درباره ما</a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/contact-us">
                  <a rel="nofollow">تماس با ما</a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/terms">
                  <a rel="nofollow">قوانین و شرایط استفاده</a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy">
                  <a rel="nofollow">حریم خصوصی</a>
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="cs-column cs-center-align"
            style={{
              marginBottom: "5px",
            }}
          >
            <div className="cs-row cs-center-content">
              <DisplayNamadImage />
            </div>

            <Link prefetch={false} href="/app">
              <a rel="nofollow">
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="cs-m-2">
                    <img
                      style={{
                        backgroundColor: "#FFF",
                        border: "1px solid #000",
                        padding: "1px",
                        borderRadius: "5px",
                      }}
                      width="149px"
                      height="46px"
                      src="/static/images/chromex.svg"
                      alt="افزونه گوگل کروم"
                    />
                  </div>

                  <div className="cs-m-2">
                    <img
                      style={{
                        backgroundColor: "#FFF",
                        border: "1px solid #000",
                        padding: "1px",
                        borderRadius: "5px",
                      }}
                      width="149px"
                      height="46px"
                      src="/static/images/firefoxex.svg"
                      alt="افزونه موزیلا فایرفاکس"
                    />
                  </div>

                  <div className="cs-m-2">
                    <img
                      width="150px"
                      height="44px"
                      src="/static/images/cafebazar.svg"
                      alt="دریافت اپلیکیشن از کافه بازار"
                    />
                  </div>
                </div>
              </a>
            </Link>

            <div className="cs-footer-responsive-social-container">
              <h2 className="cs-text-center cs-font-size-16">
                کانال تخفیف را در شبکه های اجتماعی دنبال کنید
              </h2>
              <ul className="cs-list-inline cs-list-large">
                <li>
                  <a
                    href="https://t.me/off_channell"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="offch telegram chanal"
                  >
                    <TelegramIcon fontSize="large" width="35" height="35" alt="Telegram Icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/off_channell/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="offch instagram Page"
                  >
                    <InstagramIcon
                      fontSize="large"
                      width="35"
                      height="35"
                      alt="Instagram Icon"
                      aria-label="instagram icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/off_channell"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="offch twitter Page"
                  >
                    <TwitterIcon
                      fontSize="large"
                      width="35"
                      height="35"
                      alt="Twitter Icon"
                      aria-label="twitter icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/offch/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="offch linkedin Page"
                  >
                    <LinkedInIcon
                      fontSize="large"
                      width="35"
                      height="35"
                      alt="LinkedIn Icon"
                      aria-label="linkedin icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cs-text-center cs-footer-responsive-copyright-container">
          <span>
            کلیه حقوق برای
            <Link prefetch={false} href="/">
              <a> کانال تخفیف </a>
            </Link>
            محفوظ است &copy; 1401
          </span>
        </div>
      </Container>
    </footer>
  );
};

const DisplayNamadImage = () => {
  return (
    <Link prefetch={false} scroll={false} href="/about-us/?scroll=namad">
      <a rel="nofollow">
        <img
          className="cs-responsive-image cs-m-5"
          src="/static/images/offchnamad.png"
          alt="درباره کانال تخفیف"
          width="191"
          height="100"
        />
      </a>
    </Link>
  );
};

export default FooterResponsive;
