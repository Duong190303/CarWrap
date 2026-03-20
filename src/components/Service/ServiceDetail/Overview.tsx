"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Text, Image, rem } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import type { ServiceDetail } from "@/components/Service/ServiceDetail/Data";
import classes from "./ServiceDetail.module.css";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export const Overview: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <Box className={classes.overviewSection} ref={ref}>
      <Container size="lg">
        <Grid gutter={{ base: rem(40), md: rem(64) }} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              variants={fadeLeft(0)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Text
                className={classes.sectionEyebrow}
                style={{ color: service.accentColor }}
              >
                OVERVIEW
              </Text>
              <Text className={classes.sectionTitle}>What We Offer</Text>
              <Box
                className={classes.sectionAccent}
                style={{
                  background: `linear-gradient(90deg, ${service.accentColor}, #a855f7)`,
                }}
              />
              <Text className={classes.overviewText}>
                {service.description}
              </Text>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              variants={fadeUp(0.15)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Box className={classes.overviewImgWrap}>
                <Image
                  src={
                    service.image.startsWith("/") ||
                    service.image.startsWith("http")
                      ? service.image
                      : `/${service.image}`
                  }
                  alt={service.title}
                  fit="cover"
                  h="100%"
                  w="100%"
                  radius="md"
                  style={{ borderRadius: rem(16) }}
                />
                <Box
                  className={classes.overviewImgGlow}
                  style={{ boxShadow: `0 0 80px ${service.accentColor}33` }}
                />
              </Box>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
