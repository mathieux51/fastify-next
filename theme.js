import { hsl } from "polished"

const colors = {
  white: "#fff",
  black: "black"
}

export default {
  fg: colors.black, // foreground primary
  fgs: colors.white, // foreground secondary secondary
  bg: colors.white, // background primary
  g13: hsl(0, 0, 0.13),
  g38: hsl(0, 0, 0.388),
  g60: hsl(0, 0, 0.6),
  g78: hsl(0, 0, 0.78),
  g86: hsl(0, 0, 0.867)
}
