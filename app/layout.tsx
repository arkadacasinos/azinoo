import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-rubik',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`bg-background ${rubik.variable}`}>
      <head>
        <title>Азино777 официальный сайт — вход и регистрация в казино Азино 777</title>
        <meta
          name="description"
          content="Азино777 официальный сайт: вход и регистрация, бонус 777% + 777 FS и 100 FS без депозита. Азино мобайл и ПК: слоты, джекпоты и быстрые выплаты казино Азино 777. Azino777 официальный — играй онлайн."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://azino777-official.example/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Азино777 официальный сайт — вход и регистрация в казино Азино 777" />
        <meta
          property="og:description"
          content="Азино777 официальный сайт: вход и регистрация, бонус 777% + 777 FS и 100 FS без депозита. Азино мобайл и ПК: слоты, джекпоты и быстрые выплаты казино Азино 777."
        />
        <meta property="og:url" content="https://azino777-official.example/" />
        <meta property="og:image" content="https://azino777-official.example/images/hero-gift.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Азино777 официальный сайт — вход и регистрация в казино Азино 777" />
        <meta
          name="twitter:description"
          content="Азино777 официальный сайт: бонус 777% + 777 FS и 100 FS без депозита, слоты, джекпоты и быстрые выплаты. Азино мобайл и ПК — играй онлайн в казино Азино 777."
        />
        <meta name="twitter:image" content="https://azino777-official.example/images/hero-gift.jpg" />
        <meta name="theme-color" content="#060309" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
