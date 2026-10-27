'use client'

import React from 'react'

import { META_VERIFIED_STEP_IMAGES } from '@/data/metaVerifiedLanding'
import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvStepsSection() {
  const t = useLandingStrings()

  return (
    <section
      id="steps"
      className="mv-steps-section mv-section mv-section-lg w-full"
      aria-labelledby="mv-steps-title"
    >
      <div className="mv-section-container">
        <div className="mv-steps-header">
          <h2 id="mv-steps-title" className="mv-steps-title">
            {t.steps.title}
          </h2>
          <p className="mv-steps-lead">{t.steps.subtitle}</p>
        </div>

        <ol className="mv-steps-grid">
          {t.steps.items.map((step, index) => (
            <li key={step.title} className="mv-step-item">
              <article className="mv-step-card">
                <div className="mv-step-card-media">
                  <img
                    src={META_VERIFIED_STEP_IMAGES[index]}
                    alt=""
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="mv-step-card-body">
                  <h3 className="mv-step-card-title">{step.title}</h3>
                  <p className="mv-step-card-desc">{step.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
