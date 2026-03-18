"use client";

import { useRef } from "react";
import { Box, Container, Grid, GridCol } from "@mantine/core";
import { LeftPane } from "./LeftPane";
import { ContactForm } from "./ContactForm";
import type { BookingSectionProps } from "./types";
import { motion, useInView } from "framer-motion";
import classes from "./ContactUs.module.css";

export const ContactUs: React.FC<BookingSectionProps> = ({
  titleLines,
  description,
  hotline,
  initial,
}: BookingSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <Box
      component="section"
      id="contactus"
      className={classes.section}
      ref={ref}
    >
      {/* ── Background layers ── */}
      <Box className={classes.bgImage} />
      <Box className={classes.bgOverlay} />

      {/* ── Decorative glow orbs ── */}
      <Box className={classes.orbLeft} />
      <Box className={classes.orbRight} />

      <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
        <Grid gutter={{ base: "xl", md: rem(64) }} align="stretch">

          {/* Left pane slides in from left */}
          <GridCol span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -48 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: "100%" }}
            >
              <LeftPane
                titleLines={titleLines}
                description={description}
                hotline={hotline}
                isInView={isInView}
              />
            </motion.div>
          </GridCol>

          {/* Form slides in from right */}
          <GridCol span={{ base: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 48 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              style={{ height: "100%" }}
            >
              <ContactForm initial={initial} />
            </motion.div>
          </GridCol>

        </Grid>
      </Container>
    </Box>
  );
};

// re-export rem for use in this file
function rem(px: number) { return `${px / 16}rem`; }