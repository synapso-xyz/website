
import { FormEvent, useState } from 'react'

export default function Waitlist(){
  const [status, setStatus] = useState<{type: 'idle' | 'ok' | 'err', msg: string}>({type:'idle', msg:''})

  async function onSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = Object.fromEntries(fd.entries())
    setStatus({type:'idle', msg:''})
    try{
      // TODO: Replace with your backend endpoint:
      // const res = await fetch('/api/waitlist', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      // if(!res.ok) throw new Error('Network error')
      await new Promise(r => setTimeout(r, 400)) // demo
      form.reset()
      setStatus({type:'ok', msg:'You’re in! Check your email for a confirmation.'})
    }catch(err){
      setStatus({type:'err', msg:'Something went wrong. Please try again.'})
      console.error(err)
    }
  }

  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Be first in line</h1>
      <p className="mt-2 text-slate-300/90">Sign up to get early access and launch updates.</p>
      <form className="mt-6 grid gap-3 glass p-4" onSubmit={onSubmit} aria-label="Join the waitlist">
        <input className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 outline-none focus:ring-2 focus:ring-brand/50" type="email" name="email" placeholder="you@domain.com" required aria-label="Email"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 outline-none focus:ring-2 focus:ring-brand/50" type="text" name="name" placeholder="Your name (optional)" aria-label="Name"/>
          <select className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 outline-none focus:ring-2 focus:ring-brand/50" name="role" aria-label="Role">
            <option value="">I am a… (optional)</option>
            <option>Engineer</option>
            <option>Researcher</option>
            <option>Founder</option>
            <option>Student</option>
            <option>Other</option>
          </select>
        </div>
        <label className="text-sm text-slate-200/90 flex gap-2 items-start">
          <input type="checkbox" required aria-label="Consent to updates" />
          <span>I agree to receive Synapso updates. Unsubscribe anytime.</span>
        </label>
        <button className="inline-flex items-center justify-center font-semibold px-4 py-2 rounded-xl bg-brand text-brand-fg shadow-soft hover:-translate-y-0.5 transition" type="submit">Join Waitlist</button>
        <div role="status" aria-live="polite" className={
          status.type === 'ok' ? 'text-emerald-400' : status.type === 'err' ? 'text-red-400' : 'text-slate-300/80'
        }>
          {status.msg}
        </div>
        <p className="text-xs text-slate-300/70">Hook this up by replacing the <code>fetch</code> call in <strong>Waitlist.tsx</strong>.</p>
      </form>
    </section>
  )
}
