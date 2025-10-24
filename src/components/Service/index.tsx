import { Box, Container, Flex } from "@mantine/core"
import { ServiceList } from "./ServiceList"
// import { ButtonOutline } from "../Gallery/ButtonOutline"

export const Service: React.FC = () => {
  return (
    <Box component="section" pt={{ base: 0, sm: 80 }} id="services">
      <Container size="xl" mx="auto">
        <Flex direction={{ base: "column-reverse", sm: "column" }} gap={{ base: 20, sm: 50 }} p={0}>
          <ServiceList />
          {/* <ButtonOutline>View all services</ButtonOutline> */}
        </Flex>
      </Container>
    </Box>
  )
}
