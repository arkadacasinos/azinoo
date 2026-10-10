import { Star } from 'lucide-react'
import { REF_URL } from '../../lib/ref'

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-4">
      <a href={REF_URL} className="flex flex-col leading-none" aria-label="Азино777 — перейти на официальный сайт">
        <span className="font-serif text-2xl font-bold tracking-[0.08em] text-foreground sm:text-3xl">
          AZINO<span className="text-gold"> 777</span>
        </span>
        <span className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.28em] text-gold">
          {[0, 1, 2, 3].map((i) => (
            <Star key={`l${i}`} aria-hidden="true" className="h-2 w-2 fill-current" />
          ))}
          <span>Hot Games</span>
          {[0, 1, 2, 3].map((i) => (
            <Star key={`r${i}`} aria-hidden="true" className="h-2 w-2 fill-current" />
          ))}
        </span>
      </a>
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href={REF_URL}
          className="rounded-md bg-cblue px-3 py-2 text-[11px] font-bold tracking-wider text-white uppercase shadow-[0_0_14px_rgba(47,128,237,0.55)] hover:brightness-110 sm:px-7 sm:py-2.5 sm:text-sm"
        >
          Войти
        </a>
        <a
          href={REF_URL}
          className="rounded-md bg-cgreen px-3 py-2 text-[11px] font-bold tracking-wider text-white uppercase shadow-[0_0_14px_rgba(31,163,42,0.55)] hover:brightness-110 sm:px-7 sm:py-2.5 sm:text-sm"
        >
          Регистрация
        </a>
      </div>
    </header>
  )
}
