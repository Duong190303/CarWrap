"use client";

import React, { useRef } from "react";
import {
  Container,
  rem,
  Grid,
  GridCol,
  Card,
  Image,
  Box,
  AspectRatio,
  ThemeIcon,
  Text,
  Flex,
  Badge,
} from "@mantine/core";
import { IconShare, IconEye } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import classes from "./Lasted.module.css";
import { GradientText } from "../UI/GradientText/GradientText";

type Project = {
  src: string;
  name: string;
  service: string;
};

const PROJECTS: Project[] = [
  {
    src: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774064200/3_cqiscn.jpg",
    name: "McLaren 765LT",
    service: "PPF Service",
  },
  {
    src: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774064199/4_s42wj9.jpg",
    name: "Porsche 911",
    service: "Ceramic Coating",
  },
  {
    src: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774064199/1_uzi55h.jpg",
    name: "Ferrari 296",
    service: "Detailing Package",
  },
  {
    src: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774063498/car7_oir19y.jpg",
    name: "Chevrolet Camaro",
    service: "Wrap Satin Black",
  },
  { src: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774063496/car6_sonxlt.jpg", name: "BMW M4", service: "PPF Front Kit" },
  {
    src: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774063495/car5_bghuc2.jpg",
    name: "Alfa Romeo 33",
    service: "Studio Photoshoot",
  },
  {
    src: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774064198/2_qg3mja.jpg",
    name: "Maserati GranTurismo",
    service: "Paint Correction",
  },
];

// ── Variants ──────────────────────────────────────────────────
const headingVariants = {
  hidden: { opacity: 0, y: -36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// tile: rơi từ trên + fade, delay theo index
const tileVariants = (i: number) => ({
  hidden: { opacity: 0, y: -40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.09,
    },
  },
});

// ── Thumb tile ────────────────────────────────────────────────
function Thumb({ src, name, service, index }: Project & { index: number }) {
  return (
    <motion.div variants={tileVariants(index)} style={{ height: "100%" }}>
      <Card padding={0} className={classes.thumb}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={src}
            alt={`${name} – ${service}`}
            fit="cover"
            className={classes.thumbImg}
          />
        </AspectRatio>

        {/* Gradient overlay */}
        <Box className={classes.overlay}>
          {/* Top action icons */}
          <Flex justify="flex-end" gap={8} p={14} className={classes.actions}>
            <ThemeIcon
              radius="xl"
              size={34}
              className={classes.actionBtn}
              aria-label="View"
            >
              <IconEye size={16} stroke={1.5} />
            </ThemeIcon>
            <ThemeIcon
              radius="xl"
              size={34}
              className={classes.actionBtn}
              aria-label="Share"
            >
              <IconShare size={16} stroke={1.5} />
            </ThemeIcon>
          </Flex>

          {/* Bottom caption */}
          <Box className={classes.caption}>
            <Badge className={classes.serviceBadge} size="xs" radius="sm">
              {service}
            </Badge>
            <Text className={classes.carName}>{name}</Text>
          </Box>
        </Box>

        {/* Shine sweep on hover */}
        <Box className={classes.shine} />
      </Card>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────
export const Lasted: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <Box
      pt={{ base: rem(80), md: rem(64), lg: rem(80) }}
      ref={ref}
      className={classes.section}
      id="lasted"
    >
      <Container size="100%" py={0}>
        {/* ── Heading ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Box className={classes.headingWrap}>
            <Text className={classes.headingLabel}>PORTFOLIO</Text>
            <Flex gap={8}>
              <Text className={classes.heading}>LASTED</Text>
              <GradientText
                gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)"
                animationSpeed={10}
                fontWeight={900}
                className={classes.gradientText}
              >
                PROJECTS
              </GradientText>
            </Flex>
            <Box className={classes.headingUnderline} />
          </Box>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Grid gutter={0}>
            {/* Row 1: four equal tiles */}
            {PROJECTS.slice(0, 4).map((p, i) => (
              <GridCol key={p.name} span={{ base: 12, sm: 6, md: 3 }}>
                <Thumb {...p} index={i} />
              </GridCol>
            ))}

            {/* Row 2: three wider tiles */}
            {PROJECTS.slice(4, 7).map((p, i) => (
              <GridCol key={p.name} span={{ base: 12, md: 4 }}>
                <Thumb {...p} index={4 + i} />
              </GridCol>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};
