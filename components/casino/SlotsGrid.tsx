import { ChevronLeft, ChevronRight } from 'lucide-react'
import { REF_URL } from '../../lib/ref'

const tile = 'group relative overflow-hidden rounded-md border border-cpurple/30'
const tileImg = 'aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105'
const tileName = 'absolute inset-x-0 bottom-0 bg-black/75 py-1 text-center text-[11px] font-semibold text-gold'
const arrow = 'flex h-9 w-9 items-center justify-center rounded-md bg-[#241636] text-[#e9e2f5] hover:bg-[#2f1d45]'

export function SlotsGrid() {
  return (
    <section aria-labelledby="k7z4-slots-title" className="flex flex-col gap-3 pb-10">
      <div className="flex items-center justify-between gap-3 pt-2">
        <h2 id="k7z4-slots-title" className="text-2xl font-black text-white sm:text-3xl">
          Слоты
        </h2>
        <div className="flex items-center gap-2">
          <a href={REF_URL} aria-label="Предыдущие слоты" className={arrow}>
            <ChevronLeft size={16} />
          </a>
          <a href={REF_URL} aria-label="Следующие слоты" className={arrow}>
            <ChevronRight size={16} />
          </a>
          <a
            href={REF_URL}
            className="rounded-md border border-cpurple/40 bg-[#1b1226] px-4 py-2 text-xs font-semibold text-[#e9e2f5] hover:bg-[#241636]"
          >
            Показать все
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <a href={REF_URL} className={tile}>
          <img loading="lazy" src="/images/slots/fruit-cocktail.jpg" alt="Игровой автомат Fruit Cocktail" className={tileImg} />
          <span className={tileName}>Fruit Cocktail</span>
        </a>
        <a href={REF_URL} className={tile}>
          <img loading="lazy" src="/images/slots/book-of-ra.jpg" alt="Игровой автомат Book of Ra" className={tileImg} />
          <span className={tileName}>Book of Ra</span>
        </a>
        <a href={REF_URL} className={tile}>
          <img loading="lazy" src="/images/slots/crazy-monkey.jpg" alt="Игровой автомат Crazy Monkey" className={tileImg} />
          <span className={tileName}>Crazy Monkey</span>
        </a>
        <a href={REF_URL} className={tile}>
          <img loading="lazy" src="/images/slots/garage.jpg" alt="Игровой автомат Garage" className={tileImg} />
          <span className={tileName}>Garage</span>
        </a>
        <a href={REF_URL} className={tile}>
          <img loading="lazy" src="/images/slots/lucky-haunter.jpg" alt="Игровой автомат Lucky Haunter" className={tileImg} />
          <span className={tileName}>Lucky Haunter</span>
        </a>
        <a href={REF_URL} className={tile}>
          <img loading="lazy" src="/images/slots/resident.jpg" alt="Игровой автомат Resident" className={tileImg} />
          <span className={tileName}>Resident</span>
        </a>
        <a href={REF_URL} className={tile}>
          <img loading="lazy" src="/images/slots/keks.jpg" alt="Игровой автомат Keks" className={tileImg} />
          <span className={tileName}>Keks</span>
        </a>
        <a href={REF_URL} className={tile}>
          <img loading="lazy" src="/images/slots/ultra-hot.jpg" alt="Игровой автомат Ultra Hot" className={tileImg} />
          <span className={tileName}>Ultra Hot</span>
        </a>
      </div>
    </section>
  )
}
