import { MarketingLayout } from '#components/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alder Provisions — Neighborhood market',
  description:
    'Retail grocer for produce, pantry staples, and household goods. Two neighborhood shops.',
  icons: {
    icon: '/alder-favicon.svg',
    shortcut: '/alder-favicon.svg',
    apple: '/alder-favicon.svg',
  },
  openGraph: {
    title: 'Alder Provisions — Neighborhood market',
    description:
      'Retail grocer for produce, pantry staples, and household goods. Two neighborhood shops.',
  },
  twitter: {
    card: 'summary',
    title: 'Alder Provisions — Neighborhood market',
    description:
      'Retail grocer for produce, pantry staples, and household goods. Two neighborhood shops.',
  },
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
