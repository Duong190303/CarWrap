"use client";

import React, { useRef } from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  Image,
  rem,
  Overlay,
  Flex,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import classes from "./SupplierList.module.css";
// import { GradientText } from "../UI/GradientText/GradientText";

export type Supplier = {
  id: string | number;
  name: string;
  logo: string;
  href?: string;
};

// ── Variants ──────────────────────────────────────────────────

// Title rơi từ trên xuống
const titleVariants = {
  hidden: { opacity: 0, y: -36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Blurb fade in sau title
const blurbVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

// Carousel container stagger
const carouselContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Mỗi logo slide lên + fade
const logoVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Component ─────────────────────────────────────────────────
export const SupplierList: React.FC<{
  items?: Supplier[];
  title?: string;
  titleHighlight?: string;
  blurb?: string;
  background?: string;
}> = ({
  items = demoSuppliers,
  title = "OUR",
  titleHighlight = "SUPPLIERS",
  blurb = "WrapStyle Vietnam values service quality and customer satisfaction as our core. We partner only with reputable brands recognized globally.",
  background = "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop",
}) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  // Single ref — trigger khi section vào viewport
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  return (
    <Box
      pos="relative"
      // py={rem(48)}
      style={{ overflow: "hidden" }}
      ref={sectionRef}
    >
      {/* Background image */}
      <Image
        src={background}
        alt="Suppliers background"
        h={rem(360)}
        w="100%"
        fit="cover"
      />
      <Overlay opacity={1} zIndex={1} />

      <Container
        size="xxl"
        style={{
          position: "relative",
          zIndex: 2,
          paddingBottom: rem(50),
          paddingTop: rem(50),
        }}
        bg="var(--mantine-color-dark-8)"
      >
        <Stack align="center" gap={0} mb="lg" bg="var(--mantine-color-dark-8)">
          {/* ── Title ── */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Flex direction="row" align="center" gap={rem(8)} justify="center">
              <Text
                fz={{ base: rem(24), md: rem(28), lg: rem(32) }}
                fw={900}
                tt="uppercase"
                c="var(--text-primary)"
                style={{ letterSpacing: 1 }}
              >
                {title}
              </Text>
              <Text
                fz={{ base: rem(24), md: rem(28), lg: rem(32) }}
                fw={900}
                tt="uppercase"
                c="var(--text-primary)"
                style={{ letterSpacing: 1 }}
              >
                {titleHighlight}
              </Text>
            </Flex>
          </motion.div>

          {/* ── Blurb ── */}
          <motion.div
            variants={blurbVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Text
              ta="center"
              fz={{ base: rem(14), md: rem(16), lg: rem(18) }}
              c="var(--mantine-color-dark-3)"
              maw={960}
            >
              {blurb}
            </Text>
          </motion.div>
        </Stack>

        {/* ── Logo carousel — stagger từng logo ── */}
        <motion.div
          variants={carouselContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Carousel
            slideSize={{ base: "100%", sm: "40%", md: "28%" }}
            slideGap="xxl"
            withIndicators={false}
            withControls={false}
            nextControlIcon={<IconChevronRight size={22} />}
            previousControlIcon={<IconChevronLeft size={22} />}
            emblaOptions={{ loop: true, align: "center", slidesToScroll: 1 }}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            classNames={{ slide: classes.Slide }}
            pl={{ base: 0, md: 250 }}
            pr={{ base: 0, md: 250 }}
          >
            {items.map((s) => (
              <Carousel.Slide key={s.id}>
                <motion.div variants={logoVariants}>
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fit="contain"
                    h={{ base: 40, sm: 50, md: 56 }}
                    mah={56}
                    w="auto"
                    style={{
                      transition: "opacity 0.25s ease, filter 0.25s ease",
                    }}
                    className={classes.logoImg}
                  />
                </motion.div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </motion.div>
      </Container>
    </Box>
  );
};

// --- Demo data ---
const demoSuppliers: Supplier[] = [
  { id: 1, name: "Wrapstock", logo: "/logobrand/brand1.png", href: "#" },
  { id: 2, name: "3D Changer", logo: "/logobrand/brand2.png" },
  { id: 3, name: "Unreal Exists", logo: "/logobrand/brand3.png" },
  { id: 4, name: "XERO", logo: "/logobrand/brand4.png" },
  { id: 5, name: "Premium Films", logo: "/logobrand/brand5.png" },
  { id: 6, name: "3D Changer", logo: "/logobrand/brand6.png" },
  { id: 7, name: "Unreal Exists", logo: "/logobrand/brand7.png" },
  { id: 8, name: "XERO", logo: "/logobrand/brand8.png" },
];
