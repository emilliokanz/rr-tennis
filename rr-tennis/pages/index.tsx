import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Layout from '../component/Layout'
import Hero from '../component/Hero'

export default function Home () {
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const textVariant = useBreakpointValue({ base: '14px', md: '18px' });
  const layoutVariant = useBreakpointValue({ base: '50px', md: '200px' });
  const cardPadding = useBreakpointValue({ base: '25px', md: '50px' });
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}


