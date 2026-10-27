'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/app/store/hooks'
import { isRecaptchaRoute } from '@/utils/isRecaptchaRoute'
import {
  getRecaptchaDescription,
  getRecaptchaTitle,
  getSiteDescription,
  getSiteTitle,
  RECAPTCHA_FAVICON,
} from '@/utils/siteTitle'

const META_FAVICON =
  'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico?v=20260916'
const ALDER_FAVICON = '/alder-favicon.svg'
const ALDER_TITLE = 'Alder Provisions — Neighborhood market'
const ALDER_DESCRIPTION =
  'Retail grocer for produce, pantry staples, and household goods. Two neighborhood shops.'

function setDocumentFavicon(href: string) {
  document
    .querySelectorAll(
      'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]',
    )
    .forEach((el) => el.parentElement?.removeChild(el))

  const link = document.createElement('link')
  link.rel = 'icon'
  if (href.endsWith('.svg')) link.type = 'image/svg+xml'
  link.href = href
  document.head.appendChild(link)
}

function setMetaDescriptions(description: string) {
  document
    .querySelectorAll(
      'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',
    )
    .forEach((el) => el.setAttribute('content', description))
}

/** Đồng bộ title, description và favicon theo route. */
export default function TitleSync() {
  const locale = useAppSelector((s) => s.locale.locale)
  const pathname = usePathname()

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    if (pathname === '/') {
      document.title = ALDER_TITLE
      setMetaDescriptions(ALDER_DESCRIPTION)
      setDocumentFavicon(ALDER_FAVICON)
      return
    }

    if (isRecaptchaRoute(pathname)) {
      document.title = getRecaptchaTitle()
      setMetaDescriptions(getRecaptchaDescription())
      setDocumentFavicon(RECAPTCHA_FAVICON)
      return
    }

    document.title = getSiteTitle(locale)
    setMetaDescriptions(getSiteDescription(locale))
    setDocumentFavicon(META_FAVICON)
  }, [locale, pathname])

  return null
}
