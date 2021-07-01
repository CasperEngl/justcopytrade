import Link from 'next/link'
import { Logo } from 'components/Logo'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-jct-50">
      <div className="flex-1">
        <header className="py-4 bg-jct-100">
          <div className="container">
            <div className="flex items-center justify-between">
              <Link href="/">
                <a className="text-jct-600 hover:text-jct-700">
                  <Logo className="w-full max-w-xs" />
                </a>
              </Link>
              <nav className="flex gap-6">
                <Link href="/">
                  <a className="text-jct-600 hover:text-jct-800">Home</a>
                </Link>
                <Link href="/contact-us">
                  <a className="text-jct-600 hover:text-jct-800">Contact us</a>
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
      <footer className="py-16 text-white bg-jct-900">
        <div className="container">
          <div className="flex flex-col gap-4">
            <Logo className="w-full max-w-xs" />
            <nav className="flex flex-col gap-2">
              <Link href="/legal/terms-and-conditions">
                <a className="underline text-jct-600 hover:text-jct-500">
                  Terms &amp; conditions
                </a>
              </Link>
              <Link href="/legal/fees-and-conditions">
                <a className="underline text-jct-600 hover:text-jct-500">
                  Fees &amp; conditions
                </a>
              </Link>
              <Link href="/legal/privacy-policy">
                <a className="underline text-jct-600 hover:text-jct-500">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/legal/risk-warning">
                <a className="underline text-jct-600 hover:text-jct-500">
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
