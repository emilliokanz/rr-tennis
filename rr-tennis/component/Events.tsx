import React from 'react';
import { 
  Flex, 
  Text, 
  Divider, 
  useBreakpointValue, 
  Box, 
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
} from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from 'next/image';

const data = [
  {
    image: '/image 2.png',
    title: 'Junior Camp',
    link: '/'
  },
  {
    image: '/image 2.png',
    title: 'Adult Camp',
    link: '/'
  },
]

export default function Events(receivedData: any) {
  const eventData = receivedData.data.data.attributes
  console.log('ini', eventData)
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  return (
    <Flex
    justify={'center'}
    textAlign={{base: 'center',lg:'left'}}
    flexWrap={{base: 'wrap', lg: 'unset'}}
    bg={'brand.bgDark'}
    color='brand.secondary'
    px={'19.5vw'}
    >
      <Box px={'1vw'}>
        <Text 
        fontSize={headerVariant}
        fontWeight='bold'
        pt={'4.5vh'}
        >
          {eventData.title}
        </Text>
          <Flex justify={{base: 'center', lg: 'left'}}>
            <Divider  width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
          </Flex>
        <Text 
        pt={'29px'}
        fontSize={bodyVariant}
        pb={'2vh'}>
        {eventData.description}
        </Text>
      </Box>
      <Box 
      width={{base:'100%', md: '390px'}}
      py={{base: '4.5vh', md: '0'}}>
        <Flex
         height={{base:'250px', md: '390px'}}
         width={{base:'100%', md: '390px'}}
         flexDirection={'column'}
        >
         <Box
          height={{base:'250px', md: '390px'}}
          width={{base:'100%', md: '390px'}}
          backgroundImage={`url(${process.env.CMS_URL}${eventData.image.data.attributes.url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
         >
         </Box>
        </Flex>  
      </Box> 
    </Flex>
  )
}