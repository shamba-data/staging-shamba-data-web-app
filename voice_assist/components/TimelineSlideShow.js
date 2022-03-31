import React from 'react'
import {Box, Image, Container} from '@chakra-ui/react'

const TimelineSlideShow = () => {
  return (
    <>
        <Box
            w="100%" 
            h="700" 
            backgroundImage="img/background_timeline.png" 
            backgroundSize="cover"
            boxShadow="lg"
            d="flex" alignItems="center" 
            py="20" flexDirection="row"
        >
          <Container maxW="container.xl">
             <Image w="100%" src="img/timeline_text.png" alt="time line text"></Image>
          </Container>
         
        </Box>
    </>
  )
}

export default TimelineSlideShow