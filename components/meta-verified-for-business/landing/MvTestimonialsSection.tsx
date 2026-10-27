'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvTestimonialsSection() {
  const t = useLandingStrings()
  const [index, setIndex] = React.useState(0)
  const items = t.testimonials.items
  const count = items.length

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + count) % count)
  }

  const current = items[index]

  return (
    <section
      id="testimonials"
      className="mv-section-soft mv-section w-full"
      aria-labelledby="mv-testimonials-title"
      aria-roledescription="carousel"
    >
      <div className="mv-section-container">
        <h2 id="mv-testimonials-title" className="mv-section-heading text-center">
          {t.testimonials.title}
        </h2>

        <div className="relative mx-auto mt-12 max-w-[45rem]">
          <div className="mv-testimonial-card">
            <blockquote className="text-center">
              <p className="mv-testimonial-quote">&ldquo;{current.quote}&rdquo;</p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block text-[15px] font-bold text-meta-text">{current.author}</span>
                  <span className="mt-1 block text-[14px] text-meta-text-body">{current.role}</span>
                </cite>
              </footer>
            </blockquote>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-meta-border-light bg-white text-meta-blue shadow-sm transition hover:border-meta-blue/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meta-blue"
              aria-label={t.testimonials.prevAria}
            >
              <img src="/images/icons/ic_left.svg" alt="" width={16} height={16} aria-hidden />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial pagination">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${i + 1} / ${count}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === index ? 'w-7 bg-meta-blue' : 'w-2 bg-meta-border'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-meta-border-light bg-white text-meta-blue shadow-sm transition hover:border-meta-blue/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meta-blue"
              aria-label={t.testimonials.nextAria}
            >
              <img src="/images/icons/ic_right.svg" alt="" width={16} height={16} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
