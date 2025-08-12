
import { PropsWithChildren, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '../utils/cn'

export function Header({ children }: PropsWithChildren){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 inset-x-0 z-30">
      <div className="w-full px-4 py-3 glass">
        <div className="flex items-center justify-between gap-3">
          {children}
          <button onClick={() => setOpen(o=>!o)} className="md:hidden px-3 py-2 rounded-xl border border-white/15 hover:bg-white/10">Menu</button>
        </div>
        <nav className={cn('md:hidden mt-2 flex flex-col gap-2', open ? '' : 'hidden')}>
          <NavLink to="/" className="px-3 py-2 rounded-lg hover:bg-white/10">Home</NavLink>
          <NavLink to="/waitlist" className="px-3 py-2 rounded-lg hover:bg-white/10">Waitlist</NavLink>
        </nav>
      </div>
    </header>
  )
}
