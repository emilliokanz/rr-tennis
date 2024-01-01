import { useRouter } from 'next/router'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Flex, Box, Button, Text, useBreakpointValue, Divider, Card, CardHeader, Heading, CardBody} from '@chakra-ui/react';
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
      borderColor={'white'}
      >
        <Card height={'33%'} key={'elevated'} variant={'elevated'}>
        <CardHeader>
          <Heading size='md'> Age Group</Heading>
        </CardHeader>
        <CardBody>
          {data.attributes.age.map((data: any, index: number) => (
              <li style={{fontSize: '1.5vh'}} key={index}>{data}</li>
              ))}
        </CardBody>
        </Card>

        <Card height={'33%'} key={'elevated'} variant={'elevated'}>
        <CardHeader>
          <Heading size='md'> Match Type</Heading>
        </CardHeader>
        <CardBody>
          {data.attributes.match.map((data: any, index: number) => (
              <li style={{fontSize: '1.5vh'}} key={index}>{data}</li>
          ))}
        </CardBody>
        </Card>

        <Card height={'33%'} key={'elevated'} variant={'elevated'}>
        <CardHeader>
          <Heading size='md'> Admission Fee</Heading>
        </CardHeader>
        <CardBody>
          {data.attributes.admission}
        </CardBody>
        </Card>
      </Flex>
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
     borderColor={'white'}
      >
        <Card height={'33%'} key={'elevated'} variant={'elevated'}>
        <CardHeader>
          <Heading size='md'> Prize</Heading>
        </CardHeader>
        <CardBody>
        {data.attributes.prize}
        </CardBody>
        </Card>
        <Card height={'33%'} key={'elevated'} variant={'elevated'}>
        <CardHeader>
          <Heading size='md'> Date</Heading>
        </CardHeader>
        <CardBody>
        {data.attributes.date}
        </CardBody>
        </Card>
        <Card height={'33%'} key={'elevated'} variant={'elevated'}>
        <CardHeader>
          <Heading size='md'> Location</Heading>
        </CardHeader>
        <CardBody>
        {data.attributes.location}
        </CardBody>
        </Card>
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