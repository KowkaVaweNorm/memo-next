import './styles/global.scss'
import type { Metadata } from 'next';
import localFont from 'next/font/local'
const ISOCPEUR = localFont({ src: '../../src/shared/assets/fonts/ISOCPEUR.ttf' })

export const metadata: Metadata = {
  title: 'memo next',
  description: 'app for memo any data'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={ISOCPEUR.className}>
      <body>{children}</body>
    </html>
  );
}
