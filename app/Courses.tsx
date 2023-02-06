import { Container, Heading,Box,Grid,GridItem,Text} from "@chakra-ui/react"

export default function Courses(){
    return (
        <Container centerContent="true" mt={"5%"}>
        <Heading>Courses Offered</Heading>
        <Box mt={"20px"}>
          <Grid
            h="200px"
            templateRows="repeat(3, 3fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem>
              <Box borderWidth={"2px"} width="300px" padding={"5px"} textAlign="center" borderRadius={"10px"} bg="gray.200">
                <Heading size={"md"}>Web 3.0</Heading>
                <Text>This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.</Text>
              </Box>
            </GridItem>
            

            <GridItem>
              <Box borderWidth={"2px"} width="300px" padding={"5px"} textAlign="center" borderRadius={"10px"} bg="gray.200">
                <Heading size={"md"}>Metaverse</Heading>
                <Text>This Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.</Text>
              </Box>
            </GridItem>

            <GridItem>
              <Box borderWidth={"2px"} width="300px" padding={"5px"} textAlign="center" borderRadius={"10px"} bg="gray.200">
                <Heading size={"md"}>Blockchain</Heading>
                <Text>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.</Text>
              </Box>
            </GridItem>

            <GridItem>
              <Box borderWidth={"2px"} width="300px" padding={"5px"} textAlign="center" borderRadius={"10px"} bg="gray.200">
                <Heading size={"md"}>Artificial Intelligence</Heading>
                <Text>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
              </Box>
            </GridItem>
              <GridItem>
              <Box borderWidth={"2px"} width="300px" padding={"5px"} textAlign="center" borderRadius={"10px"} bg="gray.200">
                <Heading size={"md"}>Cloud-Native Computing</Heading>
                <Text>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
              </Box>
            </GridItem>

            <GridItem>
              <Box borderWidth={"2px"} width="300px" padding={"5px"} textAlign="center" borderRadius={"10px"} bg="gray.200">
                <Heading size={"md"}>Ambient Computing and IoT</Heading>
                <Text>Roll your own API to easily connect with other apps or services. Pull in updates.</Text>
              </Box>
            </GridItem>
            
            <GridItem>
              <Box borderWidth={"2px"} width="300px" padding={"5px"} textAlign="center" borderRadius={"10px"} bg="gray.200">
                <Heading size={"md"}>Genomics and Bioinformatics Specialization</Heading>
                <Text>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved</Text>
              </Box>
            </GridItem>

            <GridItem>
              <Box borderWidth={"2px"} width="300px" padding={"5px"} textAlign="center" borderRadius={"10px"} bg="gray.200">
                <Heading size={"md"}>Network Programmability and Automation Specialization</Heading>
                <Text>Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile</Text>
              </Box>
            </GridItem>

          </Grid>
        </Box>
      </Container>
    )
}