import React from 'react';
import { 
  Flex, 
  Text, 
  Divider, 
  useBreakpointValue, 
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  UseDisclosureProps,
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



export default function Coach() {
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
        COACH
      </Text>
      <Divider alignSelf={'center'} width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
        <Flex
        justify={'space-evenly'}
        flexWrap='wrap'
        >  
          <Flex
          pt={'4.5vh'}
          flexDirection={'column'}
          width={{base: '100%', md: '400px' }}
          height={{base: '400px', md: '500px' }}
          >
            <Box 
            width={{base: '100%', md: '400px' }}
            height={{base: '400px', md: '500px' }}
            bgColor={'brand.bgDark'}
            > 
            </Box>
            <Box
            fontWeight={'semibold'}
            color='brand.bgLight'
            bgColor={'brand.primary'}>
              {data[0].name}
            </Box>
            <>
              <Text 
              color={'brand.primary'}
              textAlign={'left'} >
                {data[0].description}
                <Button color={'brand.primary'} variant='link' bgColor={'white'} onClick={onOpen}>.  More Details</Button>
              </Text>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay zIndex={4} />
                <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody zIndex={5}>
                  {data[0].fullDesc}
                </ModalBody>
                </ModalContent>
              </Modal>
            </>  
          </Flex> 
          <Flex
          pt={'4.5vh'}
          flexDirection={'column'}
          width={{base: '100%', md: '400px' }}
          height={{base: '400px', md: '500px' }}
          >
            <Box 
            bgColor={'brand.bgDark'}
            width={{base: '100%', md: '400px' }}
            height={{base: '400px', md: '500px' }}
            > 
            </Box>
            <Box
            fontWeight={'semibold'}
            color='brand.bgLight'
            bgColor={'brand.primary'}>
              {data[0].name}
            </Box>
            <>
              <Text 
              color={'brand.primary'}
              textAlign={'left'} >
                {data[0].description}
                <Button color={'brand.primary'} variant='link' bgColor={'white'} onClick={onOpen}>.   More Details</Button>
              </Text>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay zIndex={4} />
                <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody 
                zIndex={5}>
                  {data[0].fullDesc}
                </ModalBody>
                </ModalContent>
              </Modal>
            </>  
          </Flex> 
        </Flex>
    </Flex>
  )
}