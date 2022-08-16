import React from 'react';
import { 
  Flex, 
  Text, 
  Divider, 
  useBreakpointValue, 
  Box,
  Input,
  FormLabel,
  useDisclosure,
  useColorModeValue,

  Button,
  FormControl,
} from '@chakra-ui/react';
import Image from 'next/image';

const data = [
  {
    email: 'rrtenniscamp@gmail.com',
    phone: '+628 159 239 794 (Roy)',
  },
]



export default function ContactFormCamp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  return (
    <Flex
    height={'100%'}
    textAlign={'center'}
    flexDirection='column'
    bg={'brand.bgDark'}
    color='brand.secondary'
    px={{base:'20vw', lg: '30vw'}}
    py={'10vh'}
    >
      <Text 
      fontSize={headerVariant}
      fontWeight='bold'
      >
        CONTACT US
      </Text>
      <Divider alignSelf={'center'} width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
        <Text
        
        textAlign={'center'}
        fontSize={bodyVariant}
        >
          Send us request, and we’ll be in touch 
        </Text>
        <Text
     
        textAlign={'center'}
        fontSize={bodyVariant}
        >
          {data[0].email}
        </Text>
        <Text
       
        textAlign={'center'}
        fontSize={bodyVariant}
        >
         {data[0].phone}
        </Text>
        <Box>
          <form>
            <Flex
            flexDir={'row'}
            justify={'space-between'}
            >
              <Box width={'49%'}>
                <Box pt={'1vh'}>  
                  <FormControl>
                    <Input 
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='name' 
                    placeholder='Name'
                    />
                  </FormControl>
                </Box>  
                <Box pt={'3vh'}>  
                  <FormControl>
                  <Input 
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='email' 
                    placeholder='Email'
                    />
                  </FormControl>
                </Box>  
              </Box>
              <Box width={'49%'}>
              <Box pt={'1vh'}>  
                  <FormControl>
                  <Input 
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='phone' 
                    placeholder='Phone'
                    />
                  </FormControl>
                </Box>  
                <Box pt={'3vh'}>  
                  <FormControl>
                  <Input 
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='address' 
                    placeholder='Address'
                    />
                  </FormControl>
                </Box> 
              </Box>
            </Flex>
            <Box 
            pt={'3vh'}
            pb={'3vh'}>
              <FormControl>
                <Input
                  bg={'rgba(221, 221, 221, 1)'}
                  type='text' 
                  name='message' 
                  placeholder='Message'
                  />
              </FormControl>
            </Box>
            <Button size={{base: 'xs', md: 'md', lg: 'lg'} } variant='ghost'> Submit</Button>  
          </form>
        </Box>
    </Flex>
  )
}