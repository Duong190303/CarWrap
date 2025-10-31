"use client";
import React from "react";

import { Box, Container, Grid, Title, Text, Image } from "@mantine/core";
import { BranchTable } from "./BranchTable";
export const Branch: React.FC = () => {
  return (
    <Box bg="gray.0" py={60}>
      <Container size="lg">
        <Title order={1} ta="center" c="dark.6" fw={900}>
          OUR GROUP
        </Title>
        <Text ta="center" mt={10} fz="sm" c="dimmed">
          One of the leading wrapping companies with a nationwide network across the USA.
        </Text>

        <Grid mt={40} align="center">
          {/* Bản đồ Mỹ */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box ta="center">
              <Image
                src="/map_USA.png"
                alt="USA Map"
                maw={600}
                mx="auto"
                style={{ filter: "grayscale(100%)" }}
              />
            </Box>
          </Grid.Col>

          {/* Bảng danh sách */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <BranchTable />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
