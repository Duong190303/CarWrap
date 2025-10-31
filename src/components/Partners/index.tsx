"use client";

import { Container, Text, rem, Group, Image, Box } from "@mantine/core";
import classes from "./partner.module.css";

type Partner = {
  src: string;
  alt: string;
};

const PARTNERS: Partner[] = [
  { src: "/logobrand/groupbrand.png", alt: "groupbrand" },
];

export function Partners() {
  return (
    <Box
      component="section"
      className={classes.section}
      aria-label="Our partners"
    >
      <Container size="lg">
        <Text
          fz={{ base: rem(24), md: rem(28), lg: rem(32) }}
          fw={900}
          className={classes.heading}
        >
          OUR PARTNERS
        </Text>

        <Group className={classes.strip} gap="xl" wrap="nowrap">
          {PARTNERS.map((p) => (
            <Box key={p.alt} className={classes.logoCard}>
              <Image
                src={p.src}
                alt={p.alt}
                className={classes.logo}
                fit="contain"
                h="100%"
                w={{ base: "100%", sm: "60%", md: "70%", lg: "90%" }}
              />
            </Box>
          ))}
        </Group>
      </Container>
    </Box>
  );
}
