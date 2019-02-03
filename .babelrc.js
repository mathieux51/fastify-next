module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          style: "./style",
          helpers: "./helpers",
          components: "./components",
          assets: "./assets"
        }
      }
    ],
    ["styled-components", { ssr: true }]
  ]
}
