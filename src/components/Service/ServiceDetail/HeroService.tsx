"use client";

import React from "react";
import {
  Box,
  Container,
  Text,
  Image,
  rem,
  Anchor,
  Flex,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
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

export const HeroService: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  return (
    <Box className={classes.hero}>
      {/* Background */}``
      <Box
        className={classes.heroBg}
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <Box className={classes.heroOverlay} />
      {/* Glow */}
      <Box
        className={classes.heroGlow}
        style={{
          background: `radial-gradient(ellipse at 30% 60%, ${service.accentColor}22 0%, transparent 65%)`,
        }}
      />
      <Container size="lg" className={classes.heroContent}>
        {/* Back link */}
        <motion.div variants={fadeLeft(0.1)} initial="hidden" animate="visible">
          <Anchor
            component={Link}
            href="/#services"
            className={classes.backLink}
            underline="never"
          >
            <IconArrowLeft size={15} stroke={2} />
            All Services
          </Anchor>
        </motion.div>

        {/* Icon + title */}
        <motion.div variants={fadeUp(0.2)} initial="hidden" animate="visible">
          <Flex align="center" gap={rem(16)} mb={rem(16)}>
            <Box
              className={classes.heroIcon}
              style={{ boxShadow: `0 0 24px ${service.accentColor}55` }}
            >
              <Image
                src={service.icon}
                alt={service.title}
                w={rem(32)}
                h={rem(32)}
              />
            </Box>
            <Text
              className={classes.heroEyebrow}
              style={{ color: service.accentColor }}
            >
              WrapStyle Vietnam
            </Text>
          </Flex>

          <Text className={classes.heroTitle}>{service.title}</Text>
          <Text className={classes.heroTagline}>{service.tagline}</Text>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp(0.35)} initial="hidden" animate="visible">
          <Anchor
            component={Link}
            href="/#contactus"
            className={classes.heroCta}
            underline="never"
            style={{ background: service.accentColor }}
          >
            Book This Service
            <IconArrowRight size={16} stroke={2.5} />
          </Anchor>
        </motion.div>
      </Container>
      {/* Bottom fade */}
      <Box className={classes.heroFade} />
    </Box>
  );
};
