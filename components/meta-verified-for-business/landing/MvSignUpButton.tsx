'use client'

import React from 'react'

import MvButton from '@/components/meta-verified-for-business/landing/MvButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvSignUpButtonProps = {
  onSignUp: () => void
  label?: string
  ariaLabel?: string
  className?: string
  fullWidth?: boolean
}

/** Nút mở modal kích hoạt — nhãn mặc định Activate / Kích hoạt */
export default function MvSignUpButton({
  onSignUp,
  label,
  ariaLabel,
  className = '',
  fullWidth = true,
}: MvSignUpButtonProps) {
  const t = useLandingStrings()
  const text = label ?? t.hero.cta
  const a11y = ariaLabel ?? text

  return (
    <MvButton
      onClick={onSignUp}
      ariaLabel={a11y}
      className={`${fullWidth ? '' : '!w-auto !max-w-none px-5 py-2.5 !min-h-[40px] text-[14px] sm:px-8'} ${className}`.trim()}
    >
      {text}
    </MvButton>
  )
}
