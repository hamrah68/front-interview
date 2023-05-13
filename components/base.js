import Router from "next/router";
import dynamic from "next/dynamic";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// const FooterResponsive = dynamic(() => import("./footer/FooterResponsive"));
import FooterResponsive from "./footer/FooterResponsive";
const Header = dynamic(() => import("./HeaderNew"));

const Layout = (props) => {
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  return (
    <div id="root">
      <Header />

      {props.children}

      <FooterResponsive />
    </div>
  );
};

export default Layout;
