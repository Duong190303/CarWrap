"use client";

import { useRef } from "react";
import { Container, Text, rem, Image, Box } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import classes from "./partner.module.css";

type Partner = {
  src: string;
  alt: string;
};

const PARTNERS: Partner[] = [
  { src: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774061402/groupbrand_ropwxa.png", alt: "groupbrand" },
];

// ── Variants ─────────────────────────────────────────────────
const headingVariants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stripVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const logoVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Component ─────────────────────────────────────────────────
export function Partners() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <Box
      component="section"
      id="partners"
      className={classes.section}
      aria-label="Our partners"
      ref={ref}
    >
      <Container size="lg">

        {/* ── Heading ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Box className={classes.headingWrap}>
            <Box className={classes.headingAccent} />
            <Text
              fz={{ base: rem(20), md: rem(24), lg: rem(28) }}
              fw={900}
              className={classes.heading}
            >
              OUR PARTNERS
            </Text>
            <Box className={classes.headingAccent} />
          </Box>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ originX: 0.5 }}
        >
          <Box className={classes.divider} />
        </motion.div>

        {/* ── Logo strip ── */}
        <motion.div
          variants={stripVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={classes.strip}
        >
          {PARTNERS.map((p, i) => (
            <motion.div
              key={`${p.alt}-${i}`}
              variants={logoVariants}
              className={classes.logoCard}
              whileHover={{ y: -6, scale: 1.07, transition: { duration: 0.25 } }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                className={classes.logo}
                fit="contain"
                h="100%"
                w={{ base: "100%", sm: "60%", md: "70%", lg: "90%" }}
              />
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </Box>
  );
}