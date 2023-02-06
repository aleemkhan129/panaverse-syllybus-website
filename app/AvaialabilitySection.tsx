import { Container,Flex,Heading,Text,Box, } from "@chakra-ui/react"
import { FcConferenceCall } from "react-icons/fc";
import {IoIosPeople} from "react-icons/io"
import {BsFillBookFill} from "react-icons/bs"
import {BiLocationPlus} from "react-icons/bi"
export default function AvailabilitySection(){
    return(
        
      <Container mt={"5%"} centerContent="true">
      <Box>
        <Heading>Availability</Heading>
      </Box>

      <Flex gap={"30px"} mt="30px">
        <Box
          borderWidth={"2px"}
          borderColor="blackAlpha.300"
          borderRadius={"10px"}
          width="180px"
        >
          <Flex>
            <Box p="4">
              <Heading size={"md"}>Members</Heading>
              <Text size={"sm"} fontWeight="bold">
                3,500+
              </Text>
            </Box>

            <Box p={"4"}>
              <IoIosPeople size={"2em"} />
            </Box>
          </Flex>
        </Box>

        <Box
          borderWidth={"2px"}
          borderColor="blackAlpha.300"
          borderRadius={"10px"}
          width="180px"
        >
          <Flex>
            <Box p="4">
              <Heading size={"md"}>Programs</Heading>
              <Text size={"sm"} fontWeight="bold">
                5+
              </Text>
            </Box>

            <Box p={"4"}>
              <BsFillBookFill size={"2em"} />
            </Box>
          </Flex>
        </Box>

        <Box
          borderWidth={"2px"}
          borderColor="blackAlpha.300"
          borderRadius={"10px"}
          width="180px"
        >
          <Flex>
            <Box p="4">
              <Heading size={"md"}>Cities</Heading>
              <Text size={"sm"} fontWeight="bold">
                4+
              </Text>
            </Box>

            <Box p={"4"}>
              <BiLocationPlus size={"2em"} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>

    )
}