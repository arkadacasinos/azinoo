import { SiteHeader } from '../components/casino/SiteHeader'
import { HeroBanner } from '../components/casino/HeroBanner'
import { PayoutStats } from '../components/casino/PayoutStats'
import { NavTabs } from '../components/casino/NavTabs'
import { CategoryChips } from '../components/casino/CategoryChips'
import { SlotsGrid } from '../components/casino/SlotsGrid'
import { SeoArticle } from '../components/casino/SeoArticle'
import { SiteFooter } from '../components/casino/SiteFooter'
import { SupportTab } from '../components/casino/SupportTab'

export default function Page() {
  return (
    <main className="flex min-h-dvh flex-col bg-background font-sans">
      <div className="relative mx-auto w-full max-w-[1292px]">
        <div aria-hidden="true" className="k7z4-rail k7z4-rail--l" />
        <div aria-hidden="true" className="k7z4-rail k7z4-rail--r" />
        <SupportTab />
        <div className="relative z-10 flex flex-col px-3 sm:px-5 lg:px-16">
          <SiteHeader />
          <HeroBanner />
          <PayoutStats />
          <NavTabs />
          <CategoryChips />
          <SlotsGrid />
        </div>
        <SeoArticle />
        <SiteFooter />
      </div>
    </main>
  )
}
