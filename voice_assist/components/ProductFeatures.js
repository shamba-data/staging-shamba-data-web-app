import {Box,Icon, Text,HStack, Container, Button, Grid, Heading,Image } from '@chakra-ui/react';
import {AiOutlinePlus} from 'react-icons/ai'
import React from 'react'

const ProductFeatures = () => {
  return (
    <>
      <Box  d="flex" alignItems="center" mt={2} py={20} flexDirection="row">
        <Container maxW="container.xl">
          <Box align="center">
            <Heading as="h6" size="md">
              <Text fontFamily="Quicksand" fontStyle="normal" fontSize="3xl">Meet Shamba Data</Text>
            </Heading>
          </Box>
          <Box mt={10}>
            <Text 
              fontSize="2xl" 
              fontFamily="Quicksand" 
              letterSpacing="wide" 
              fontWeight="400" 
              lineHeight="40px"> 
              Shamba data uses Satellite data to help farmers maximize both crop yield and profits. To achieve this, Shamba Data voice assistant is powered by Mozilla `Sauti ya Jamii` to empower Rice and Maize farmers in Tanzania. 
            </Text>
          </Box>
        <Container maxW="container.xl" mt={48}>
            <Grid templateColumns="repeat(3, 1fr)" gap="52" mt={20}>
              <Box>
                <HStack spacing="16">
                <Image src="img/emojione-monotone_satellite-antenna (1).png" alt="satelite icon"/>
                <Icon boxSize="12" ml="36"><AiOutlinePlus color="#C4C4C4"/></Icon>
                </HStack>
                <Text pt={16} fontStyle="normal" fontFamily="Quicksand" fontSize="lg" fontWeight="light">Satellite Imagery</Text>
              </Box>
              <Box>
                <HStack spacing="16">
                <Image src="img/simple-icons_thealgorithms.png" alt="mozilla icon"/>
                <Icon boxSize="12" ml="36"><AiOutlinePlus color="#C4C4C4"/></Icon>
                </HStack>
                <Text pt="16" fontStyle="normal" fontFamily="Quicksand" fontSize="lg" fontWeight="light">
                  Mozilla powered voice Assistant
                </Text>
              </Box>
              <Box>
                <HStack spacing="16">
                <Image src="img/healthicons_agriculture-outline.png" alt="satelite icon"/>
                <Icon boxSize="12" ><AiOutlinePlus color="#C4C4C4"/></Icon>
                </HStack>
                <Text pt={16} fontStyle="normal" fontFamily="Quicksand" fontSize="lg" fontWeight="light">
                  Maximize crop yield and profits
                </Text>
              </Box>
            </Grid>
          </Container>
          <Box mt="28" align="center">
            <Button colorScheme="#000000" fontFamily="Quicksand" variant="outline">Try Our Voice assistant</Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProductFeatures