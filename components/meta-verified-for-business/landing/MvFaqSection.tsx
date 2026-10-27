'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvFaqSection() {
  const t = useLandingStrings()
  const [openId, setOpenId] = React.useState<string | null>(t.faq.items[0]?.question ?? null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="mv-section w-full bg-white" aria-labelledby="mv-faq-title">
      <div className="mv-section-container max-w-[45rem]">
        <h2 id="mv-faq-title" className="mv-section-heading text-center">
          {t.faq.title}
        </h2>

        <div className="mt-10 border-t border-meta-border-light">
          {t.faq.items.map((item) => {
            const isOpen = openId === item.question
            const panelId = `mv-faq-${item.question.slice(0, 12)}`

            return (
              <div key={item.question} className="mv-faq-item">
                <h3>
                  <button
                    type="button"
                    className="mv-faq-trigger flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.question)}
                  >
                    <span>{item.question}</span>
                    <span className="mv-faq-icon" aria-hidden>
                      +
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" hidden={!isOpen} className="mv-faq-panel">
                  {item.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
