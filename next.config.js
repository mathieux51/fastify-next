const withFonts = require("next-fonts")

module.exports = withFonts({
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? `/{${process.env.npm_package_name}}`
      : ""
})
