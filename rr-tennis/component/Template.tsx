import React from 'react';
import { 
  Flex, 
  Text, 
  useBreakpointValue, 
  Box,
  useDisclosure,
  Button
} from '@chakra-ui/react';
import Image from 'next/image';

const data = [
  {
    image: '/image 2.png',
    name: 'Roy Ardian',
    description: 'Coach Roy is a former National Junior Tennis player',
    fullDesc: 'Coach Roy is a former National Junior Tennis player, with years of coaching experience.  He has big tactics knowledge, always finding different ways of playing to improve his clients game regarding to their own skills '
  },
  {
    image: '/image 2.png',
    name: 'Roy Ardian',
    description: 'Coach Roy is a former National Junior Tennis player',
    fullDesc: 'Coach Roy is a former National Junior Tennis player, with years of coaching experience.  He has big tactics knowledge, always finding different ways of playing to improve his clients game regarding to their own skills '
  },
]



export default function COMPONENTNAME() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  return (
    <Flex
    height={'100%'}
    textAlign={'center'}
    flexDirection='column'
    bg={'brand.bgLight'}
    color='brand.secondary'
    px={'19.5vw'}
    py={'10vh'}
    >
      <Text 
      fontSize={headerVariant}
      fontWeight='bold'
      >
        JUNIOR
      </Text>
      <Text 
      pt={'4.5vh'}
      fontSize={bodyVariant}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      </Text>
    </Flex>
  )
}