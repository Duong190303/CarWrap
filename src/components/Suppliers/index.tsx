'use client';
import { Box, Container, Flex } from "@mantine/core";
import { SupplierList } from "./SupplierList";
export const Suppliers: React.FC = () => {
  return (
    <Box component="section" pt={0} id="suppliers" bg={"var(--mantine-color-dark-8)"}>
      <Container fluid px={{ base: 0, }} mx={{ base: 0,}}>
        <Flex
          direction={{ base: "column-reverse", sm: "column" }}
          gap={{ base: 20, sm: 50 }}
          p={0}
        >
          <SupplierList />

        </Flex>
      </Container>
    </Box>
  );
};
