console.log(`
  🦄
  ${process.env.npm_package_name}
`)

module.exports = {
  "process.env.BACKEND_URL":
    process.env.NODE_ENV === "production"
      ? `/${process.env.npm_package_name}`
      : ""
}
