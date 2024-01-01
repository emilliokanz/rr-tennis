import React, { useState } from 'react';
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
  useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FormType, formIface, handleFormInput } from '../inteface/interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { sendEventForm } from '../api/contactForm';
import { errorToast, successToast } from '../styles/components';

const data = [
  {
    email: 'rrtenniscamp@gmail.com',
    phone: '+628 159 239 794 (Roy)',
  },
]


export default function ContactForm() {
  const [formInput, setFormInput] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    message: '',
  })

  const handleChange = ({ target: {name, value}}: handleFormInput) => {
    setFormInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const { register, formState: {errors}, handleSubmit } = useForm<formIface>();

  const toast = useToast()

  const onSubmit: SubmitHandler<formIface> = async (e: any) => {
    const payload = formInput
    try{
      // @ts-ignore
      await sendEventForm(payload, null, FormType.contact)
      toast(successToast);
    } catch(error) {
      toast(errorToast);
      console.log(error);
    }
  }
  
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
                    {...register('name', {
                      required: 'This is required',
                    })} 
                    key='name'
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='name' 
                    value={formInput.name} 
                    onChange={handleChange} 
                    placeholder='Name'
                    />
                    {errors.name && <Box position={'absolute'} ml={'5pt'} color={'red.500'}>{errors.name.message}</Box>}
                  </FormControl>
                </Box>  
                <Box pt={'3vh'}>  
                  <FormControl>
                  <Input
                    {...register('email', {
                      required: 'This is required',
                    })}  
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='email' 
                    value={formInput.email} 
                    onChange={handleChange}
                    placeholder='Email'
                    />
                    {errors.email && <Box position={'absolute'} ml={'5pt'} color={'red.500'}>{errors.email.message}</Box>}
                  </FormControl>
                </Box>  
              </Box>
              <Box width={'49%'}>
              <Box pt={'1vh'}>  
                  <FormControl>
                  <Input 
                    {...register('phone', {
                      required: 'This is required',
                    })} 
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='phone' 
                    value={formInput.phone} 
                    onChange={handleChange} 
                    placeholder='Phone'
                    />
                    {errors.phone && <Box position={'absolute'} ml={'5pt'} color={'red.500'}>{errors.phone.message}</Box>}
                  </FormControl>
                </Box>  
                <Box pt={'3vh'}>  
                  <FormControl>
                  <Input 
                    {...register('address', {
                      required: 'This is required',
                    })} 
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='address' 
                    value={formInput.address} 
                    onChange={handleChange} 
                    placeholder='Address'
                    />
                    {errors.address && <Box position={'absolute'} ml={'5pt'} color={'red.500'}>{errors.address.message}</Box>}
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
                  value={formInput.message} 
                  onChange={handleChange}  
                  placeholder='Message'
                  />
              </FormControl>
            </Box>
            <Button 
            size={{base: 'xs', md: 'md', lg: 'lg'} } 
            variant='ghost'
            onClick={handleSubmit(onSubmit)}
            > 
            Submit
            </Button>  
          </form>
        </Box>
    </Flex>
  )
}