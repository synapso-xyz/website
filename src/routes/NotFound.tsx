
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function NotFound(){
  const err = useRouteError()
  const msg = isRouteErrorResponse(err) ? `${err.status} ${err.statusText}` : 'Something went wrong'
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Oops</h1>
        <p className="text-slate-300/90">{msg}</p>
        <Link to="/" className="inline-flex px-4 py-2 rounded-xl border border-white/15 hover:bg-white/10">Go home</Link>
      </div>
    </div>
  )
}
