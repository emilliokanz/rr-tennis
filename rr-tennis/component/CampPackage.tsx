import React, { useState } from 'react';
import { 
  Flex, 
  Text, 
  useBreakpointValue, 
  Box,
  Button,
  Divider,
  Link,
  useDisclosure,
  SimpleGrid,
  GridItem,
  Grid
} from '@chakra-ui/react';
import { stringify } from 'querystring';


const juniorData = [
  {
    id: '1',
    title: 'BEGINNER CLASS',
    age: '4 - 18',
    description: 'The Red Ball program is the first step on the LTCA pathway. Designed for our youngest players (roughly 4-7 years old), we play over a mini-net on a court about ¼ the size of a full size tennis court. It’s just like the real game and gives players opportunities to have long rallies and play different types of shots. The focus at this level is to build the basic ABC’s (Agility, Balance and Co-ordination) as well as fundamental tennis technique - but whilst keeping things fun and pressure-free for our juniors. Some of the top Red Ball players will start to play matches and understand the scoring system as they become ready.',
    price: 'Rp. 1.000.000/month',
    color: 'brand.secondary'
  },
  {
    id: '2',
    title: 'INTERMEDIATE CLASS',
    age: '4 - 18',
    description: 'The Red Ball program is the first step on the LTCA pathway. Designed for our youngest players (roughly 4-7 years old), we play over a mini-net on a court about ¼ the size of a full size tennis court. It’s just like the real game and gives players opportunities to have long rallies and play different types of shots. The focus at this level is to build the basic ABC’s (Agility, Balance and Co-ordination) as well as fundamental tennis technique - but whilst keeping things fun and pressure-free for our juniors. Some of the top Red Ball players will start to play matches and understand the scoring system as they become ready.',
    price: 'Rp. 1.000.000/month',
    color: '#d3cc11'
  },
  {
    id: '3',
    title: 'ADVANCE CLASS',
    age: '4 - 18',
    description: 'The Red Ball program is the first step on the LTCA pathway. Designed for our youngest players (roughly 4-7 years old), we play over a mini-net on a court about ¼ the size of a full size tennis court. It’s just like the real game and gives players opportunities to have long rallies and play different types of shots. The focus at this level is to build the basic ABC’s (Agility, Balance and Co-ordination) as well as fundamental tennis technique - but whilst keeping things fun and pressure-free for our juniors. Some of the top Red Ball players will start to play matches and understand the scoring system as they become ready.',
    price: 'Rp. 1.000.000/month',
    color: '#ae5400'
  },
]

const adultData = [
  {
    id: '4',
    title: '1 ON 1 SESSION',
    age: 'no limit',
    description: 'The Red Ball program is the first step on the LTCA pathway. Designed for our youngest players (roughly 4-7 years old), we play over a mini-net on a court about ¼ the size of a full size tennis court. It’s just like the real game and gives players opportunities to have long rallies and play different types of shots. The focus at this level is to build the basic ABC’s (Agility, Balance and Co-ordination) as well as fundamental tennis technique - but whilst keeping things fun and pressure-free for our juniors. Some of the top Red Ball players will start to play matches and understand the scoring system as they become ready.',
    price: 'Rp. 1.000.000/month',
    color: '#96a09d'
  },
  {
    id: '5',
    title: 'GROUP SESSION',
    age: 'no limit',
    description: 'The Red Ball program is the first step on the LTCA pathway. Designed for our youngest players (roughly 4-7 years old), we play over a mini-net on a court about ¼ the size of a full size tennis court. It’s just like the real game and gives players opportunities to have long rallies and play different types of shots. The focus at this level is to build the basic ABC’s (Agility, Balance and Co-ordination) as well as fundamental tennis technique - but whilst keeping things fun and pressure-free for our juniors. Some of the top Red Ball players will start to play matches and understand the scoring system as they become ready.',
    price: 'Rp. 1.000.000/month',
    color: '#96a09d'
  },
]

const ToggleItem = ({title, age, description, id, price, color, index, link}: any) => {
  const [visible, setVisible] = useState(true)
  const handleOnChange = () => {   
    
    setVisible(!visible)
    if (visible) {
      const viewText = document.getElementById(index)
      return console.log(viewText?.innerText)
    }
  };
  return (
    <>
    <Flex
        key={index}
        pb={'2rem'}
        width={'20rem'}
        flexDir={'column'}
        borderWidth={'1px'}
        borderColor={color}>
          <Flex 
          pt={'1rem'}
          width={'19.9rem'}
          height={'3rem'}
          color={'white'}
          justify={'center'}
          bgColor={color}>
            {title}
          </Flex>
          <Box
          px={'1.5em'}
          pt={'2rem'}>
          <Text
          textAlign={'left'}
          pb={'0.5rem'}
          > 
          Age: {age}
          </Text>
          <Divider></Divider>
          <Box
            textAlign={'left'}
            pb={'0.5rem'}
            id={id}
            className={visible? 'hidden' : 'visible'}
          > 
              Description: {description}
          </Box>
          <Box
            as='button'
            id={id}
            onClick={handleOnChange}
            fontWeight={'semibold'}
          >
            {visible? 'View More' : 'View Less'}
          </Box>
          <Divider></Divider>
          <Text
          textAlign={'left'}
          pb={'0.5rem'}
          > 
          Price: {price}
          </Text>
          <Box pt={'3vh'}>
              <Link href={link}>
                <Button size={{base: 'xs', md: 'md', lg: 'lg'} } variant='ghost'> Sign-up</Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      
    </>
  )
}

export default function CampPackage() {
  
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
        JUNIOR
      </Text>
      <Text 
      pt={'4.5vh'}
      fontSize={bodyVariant}>
      From 4 year old beginners, to 18 year old pros! Our after-school academy has a place for every junior player!
      Using a ‘Games-Based’ approach from our youngest participants, our Liga.Tennis coaches focus on building the foundations for not only a successful tennis player - but a happy and healthy athlete.       
      </Text>
      <Flex
      py={'5vh'}
      gap={'5vh'}
      justify={{base: 'center', lg: 'space-between'}}
      flexWrap={'wrap'}
      >
      {juniorData.map((data: any, index: number) => (
      <Box>
        <ToggleItem 
        key={data.index}
        title={data.title} 
        age={data.age}
        description={data.description}
        id={data.id}
        price={data.price}
        color={data.color}
        index={data.index}
        link={data.link}
        />
      </Box>     
      ))}
     </Flex>
      <Text 
      fontSize={headerVariant}
      fontWeight='bold'
      >
        ADULT
      </Text>
      <Text 
      pt={'4.5vh'}
      fontSize={bodyVariant}>
      From 4 year old beginners, to 18 year old pros! Our after-school academy has a place for every junior player!
      Using a ‘Games-Based’ approach from our youngest participants, our Liga.Tennis coaches focus on building the foundations for not only a successful tennis player - but a happy and healthy athlete.       
      </Text>
      <Flex
      py={'5vh'}
      gap={'5vh'}
      justify={{base: 'center', lg: 'space-evenly'}}
      flexWrap={'wrap'}
      >
      {adultData.map((data: any, index: number) => (
      <Box key={data.index}>
        <ToggleItem 
        title={data.title} 
        age={data.age}
        description={data.description}
        id={data.id}
        price={data.price}
        color={data.color}
        index={data.index}
        link={data.link}
        />
      </Box>     
      ))}
      </Flex>
    </Flex>
  )
}