import React from 'react'
import {Text, FormControl, Box, Input, Button, ButtonGroup, Image, Container,Grid, Heading, Badge, InputGroup, InputLeftElement } from '@chakra-ui/react';
import {AiOutlineArrowRight, AiOutlineSearch} from 'react-icons/ai'
import {IoIosPin} from 'react-icons/io'
const Navbar = () => {
  return (
    <>
    <header>
      <Box boxShadow="lg" w="100%" d="flex" alignItems="center" mt="2" mb="1.5" p={2} justifyContent="space-between">
          <Box>
            <Text fontSize="3xl" color="green">Shamba Data</Text>
          </Box>
          <ButtonGroup spacing="6">
            <Button pr={2} colorScheme="gray.600" fontSize="sm" variant="outline">Login</Button>
            <Button  colorScheme="green" fontSize="sm" variant="solid">Sign Up</Button>
          </ButtonGroup>
        </Box>
    </header>
    </>
  )
}

export default Navbar