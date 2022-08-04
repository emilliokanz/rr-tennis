import React from 'react';
import { Flex, Box, HStack } from '@chakra-ui/react';
import Image from 'next/image';

export default function Footer() {
  return (
    <Flex
    height={'100%'}
    justify={'space-between'}
    flexWrap={'wrap'}
    bg={'brand.primary'}
    color='brand.text'
    px={'15vw'}>
      <Box 
        left='40vw'
        ml={{base: '15vw',sm:'2'}} 
        padding={'3'} 
        paddingTop={'6'}>
          <Image
            src={'/Group 31.png'}
            height={46}
            width={126}
            />
        </Box>
      <Box 
      pt={{base: 0, sm: 12}}  
      pl={{base:'10%', sm:'0'}} 
      fontSize={'10px'}>
        2022 RR Tennis Management - All Rights Reserved
      </Box>
      <HStack
        pt={{base: 3, sm: 2}}
        px={{base:'32%', sm:'0'}}
        justify={'center'}
        spacing={'24px'}>
        <Box>
          <Image 
          src={'/Vector.png'}
          height={25}
          width={25}
          />
        </Box>    
        <Box> 
          <Image 
          src={'/Group.png'}
          height={25}
          width={25}
          />
        </Box>   
      </HStack>
    </Flex>
  )
}