import React, { useState } from 'react';
import { 
  Flex, 
  Text, 
  Divider, 
  useBreakpointValue, 
  Box,
  Input,
  FormLabel,
  Button,
  FormControl,
  Select,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import { sendEventForm } from '../api/contactForm';
import { formIface, FormType, handleFormInput } from '../inteface/interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { errorToast, successToast } from '../styles/components';

const data = [
  {
    email: 'rrtenniscamp@gmail.com',
    phone: '+628 159 239 794 (Roy)',
  },
]

export default function ContactFormEvent(option: any) {
  const ageOption = option.data.age;
  const categoryOption = option.data.category;
  
  const [formInput, setFormInput] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    age: '',
    category: '',
    file: null,
  })
  
  const [payment, setPayment] = useState<File>()

  const handleChange = ({ target: {name, value}}: handleFormInput) => {
    setFormInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const toast = useToast()

  const onSubmit: SubmitHandler<formIface> = async (e: any) => {
    const payload = formInput
    
    try{
      await sendEventForm(payload, FormType.tournament, payment)
      toast(successToast);
    } catch(error) {
      toast(errorToast);
      console.log(error);
    }
  }
  
  const onFileSelect = (event: any) => {
    setPayment(event.target.files[0])
  }

  const returnAgeOption = ageOption.map((data: any, index: number) => {
    return (
      <option value={data} key={index}>{data}</option>
    )
  })

  const returnCategoryOption = categoryOption.map((data: any, index: number) => {
    return (
      <option value={data} key={index}>{data}</option>
    )
  })

  const { register, formState: {errors}, handleSubmit } = useForm<formIface>();


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
        REGISTRATION FORM
      </Text>
      <Divider alignSelf={'center'} width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
      <Text
        textAlign={'center'}
        fontSize={bodyVariant}
        >
          Contact us if you have any question
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
                <Box pt={'3vh'}>  
                  <FormControl isRequired= {true}>
                    <Select
                    {...register('age', {
                      required: true,
                    })}
                     id='age'  
                     name='age'
                     value={formInput.age}
                     onChange={handleChange}
                     placeholder='Select Age' 
                    >
                      {returnAgeOption}
                    </Select>
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
                <Box pt={'3vh'}>  
                  <FormControl>
                  <Select
                     {...register('category', {
                      required: true,
                    })} 
                     name='category'
                     value={formInput.category}
                     onChange={handleChange}
                     placeholder='Select Category'  
                    >
                      {returnCategoryOption}
                      {errors.category && <Box position={'absolute'} ml={'5pt'} color={'red.500'}>{errors.category.message}</Box>}
                    </Select>
                  </FormControl>
                </Box> 
              </Box>
            </Flex>
            <Box 
            pt={'3vh'}
            pb={'3vh'}>
              <FormControl
              >
                <FormLabel>Payment Receipt</FormLabel>
                <Input
                  {...register('file', {
                    required: 'This is required',
                  })} 
                  bg={'rgba(221, 221, 221, 1)'}
                  type='file' 
                  name='upload' 
                  onChange={event => onFileSelect(event)} 
                  placeholder='Upload File'
                  />
                  {errors.file && <Box position={'absolute'} ml={'5pt'} color={'red.500'}>This is required</Box>}
              </FormControl>
            </Box>
            <Button 
            type='submit'
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