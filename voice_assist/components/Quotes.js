import { Box, Container, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Quotes = () => {
  return (
    <>
      <Box d="flex" alignItems="center" mt={2} py={16} flexDirection="row">
        <Container  maxW="container.xl">
          <Box align="center">
            <Heading>
              <Image src="img/double_quotes.png" alt="quote sign"/>
            </Heading>
          </Box>
          <Box align="center" mb={5}>
            <Text fontFamily="Quicksand" fontWeight="400" fontSize="xl" fontStyle="normal">
              Unless Africa uses modern technologies, our farmers output will remain low and we will remain dependent on others to feed us. 
            </Text>
          </Box>
          <Box align="center">
            <Text fontFamily="Quicksand" fontWeight="light" fontStyle="normal">
              Akinwumi Adesina, 2017 World Food Prize winner
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Quotes