
import React from 'react';
import Layout from '../component/Layout';
import { Flex, Box, Button, Text, useBreakpointValue, Divider} from '@chakra-ui/react';
import Link from 'next/link'
import ContactFormEvent from '../component/ContactFormEvent';

const data = [
  {
    description: 'An event for junior Tennis players age 10 - 16. This event was held in Jogjakarta and was successfully held by 150 contestant',
    title: 'JUNIOR SINGLE & DOUBLE UNY',
    age: [12, 14, 16],
    match: ['Singles', 'Doubles', 'Mix Doubles'],
    admission: 'IDR : 500.000',
    prize: 'IDR : 500.000',
    date: '17 - 25 August 2022',
    location: 'Lapangan Tennis Komplek AL. Pondok Labu Cilandak'
  },
]

const isBrowser = typeof window !== "undefined"



export default function Hero() {
  const [width, setWidth] = React.useState(0);
	  React.useEffect(() => {
	    setWidth(window.innerWidth);
	  },[]);
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  return (
  <Layout>
    <Box
    pt={'15vh'}
    pb={'10vh'}
    bg={'brand.bgDark'}>
          <Flex
          pt={'25vh'}
          height={'600px'}
          backgroundImage={"url('image 2.png')"}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          >
            <Flex
            pb={'3vh'}
            px={'1.8vw'}
            flexDirection="column"
            justify={'center'}
            width={'full'}
            height={'min-content'}
            mx={'20.5vw'}
            bg={'brand.card'}
            color={'brand.secondary'}>
              <Box>
                <Text
                textAlign={'center'}
                pt={'32px'}
                fontSize={headerVariant}
                fontWeight='bold'
                >
                  {data[0].title}
                </Text>
              </Box>  
              <Flex justify={'center'}>
                <Divider width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
              </Flex>
            </Flex>  
          </Flex>
    </Box>
    <Box
    px={'20vw'}
    pt={'10vh'}
    pb={'10vh'}
    bg={'brand.bgLight'}
    >
      <Text
        pt={'1vh'}
        textAlign={'center'}
        fontSize={bodyVariant}
        fontWeight='semibold'
        >
          {data[0].description}
      </Text>
    </Box>
    <Flex
    flexWrap={'wrap-reverse'}
    justify={'center'}
    pb={'5vh'}
    px={'20vw'}
    >
      <Flex
      width={{base: '100%', lg: '50%'}}
      textAlign={'center'}
      gap={'1rem'}
      flexDirection={'column'}
      py={'1rem'}
      px={'5rem'}
      borderTopWidth={{base: '0px', lg:'1px'}}
      borderBottomWidth={'1px'}
      borderX={'1px'}
      borderColor={'gray.200'}
      // borderWidth={'1px'}
      >
        <Text fontWeight={'semibold'}>Age Group</Text>
        {data[0].age.map((data: any, index: number) => (
            <li key={index}>{data}</li>
        ))}
        <Divider></Divider>
        <Text fontWeight={'semibold'} >Match Types</Text>
        {data[0].match.map((data: any, index: number) => (
            <Text key={index} >{data}</Text>
        ))}
        <Divider></Divider>
        <Text fontWeight={'semibold'}>Admission Fee</Text>
        <Text>{data[0].admission}</Text>
        <Divider></Divider>
        <Text fontWeight={'semibold'}>Prize</Text>
        <Text>{data[0].prize}</Text>
      </Flex>
      <Flex
      textAlign={'center'}
      gap={'1rem'}
      width={{base: '100%', lg: '50%'}}
      justify={'center'}
      borderX={'1px'}
      borderTop={'1px'}
      borderColor={'gray.200'}
      borderBottomWidth={{base: '0px', lg:'1px'}}
      flexDirection={'column'}
      pt={'1rem'}
      px={'5rem'}
      >
        <Text fontWeight={'semibold'}>Date</Text>
        <Text>{data[0].date}</Text>
        <Divider></Divider>
        <Text fontWeight={'semibold'}>Location</Text>
        <Text>{data[0].location}</Text>
        <Divider
        height={width < 920? '1px' : 'none'}
        width={width < 992? 'auto' : '0px'}
        ></Divider>
      </Flex>
    </Flex>
    <ContactFormEvent />
  </Layout>
  )
}