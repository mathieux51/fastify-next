import Link from "next/link"

export default ({ href, innerAs, className, children }) => (
  <Link href={href} as={innerAs}>
    <a className={className}>{children}</a>
  </Link>
)
