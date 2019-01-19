import Head from "next/head"

async function loadFonts() {
  // Optimization for Repeat Views
  if (sessionStorage.fontsLoadedFoutWithClass) {
    document.documentElement.className += " fonts-loaded"
    return
  }
  if ("fonts" in document) {
    await Promise.all([
      document.fonts.load("italic 100 1em proxima-nova"),
      document.fonts.load("italic 300 1em futura-pt"),
      document.fonts.load("italic 400 1em futura-pt"),
      document.fonts.load("italic 700 1em futura-pt"),
      document.fonts.load("italic 700 1em proxima-nova"),
      document.fonts.load("normal 100 1em proxima-nova"),
      document.fonts.load("normal 300 1em futura-pt"),
      document.fonts.load("normal 300 1em proxima-nova"),
      document.fonts.load("normal 400 1em futura-pt"),
      document.fonts.load("normal 400 1em proxima-nova"),
      document.fonts.load("normal 700 1em futura-pt"),
      document.fonts.load("normal 700 1em proxima-nova")
    ])
    document.documentElement.className += " fonts-loaded"
    // Optimization for Repeat Views
    sessionStorage.fontsLoadedFoutWithClass = true
  }
}

export default class extends React.PureComponent {
  async componentDidMount() {
    await loadFonts()
  }
  render() {
    return (
      <Head>
        <title>LÉO LEFÈVRE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/images/favicon.ico"
        />
      </Head>
    )
  }
}
