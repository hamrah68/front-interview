/* eslint-disable @next/next/no-document-import-in-page */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import * as React from "react";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../components/ui/createEmotionCache";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head>
          {/* PWA primary color */}
          <meta charSet="utf-8" />
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=utf-8"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="google-site-verification"
            content="_tSFJFY3bFL5YxdZ3aYS87HiT6Qk0_fV1cV71cWb234"
          />
          <meta name="language" content="persian" />

          <meta name="theme-color" content="#00cc67" />

          <link rel="icon" href="/favicon.png" />
          <link
            href="/opensearch.xml"
            rel="search"
            title="offch"
            type="application/opensearchdescription+xml"
          />

          <link
            rel="apple-touch-icon"
            href="/static/images/logo/pwa/apple/older-iPhone.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/logo/pwa/apple/iPhone-6-Plus.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/images/logo/pwa/apple/iPad-Retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/static/images/logo/pwa/apple/iPad-Pro.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/images/logo/pwa/apple/iPhone-6-Plus-144.png"
          />

          <meta name="application-name" content="کانال تخفیف" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="کانال تخفیف"
          />

          <meta name="format-detection" content="telephone=no" />
          <meta
            name="msapplication-config"
            content="/static/images/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#B33C72" />
          <meta name="msapplication-tap-highlight" content="no" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* <script
            defer
            src="https://www.googletagmanager.com/gtag/js?id=UA-134074117-1"
          /> */}
          {/* <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag() {
                                dataLayer.push(arguments);
                            }                      
                            gtag("js", new Date());
                            gtag("config", "UA-134074117-1");
                            
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-MWH7CJ9');
                            
                    `,
            }}
          /> */}

          {/* <script
            defer
            src="https://apis.google.com/js/api:client.js"
          /> */}
          {this.props.emotionStyleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
