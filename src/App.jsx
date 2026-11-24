import { Activity } from 'lucide-react'
import { EcmoDetailView } from './views/EcmoDetailView.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4">
          <Activity className="text-red-700" size={28} aria-hidden />
          <div className="text-left">
            <h1 className="text-xl font-bold tracking-tight text-slate-800">ECMO</h1>
            <p className="text-[11px] font-medium text-slate-500">
              Oxigenación por membrana extracorpórea · apuntes educativos
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-4 md:p-8">
        <EcmoDetailView onBack={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-[11px] text-slate-400">
        Solo fines educativos. No sustituye juicio clínico ni protocolos locales.
      </footer>
    </div>
  )
}
