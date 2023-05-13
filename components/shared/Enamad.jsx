import { Fragment, memo } from "react";
import Image from "next/image";
import Link from "next/link";

function EnamadLogo({ from = null }) {
  return (
    <div>
      {process.env.NODE_ENV === "production" ? (
        <Fragment>
          {from === "about" ? (
            <Link href="https://trustseal.enamad.ir/?id=212301&amp;Code=bCq0s7PXtVOWUSX4D9PV">
              <a
                aria-label="نماد اعتماد الکترونیکی کانال تخفیف"
                referrerPolicy="origin"
                target="_blank"
              >
                <img
                  style={{
                    cursor: "pointer",
                  }}
                  alt="نماد اعتماد الکترونیکی کانال تخفیف"
                  src="/static/images/enamad-3-min.png"
                  width="80px"
                  height="80px"
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
                  alt="نماد اعتماد الکترونیکی کانال تخفیف"
                  src="/static/images/enamad-3-min.png"
                  width="80px"
                  height="80px"
                />
              </a>
            </Link>
          )}
        </Fragment>
      ) : (
        <div>
          <Image
            src="/static/images/enamad-3-min.png"
            alt="نماد اعتماد الکترونیکی کانال تخفیف"
            width={80}
            height={80}
          />
        </div>
      )}
    </div>
  );
}
{
  /*  */
}
export default memo(EnamadLogo);
