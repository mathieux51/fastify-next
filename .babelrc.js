const env = require("./env")

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env], ["styled-components", { ssr: true }]]
}
