import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Flex, Box, Button, Text, useBreakpointValue, Divider} from '@chakra-ui/react';
import Link from 'next/link'

const data = [
  {
    image: '/image 2.png',
    title: 'Junior Single & Double UNY',
    description: 'An event for junior Tennis players age 10 - 16. This event was held in Jogjakarta and was successfully held by 150 contestant',
    link: '/'
  },
  {
    image: '/image 2.png',
    title: 'Junior Single & Double UNY',
    description: 'An event for junior Tennis players age 10 - 16. This event was held in Jogjakarta and was successfully held by 150 contestant',
    link: '/'
  },
]


export default function Upcoming(receivedData: any) {
  const serverData = receivedData.data.data
  console.log(serverData)
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const textVariant = useBreakpointValue({ base: '14px', md: '18px' });
  return (
  <Flex
   px={'20.5vw'}
   pt={'6vh'}
   pb={'10vh'}
   bg={'brand.bgDark'}
   color={'brand.secondary'}
   textAlign={'center'}
   flexDirection={'column'}
   justifyContent={'center'}>
    <Text 
      fontSize={headerVariant}
      fontWeight='bold'
      >
        UPCOMING EVENTS
    </Text>
    <Divider alignSelf={'center'} width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
     <Box pt={'4.5vh'}>
      <Carousel id='event'>
      {serverData.map((data: any, index: number) =>(
        <Carousel.Item key={index}>
          <Flex
          pt={'20vh'}
          height={'600px'}
          backgroundImage={`url(${process.env.CMS_URL}${data.attributes.image.data.attributes.url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          justify={'flex-end'}
          >
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
              integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            />
            <Flex
            px={'2vw'}
            mt={{base: '18vh', md:'8vh'}}
            flexDirection="column"
            textAlign={{base: 'center',md:'left'}}
            width={{base:'100%', md: '25rem'}}
            height={{base:'55%', md: '20rem'}}
            mx={'10vw'}
            bg={'brand.card'}
            color={'brand.secondary'}>
              <Text
              pt={'32px'}
              fontSize={bodyVariant}
              fontWeight='bold'
              >
                {data.attributes.title}
              </Text>
              <Flex justify={{base: 'center', md: 'right'}}>
              </Flex>
              <Text
              pt={'1vh'}
              fontSize={textVariant}
              fontWeight='400'
              >
                {data.attributes.description}
              </Text>
              <Box pt={'3vh'}>
                <Link href={data.attributes.link}>
                  <Button size={{base: 'xs', md: 'md', lg: 'lg'} } variant='ghost'> See Details</Button>
                </Link>
              </Box>
            </Flex>  
          </Flex>
        </Carousel.Item>
        ))}
      </Carousel> 
    </Box>  
  </Flex>    
  )
}