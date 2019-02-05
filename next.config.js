const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
const withCSS = require("@zeit/next-css")
const withImages = require("next-images")
const withFonts = require("next-fonts")

module.exports = withBundleAnalyzer(
  withCSS(
    withImages(
      withFonts({
        // withBundleAnalyzer
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
        }
      })
    )
  )
)
