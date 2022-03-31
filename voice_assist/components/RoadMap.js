import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const RoadMap = () => {
  return (
    <>
      <Box
        w="100%" 
        h="150" 
        backgroundImage="img/our_story_background.png" 
        backgroundSize="cover"
        boxShadow="lg" 
        d="flex" alignItems="center" 
        mt={2} py={16} 
        flexDirection="row">
        <Container  maxW="container.xl">
          <Box align="center">
            <Heading>
              <Text
                align="center"
                fontStyle="normal"
                fontWeight="medium"
                letterSpacing="wider" 
                color="#f5f7f5"
                >
                Our Story</Text>
            </Heading>
          </Box>
          
         
        </Container>
      </Box>
    </>
  )
}

export default RoadMap