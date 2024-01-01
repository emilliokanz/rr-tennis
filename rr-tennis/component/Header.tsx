import { 
  Button,
  Flex,
  HStack,
  Box,
  Stack,
  IconButton,
  useDisclosure,
  VStack,
  Link,
  Collapse,
  useBreakpointValue,
  Text
} from "@chakra-ui/react";
import React from "react";
import NextLink from 'next/link';
import Image from 'next/image';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const links = [
  {title: 'About', link: '/#about'},
  {title: 'Tennis Camp', link: '/camp'},
  {title: 'Contact', link: '/#contact'},
]


export default function Header () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textVariant = useBreakpointValue({ base: '14px', md: '16px', lg: '18px' });  
  return (
  <Box
    letterSpacing={'0.5'}  
    boxShadow={'lg'}
    color={'brand.text'} 
    fontWeight={'300'}
    height={'60px'}
    fontSize={textVariant} 
    position={'fixed'} 
    zIndex={3} 
    width={'full'}>
      <Flex
        position={'relative'}
        backdropFilter='blur(10px)'
        px={'19vw'}
        height='60px'
        alignItems='center'
        justifyContent='space-between'
        bg= 'brand.primary'
      >
        <IconButton
          bg='none'
          w={8}
          h={8}
          icon={
            isOpen ? (
              <CloseIcon w={6} h={6} color={'white'} />
            ) : (
              <HamburgerIcon w={8} h={8} color={'white'} />
            )
          }
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <Box 
          position={{base:'absolute', md:'static'}} 
          left='40vw'
          mr={'2vw'}
          padding={'1'} 
          paddingTop={'3'}>
          <Link href={'/'}>
            <Image
              alt="logo"
              src={'/Group 31.png'}
              height={46}
              width={126}
            ></Image>
          </Link>
        </Box>

        <Flex 
        alignItems={'flex-end'}
        >
          <HStack
            display={{ base: 'none', md: 'flex' }}
            as='nav'
            spacing={{base: '3vw', lg: '50px'}}
            letterSpacing='1.5px'
          >
            {links.map((data : any, index: number)=> (
              <Box
              key={index} 
              _hover={{ color: '#4B4B4B' }}>
                <NextLink href={`${process.env.WEB_URL}${data.link}`}>
                  <Text
                   cursor={'pointer'}
                   textAlign={'center'}
                   >{data.title}</Text>
                </NextLink>
            </Box>
            ))}
          </HStack>
        </Flex>
      </Flex>

      <Collapse in={isOpen}>
        <VStack  flexDirection={'row'}>
          {isOpen ? (
            <Box
              width={'100%'}
              bg='brand.primary'
              padding={4}
              display={{ md: 'none' }}
              backdropFilter='blur(10px)'
            >
            <Stack as={'nav'} spacing={4}>
              {links.map((data : any, index: number)=> (
              <Box 
              key={index}
              _hover={{ color: '#4B4B4B' }}>
                <NextLink href='/camp'>
                  <Text cursor={'pointer'}>{data}</Text>
                </NextLink>
              </Box>
            ))}
            </Stack>
            </Box>
          ) : null}
        </VStack>
      </Collapse>
    </Box>
  )
}