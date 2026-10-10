import { REF_URL } from '../../lib/ref'

export function SupportTab() {
  return (
    <div className="fixed left-0 top-1/3 z-40 hidden flex-col items-start gap-1 lg:flex">
      <a
        href={REF_URL}
        className="k7z4-support rounded-r-md bg-gradient-to-b from-[#35d435] to-[#128a12] px-1.5 py-4 text-sm font-bold text-white shadow-[0_0_12px_rgba(31,163,42,0.8)]"
      >
        Онлайн поддержка
      </a>
      <span className="rounded-br-md border border-cpurple/40 bg-[#1b1226] px-2 py-1 text-[10px] font-bold text-[#e9e2f5]">
        RU
      </span>
    </div>
  )
}
