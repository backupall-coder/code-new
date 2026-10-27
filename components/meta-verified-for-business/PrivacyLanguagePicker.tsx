'use client'

import Image from 'next/image'
import React from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { setLocale } from '@/app/store/slices/localeSlice'
import { LOCALE_BCP47 } from '@/i18n'
import { APP_LOCALES, type AppLocale } from '@/i18n/schema'
import { LOCALE_OPTION_LABELS } from '@/i18n/localeOptionLabels'
import { useAppStrings } from '@/hooks/useAppStrings'
import { readSessionDisplayLocale, writeSessionDisplayLocale } from '@/utils/metaVerifiedDisplayLocale'

function applyDocumentLang(locale: AppLocale) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = LOCALE_BCP47[locale]
    document.documentElement.dataset.locale = locale
  }
}

export default function PrivacyLanguagePicker() {
  const t = useAppStrings()
  const dispatch = useAppDispatch()
  const currentLocale = useAppSelector((s) => s.locale.locale)

  const [pickerValue, setPickerValue] = React.useState<AppLocale>(currentLocale)
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const listRef = React.useRef<HTMLUListElement>(null)

  React.useEffect(() => {
    const sessionLocale = readSessionDisplayLocale()
    if (sessionLocale) {
      setPickerValue(sessionLocale)
      return
    }
    setPickerValue(currentLocale)
  }, [currentLocale])

  React.useEffect(() => {
    if (!open) return

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false)
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  React.useEffect(() => {
    if (!open || !listRef.current) return
    const active = listRef.current.querySelector<HTMLElement>('[aria-selected="true"]')
    active?.scrollIntoView({ block: 'nearest' })
  }, [open, pickerValue])

  const selectLocale = (locale: AppLocale) => {
    writeSessionDisplayLocale(locale)
    setPickerValue(locale)
    dispatch(setLocale(locale))
    applyDocumentLang(locale)
    setOpen(false)
  }

  return (
    <div className="mv-header-lang relative inline-flex shrink-0" ref={rootRef}>
      <button
        type="button"
        id="meta-verified-for-business-display-lang"
        className="mv-header-lang-trigger"
        aria-label={t.languagePicker.label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="mv-header-lang-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <Image
          src="/images/icons/ic_globe.svg"
          alt=""
          width={18}
          height={18}
          unoptimized
          className="mv-header-lang-icon"
          aria-hidden
        />
        <span className="mv-header-lang-label">{LOCALE_OPTION_LABELS[pickerValue]}</span>
      </button>

      {open && (
        <ul
          id="mv-header-lang-menu"
          ref={listRef}
          className="mv-header-lang-menu"
          role="listbox"
          aria-labelledby="meta-verified-for-business-display-lang"
          tabIndex={-1}
        >
          {APP_LOCALES.map((code) => {
            const selected = code === pickerValue
            return (
              <li key={code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`mv-header-lang-option${selected ? ' is-selected' : ''}`}
                  onClick={() => selectLocale(code)}
                >
                  {LOCALE_OPTION_LABELS[code]}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
