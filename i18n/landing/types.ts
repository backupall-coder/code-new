export type LandingStep = {
  title: string
  description: string
}

export type LandingBenefit = {
  title: string
  description: string
}

export type LandingTestimonial = {
  quote: string
  author: string
  role: string
}

export type LandingFaqItem = {
  question: string
  answer: string
}

export type LandingFooterColumn = {
  title: string
  links: { label: string }[]
}

export type LandingNavLink = {
  label: string
  /** Anchor tới section trên trang (vd. #benefits) */
  href: string
}

export type LandingStrings = {
  header: {
    logoLabel: string
    nav: LandingNavLink[]
    cta: string
    ctaAria: string
  }
  hero: {
    title: string
    lead: string
    eligibility: string
    creatorPrefix: string
    creatorLink: string
    cta: string
    badgeAlt: string
    videoAria: string
  }
  benefits: {
    title: string
    subtitle: string
    learnMore: string
    items: LandingBenefit[]
  }
  steps: {
    title: string
    subtitle: string
    items: LandingStep[]
  }
  testimonials: {
    title: string
    items: LandingTestimonial[]
    prevAria: string
    nextAria: string
  }
  finalCta: {
    title: string
    subtitle: string
    cta: string
  }
  faq: {
    title: string
    items: LandingFaqItem[]
  }
  footer: {
    copyright: string
    columns: LandingFooterColumn[]
  }
}
