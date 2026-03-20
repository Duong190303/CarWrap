"use client";

import React, { useRef } from "react";
import { Box, Container, Text, Stack, SimpleGrid, rem } from "@mantine/core";
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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
export const Features: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <Box className={classes.featuresSection}>
      <Container size="lg">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          <Stack align="center" gap={rem(6)} mb={rem(48)}>
            <Text
              className={classes.sectionEyebrow}
              style={{ color: service.accentColor }}
            >
              WHY CHOOSE US
            </Text>
            <Text className={classes.sectionTitle} ta="center">
              Key Features
            </Text>
            <Box
              className={classes.sectionAccent}
              style={{
                background: `linear-gradient(90deg, ${service.accentColor}, #a855f7)`,
                margin: "0 auto",
              }}
            />
          </Stack>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {service.features.map((f) => (
              <motion.div key={f.title} variants={staggerItem}>
                <Box className={classes.featureCard}>
                  <Text className={classes.featureIcon}>{f.icon}</Text>
                  <Text className={classes.featureTitle}>{f.title}</Text>
                  <Text className={classes.featureDesc}>{f.description}</Text>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
};
