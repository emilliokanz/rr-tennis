import { useRouter } from 'next/router'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Flex, Box, Button, Text, useBreakpointValue, Divider} from '@chakra-ui/react';
import Link from 'next/link'
import { getProps } from '../../queries/queries';
import { InferGetServerSidePropsType } from 'next';
import ContactFormEvent from '../../component/ContactFormEvent';
import Layout from '../../component/Layout';

export default function Page({
  upcomingEventData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const serverData = upcomingEventData.data
  
  const slugs = []

  for (const data of serverData) {
    slugs.push(data.attributes.slug)
  }

  const [width, setWidth] = React.useState(0);
	  React.useEffect(() => {
	    setWidth(window.innerWidth);
	  },[]);

  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });

  return (
  <div>
    {serverData.map((data:any, index:number) => (
      <Layout key={index}
      >
      <Box
        pt={'15vh'}
        pb={'10vh'}
        bg={'brand.bgDark'}>
          <Flex
          pt={'25vh'}
          height={'600px'}
          backgroundImage={`url(${process.env.CMS_URL}${data.attributes.image.data.attributes.url})`}
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
                  {data.attributes.title}
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
          {data.attributes.description}
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
        {data.attributes.age.map((data: any, index: number) => (
            <li key={index}>{data}</li>
        ))}
        <Divider></Divider>
        <Text fontWeight={'semibold'} >Match Types</Text>
        {data.attributes.match.map((data: any, index: number) => (
            <Text key={index} >{data}</Text>
        ))}
        <Divider></Divider>
        <Text fontWeight={'semibold'}>Admission Fee</Text>
        <Text>{data.attributes.admission}</Text>
        <Divider></Divider>
        <Text fontWeight={'semibold'}>Prize</Text>
        <Text>{data.attributes.prize}</Text>
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
        <Text>{data.attributes.date}</Text>
        <Divider></Divider>
        <Text fontWeight={'semibold'}>Location</Text>
        <Text>{data.attributes.location}</Text>
        <Divider
        height={width < 920? '1px' : 'none'}
        width={width < 992? 'auto' : '0px'}
        ></Divider>
      </Flex>
    </Flex>
    <ContactFormEvent data = {{
      age: data.attributes.age,
      category: data.attributes.match
    }}/>
    </Layout>
    ))}
  </div>
  )
}

export async function getServerSideProps() {
  return await getProps()
}