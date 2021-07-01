import Link from 'next/link'
import { Logo } from 'components/Logo'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-gray-100">
      <div className="flex-1">
        <header className="py-4 text-white bg-gray-800">
          <div className="container">
            <Link href="/">
              <a>
                <Logo className="w-full max-w-xs" />
              </a>
            </Link>
          </div>
        </header>
        <main>{children}</main>
      </div>
      <footer className="py-16 text-white bg-gray-800">
        <div className="container">
          <div className="flex flex-col gap-4">
            <Logo className="w-full max-w-xs" />
            <nav className="flex flex-col gap-2">
              <Link href="/legal/terms-and-conditions">
                <a className="text-blue-300 underline hover:text-blue-400">
                  Terms &amp; conditions
                </a>
              </Link>
              <Link href="/legal/fees-and-conditions">
                <a className="text-blue-300 underline hover:text-blue-400">
                  Fees &amp; conditions
                </a>
              </Link>
              <Link href="/legal/privacy-policy">
                <a className="text-blue-300 underline hover:text-blue-400">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/legal/risk-warning">
                <a className="text-blue-300 underline hover:text-blue-400">
                  Risk Warning
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
