import { css } from "styled-components"
import sizes from "./style/sizes"

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const groupBy2 = arr => {
  const formatted = []
  const copyArr = arr.slice()
  while (copyArr.length > 0) formatted.push(copyArr.splice(0, 2))
  return formatted
}

export const getLocales = () => {
  let languages = []

  if (typeof navigator !== "undefined") {
    if (navigator.languages) {
      for (let i = 0; i < navigator.languages.length; i++) {
        languages.push(navigator.languages[i])
      }
    }
    if (navigator.userLanguage) {
      languages.push(navigator.userLanguage)
    }
    if (navigator.language) {
      languages.push(navigator.language)
    }
  }
  return languages.length > 0 ? languages : ["en"]
}

export const getHtmlLang = () => getLocales()[0].substr(0, 2)
