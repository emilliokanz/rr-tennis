import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react'
import type { InferGetServerSidePropsType } from 'next'
import Layout from '../component/Layout'
import Hero from '../component/Hero'
import About from '../component/About'
import Camp from '../component/Camp'
import Coach from '../component/Coach'
import Events from '../component/Events'
import PrevEvents from '../component/PrevEvents'
import Upcoming from '../component/Upcoming'
import Location from '../component/Location'
import LocationGallery from '../component/LocationGallery'
import ContactForm from '../component/ContactForm'
import {getProps} from '../queries/queries'

export default function Home ({
  aboutUsData,
  campHomeData,
  homeHeroData,
  coachData,
  eventData,
  pastEventData,
  upcomingEventData,
  locationData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const textVariant = useBreakpointValue({ base: '14px', md: '18px' });
  const layoutVariant = useBreakpointValue({ base: '50px', md: '200px' });
  const cardPadding = useBreakpointValue({ base: '25px', md: '50px' });
  return (
    <Layout>
      <Hero data = {homeHeroData}/>
      <About data = {aboutUsData}/>
      <Camp data = {campHomeData}/>
      <Coach data = {coachData}/>
      <Events data = {eventData}/>
      <PrevEvents data = {pastEventData}/>
      <Upcoming data = {upcomingEventData}/>
      <Location data = {locationData}/>
      <LocationGallery data = {locationData}/>
      <ContactForm />
    </Layout>
  )
}

export async function getServerSideProps() {
  return await getProps()
}

