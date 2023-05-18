import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <div className="cs-mobile cs-tablet">
        <div
          style={{
            top: "0",
          }}
          className="cs-flex-space-between cs-fix cs-header-shadow"
        >
          <div
            style={{
              minWidth: "100px",
              minHeight: "20px",
            }}
            className="cs-mt-xs"
          >
            <Link href="/">
              <a alt="go to home page">
                <span>
                  <img
                    style={{
                      margin: "8px 10px 0 0",
                    }}
                    src="/static/images/logo/offchlogo.png"
                    alt="کانال تخفیف"
                    width="150px"
                    height="33px"
                  />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="cs-desktop"
        style={{
          background: "#FFFFFF",
          height: "60px",
          borderBottom: "1px solid rgb(232, 232, 232)",
        }}
      >
        <div className="cs-container-header">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link href="/">
                <a alt="Home Page">
                  <span>
                    <img
                      style={{
                        margin: "10px 0 0 5px",
                      }}
                      src="/static/images/logo/offchlogo.png"
                      alt="کانال تخفیف"
                      width="167px"
                      height="37px"
                    />
                  </span>
                </a>
              </Link>
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
