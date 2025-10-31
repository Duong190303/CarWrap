"use client";

import React from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  Image,
  rem,
  // useMantineTheme,
  Overlay,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import classes from "./SupplierList.module.css";

export type Supplier = {
  id: string | number;
  name: string;
  logo: string; // transparent PNG/SVG
  href?: string;
};

export const SupplierList: React.FC<{
  items?: Supplier[];
  title?: string;
  blurb?: string;
  background?: string;
}> = ({
  items = demoSuppliers,
  title = "OUR SUPPLIERS",
  blurb = "WrapStyle Vietnam values service quality and customer satisfaction as our core. We partner only with reputable brands recognized globally.",
  background = "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop",
}) => {
  // const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Box pos="relative" py={rem(48)} style={{ overflow: "hidden" }}>
      <Image
        src={background}
        alt="Suppliers background"
        h={rem(360)}
        w="100%"
        fit="cover"
      />
      <Overlay
        gradient="linear-gradient(180deg, rgba(12,12,16,.65) 0%, rgba(12,12,16,.85) 60%, rgba(12,12,16,.85) 100%)"
        color="#000"
        opacity={1}
        zIndex={1}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
        <Stack align="center" gap="xs" mb="lg">
          <Text
            fz={{ base: rem(24), md: rem(28), lg: rem(32) }}
            fw={900}
            tt="uppercase"
            c="#EAF0FF"
            mt={20}
            style={{ letterSpacing: 1 }}
          >
            {title}
          </Text>
          <Text
            ta="center"
            fz={{ base: rem(14), md: rem(16), lg: rem(18) }}
            c="rgba(255,255,255,.75)"
            maw={960}
          >
            {blurb}
          </Text>
        </Stack>

        <Carousel
          slideSize={{ base: "100%", sm: "40%", md: "28%" }}
          slideGap="lg"
          withIndicators={false}
          withControls={false}
          nextControlIcon={<IconChevronRight size={22} />}
          previousControlIcon={<IconChevronLeft size={22} />}
          emblaOptions={{ loop: true, align: "center", slidesToScroll: 1 }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          classNames={{ slide: classes.Slide }}
        >
          {items.map((s) => (
            <Carousel.Slide key={s.id}>
              <Image
                src={s.logo}
                alt={s.name}
                fit="contain"
                h={{ base: 40, sm: 50, md: 56 }}
                mah={56}
                w="auto"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

// --- Demo data: replace with your suppliers logos ---
const demoSuppliers: Supplier[] = [
  {
    id: 1,
    name: "Wrapstock",
    logo: "/logobrand/brand1.png",
    href: "#",
  },
  {
    id: 2,
    name: "3D Changer",
    logo: "/logobrand/brand2.png",
  },
  {
    id: 3,
    name: "Unreal Exists",
    logo: "/logobrand/brand3.png",
  },
  {
    id: 4,
    name: "XERO",
    logo: "/logobrand/brand4.png",
  },
  {
    id: 5,
    name: "Premium Films",
    logo: "/logobrand/brand5.png",
  },
  {
    id: 6,
    name: "3D Changer",
    logo: "/logobrand/brand6.png",
  },
  {
    id: 7,
    name: "Unreal Exists",
    logo: "/logobrand/brand7.png",
  },
  {
    id: 8,
    name: "XERO",
    logo: "/logobrand/brand8.png",
  },
];
