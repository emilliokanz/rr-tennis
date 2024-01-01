import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Flex, Box, Button, Text, useBreakpointValue, Divider} from '@chakra-ui/react';
import Link from 'next/link'

const data = [
  {
    image: '/image 2.png',
    title: 'Lapangan Tennis Komplek AL',
    description: 'Jl. Ambalun No.1, RT.8/RW.6, Pondok Labu, Cilandak, South Jakarta City, Jakarta 12450',
    link: '/'
  },
  
]


export default function Location(receivedData: any) {
  const serverData = receivedData.data.data.attributes
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const textVariant = useBreakpointValue({ base: '14px', md: '18px' });
  return (
  <Flex
   px={'20.5vw'}
   pt={'6vh'}
   pb={'10vh'}
   bg={'brand.bgLight'}
   color={'brand.secondary'}
   textAlign={'center'}
   flexDirection={'column'}
   justifyContent={'center'}>
    <Text 
      fontSize={headerVariant}
      fontWeight='bold'
      >
        LOCATION
    </Text>
    <Divider alignSelf={'center'} width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
     <Box pt={'4.5vh'}>
          <Flex
          pt={'20vh'}
          height={'600px'}
          backgroundImage={`url(${process.env.CMS_URL}${serverData.location[0].header.data.attributes.url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          justify={'flex-start'}
          >
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
              integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            />
            <Flex
            px={'2vw'}
            mt={{base: '20vh', md:'24vh'}}
            flexDirection="column"
            textAlign={{base: 'center',md:'left'}}
            width={{base:'100%', md: '25rem'}}
            height={{base:'55%', md: '12rem'}}
            mx={'10vw'}
            bg={'brand.card'}
            color={'brand.secondary'}>
              <Text
              pt={'32px'}
              fontSize={bodyVariant}
              fontWeight='bold'
              >
                {serverData.location[0].title}
              </Text>
              <Flex justify={{base: 'center', md: 'right'}}>
              </Flex>
              <Text
              pt={'1vh'}
              fontSize={textVariant}
              fontWeight='400'
              >
                {serverData.location[0].address}
              </Text>
            </Flex>  
          </Flex>
    </Box>  
  </Flex>    
  )
}