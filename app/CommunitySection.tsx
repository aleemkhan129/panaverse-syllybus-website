import { Container,Box, Heading, Grid, GridItem, Divider, Stack ,Text} from "@chakra-ui/react";

export default function ConmmunitySectoin(){
    return (
        <Container mt={"25%"} centerContent>
            <Box><Heading>Community</Heading></Box>
            <Grid h={"200px"} templateColumns={"repeat(2,2fr)"} mt="10%">
                <GridItem>
                    <Stack direction={"row"}>
                        <Divider orientation="vertical" height={"50px"} borderWidth="2px" borderStyle={"solid"} colorScheme="green" variant={"solid"}/>
                        <Stack>
                        <Heading size={"md"}>Dao Memebers</Heading>
                        <Text size={"md"}>3500+</Text>
                        </Stack>
                    </Stack>
                </GridItem>


                <GridItem>
                    <Stack direction={"row"}>
                        <Divider orientation="vertical" height={"50px"} borderWidth="2px" borderStyle={"solid"} colorScheme="green" variant={"solid"}/>
                        <Stack>
                        <Heading size={"md"}>Total Students Enrolled</Heading>
                        <Text size={"md"}>2000+</Text>
                        </Stack>
                    </Stack>
                </GridItem>


                <GridItem>
                    <Stack direction={"row"}>
                        <Divider orientation="vertical" height={"50px"} borderWidth="2px" borderStyle={"solid"} colorScheme="green" variant={"solid"}/>
                        <Stack>
                        <Heading size={"md"}>Faculty Members</Heading>
                        <Text size={"md"}>7+</Text>
                        </Stack>
                    </Stack>
                </GridItem>


                <GridItem>
                    <Stack direction={"row"}>
                        <Divider orientation="vertical" height={"50px"} borderWidth="2px" borderStyle={"solid"} colorScheme="green" variant={"solid"}/>
                        <Stack>
                        <Heading size={"md"}>Followers on Twitter</Heading>
                        <Text size={"md"}>1.5k+</Text>
                        </Stack>
                    </Stack>
                </GridItem>
            </Grid>
        </Container>
    )
}