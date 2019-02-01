module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          style: "./style",
          components: "./components"
        }
      }
    ],
    ["styled-components", { ssr: true }]
  ]
}
