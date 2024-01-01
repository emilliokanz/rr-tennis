import React from 'react';
import CampPackage from '../component/CampPackage';
import ContactFormCamp from '../component/ContactFormCamp';
import Layout from '../component/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Flex, Box, Button, Text, useBreakpointValue, Divider} from '@chakra-ui/react';
import Link from 'next/link'
import {getProps} from '../queries/queries'
import { InferGetServerSidePropsType } from 'next';


const data = [
  {
    image: '/image 2.png',
    title: 'JOIN OUR CAMP',
    description: 'Train and improve your skil with us',
    link: '/'
  },
  {
    image: '/image 2.png',
    title: 'TENNIS EVENT',
    description: 'Want to hold a Tennis Tournament event? We can help you',
    link: '/'
  },
  {
    image: '/image 2.png',
    title: 'OUR COACHES',
    description: 'Our coaches are experienced with proven track record',
    link: '/'
  }
]


export default function Hero({
  juniorCampData,
  adultCampData,
  homeHeroData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const image = homeHeroData.data.attributes.content[0].image.data[0].attributes.url
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  return (
  <div>
  <Layout>
    <Box
    pt={'22vh'}
    pb={'10vh'}
    bg={'brand.bgDark'}>
          <Flex
          pt={'20vh'}
          height={'600px'}
          backgroundImage={`${process.env.CMS_URL}${image}`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          >
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
              integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            />
            <Flex
            px={'1.8vw'}
            flexDirection="column"
            textAlign={{base: 'center',md:'left'}}
            width={{base:'100%', md: '25rem'}}
            height={{base:'80%', md: '18rem'}}
            mx={'20.5vw'}
            bg={'brand.card'}
            color={'brand.secondary'}>
              <Text
              pt={'32px'}
              fontSize={headerVariant}
              fontWeight='bold'
              >
                CAMP
              </Text>
              <Flex justify={{base: 'center', md: 'left'}}>
                <Divider width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
              </Flex>
              <Text
              pt={'1vh'}
              fontSize={bodyVariant}
              fontWeight='semibold'
              >
                For kids and teenagers 
                start from 4 to 18 years old 
              </Text>
            </Flex>  
          </Flex>
    </Box>
    <CampPackage data = {{juniorCampData, adultCampData}}/>
    <ContactFormCamp data = {{juniorCampData, adultCampData}}/>
  </Layout>
  <Box id='register'></Box>
  </div>
  )
}

export async function getServerSideProps() {
  return await getProps()
}
