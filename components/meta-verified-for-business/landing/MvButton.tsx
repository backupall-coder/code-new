'use client'

import React from 'react'

type MvButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline'
  className?: string
  ariaLabel?: string
}

export default function MvButton({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ariaLabel,
}: MvButtonProps) {
  const base =
    'inline-flex min-h-[3rem] w-full max-w-[min(100%,22.5rem)] items-center justify-center px-7 py-3 text-[15px] sm:min-h-[3.125rem] sm:text-base transition duration-200 disabled:cursor-not-allowed disabled:opacity-60'
  const variantClass = variant === 'primary' ? 'mv-btn-meta' : 'mv-btn-meta-outline'

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variantClass} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
