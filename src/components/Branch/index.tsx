"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Text, Image, rem } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { BranchTable } from "./BranchTable";
// import { GradientText } from "../UI/GradientText/GradientText";

const headingVariants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const mapVariants = {
  hidden: { opacity: 0, x: -48, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const tableVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

export const Branch: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <Box
      component="section"
      id="branch"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #0a0e14 100%)",
        borderTop: "1px solid rgba(56,159,255,0.1)",
        borderBottom: "1px solid rgba(56,159,255,0.1)",
      }}
      py={{ base: rem(55), md: rem(80) }}
    >
      <Container size="lg">
        {/* ── Heading ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: rem(52),
            }}
          >
            {/* eyebrow */}
            <Text
              fz={rem(11)}
              fw={700}
              tt="uppercase"
              c="var(--secondary)"
              style={{ letterSpacing: "0.2em", marginBottom: rem(8) }}
            >
              NATIONWIDE NETWORK
            </Text>

            {/* main title */}
            <Text
              fz={{ base: rem(20), sm: rem(32), lg: rem(32) }}
              fw={900}
              tt="uppercase"
              c="var(--text-primary)"
              style={{ letterSpacing: "0.06em", lineHeight: 1 }}
            >
              OUR GROUP
            </Text>
            <Text
              ta="center"
              fz={{ base: rem(13), sm: rem(14) }}
              c="var(--text-secondary)"
              mt={rem(16)}
              lh={1.6}
            >
              One of the leading wrapping companies with a nationwide network
              across the USA.
            </Text>
          </Box>
        </motion.div>

        {/* ── Map + Table ── */}
        <Grid
          gutter={{ base: rem(32), md: rem(48) }}
          align="center"
          justify="center"
          styles={{ inner: { justifyContent: "center" }, col: { justifyContent: "center"} }}
        >
          {/* Map */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              variants={mapVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Box
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* glow behind map */}
                <Box
                  style={{
                    position: "absolute",
                    inset: "10% 5%",
                    background:
                      "radial-gradient(ellipse at center, rgba(56,159,255,0.12) 0%, transparent 70%)",
                    filter: "blur(24px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />
                <Image
                  src="https://res.cloudinary.com/dguivkg8d/image/upload/v1774062920/map_USA_kno6tk.png"
                  alt="USA Map"
                  maw={580}
                  mx="auto"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    filter:
                      "grayscale(30%) brightness(0.85) drop-shadow(0 0 18px rgba(56,159,255,0.2))",
                  }}
                />
              </Box>
            </motion.div>
          </Grid.Col>

          {/* Table */}
          <Grid.Col
            span={{ base: 12, md: 5 }}
            miw={{ base: "100%", xs: rem(435) }}
            style={{ justifyContent: "center" }}
          >
            <motion.div
              variants={tableVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <BranchTable isInView={isInView} />
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
