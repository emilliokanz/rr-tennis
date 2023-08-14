import React from 'react';
import { 
  Flex, 
  Text, 
  Divider, 
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';
import Image from 'next/image';

const data = [
  {
    image: '/image 2.png',
    title: 'Junior Single & Double UNY',
    description: 'An event for junior Tennis players age 10 - 16. This event was held in Jogjakarta and was successfully held by 150 contestant',
  },
  {
    image: '/image 2.png',
    title: 'Junior Single & Double UNY',
    description: 'An event for junior Tennis players age 10 - 16. This event was held in Jogjakarta and was successfully held by 150 contestant',
  },
]



export default function PrevEvents(receivedData: any) {
  const serverData = receivedData.data.data;
  console.log(serverData)
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
        OUR PAST EVENTS
      </Text>
      <Divider alignSelf={'center'} width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
        <Flex
        pt={'4.5vh'}
        justify={'space-evenly'}
        flexWrap='wrap'
        > 
        
        <Accordion allowToggle>
        {serverData.map((data: any, index: number)=> (
          <AccordionItem key={index}>
          <h2>
            <AccordionButton width={'59vw'}>
              <Box 
              flex='1' 
              textAlign='left'
              fontWeight={'semibold'}
              >
                {data.attributes.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
           <Flex
           flexWrap={{base: 'wrap', lg: 'unset'}}
           justify={'space-evenly'}
           gap={{base: '0', lg: '5vh'}}
           >
            <Box
            textAlign={'left'}
            width={{base:'100%', md: '50%'}}
            >{data.attributes.description}
            </Box>
            <Box
            height={{base:'250px', md: '45vh'}}
            width={{base:'100%', md: '50%'}}
            backgroundImage={`url(${process.env.CMS_URL}${data.attributes.image.data.attributes.url})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            >  
            </Box>
           </Flex>
          </AccordionPanel>
         </AccordionItem>
        ))}
        </Accordion> 
        </Flex>
    </Flex>
  )
}