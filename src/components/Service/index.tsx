"use client";
import { Box, Container } from "@mantine/core";
import { ServiceList } from "./ServiceList";
// import { ButtonOutline } from "../Gallery/ButtonOutline"

export const Service: React.FC = () => {
  return (
    <Box
      component="section"
      pt={{ base: 0, sm: 50, md: 100 }}
      pb={{ base: 0, sm: 50, md: 100 }}
      id="services"
      bg={"var(--mantine-color-dark-8)"}
    >
      <Container size="xl">
        <ServiceList />
      </Container>
    </Box>
  );
};
