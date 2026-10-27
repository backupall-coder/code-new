'use client'

import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Link } from '@saas-ui/react'
import * as React from 'react'

import { FallInPlace } from '#components/motion/fall-in-place'

import './alder.css'

const Home: NextPage = () => {
  return (
    <Box className="ap-root">
      <HeroSection />
      <AislesSection />
      <StoresSection />
      <VisitSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box as="section" className="ap-hero" id="home">
      <Container maxW="container.xl">
        <Stack spacing={0} maxW="760px">
          <FallInPlace>
            <p className="ap-kicker">Neighborhood market · Est. 1998</p>
          </FallInPlace>
          <FallInPlace delay={0.15}>
            <p className="ap-brand">Alder Provisions</p>
          </FallInPlace>
          <FallInPlace delay={0.3}>
            <Heading as="h1" className="ap-headline">
              Everyday goods for the table and the house.
            </Heading>
          </FallInPlace>
          <FallInPlace delay={0.45}>
            <Text className="ap-lead">
              Alder Provisions is a retail grocer: produce, pantry staples, and household
              basics, stocked for the week ahead. Shop in store or place a counter order.
            </Text>
          </FallInPlace>
          <FallInPlace delay={0.6}>
            <Flex className="ap-cta-row" gap={3} flexWrap="wrap">
              <Link href="#aisles" className="ap-btn ap-btn--primary">
                Browse the aisles
              </Link>
              <Link href="#visit" className="ap-btn ap-btn--ghost">
                Store hours
              </Link>
            </Flex>
          </FallInPlace>
        </Stack>
      </Container>
    </Box>
  )
}

const AislesSection: React.FC = () => {
  return (
    <Box as="section" id="aisles" className="ap-section">
      <Container maxW="container.lg">
        <FallInPlace>
          <p className="ap-kicker-section">The shop</p>
          <Heading as="h2" className="ap-title">
            What we keep on the shelf
          </Heading>
          <Text className="ap-copy">
            Three floors of ordinary things people actually run out of — restocked through
            the week, labeled with the farm or maker when we have it.
          </Text>
        </FallInPlace>
        <div className="ap-grid">
          <article className="ap-card">
            <h3>Produce</h3>
            <p>Seasonal fruit and vegetables, herbs, and a small case of dairy from nearby farms.</p>
          </article>
          <article className="ap-card">
            <h3>Pantry</h3>
            <p>Grains, oil, tinned goods, coffee, and dry staples sold by the bag or the jar.</p>
          </article>
          <article className="ap-card">
            <h3>Household</h3>
            <p>Soap, paper, cleaning basics, and a short shelf of kitchen tools that last.</p>
          </article>
        </div>
      </Container>
    </Box>
  )
}

const StoresSection: React.FC = () => {
  return (
    <Box as="section" id="stores" className="ap-section ap-section--alt">
      <Container maxW="container.lg">
        <FallInPlace>
          <p className="ap-kicker-section">Locations</p>
          <Heading as="h2" className="ap-title">
            Two shops, one stock list
          </Heading>
          <Text className="ap-copy">
            Both stores carry the same core range. The riverside shop has a larger produce
            floor; the hill shop stays open later on weeknights.
          </Text>
        </FallInPlace>
        <div className="ap-grid">
          <article className="ap-card">
            <h3>Riverside</h3>
            <p>18 Market Lane. Full produce floor and a counter for special orders.</p>
          </article>
          <article className="ap-card">
            <h3>Hill</h3>
            <p>4 Cedar Street. Smaller floor, open until 8 on weekdays.</p>
          </article>
          <article className="ap-card">
            <h3>Counter orders</h3>
            <p>Call either shop before noon and we will hold a bag for pickup the same day.</p>
          </article>
        </div>
      </Container>
    </Box>
  )
}

const VisitSection: React.FC = () => {
  return (
    <Box as="section" id="visit" className="ap-section">
      <Container maxW="container.lg">
        <FallInPlace>
          <p className="ap-kicker-section">Visit</p>
          <Heading as="h2" className="ap-title">
            Hours and the desk
          </Heading>
          <Text className="ap-copy">
            Walk in during open hours. For wholesale or a missing staple, write the shop desk.
          </Text>
          <ul className="ap-hours">
            <li>
              <strong>Monday–Friday</strong>
              <span>8:00–19:00</span>
            </li>
            <li>
              <strong>Saturday</strong>
              <span>8:00–18:00</span>
            </li>
            <li>
              <strong>Sunday</strong>
              <span>9:00–16:00</span>
            </li>
          </ul>
          <Link href="mailto:desk@alderprovisions.com" className="ap-btn ap-btn--primary" style={{ marginTop: '1.5rem' }}>
            desk@alderprovisions.com
          </Link>
        </FallInPlace>
      </Container>
    </Box>
  )
}

export default Home
