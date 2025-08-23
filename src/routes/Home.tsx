import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="container mx-auto px-4">
      {/* HERO: logo left, brand + headline right */}
      <div className="min-h-[52svh] md:min-h-[58svh] lg:min-h-[60svh] grid md:grid-cols-12 items-center gap-6 md:gap-8">
        {/* Logo tile */}
        <div className="md:col-span-4 flex md:justify-start justify-center">
          <div className="p-6 md:p-8 rounded-2xl w-72 h-72 md:w-96 md:h-96">
            <img
              src="/logo_transparent.svg"
              alt="Synapso logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Brand + headline + CTAs */}
        <div className="md:col-span-8">
          <div className="text-cyan-300/90 text-sm font-semibold tracking-wide uppercase">
            <h1 className="text-6xl font-montserrat md:text-8xl font-bold tracking-tight text-synapso-blue">Synapso</h1>
          </div>
          <h1 className="mt-2 text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Own your knowledge.
            <br className="hidden md:block" />
            Search it like a superpower.
          </h1>
          <p className="mt-3 md:mt-4 max-w-2xl text-slate-300">
            Synapso lets you ask questions and get answers straight from your notes—even if they’re messy.
            100% offline. Nothing leaves your device.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/waitlist"
              className="inline-flex items-center font-semibold px-4 py-2 rounded-xl bg-synapso-blue text-slate-900 shadow-soft hover:-translate-y-0.5 transition"
            >
              Join the Waitlist
            </Link>
            {/* <a
              href="#features"
              className="inline-flex items-center font-semibold px-4 py-2 rounded-xl border border-white/15 text-slate-100 hover:bg-white/10 transition"
            >
              Learn more
            </a> */}
          </div>
        </div>
      </div>

      {/* FEATURE CARDS (nudged up slightly toward hero) */}
      <div id="features" className="grid md:grid-cols-3 gap-4">
        <div className="p-4 glass">
          <h3 className="text-xl font-semibold">Local-first</h3>
          <p className="text-slate-300/90">
            Your files never leave your device. Privacy is the product, not a setting.
          </p>
        </div>
        <div className="p-4 glass">
          <h3 className="text-xl font-semibold">Lightning fast</h3>
          <p className="text-slate-300/90">
            Answers in seconds with on‑device models tuned for real laptops.
          </p>
        </div>
        <div className="p-4 glass">
          <h3 className="text-xl font-semibold">Device‑aware</h3>
          <p className="text-slate-300/90">
            Knows where each file lives, opens it locally when it’s on hand.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="mt-6 md:mt-10 glass p-6">
        <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
        <p className="text-slate-300/90 mt-2">
          Ingest your notes, search semantically, and get citations pointing at the exact snippets that answer your
          question. It’s like an archivist who’s read everything you wrote.
        </p>
      </div>
    </section>
  )
}
