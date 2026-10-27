import { useMemo } from 'react'

import { useAppSelector } from '@/app/store/hooks'
import { getLandingStrings } from '@/i18n/landing'

export function useLandingStrings() {
  const locale = useAppSelector((s) => s.locale.locale)
  return useMemo(() => getLandingStrings(locale), [locale])
}
