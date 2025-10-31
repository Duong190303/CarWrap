import { Box, Container } from "@mantine/core";
import { ServiceList } from "./ServiceList";
// import { ButtonOutline } from "../Gallery/ButtonOutline"

export const Service: React.FC = () => {
  return (
    <Box
      component="section"
      pt={{ base: 0, sm: 50, md: 30 }}
      pb={{ base: 0, sm: 50, md: 30 }}
      id="services"
      bg={"var(--mantine-color-dark-8)"}
    >
      <Container size="xl" py={20}>
        <ServiceList />
      </Container>
    </Box>
  );
};
