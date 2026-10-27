'use client'

import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'

type FacebookNotifyToggleProps = {
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function FacebookNotifyToggle({ checked, onChange }: FacebookNotifyToggleProps) {
  const t = useAppStrings()

  return (
    <div className="mv-fb-notify">
      <div className="mv-fb-notify-row">
        <div className="mv-fb-notify-icon" aria-hidden="true">
          <img src="/images/icons/ic_facebook.svg" alt="" />
        </div>

        <div className="mv-fb-notify-body">
          <div className="mv-fb-notify-heading">
            <p className="mv-fb-notify-title">{t.info.fbNotifyTitle}</p>
            <span className="mv-fb-notify-badge">{t.info.fbNotifyBadge}</span>
          </div>
          <p className="mv-fb-notify-desc">{t.info.fbNotifyDesc}</p>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={t.info.fbNotifyAria}
          onClick={() => onChange(!checked)}
          className={`mv-fb-notify-toggle${checked ? ' is-on' : ''}`}
        >
          <span className="mv-fb-notify-toggle-knob" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
