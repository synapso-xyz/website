import { PropsWithChildren } from 'react';


export function Footer({ children }: PropsWithChildren) {
  return (
    <footer className="mt-auto w-full">
      <div className="w-full px-4 py-3 glass">
        <div className="mx-auto max-w-6xl flex items-center justify-between flex-wrap gap-2 text-slate-300/90">
          {children}
        </div>
      </div>
    </footer>
  )
}

