export function PayoutStats() {
  return (
    <section aria-label="Статистика выплат Азино777" className="grid grid-cols-1 gap-6 py-6 text-center md:grid-cols-2 md:gap-4">
      <div className="flex flex-col gap-2">
        <p className="k7z4-goldglow text-base font-black tracking-wide uppercase sm:text-lg md:text-xl">
          Выплачено за последние 7 дней
        </p>
        <p className="flex items-center justify-center gap-3">
          <span aria-hidden="true" className="k7z4-goldglow text-2xl md:text-3xl">
            ♠
          </span>
          <span className="k7z4-num text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">33 239 275.17 ₽</span>
          <span aria-hidden="true" className="k7z4-goldglow text-2xl md:text-3xl">
            ♠
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="k7z4-goldglow text-base font-black tracking-wide uppercase sm:text-lg md:text-xl">— Jackpot —</p>
        <p className="k7z4-num text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">229 194 341.45 ₽</p>
      </div>
    </section>
  )
}
