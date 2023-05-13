// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// module.exports = withBundleAnalyzer({});

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: "vary",
            value: "Accept-Encoding,User-Agent",
          },
        ],
      },
      // {
      //   source: "/:path*",
      //   headers: [
      //     {
      //       key: "vary",
      //       value: "Accept-Encoding,User-Agent",
      //     },
      //   ],
      // },
    ];
  },
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
};
