const withFonts = require("next-fonts")

module.exports = withFonts({
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? `/${process.env.npm_package_name}/`
      : "",
  "process.env.BACKEND_URL":
    process.env.NODE_ENV === "production"
      ? `/${process.env.npm_package_name}`
      : ""
})
