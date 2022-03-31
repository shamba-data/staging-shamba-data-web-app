import {Grid, Button,Link, Icon, Stack,  Box, Text, Container, Heading, Avatar } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineGithub, AiFillLinkedin} from "react-icons/ai";
import { MdEmail } from "react-icons/md";


const Team = () => {
  return (
    <>
      <Box d="flex" alignItems="center" mt={2} py={16} flexDirection="row">
        <Container maxW="container.xl">
          <Heading>
            <Text
              align="center"
              fontStyle="normal"
              fontWeight="semibold"
              letterSpacing="unset" 
              fontSize="3xl"
            >
              Meet the Founders
            </Text>
          </Heading>
          <Container maxW="container.xl" mt="16">
            <Grid  templateColumns="repeat(2, 1fr)" gap={52}>
              <Box align="center">
                <Avatar size="2xl" src="img/kondwani.jpeg" name="kondwani" mb="10"></Avatar>
                <Text mb="10">
                  Kondwani is a fullstack machine learning & blockchain engineer. He has over 3 years experience deploying fullstack web apps. Further, he is the a serial hackathon winner and co-founder Kuleni, a construction startup that matches house owners temporary workers with Artifical Intelligence.
                </Text>
                <Stack ml="40" direction="row" spacing={4} align="center">
                  <Link href="https://github.com/kondwani7" alt="github">
                    <Icon color="#8e9c92" boxSize="12">
                      <AiOutlineGithub/>
                    </Icon>
                  </Link>
                  <Link href="mailto: kondwanigideon.ngulube@gmail.com" alt="email">
                    <Icon color="#8e9c92" boxSize="12">
                      <MdEmail/>
                    </Icon>
                  </Link>
                  <Link href="https://www.linkedin.com/in/kondwani-ngulube-4489ba174/" alt="linkedin">
                    <Icon color="#8e9c92" boxSize="12">
                      <AiFillLinkedin/>
                    </Icon>
                  </Link>
                </Stack>
              </Box>
              <Box align="center">
                <Avatar size="2xl" src="img/brighton.png" name="kondwani" mb="10"></Avatar>
                <Text mb="10">
                  Brighton is a software engineer with background in Data Science and ML engineering.Outside work, I love jamming along with Blues and Pop music on Piano.
I also like meeting new people over a cup of coffee. Feel free to reach out if you want to grab a brunch.
                </Text>
                <Stack ml="40" direction="row" spacing={4} align="center">
                  <Link href="https://github.com/BrightonMboya" alt="github">
                    <Icon color="#8e9c92" boxSize="12">
                      <AiOutlineGithub/>
                    </Icon>
                  </Link>
                  <Link href="mailto: b.mboya@alustudent.com " alt="email">
                    <Icon color="#8e9c92" boxSize="12">
                      <MdEmail/>
                    </Icon>
                  </Link>
                  <Link href="https://www.linkedin.com/in/brighton-mboya-52b455158/" alt="linkedin">
                    <Icon color="#8e9c92" boxSize="12">
                      <AiFillLinkedin/>
                    </Icon>
                  </Link>
                </Stack>
              </Box>
            </Grid>
          </Container>
        </Container>
      </Box>
    </>
  )
}

export default Team