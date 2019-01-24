const withFonts = require("next-fonts")
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")

module.exports = withBundleAnalyzer(
  withFonts({
    // withFonts
    assetPrefix:
      process.env.NODE_ENV === "production"
        ? `/${process.env.npm_package_name}/`
        : "",
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
