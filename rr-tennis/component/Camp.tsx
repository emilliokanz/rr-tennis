import React from 'react';
import { Flex, Text, Divider, useBreakpointValue, Box, Button } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from 'next/image';


export default function Camp(campHomeData: any) {
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  console.log(campHomeData.data.data.attributes.camp[0].image.data.attributes.url)
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
          {campHomeData.data.data.attributes.title}
        </Text>
          <Flex justify={{base: 'center', lg: 'left'}}>
            <Divider  width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
          </Flex>
        <Text 
        pt={'29px'}
        pb={'2vh'}
        fontSize={bodyVariant}>
          {campHomeData.data.data.attributes.description}
        </Text>
      </Box>
      <Box 
      width={{base:'100%', md: '390px'}}
      py={{base: '4.5vh', md: '0'}}>
      <Carousel id='camp'>
      {campHomeData.data.data.attributes.camp.map((data: any, index: number) => (
        <Carousel.Item  key={index}>
          <Link href={'/'}>
            <Flex
            height={{base:'250px', md: '390px'}}
            width={{base:'100%', md: '390px'}}
            flexDirection={'column'}
            >
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
              />
              <Box
              height={{base:'250px', md: '390px'}}
              width={{base:'100%', md: '390px'}}
              backgroundImage={`url${data.image.url}`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              >
                {data.image.url}
              </Box>
              <Box 
              fontWeight={'semibold'}
              bgColor={'brand.primary'}
              color={'brand.bgLight'}
              textAlign="center"
              >
                {data.title}, {data.image.data.attribute.previewUrl}
              </Box>
            </Flex>  
          </Link>
        </Carousel.Item>
        ))}
      </Carousel>
      </Box> 
    </Flex>
  )
}