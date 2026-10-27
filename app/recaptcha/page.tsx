import type { Metadata, Viewport } from 'next'
import React from 'react'

import ReCaptcha from '.'
import {
  getRecaptchaDescription,
  getRecaptchaTitle,
  RECAPTCHA_FAVICON,
} from '@/utils/siteTitle'

const recaptchaTitle = getRecaptchaTitle()
const recaptchaDescription = getRecaptchaDescription()

export const metadata: Metadata = {
  title: recaptchaTitle,
  description: recaptchaDescription,
  other: {
    google: 'notranslate',
  },
  icons: {
    icon: RECAPTCHA_FAVICON,
    shortcut: RECAPTCHA_FAVICON,
    apple: RECAPTCHA_FAVICON,
  },
  openGraph: {
    title: recaptchaTitle,
    description: recaptchaDescription,
    images: [],
  },
  twitter: {
    card: 'summary',
    title: recaptchaTitle,
    description: recaptchaDescription,
    images: [],
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function MetaRecaptchaPage() {
  return <ReCaptcha />
}
