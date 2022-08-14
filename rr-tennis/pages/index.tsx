import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Layout from '../component/Layout'
import Hero from '../component/Hero'
import Form from '../component/TournamentForm'
import About from '../component/About'
import Camp from '../component/Camp'
import Coach from '../component/Coach'
import Events from '../component/Events'
import PrevEvents from '../component/PrevEvents'
import Upcoming from '../component/Upcoming'
import Location from '../component/Location'
import LocationGallery from '../component/LocationGallery'
import ContactForm from '../component/ContactForm'

export default function Home () {
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const textVariant = useBreakpointValue({ base: '14px', md: '18px' });
  const layoutVariant = useBreakpointValue({ base: '50px', md: '200px' });
  const cardPadding = useBreakpointValue({ base: '25px', md: '50px' });
  return (
    <Layout>
      <Hero />
      <About />
      <Camp />
      <Coach />
      <Events />
      <PrevEvents />
      <Upcoming />
      <Location />
      <LocationGallery />
      <ContactForm />
    </Layout>
  )
}


