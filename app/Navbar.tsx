import { Box, Flex, Stack ,HStack, Button,Image} from "@chakra-ui/react";

export default function NavBar(){
    return <HStack mt="10px">
        <Box width={"100%"} h={"50%"} m={"10px"} borderRadius={"10px"}  overflow={"hidden"} bgGradient='linear(to-r, teal.500, green.500)'>
        <Flex >
        <Image src="/panaverse80_80.png" alt="panavers" boxSize={"50px"}/>
            <HStack spacing={"25px"}>
                <Button  variant="ghost">Courses</Button>
                <Button variant="ghost">About</Button>
                <Button variant="ghost" colorScheme={"red"}>Apply</Button>
            </HStack>
        </Flex>
    </Box>
    </HStack>
}