import React, {useState} from 'react'
import {Box, Button, Container, Heading, Input, InputGroup, InputRightElement, Text} from '@chakra-ui/react';
const SignUp = () => {
  const [password, setPassword] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handlePassword = () => {
    setPassword(!password)
  }
  return (
    <>
      <Box
        w="100%" 
       h="500" 
       backgroundImage="img/sign_up_background.png" 
       backgroundSize="cover"
       boxShadow="lg"
       opacity="initial"
       d="flex" alignItems="center" 
       py="20" flexDirection="row"
      >
        <Container maxW="container.xl">
          <Box>
            <Heading mt="-10" as="h2"  size="2xl">
              <Text 
              textAlign="center"
              fontStyle="normal"
              letterSpacing="wide" 
              color="#f5f7f5">
                Ready to be part our the Family?
             </Text>
            </Heading>
          </Box>
          <Box align="center" mt="16">
            <form onSubmit={handleSubmit}>
                <Input
                  backgroundColor="#FAF3F3"
                  opacity="0.8"
                  focusBorderColor="white"
                  type="email"
                  variant='outline'
                  size="lg"
                  fontWeight="400"
                  width="50%"
                  placeholder='Enter Email address'/>
                <InputGroup size="lg" mt={8} width="50%">
                  <Input
                    backgroundColor="#FAF3F3"
                    opacity="0.75"
                    fontWeight="400"
                    focusBorderColor="white"
                   pr='4.5rem'
                   type={password ? 'text' : 'password'}
                  placeholder='Enter Password'/>
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handlePassword}>
                    {password ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                
              <Button onClick={()=> {handleSubmit}} mt="16" color="#ffff" size="lg" type="submit" variant="outline">Sign Up Now</Button>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default SignUp