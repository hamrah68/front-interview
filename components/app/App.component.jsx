import React, { useState, useEffect } from "react";

const AppPage = () => {
  return (
    <div>
      <div
        style={{
          paddingTop: "85px",
        }}
        className="cs-app-page-top-header"
      >
        <div className="cs-app-page-top-image-bg">
          <div className="cs-container">
            <div className="cs-app-flex-row">
              <div className="cs-flex-item-box">
                <h1 className="cs-app-title">اپلیکیشن آف چنل</h1>
                <p className="cs-bold">
                  مرجع اشتراک گذاری رایگان کوپن و کد تخفیف
                </p>

                <div className="cs-app-flex-row">
                  <div className="cs-flex-item-box">
                    <div
                      style={{
                        fontSize: "14px",
                      }}
                      className="cs-bold"
                    >
                      دریافت لینک دانلود از طریق دوربین گوشی
                    </div>

                    <img
                      className="cs-responsive-image"
                      width="300"
                      height="300"
                      src="/static/images/app/offchqr.png"
                      alt=" دریافت اپلیکیشن کانال تخفیف"
                    />
                  </div>

                  <div
                    style={{
                      margin: "10px",
                    }}
                    className="cs-column cs-center-content cs-center-align"
                  >
                    <div className="cs-line-break"></div>
                    <div className="cs-bold cs-display-or-none">
                      یا
                    </div>
                    <div className="cs-line-break "></div>
                  </div>

                  <div
                    style={{
                      paddingRight: "auto",
                    }}
                    className="cs-column cs-center-content cs-center-align"
                  >
                    <div className="cs-bold">دانلود اپلیکیشن</div>
                    <div
                      style={{
                        maxWidth: "150px",
                      }}
                    >
                      <a
                        href="https://link.offch.com/70b23d"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <img
                          className="cs-responsive-image"
                          width="300"
                          height="88"
                          src="/static/images/cafebazar.svg"
                          alt="دریافت اپلیکیشن از کافه بازار"
                        />
                      </a>
                    </div>
                    <div
                      style={{
                        maxWidth: "150px",
                      }}
                    >
                      <a
                        href="https://link.offch.com/f89e3f"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <img
                          className="cs-responsive-image"
                          src="/static/images/stright.png"
                          alt="دانلود اپلیکیشن کانال تخفیف به صورت مستقیم"
                          width="432"
                          height="129"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cs-flex-item-box">
                <div
                  style={{
                    maxWidth: "250px",
                  }}
                >
                  <img
                    className="cs-responsive-image"
                    width="400"
                    height="868"
                    src="/static/images/app/offch-mockup-small.png"
                    alt="اپلیکیشن کانال تخفیف"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
