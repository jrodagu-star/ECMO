export function SectionHeader({ title, icon: Icon }) {
  return (
    <div className="mb-8 flex items-center gap-4 text-left">
      <div className="rounded-2xl bg-slate-100 p-3 text-slate-800">
        <Icon size={24} aria-hidden />
      </div>
      <h3 className="text-xl font-black tracking-tighter text-slate-800 uppercase">
        {title}
      </h3>
    </div>
  )
}
