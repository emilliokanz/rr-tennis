import React, { useState } from 'react';
import { 
  Flex, 
  Text, 
  Divider, 
  useBreakpointValue, 
  Box,
  Input,
  Button,
  FormControl,
  Select,
  useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormType, formIface, handleFormInput } from '../inteface/interface';
import { sendEventForm } from '../api/contactForm';
import { errorToast, successToast } from '../styles/components';

const data = [
  {
    email: 'rrtenniscamp@gmail.com',
    phone: '+628 159 239 794 (Roy)',
  },
]



export default function ContactFormCamp(option: any) {
  const classes: string[] = [];
  const juniorCamp = option.data.juniorCampData.data;
  const adultCamp = option.data.adultCampData.data;  
  
  for(const i of juniorCamp) {
    classes.push(i.attributes.title)
  }

  for(const i of adultCamp) {
    classes.push(i.attributes.title)
  }

  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  
  const [formInput, setFormInput] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    pax: '',
    class: '',
    message: '',
  })

  const handleChange = ({ target: {name, value}}: handleFormInput) => {
    setFormInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const toast = useToast()

  const onSubmit: SubmitHandler<formIface> = async () => {
    const payload = formInput
    
    try{
      await sendEventForm(payload, FormType.camp)
      toast(successToast);
    } catch(error) {
      toast(errorToast);
      console.log(error);
    }
  }

  const { register, formState: {errors}, handleSubmit } = useForm<formIface>();


  const returnCategoryOption = classes.map((data: any, index: number) => {
    return (
      <option value={data} key={index}>{data}</option>
    )
  })
  
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
        JOIN OUR CAMP
      </Text>
      <Divider alignSelf={'center'} width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
        <Text
        textAlign={'center'}
        fontSize={bodyVariant}
        >
          Submit your registration, and we&apos;ll be in touch
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
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='name' 
                    placeholder='Name'
                    value={formInput.name} 
                    onChange={handleChange} 
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
                  <FormControl>
                  <Select
                    {...register('class', {
                      required: true,
                    })}
                     id='class'  
                     name='class'
                     value={formInput.class}
                     onChange={handleChange}
                     placeholder='Select Class' 
                    >
                      {returnCategoryOption}
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
                <Input 
                    {...register('pax', {
                      required: 'This is required',
                    })} 
                    bg={'rgba(221, 221, 221, 1)'}
                    type='text' 
                    name='pax' 
                    value={formInput.pax} 
                    onChange={handleChange} 
                    placeholder='Pax'
                    />
                    {errors.pax && <Box position={'absolute'} ml={'5pt'} color={'red.500'}>{errors.pax.message}</Box>}
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
            > Submit</Button>  
          </form>
        </Box>
    </Flex>
  )
}