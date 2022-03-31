import React from 'react'
import {Box,Text, Container, Image, Heading, Button} from "@chakra-ui/react"; 
const VoiceAssistant = () => {
  return (
    <>
      <Box w="100%" 
       h="700" 
       backgroundImage="img/unsplash_kZ4G8x-aipo.jpg" 
       backgroundSize="cover"
       boxShadow="lg"
       d="flex" alignItems="center" 
       py="20" flexDirection="row">
        <Container maxWidth="container.xl">
          <Box>
            <Heading mt={-95} mb={10} as="h2"  size="2xl">
             <Text 
              align="center"
              fontStyle="normal"
              letterSpacing="wider" 
              color="#f5f7f5" textShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)">
                Using Artifical Intelligence (AI) to Empower Tanzanian Farmers in with real-time market price updates
             </Text>
            </Heading>
          </Box>
          <Box mt={125}>
            <Text 
              align="center"
              fontFamily="Quicksand"
              fontStyle="normal"  
              color="#ffff" 
              fontWeight="400"
              fontSize="3xl"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                Powered by Mozilla
            </Text>
          </Box>
          <Box mt={10} align="center">
             <Button
              fontFamily="QuickSand" 
              variant="outline" 
              size="lg"
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              textColor="#ffff"
              _active={{
              bg: '#fffff',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
              }}
              _focus={{
                boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                textColor:"#0a0a0a"
              }}>
             Try our voice Assistant
              </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default VoiceAssistant