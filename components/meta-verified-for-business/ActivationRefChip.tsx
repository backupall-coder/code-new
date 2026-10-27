'use client'

import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'
import { getOrCreateActivationRef } from '@/utils/metaVerifiedActivation'

type ActivationRefChipProps = {
  className?: string
  /** Căn giữa trong modal — trang chính để mặc định (trái/center theo layout cha) */
  centered?: boolean
}

export default function ActivationRefChip({ className = '', centered = false }: ActivationRefChipProps) {
  const t = useAppStrings()
  const [ticketId, setTicketId] = React.useState('')

  React.useEffect(() => {
    setTicketId(getOrCreateActivationRef().ticketId)
  }, [])

  return (
    <p
      className={`mv-ref-chip ${centered ? 'mv-ref-chip-modal' : ''} ${className}`.trim()}
      aria-live="polite"
    >
      {t.main.caseId} #{ticketId || '…'}
    </p>
  )
}
