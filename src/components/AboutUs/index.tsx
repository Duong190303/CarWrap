"use client";

import React, { useRef } from "react";
import {
  Box,
  // Button,
  Container,
  Flex,
  Grid,
  GridCol,
  // Group,
  Image,
  Stack,
  Text,
  rem,
} from "@mantine/core";
// import { IconChevronRight } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import classes from "./AboutUs.module.css";
import { GradientText } from "../UI/GradientText/GradientText";

export type AboutProps = {
  eyebrow?: string;
  eyebrowSub?: string;
  headingLine1?: string;
  headingLine2?: string;
  highlight?: string;
  paragraphs?: string[];
  historyTitle?: string;
  history?: string[];
  ctaText?: string;
  ctaHref?: string;
  images?: [string, string, string]; // exactly 3 for the stagger layout
};

// ── Variants ─────────────────────────────────────────────────
const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const imgVariants = (delay: number) => ({
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export const AboutUs: React.FC<AboutProps> = ({
  eyebrow = "World Leading Experts",
  headingLine1 = "WE ARE",
  headingLine2 = "CARWRAP",
  highlight = "CarWrap™",
  paragraphs = [
    `${"CarWrap™"} is a world-leading company in the Wrapping industry. With over 14 years of experience and development, WrapStyle has always been a trusted choice for speed enthusiasts and automotive perfectionists.`,
  ],
  historyTitle = "Our History",
  history = [
    "CarWrap Vietnam was established in 2017, but its journey began in 2015, when CEO Phong Ho – a true car enthusiast – opened one of the first shops specializing in vehicle personalization, especially for supercars.",
    "Recognizing the potential of the wrapping market in Vietnam, along with the increasing demand for premium services, CEO Phong Ho decided to partner with WrapStyle™ (…).",
  ],
  // ctaText = "LEARN MORE",
  // ctaHref = "#",
  images = [
    "https://res.cloudinary.com/dguivkg8d/image/upload/v1774063005/img3_tbe2ir.jpg",
    "https://res.cloudinary.com/dguivkg8d/image/upload/v1774063005/img2_otitjl.jpg",
    "https://res.cloudinary.com/dguivkg8d/image/upload/v1774063004/img1_ea3l3h.jpg",
  ],
}: AboutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  const highlightText = (text: string) =>
    text.split(highlight).map((seg, j, arr) => (
      <React.Fragment key={j}>
        {seg}
        {j < arr.length - 1 && (
          <Text span fw={700} c="var(--secondary)">
            {highlight}
          </Text>
        )}
      </React.Fragment>
    ));

  return (
    <Box
      component="section"
      id="aboutus"
      className={classes.section}
      ref={ref}
    >
      <Container size="xl">
        <Grid gutter={{ base: rem(40), md: rem(60) }} align="center">
          {/* ── LEFT: Text ── */}
          <GridCol span={{ base: 12, md: 6 }}>
            <motion.div
              variants={leftVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Stack gap={rem(20)}>
                {/* eyebrow */}
                <Text className={classes.eyebrow}>{eyebrow}</Text>
                {/* big italic heading — 2 dòng riêng để dòng 2 có gradient */}
                <Box className={classes.headingWrap}>
                  <Text component="h2" className={classes.heading}>
                    {headingLine1}
                  </Text>
                  <Text component="span" className={classes.heading}>
                    <GradientText
                      gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)"
                      animationSpeed={10}
                      className={classes.gradientText}
                      fontWeight={900}
                    >
                      {headingLine2}
                    </GradientText>
                  </Text>
                  <Box className={classes.headingAccent} />
                </Box>
                {/* paragraphs */}
                {paragraphs.map((p, i) => (
                  <Text key={i} className={classes.body} lh={1.75}>
                    {highlightText(p)}
                  </Text>
                ))}
                {/* history */}
                <Text className={classes.historyTitle}>{historyTitle}</Text>
                <Flex gap={rem(8)} direction={"column"}>
                  {history.map((h, i) => (
                    <Text key={i} className={classes.body} lh={1.75}>
                      {highlightText(h)}
                    </Text>
                  ))}
                </Flex>
                / {/* CTA */}
                {/* <Group mt={rem(4)}>
                  <Button
                    component="a"
                    href={ctaHref}
                    size="md"
                    radius="md"
                    className={classes.cta}
                    rightSection={<IconChevronRight size={16} />}
                  >
                    {ctaText}
                  </Button>
                </Group> */}
              </Stack>
            </motion.div>
          </GridCol>

          {/* ── RIGHT: Staggered 3 photos ── */}
          <GridCol span={{ base: 12, md: 6 }}>
            <Box className={classes.photoStack}>
              {/* ── img 1: top-left, tilted left ── */}
              <motion.div
                className={classes.photoWrap1}
                variants={imgVariants(0.1)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.03,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={images[0]}
                  alt="About 1"
                  fit="cover"
                  w="100%"
                  h="100%"
                  radius="lg"
                  className={classes.photo}
                />
              </motion.div>

              {/* ── img 2: center, larger, slight tilt right ── */}
              <motion.div
                className={classes.photoWrap2}
                variants={imgVariants(0.22)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.03,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={images[1]}
                  alt="About 2"
                  fit="cover"
                  w="100%"
                  h="100%"
                  radius="lg"
                  className={classes.photo}
                />
              </motion.div>

              {/* ── img 3: bottom-right, tilted right more ── */}
              <motion.div
                className={classes.photoWrap3}
                variants={imgVariants(0.34)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.03,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={images[2]}
                  alt="About 3"
                  fit="cover"
                  w="100%"
                  h="100%"
                  radius="lg"
                  className={classes.photo}
                />
              </motion.div>
            </Box>
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
};
