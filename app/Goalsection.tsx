import { Box, Container, Heading ,Text} from "@chakra-ui/react";

export default function GoalSection(){
    return (
        <Container centerContent="true">
            <Heading>Our Ultimate Goal</Heading>
            <Box mt={"5%"}>
                <Text size={"md"}>
                The mission of Panaverse is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
                </Text>
            </Box>
        </Container>
    )
}