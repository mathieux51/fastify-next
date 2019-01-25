import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

const script = {
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
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    }
  }
  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <script dangerouslySetInnerHTML={script} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
