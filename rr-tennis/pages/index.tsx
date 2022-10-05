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
import { getAboutUsData } from '../queries/aboutUsData'
import { getCampHomeData } from '../queries/campHomeData'

export default function Home ({
  aboutUsData,
  campHomeData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const textVariant = useBreakpointValue({ base: '14px', md: '18px' });
  const layoutVariant = useBreakpointValue({ base: '50px', md: '200px' });
  const cardPadding = useBreakpointValue({ base: '25px', md: '50px' });
  console.log("components data", aboutUsData, campHomeData)
  return (
    <Layout>
      <Hero />
      <About data={aboutUsData} />
      <Camp data={campHomeData}/>
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

export async function getServerSideProps() {
  const aboutUsData = await getAboutUsData();
  const campHomeData = await getCampHomeData();
 
  return {
    props: {
      aboutUsData: aboutUsData.props.aboutUsData,
      campHomeData: campHomeData.props.campHomeData
    },
  };
}

