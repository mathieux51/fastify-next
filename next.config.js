const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
const withImages = require("next-images")
const withFonts = require("next-fonts")

module.exports = withBundleAnalyzer(
  withImages(
    withFonts({
      analyzeServer: ["server", "all"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["web", "all"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../bundles/server.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "../bundles/client.html"
        }
      },
      exportPathMap(defaultPathMap) {
        // 🚧 Fix me when intl is ready for export

        // defaultPathMap = {
        //   "/404.html": { page: "/_error" },
        //   "/index": { page: "/index" },
        //   "/projects": { page: "/projects" },
        //   "/": { page: "/" }
        // }

        // Object.entries(defaultPathMap).forEach(([key, value]) => {
        //   console.log("key", key)
        //   console.log("value", value)
        //   ;["de", "en", "fr", "nl"].reduce((acc, lang => {
        //       acc[`/db/lang/${language}${key}`] = {
        //         ...value,
        //         query: { language }
        //       }
        //     return acc
        //   }), {})
        // })
        // return pathMap
        return defaultPathMap
      }
    })
  )
)
