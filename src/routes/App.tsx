import { Outlet, NavLink, Link } from 'react-router-dom'
import { Header } from '../ui/Header'
import { Footer } from '../ui/Footer'

export default function App(){
  return (
    // Global text color lives here so headings never go black
    <div className="min-h-[100svh] flex flex-col text-slate-100">
      <Header>
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="" width={28} height={28} />
          <Link to="/" className="font-bold tracking-wide">Synapso</Link>
          <span className="ml-2 text-xs text-slate-300/80">Private • Local • Fast</span>
        </div>
        <nav className="hidden md:flex gap-2">
          <NavLink to="/" className={({isActive}) => 'px-3 py-2 rounded-lg hover:bg-white/10 ' + (isActive ? 'bg-white/10' : '')}>Home</NavLink>
          <NavLink to="/waitlist" className={({isActive}) => 'px-3 py-2 rounded-lg hover:bg-white/10 ' + (isActive ? 'bg-white/10' : '')}>Waitlist</NavLink>
        </nav>
      </Header>

      <main className="flex-1 container mx-auto px-4 py-4 md:py-6">
        <Outlet />
      </main>

      <Footer>
        <div className="text-sm text-slate-300/80">&copy; {new Date().getFullYear()} Synapso. All rights reserved.</div>
        <div className="text-sm text-slate-300/80 space-x-3">
          <Link to="/waitlist" className="hover:underline">Waitlist</Link>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </Footer>
    </div>
  )
}

