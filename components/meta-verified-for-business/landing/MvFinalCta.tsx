'use client'

import React from 'react'

import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvFinalCtaProps = {
  onSignUp: () => void
}

export default function MvFinalCta({ onSignUp }: MvFinalCtaProps) {
  const t = useLandingStrings()

  return (
    <section className="mv-cta-band mv-section w-full" aria-labelledby="mv-cta-title">
      <div className="mv-section-container">
        <div className="mx-auto flex max-w-[40rem] flex-col items-center text-center">
          <h2 id="mv-cta-title" className="mv-section-heading mv-section-heading-lg">
            {t.finalCta.title}
          </h2>
          <p className="mv-section-lead">{t.finalCta.subtitle}</p>
          <div className="mt-8 w-full max-w-[22.5rem]">
            <MvSignUpButton onSignUp={onSignUp} label={t.finalCta.cta} ariaLabel={t.finalCta.cta} />
          </div>
        </div>
      </div>
    </section>
  )
}
