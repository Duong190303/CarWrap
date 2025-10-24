import React from "react";
import {
  Container,
  Title,
  Grid,
  GridCol,
  Card,
  Image,
  Box,
  Stack,
  AspectRatio,
  ThemeIcon,
  Text,
  Flex,
} from "@mantine/core";
import { IconShare, IconClipboardText } from "@tabler/icons-react";
import classes from "./Lasted.module.css";

type Project = {
  src: string;
  name: string;
  service: string;
};

const PROJECTS: Project[] = [
  {
    src: "assets/lasted/car1.jpg",
    name: "McLaren 765LT",
    service: "PPF Service",
  },
  {
    src: "assets/lasted/car8.jpg",
    name: "Porsche 911",
    service: "Ceramic Coating",
  },
  {
    src: "assets/lasted/car3.jpg",
    name: "Ferrari 296",
    service: "Detailing Package",
  },
  {
    src: "assets/lasted/car1.jpg",
    name: "Chevrolet Camaro",
    service: "Wrap Satin Black",
  },
  { src: "assets/lasted/car8.jpg", name: "BMW M4", service: "PPF Front Kit" },
  {
    src: "assets/lasted/car6.jpg",
    name: "Alfa Romeo 33",
    service: "Studio Photoshoot",
  },
  {
    src: "assets/lasted/car7.jpg",
    name: "Maserati GranTurismo",
    service: "Paint Correction",
  },
  {
    src: "assets/lasted/car8.jpg",
    name: "Porsche Cayman",
    service: "Window Tint",
  },
];

function Thumb({ src, name, service }: Project) {
  return (
    <Card padding={0} className={classes.thumb}>
      <AspectRatio ratio={16 / 9}>
        <Image src={src} alt={`${name} – ${service}`} fit="cover" />
      </AspectRatio>

      {/* Overlay + caption */}
      <Box className={classes.overlay}>
        <Flex justify="space-between" mb="auto" gap={10} p={20}>
          <ThemeIcon radius="xl" size={32} c={"dark"} bg="#f3f3f3" variant="transaction">
            <IconClipboardText stroke={1} />
          </ThemeIcon>
          <ThemeIcon radius="xl" size={32} c={"dark"} bg="#f3f3f3" variant="transaction">
            <IconShare stroke={1} />
          </ThemeIcon>
        </Flex>
        <Box className={classes.caption}>
          <Text className={classes.title}>{name}</Text>
          <Text className={classes.service}>{service}</Text>
        </Box>
      </Box>
    </Card>
  );
}

export const Lasted: React.FC = () => {
  return (
    <Box
      style={{
        background:
          "radial-gradient(80% 80% at 50% 0%, #171a20 0%, #0f1114 60%)",
      }}
      pt={70}
    >
      <Container size="100%" py={0}>
        <Stack gap="xs" align="center" mb="xl">
          <Title order={2} c="white" style={{ letterSpacing: 2 }}>
            LASTED PROJECTS
          </Title>
        </Stack>

        <Grid gutter={0}>
          {/* Row 1: four equal tiles */}
          {PROJECTS.slice(0, 4).map((p) => (
            <GridCol key={p.src + p.name} span={{ base: 12, sm: 6, md: 3 }}>
              <Thumb {...p} />
            </GridCol>
          ))}

          {/* Row 2 */}
          {PROJECTS.slice(4, 7).map((p) => (
            <GridCol key={p.src + p.name} span={{ base: 12, md: 4 }}>
              <Thumb {...p} />
            </GridCol>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
