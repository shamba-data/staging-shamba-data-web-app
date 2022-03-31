import { Box, Container, Text, Heading } from '@chakra-ui/react'
import React from 'react'

const Timeline = () => {
  return (
    <>
        <Box
            d="flex" alignItems="center" mt={2} py={16} flexDirection="row">
            <Container maxW="container.xl">
                <Heading>
                    <Text
                        align="center"
                        fontStyle="normal"
                        fontWeight="normal"
                        letterSpacing="tight" 
                        fontSize="3xl"
                    >
                    We are emerging agriculture startup using AI to track advances in agriculture in Tanzania. Shamba data was founded in 2021
                    </Text>
                </Heading>
            </Container>
        </Box>
    </>
  )
}

export default Timeline