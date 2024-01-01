import React, { useEffect, useState } from 'react';
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
  Button,
  Spacer,
  Image
} from '@chakra-ui/react';

// const data = [
//   {
//     image: '/image 2.png',
//     name: 'Roy Ardian',
//     description: 'Coach Roy is a former National Junior Tennis player',
//     fullDesc: 'Coach Roy is a former National Junior Tennis player, with years of coaching experience.  He has big tactics knowledge, always finding different ways of playing to improve his clients game regarding to their own skills '
//   },
//   {
//     image: '/image 2.png',
//     name: 'Roy Ardian',
//     description: 'Coach Roy is a former National Junior Tennis player',
//     fullDesc: 'Coach Roy is a former National Junior Tennis player, with years of coaching experience.  He has big tactics knowledge, always finding different ways of playing to improve his clients game regarding to their own skills '
//   },
// ]


export default function Coach(receivedData: any) {
  const coachData = receivedData.data.data.attributes.coach
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
        {coachData.map((data: any, index: number) => (
          <Flex
          key={index}
          pt={'4.5vh'}
          mb={'4.5vh'}
          flexDirection={'column'}
          width={{base: '100%', md: '400px' }}
          height={{base: '400px', md: '500px' }}
          >
            <Box 
            width={{base: '100%', md: '400px' }}
            height={{base: '400px', md: '500px' }}
            bgColor={'brand.bgDark'}
            > 
            <Image src={`${process.env.CMS_URL}${data.photo.data.attributes.url}`} 
            alt='coach photo'
            width={{base: '100%', md: '400px' }}
            height={{base: '100%', md: '400px' }}
            objectFit='cover'
            >
              
            </Image>
            </Box>
            <Box
            fontWeight={'semibold'}
            color='brand.bgLight'
            bgColor={'brand.primary'}>
              {data.name}
            </Box>
              <Text 
              color={'brand.primary'}
              textAlign={'left'} >
                {data.description}
                <Button marginLeft={1.5} marginTop={'1'} color={'brand.primary'} variant='link' bgColor={'white'} onClick={onOpen}>   More Details</Button>
              </Text>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay zIndex={4} />
                <ModalContent>
                <ModalCloseButton />
                <ModalHeader></ModalHeader>
                <ModalBody zIndex={5}>
                  {data.fullDescription}
                </ModalBody>
                </ModalContent>
              </Modal>
          </Flex> 
        ))} 
        </Flex>
    </Flex>
  )
}