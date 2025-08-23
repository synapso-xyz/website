
import { FormEvent, useState } from 'react'
const API = "https://v95ahqppzb.execute-api.us-east-2.amazonaws.com/Production";

export default function Waitlist() {
  const [status, setStatus] = useState<{ type: 'idle' | 'ok' | 'err', msg: string }>({ type: 'idle', msg: '' })

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = Object.fromEntries(fd.entries())

    const rawEmail = String(fd.get("email") || "").trim().toLowerCase();
    const name = String(fd.get("name") || "").trim() || undefined;
    const role = String(fd.get("role") || "").trim() || undefined;
    setStatus({ type: 'idle', msg: '' })

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
      setStatus({ type: "err", msg: "Enter a valid email." });
      return;
    }
    try {

      const res = await fetch(`${API}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: rawEmail, name, role, source: "website" }),
      });

      if (res.status === 201) {
        form.reset();
        setStatus({ type: "ok", msg: "You’re in! Thank you for your interest in Synapso." });
      } else if (res.status === 409) {
        setStatus({ type: "err", msg: "This email is already on the waitlist." });
      } else {
        const body = await res.text().catch(() => "");
        throw new Error(`Unexpected ${res.status}: ${body}`);
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "err", msg: "Something went wrong. Please try again." });
    }
  }

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header block — same width as form */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        {/* Title + text (left, stacked) */}
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-5xl font-extrabold font-montserrat tracking-tight text-synapso-blue">
            Be first in line
          </h1>
          <p className="mt-2 text-slate-300/90">
            Sign up to get early access and launch updates.
          </p>
        </div>

        {/* Logo (right aligned) */}
        <div className="justify-self-end self-center">
          <img
            src="/logo_transparent.svg"
            alt="Synapso logo"
            className="h-24 w-24 md:h-28 md:w-28 object-contain"
          />
        </div>
      </div>

      <form className="mt-6 grid gap-3 glass p-4" onSubmit={onSubmit} aria-label="Join the waitlist">
        <input className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 outline-none focus:ring-2 focus:ring-brand/50" type="email" name="email" placeholder="you@domain.com" required aria-label="Email" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 outline-none focus:ring-2 focus:ring-brand/50" type="text" name="name" placeholder="Your name (optional)" aria-label="Name" />
          <select className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 outline-none focus:ring-2 focus:ring-brand/50" name="role" aria-label="Role">
            <option value="">I am a… (optional)</option>
            <option>Engineer</option>
            <option>Researcher</option>
            <option>Founder</option>
            <option>Student</option>
            <option>Other</option>
          </select>
        </div>
        {/* <label className="text-sm text-slate-200/90 flex gap-2 items-center">
          <input type="checkbox" required aria-label="Consent to updates" />
          <span>I agree to receive Synapso updates. Unsubscribe anytime.</span>
        </label> */}
        <button className="inline-flex items-center justify-center mt-8 font-semibold px-4 py-2 rounded-xl bg-synapso-blue text-brand-fg shadow-soft hover:-translate-y-0.5 transition" type="submit">Join Waitlist</button>
        <div role="status" aria-live="polite" className={
          status.type === 'ok' ? 'text-emerald-400' : status.type === 'err' ? 'text-red-400' : 'text-slate-300/80'
        }>
          {status.msg}
        </div>
      </form>
    </section>
  )
}
