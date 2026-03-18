"use client";

import { Box, Button, Flex, Grid, Text, Title } from "@mantine/core";
import classes from "./Header.module.css";
import React, { useRef } from "react";
import { CountUp } from "../UI/CountUp/CountUp";
import { ButtonDaisy } from "../ButtonDaisy";
import { IconPhoneRinging, IconFilePhone } from "@tabler/icons-react";
import { GradientText } from "../UI/GradientText/GradientText";
import { motion, useInView } from "framer-motion";

const stats = [
  { to: 500, suffix: "+", label: "VEHICLES WRAPPED" },
  { to: 10, suffix: "+", label: "YEARS EXPERIENCE" },
  { to: 98, suffix: "%", label: "CLIENT SATISFACTION" },
  { to: 50, suffix: "+", label: "FLEET PROJECTS" },
];

// ── Shared slide-up variant ───────────────────────────────────
const slideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// stat item stagger
const statContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const statItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  // once:false → re-animates when scrolled back into view
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <Flex
      ref={ref}
      direction="column"
      align="center"
      justify="center"
      gap="xl"
      className={classes.HeroText}
    >
      {/* ── BADGE ── */}
      <motion.div
        variants={slideUp(0.1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Box
          style={{
            padding: "1px",
            background: "var(--button-primary)",
            borderRadius: "50px",
            display: "inline-block",
          }}
        >
          <Box
            px={10}
            py={5}
            style={{ background: "var(--background)", borderRadius: "50px" }}
          >
            <Text size="sm" fw={600} style={{ color: "var(--secondary)" }}>
              Premium Automotive Wrapping
            </Text>
          </Box>
        </Box>
      </motion.div>

      {/* ── TITLE ── */}
      <motion.div
        variants={slideUp(0.22)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ width: "100%" }}
      >
        <Flex gap={0} direction="column">
          <Title
            ta="center"
            size={60}
            order={1}
            c="var(--text-white)"
            fw={900}
            lh={1.1}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            PREMIUM CAR WRAP
            <GradientText
              gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)"
              animationSpeed={10}
              fontSize="clamp(3.75rem, 3.75rem, 3.75rem)"
              fontWeight={900}
            >
              SERVICE
            </GradientText>
          </Title>

          {/* ── SUBTITLE ── */}
          <Text
            size="lg"
            c="var(--mantine-color-dimmed)"
            ta="center"
            fw={500}
            maw={540}
            mx="auto"
          >
            Transform your vehicle with precision-cut vinyl wraps engineered for
            durability, style, and the American road.
          </Text>
        </Flex>
      </motion.div>

      {/* ── CTA BUTTONS ── */}
      <motion.div
        variants={slideUp(0.34)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Flex gap="md" wrap="wrap" justify="center">
          <ButtonDaisy
            type="primary"
            size="sm"
            radius="sm"
            w={160}
            iconLeft={<IconFilePhone stroke={1.5} size={24} />}
            iconRight={<IconPhoneRinging size={20} />}
            fz={16}
            style={{
              background: "var(--button-primary)",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.5px",
              boxShadow: "var(--glow-primary)",
              transition: "opacity var(--transition-speed)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Booking
          </ButtonDaisy>

          <Button
            w={160}
            style={{
              padding: "1px",
              borderRadius: "4px",
              border: "1px solid var(--secondary)",
              borderColor: "var(--button-primary)",
              display: "inline-block",
              cursor: "pointer",
            }}
          >
            <Text fw={600} style={{ color: "var(--text-white)" }}>
              View Service
            </Text>
          </Button>
        </Flex>
      </motion.div>

      {/* ── DIVIDER ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={
          isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
        }
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
        style={{ originX: 0.5, width: "100%", maxWidth: 700 }}
      >
        <Box
          w="100%"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--border-strong), transparent)",
          }}
        />
      </motion.div>

      {/* ── STATS ── */}
      <motion.div
        variants={statContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ width: "100%", maxWidth: 800 }}
      >
        <Grid w="100%" gutter={{ base: 20, md: 50 }}>
          {stats.map((stat) => (
            <Grid.Col key={stat.label} span={{ base: 6, sm: 3 }}>
              <motion.div variants={statItem}>
                <Flex direction="column" align="center" gap={10} miw={130}>
                  <Text
                    fz={{ base: 24, xs: 30, md: 48 }}
                    style={{
                      fontWeight: 900,
                      color: "var(--text-white)",
                      lineHeight: 1,
                    }}
                  >
                    <CountUp
                      to={stat.to}
                      duration={2}
                      delay={0.3}
                      startWhen={isInView}
                    />
                    {stat.suffix}
                  </Text>
                  <Text
                    size="xs"
                    fw={700}
                    ta="center"
                    style={{
                      color: "var(--mantine-color-dimmed)",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </Text>
                </Flex>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </motion.div>
    </Flex>
  );
};
