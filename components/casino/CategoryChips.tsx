import { Search, Gamepad2, Flame, Sparkles, Coins, Gift, ChevronRight } from 'lucide-react'
import { REF_URL } from '../../lib/ref'

const chip =
  'flex shrink-0 items-center gap-2 rounded-md border border-cpurple/40 bg-[#1b1226] px-4 py-2 text-sm font-semibold text-[#e9e2f5] hover:bg-[#241636]'

export function CategoryChips() {
  return (
    <nav aria-label="Категории игр Азино777" className="k7z4-scroll flex gap-2 overflow-x-auto py-3">
      <a href={REF_URL} className={chip}>
        <Search size={16} /> Поиск
      </a>
      <a href={REF_URL} className={chip}>
        <Gamepad2 size={16} /> Слоты
      </a>
      <a href={REF_URL} className={chip}>
        <Flame size={16} /> Популярные
      </a>
      <a href={REF_URL} className={chip}>
        <Sparkles size={16} /> Новые
      </a>
      <a href={REF_URL} className={chip}>
        <Coins size={16} /> Jackpot Cards
      </a>
      <a href={REF_URL} className={chip}>
        <Gift size={16} /> Бонусы
      </a>
      <span aria-hidden="true" className="flex shrink-0 items-center px-1 text-[#e9e2f5]">
        <ChevronRight size={18} />
      </span>
    </nav>
  )
}
