const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
const withCSS = require("@zeit/next-css")
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
        // const pathMap = {}
        // Object.entries(defaultPathMap).forEach(([key, value]) => {
        //   pathMap[key] = value
        //   ;["de", "en", "fr", "nl"].forEach(language => {
        //     pathMap[`/${language}${key}`] = { ...value, query: { language } }
        //   })
        // })

        // return pathMap;
        return defaultPathMap
      }
    })
  )
)
