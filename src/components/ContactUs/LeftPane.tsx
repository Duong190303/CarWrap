"use client";

import { Stack, Text, Box, Anchor } from "@mantine/core";
import { IconPhone, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import type { LeftPaneProps } from "./types";
import { GradientText } from "../UI/GradientText/GradientText";
import classes from "./ContactUs.module.css";

type Props = LeftPaneProps & { isInView?: boolean };

const lineVariants = {
  hidden: { opacity: 0, y: 32, skewY: 3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 + i * 0.1,
    },
  }),
};

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.65 },
  },
};

export function LeftPane({
  titleLines = ["LET'S", "REVAMP", "YOUR", "RIDES"],
  description = "For the best experience at WrapStyle Vietnam, book in advance via the form or contact our hotline.",
  hotline = "+84 933 622 225",
  isInView = false,
}: Props) {
  return (
    <Stack gap={0} className={classes.leftWrap} justify="center" h="100%">
      {/* ── Eyebrow ── */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <Box className={classes.eyebrow}>
          <Box className={classes.eyebrowDot} />
          BOOK A SERVICE
        </Box>
      </motion.div>

      {/* ── Slogan lines — each line has overflow:hidden so text "wipes in" ── */}
      <Box className={classes.slogan}>
        {titleLines.map((line, i) => (
          <Box key={i} className={classes.lineWrap}>
            <motion.div
              custom={i}
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ display: "block" }}
            >
              {i >= 2 ? (
                <GradientText
                  gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)"
                  animationSpeed={10}
                  className={classes.sloganLine}
                  fontWeight={900}
                >
                  {line}
                </GradientText>
              ) : (
                <span
                  className={`${classes.sloganLine} ${classes.lineDark}`}
                  style={{ display: "block" }}
                >
                  {line}
                </span>
              )}
            </motion.div>
          </Box>
        ))}
      </Box>

      {/* ── Divider ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        style={{ originX: 0 }}
      >
        <Box className={classes.leftDivider} />
      </motion.div>

      {/* ── Description + hotline ── */}
      <motion.div
        variants={infoVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Stack gap="sm" mt="md">
          <Text className={classes.leftDesc}>{description}</Text>

          <Anchor
            href={`tel:${hotline.replace(/\s/g, "")}`}
            underline="never"
            className={classes.hotlineLink}
          >
            <Box className={classes.hotlineIcon}>
              <IconPhone size={16} stroke={2} />
            </Box>
            <Text className={classes.hotlineText}>{hotline}</Text>
            <IconArrowRight size={14} className={classes.hotlineArrow} />
          </Anchor>
        </Stack>
      </motion.div>
    </Stack>
  );
}
