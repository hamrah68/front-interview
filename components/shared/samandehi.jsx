import { Fragment, memo } from "react";
import Link from "next/link";

function SamandehiNamad({ from = null }) {
  return (
    <div>
      {process.env.NODE_ENV === "production" ? (
        <Fragment>
          {from === "about" ? (
            <Link href="https://logo.samandehi.ir/Verify.aspx?id=237526&p=uiwkxlaojyoedshwuiwkgvka">
              <a
                aria-label="لوگوی ساماندهی کانال تخفیف"
                referrerPolicy="origin"
                target="_blank"
              >
                <img
                  style={{
                    cursor: "pointer",
                  }}
                  alt="لوگوی ساماندهی کانال تخفیف"
                  src="/static/images/samandehi-min.png"
                  width="60px"
                  height="75.67px"
                />
              </a>
            </Link>
          ) : (
            <Link scroll={false} href="/about-us/?scroll=namad">
              <a>
                <img
                  style={{
                    cursor: "pointer",
                  }}
                  alt="لوگوی ساماندهی کانال تخفیف"
                  src="/static/images/samandehi-min.png"
                  width="60px"
                  height="75.67px"
                />
              </a>
            </Link>
          )}
        </Fragment>
      ) : (
        <div>
          <img
            style={{
              cursor: "pointer",
            }}
            alt="لوگوی ساماندهی کانال تخفیف"
            src="/static/images/samandehi-min.png"
            width="60px"
            height="75.67px"
          />
        </div>
      )}
    </div>
  );
}
{
  /*  */
}
export default memo(SamandehiNamad);
