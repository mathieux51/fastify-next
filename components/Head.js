import Head from "next/head"

export default () => (
  <Head>
    <title>LÉO LEFÈVRE</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="/static/images/favicon.ico"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  if (sessionStorage.fontsLoadedFoutWithClass) {
    document.documentElement.className += ' fonts-loaded'
    return
  }
  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('italic 100 1em proxima-nova'),
      document.fonts.load('italic 300 1em futura-pt'),
      document.fonts.load('italic 400 1em futura-pt'),
      document.fonts.load('italic 700 1em futura-pt'),
      document.fonts.load('italic 700 1em proxima-nova'),
      document.fonts.load('normal 100 1em proxima-nova'),
      document.fonts.load('normal 300 1em futura-pt'),
      document.fonts.load('normal 300 1em proxima-nova'),
      document.fonts.load('normal 400 1em futura-pt'),
      document.fonts.load('normal 400 1em proxima-nova'),
      document.fonts.load('normal 700 1em futura-pt'),
      document.fonts.load('normal 700 1em proxima-nova')
    ]).then(function (){
      document.documentElement.className += ' fonts-loaded'
      sessionStorage.fontsLoadedFoutWithClass = true  
    })
  }})()
    `
      }}
    />
  </Head>
)
