import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="container mx-auto px-4">
      {/* HERO */}
      <div className="min-h-[48svh] md:min-h-[55svh] lg:min-h-[60svh] flex flex-col justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">
          Own your knowledge. <br className="hidden md:block" /> Search it like a superpower.
        </h1>
        <p className="mt-3 md:mt-4 max-w-2xl text-slate-300">
          Synapso lets you ask questions and get answers straight from your notes—even if they’re messy.
          100% offline. Nothing leaves your device.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/waitlist"
            className="inline-flex items-center font-semibold px-4 py-2 rounded-xl bg-cyan-400 text-slate-900 shadow-soft hover:-translate-y-0.5 transition"
          >
            Join the Waitlist
          </Link>
          <a
            href="#features"
            className="inline-flex items-center font-semibold px-4 py-2 rounded-xl border border-white/15 text-slate-100 hover:bg-white/10 transition"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* FEATURE CARDS - nudged upward */}
      <div id="features" className="grid md:grid-cols-3 gap-4 -mt-4 md:-mt-6">
        <div className="p-4 glass">
          <h3 className="text-xl font-semibold">Local-first</h3>
          <p className="text-slate-300/90">
            Your files never leave your device. Privacy is the product, not a setting.
          </p>
        </div>
        <div className="p-4 glass">
          <h3 className="text-xl font-semibold">Lightning fast</h3>
          <p className="text-slate-300/90">
            Answers in seconds with on-device models tuned for real laptops.
          </p>
        </div>
        <div className="p-4 glass">
          <h3 className="text-xl font-semibold">Device-aware</h3>
          <p className="text-slate-300/90">
            Knows where each file lives, opens it locally when it’s on hand.
          </p>
        </div>
      </div>

      {/* EXTRA SECTION */}
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

