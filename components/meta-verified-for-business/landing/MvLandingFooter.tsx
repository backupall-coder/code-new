'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

const SOCIAL = [
  { icon: '/images/icons/ic_facebook.svg', label: 'Facebook' },
  { icon: '/images/icons/ic_instagram.svg', label: 'Instagram' },
  { icon: '/images/icons/ic_x.svg', label: 'X' },
  { icon: '/images/icons/ic_in.svg', label: 'LinkedIn' },
] as const

const META_FOOTER_ADDRESS = 'Meta Platforms, Inc., 1 Meta Way, Menlo Park, CA 94025'

export default function MvLandingFooter() {
  const t = useLandingStrings()
  const year = new Date().getFullYear()

  return (
    <footer className="mv-landing-footer w-full pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="mv-section-container">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="mv-landing-footer-col-title">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <span className="mv-landing-footer-link">{link.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ul className="mt-10 flex items-center justify-center gap-3" aria-label="Social media">
          {SOCIAL.map(({ icon, label }) => (
            <li key={label}>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
                aria-label={label}
              >
                <img src={icon} alt="" width={18} height={18} className="h-[18px] w-[18px] brightness-0 invert" />
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-[12px] leading-relaxed text-white/60">
          {t.footer.copyright} {year}
          <br />
          {META_FOOTER_ADDRESS}
        </p>
      </div>
    </footer>
  )
}
