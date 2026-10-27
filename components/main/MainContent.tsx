'use client'

import dynamic from 'next/dynamic'
import React from 'react'

import MvHeroSection from '@/components/meta-verified-for-business/landing/MvHeroSection'

const MvBenefitsSection = dynamic(
  () => import('@/components/meta-verified-for-business/landing/MvBenefitsSection')
)
const MvStepsSection = dynamic(
  () => import('@/components/meta-verified-for-business/landing/MvStepsSection')
)
const MvTestimonialsSection = dynamic(
  () => import('@/components/meta-verified-for-business/landing/MvTestimonialsSection')
)
const MvFinalCta = dynamic(
  () => import('@/components/meta-verified-for-business/landing/MvFinalCta')
)
const MvFaqSection = dynamic(
  () => import('@/components/meta-verified-for-business/landing/MvFaqSection')
)

type MainContentProps = {
  onSignUp: () => void
}

const MainContent = ({ onSignUp }: MainContentProps) => {
  return (
    <main id="main-content" className="flex min-h-0 w-full flex-1 flex-col">
      <MvHeroSection onSignUp={onSignUp} />
      <MvBenefitsSection />
      <MvStepsSection />
      <MvTestimonialsSection />
      <MvFinalCta onSignUp={onSignUp} />
      <MvFaqSection />
    </main>
  )
}

export default MainContent
