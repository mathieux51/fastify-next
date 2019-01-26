import Link from "next/link"
import styled from "styled-components"

export default ({ href, className, children }) => (
  <Link prefetch href={href} as={process.env.BACKEND_URL + href}>
    <a className={className}>{children}</a>
  </Link>
)
