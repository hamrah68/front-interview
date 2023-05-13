import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import theme from "./theme";

const MuiWrapper = (props) => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </CacheProvider>
  );
};

export default MuiWrapper;
