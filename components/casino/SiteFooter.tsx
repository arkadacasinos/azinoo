import { REF_URL } from '../../lib/ref'

const hashtag = 'text-xs font-semibold text-[#b79df5] hover:text-gold'
const footerLink = 'text-sm font-semibold text-[#cfc6dd] hover:text-gold'

export function SiteFooter() {
  return (
    <footer className="border-t border-cpurple/30 bg-[#0a0512] py-8">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-4 lg:px-16">
        <nav aria-label="Хэштеги разделов" className="flex flex-wrap justify-center gap-x-3 gap-y-2">
          <a href="#sec-oficialnyj" className={hashtag}>
            #азино777официальный
          </a>
          <a href="#sec-sajt" className={hashtag}>
            #азино777официальныйсайт
          </a>
          <a href="#sec-mobajl" className={hashtag}>
            #азиномобайл
          </a>
          <a href="#sec-bonusy" className={hashtag}>
            #азино777
          </a>
          <a href="#sec-sloty" className={hashtag}>
            #azino777официальный
          </a>
          <a href="#sec-vyplaty" className={hashtag}>
            #азино777казино
          </a>
          <a href="#sec-podderzhka" className={hashtag}>
            #азиноказино
          </a>
          <a href="#sec-promo" className={hashtag}>
            #azino777
          </a>
          <a href="#sec-pk" className={hashtag}>
            #azino777
          </a>
          <a href="#sec-kak-nachat" className={hashtag}>
            #азино
          </a>
          <a href="#sec-itog" className={hashtag}>
            #азино777
          </a>
        </nav>
        <nav aria-label="Ссылки казино" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href={REF_URL} className={footerLink}>
            Правила
          </a>
          <a href={REF_URL} className={footerLink}>
            Бонусы
          </a>
          <a href={REF_URL} className={footerLink}>
            Игровой зал
          </a>
          <a href={REF_URL} className={footerLink}>
            Поддержка
          </a>
          <a href={REF_URL} className={footerLink}>
            Регистрация
          </a>
        </nav>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e5484d] text-xs font-black text-[#e5484d]">
            18+
          </span>
          <p className="max-w-2xl text-xs leading-relaxed text-[#8d80a6]">
            Азино777 — информационно-развлекательная страница. Азартные игры могут вызывать зависимость: играйте
            ответственно, ставьте лимиты и не рискуйте деньгами, которые не готовы потерять. Материалы страницы
            предназначены только для совершеннолетних пользователей.
          </p>
          <p className="text-xs text-[#8d80a6]">© 2026 Азино777. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
