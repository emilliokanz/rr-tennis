import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Flex, Box, Button, Text, useBreakpointValue, Divider} from '@chakra-ui/react';
import Link from 'next/link'

const hardData = [
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


export default function Hero(data: any) {
  const heroData = data.data.data.attributes.content;
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  return (
  <Box
   pt={'22vh'}
   pb={'10vh'}
   bg={'brand.bgDark'}>
    <Carousel>
    {heroData.map((data: any, index: number) =>(
      <Carousel.Item key={index}>
        <Flex
        pt={'20vh'}
        height={'600px'}
        backgroundImage={`url(${process.env.CMS_URL}${data.image.data[0].attributes.url})`}
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
          height={{base:'80%', md: '25rem'}}
          mx={'20.5vw'}
          bg={'brand.card'}
          color={'brand.secondary'}>
            <Text
            pt={'32px'}
            fontSize={headerVariant}
            fontWeight='bold'
            >
              {data.title}
            </Text>
            <Flex justify={{base: 'center', md: 'left'}}>
              <Divider width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
            </Flex>
            <Text
            pt={'1vh'}
            fontSize={bodyVariant}
            fontWeight='semibold'
            >
              {data.description}
            </Text>
            <Box pt={'3vh'}>
              <Link href={data.link}>
                <Button size={{base: 'xs', md: 'md', lg: 'lg'} } variant='ghost'> See Details</Button>
              </Link>
            </Box>
          </Flex>  
        </Flex>
      </Carousel.Item>
      ))}
    </Carousel> 
  </Box>    
  )
}