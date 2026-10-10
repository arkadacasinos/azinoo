import { Home, Dice5, Gift, Trophy } from 'lucide-react'
import { REF_URL } from '../../lib/ref'

const idleTab =
  'flex items-center justify-center gap-2 rounded-md bg-[#1b1226] px-4 py-3 text-sm font-semibold text-[#cfc6dd] hover:bg-[#241636] md:rounded-none md:border-l md:border-cpurple/30'

export function NavTabs() {
  return (
    <nav aria-label="Разделы казино Азино777" className="grid grid-cols-2 gap-1.5 md:grid-cols-4 md:gap-0 md:overflow-hidden md:rounded-md">
      <a
        href={REF_URL}
        className="flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-cpurple to-[#4a1291] px-4 py-3 text-sm font-bold text-white shadow-[0_0_16px_rgba(123,47,242,0.7)] md:rounded-none"
      >
        <Home size={16} /> Главная
      </a>
      <a href={REF_URL} className={idleTab}>
        <Dice5 size={16} /> Игровой Зал
      </a>
      <a href={REF_URL} className={idleTab}>
        <Gift size={16} /> Бонусы
      </a>
      <a href={REF_URL} className={idleTab}>
        <Trophy size={16} /> Промоакции
      </a>
    </nav>
  )
}
