import { Metadata } from 'next'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Alder Provisions — Neighborhood market',
    description:
      'Retail grocer for produce, pantry staples, and household goods. Two neighborhood shops.',
  } as Metadata,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'aisles',
        label: 'Aisles',
      },
      {
        id: 'stores',
        label: 'Stores',
      },
      {
        id: 'visit',
        label: 'Hours',
      },
      {
        label: 'Desk',
        href: 'mailto:desk@alderprovisions.com',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © {new Date().getFullYear()} Alder Provisions. All rights reserved.
      </>
    ),
    links: [
      {
        href: 'mailto:desk@alderprovisions.com',
        label: 'Contact',
      },
      {
        href: '#stores',
        label: 'Stores',
      },
      {
        href: '#',
        label: 'Privacy',
      },
    ],
  },
  signup: {
    title: 'Shop Alder Provisions',
    features: [],
  },
}

export default siteConfig
