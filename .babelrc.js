const env = require("./env-config")

module.exports = {
  presets: ["next/babel"],
  plugins: ["transform-define", ["styled-components", { ssr: true }], env]
}
