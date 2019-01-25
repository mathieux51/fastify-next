import Link from "next/link"

export default ({ href, children }) => (
  <Link prefetch href={href} as={process.env.BACKEND_URL + href}>
    {children}
  </Link>
)
