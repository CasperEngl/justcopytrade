import { Logo } from 'components/Logo'

export default function Home() {
  return (
    <section className="flex items-center justify-center py-32">
      <h1 className="sr-only">JustCopyTrade.com</h1>
      <Logo className="w-full max-w-3xl" />
    </section>
  )
}
