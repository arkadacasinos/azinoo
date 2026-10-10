import { REF_URL } from '../../lib/ref'

export function HeroBanner() {
  return (
    <section aria-label="Стартовый бонус Азино777" className="flex flex-col">
      <div className="relative overflow-hidden rounded-lg border border-cpurple/40">
        <img
          src="/images/hero-gift.jpg"
          alt="Фиолетовый подарок с золотыми монетами и молниями — 100 FS без депозита в Азино777"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60 md:bg-gradient-to-r md:from-black/10 md:via-black/10 md:to-black/85" />
        <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-3 p-6 text-center sm:aspect-[16/9] md:aspect-[2.35/1] md:items-end md:gap-4 md:p-12 md:text-right">
          <p className="text-lg font-extrabold tracking-wide text-white sm:text-xl md:text-2xl">ТВОЙ СТАРТ С УДАЧЕЙ!</p>
          <p className="text-2xl font-black text-gold drop-shadow-[0_0_10px_rgba(245,197,24,0.6)] sm:text-3xl md:text-4xl">
            777% + 777FS
          </p>
          <p className="text-base font-bold text-white sm:text-lg md:text-xl">100FS без депозита</p>
          <a
            href={REF_URL}
            className="mt-2 rounded-md bg-cgreen px-8 py-3 text-sm font-bold tracking-wider text-white uppercase shadow-[0_0_18px_rgba(31,163,42,0.6)] hover:brightness-110"
          >
            Правила
          </a>
        </div>
      </div>
      <div className="flex justify-center gap-1.5 py-3" aria-hidden="true">
        <span className="h-3 w-3 rounded-[3px] bg-cpurple/35" />
        <span className="h-3 w-3 rounded-[3px] bg-cpurple/35" />
        <span className="h-3 w-3 rounded-[3px] bg-cpurple/35" />
        <span className="h-3 w-3 rounded-[3px] bg-cpurple/35" />
        <span className="h-3 w-3 rounded-[3px] bg-cpurple shadow-[0_0_8px_rgba(123,47,242,0.9)]" />
        <span className="h-3 w-3 rounded-[3px] bg-cpurple/35" />
        <span className="h-3 w-3 rounded-[3px] bg-cpurple/35" />
        <span className="h-3 w-3 rounded-[3px] bg-cpurple/35" />
        <span className="h-3 w-3 rounded-[3px] bg-cpurple/35" />
        <span className="h-3 w-3 rounded-[3px] bg-cpurple/35" />
      </div>
    </section>
  )
}
