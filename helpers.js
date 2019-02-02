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
  while (arr.length > 0) formatted.push(arr.splice(0, 2))
  return formatted
}
