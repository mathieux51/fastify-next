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
