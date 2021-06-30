import Link from 'next/link'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <Link href="/">
          <a>JustCopyTrade.com</a>
        </Link>
      </header>
      {children}
      <footer>
        <nav className="flex flex-col gap-4">
          <Link href="/legal/terms-and-conditions">
            <a>Terms &amp; conditions</a>
          </Link>
          <Link href="/legal/fees-and-conditions">
            <a>Fees and conditions</a>
          </Link>
          <Link href="/legal/fees-and-conditions">
            <a>Fees and conditions</a>
          </Link>
          <Link href="/legal/fees-and-conditions">
            <a>Fees and conditions</a>
          </Link>
          <Link href="/legal/fees-and-conditions">
            <a>Fees and conditions</a>
          </Link>
        </nav>
      </footer>
    </>
  )
}
