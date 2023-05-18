import * as React from "react";
import "../public/static/css/styles.css";
import "../public/static/css/wheelstyle.css";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider } from "react-redux";
import { useStore } from "../store";
import "../public/static/css/icons/css/uicons-regular-rounded.css";

// Client-side cache, shared for the whole session of the user in the browser.
export default function MyApp(props) {
  const { Component, pageProps } = props;

  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
