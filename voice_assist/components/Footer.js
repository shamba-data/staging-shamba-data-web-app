import React from 'react'
import {
  Box,Button,Container,Heading,Divider, ListIcon,List,ListItem,Link,Image, Text, Flex, Stack, Icon
} from '@chakra-ui/react';
import { AiFillInstagram, AiOutlineInstagram, AiFillLinkedin} from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";
import {RiTwitterLine} from "react-icons/ri";

const Footer = () => {
  return (
    <>
    <Box w="100%" backgroundColor="#183660" mt="20" color="#ffffff" background="#292e2b" py="10">
        <Container maxW="container.xl">
    <Divider my="5" />
          <Box display="flex" alignItems="top">
            <Box flex="1">
                <Heading size="sm">Talk to Us</Heading>
                <List mt="4" spacing={2}>
                    <ListItem >
                        <Link href="mailto: kondwanigideon.ngulube@gmail.com" alt="email">
                        <ListIcon color="#8e9c92" as= {MdEmail} boxSize="6">
                        </ListIcon>
                        Email us
                    </Link>                      
                    </ListItem>
                </List>
            </Box>

            <Box flex="1">
                <Heading size="sm">Our Location</Heading>
                <List mt="4" spacing={2}>
                <ListItem>
                    <ListIcon as={MdLocationPin} boxSize={6}/>
                    We are based in Kigali Rwanda
                </ListItem>
                
                </List>
            </Box>

            <Box flex="1">
                <Heading size="sm">Connect with us</Heading>
                <List mt="4" spacing={2}>
                <ListItem>
                    <Stack direction="row" spacing={4} align="center">
                  <Link href="" alt="instagram">
                    <Icon color="#ffff" boxSize="12">
                      <AiOutlineInstagram/>
                    </Icon>
                  </Link>
                  <Link href="" alt="twitter">
                    <Icon color="#fff" boxSize="12">
                      <RiTwitterLine/>
                    </Icon>
                  </Link>
                  <Link href="" alt="linkedin">
                    <Icon color="#fff" boxSize="12">
                      <AiFillLinkedin/>
                    </Icon>
                  </Link>
                </Stack>
                </ListItem>
                </List>
            </Box>
        </Box>
        
        {/* bottom links */}
        <Box align="center" d="flex" mt="10">
          {' '}
          <Link mr="5" fontSize="sm">
            © 2021 Meetup
          </Link>
          <Link mr="5" fontSize="sm">
            Terms of Service
          </Link>
          <Link mr="5" fontSize="sm">
            Privacy Policy
          </Link>
          <Link mr="5" fontSize="sm">
            Cookie Policy
          </Link>
          <Link mr="5" fontSize="sm">
            Help
          </Link>
        </Box>
      </Container>
    </Box>
    </>
  )
}

export default Footer