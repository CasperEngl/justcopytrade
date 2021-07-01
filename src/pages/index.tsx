import { Logo } from 'components/Logo'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-64">
      <h1 className="sr-only">JustCopyTrade.com</h1>
      <Logo className="w-full max-w-3xl text-jct-600" />
      <p className="mt-8 text-3xl font-semibold text-jct-300">
        info@justcopytrade.com
      </p>
    </section>
  )
}
