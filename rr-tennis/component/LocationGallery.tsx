import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Flex, Box, Button, Text, useBreakpointValue, Divider, Grid, GridItem, Image, SimpleGrid} from '@chakra-ui/react';
import Link from 'next/link'

const data = [
  {
    image: '/image 14.png'
  },
  {
    image: '/image 15.png'
  },
  {
    image: '/image 16.png'
  },
  {
    image: '/image 17.png'
  },
]


export default function LocationGallery() {
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
    <SimpleGrid 
    height={'680px'}
    columns={2}
    gap={'none'}
    >
      {data.map((data : any, index : number) => (
       
          <Box
           key={index}
           bgRepeat="no-repeat"
           bgPosition={'center'}
           height="390px"
           width={'100%'}
          >
            <Image 
            src={data.image}
            width={'100%'}
            height="390px"></Image>
          </Box>
        
      ))}
    </SimpleGrid>
  </Flex>    
  )
}