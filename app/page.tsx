"use client";
import { FcConferenceCall } from "react-icons/fc";
import {IoIosPeople} from "react-icons/io"
import {BsFillBookFill} from "react-icons/bs"
import {BiLocationPlus} from "react-icons/bi"

import { Text, Image, Box, Heading, Flex, Container, Button, Stack, Card, CardBody,HStack, Grid, GridItem } from "@chakra-ui/react";
import Courses from "./Courses";
import ConmmunitySectoin from "./CommunitySection";
export default function Home() {
  return (
    <>
      <Container maxW="container.lg" padding={"0px"} mt="10%">
        <Box pr={"30%"}>
          <Heading as="h1" fontSize={"5xl"} mb="10px">
            Become a Certified Developer with Panaverse
          </Heading>
          <Text fontSize={"lg"}>
            A One and Quarter Years Panaverse DAO Earn as you Learn Program.
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, and Ambient Computing/IoT Technologies
          </Text>
        </Box>
        <Button colorScheme={"green"} mt={"5%"}>
          Apply
        </Button>
      </Container>

      
      
    


    </>
  );
}
