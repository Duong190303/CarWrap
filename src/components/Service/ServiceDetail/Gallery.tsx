"use client";

import React, { useRef } from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  SimpleGrid,
  Image,
  rem,
} from "@mantine/core";
import { motion, useInView } from "framer-motion";
import type { ServiceDetail } from "@/components/Service/ServiceDetail/Data";
import classes from "./ServiceDetail.module.css";

// ── Variants ──────────────────────────────────────────────────
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

export const Gallery: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <Box className={classes.gallerySection} ref={ref}>
      <Container size="lg">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Stack align="center" gap={rem(6)} mb={rem(40)}>
            <Text
              className={classes.sectionEyebrow}
              style={{ color: service.accentColor }}
            >
              PORTFOLIO
            </Text>
            <Text className={classes.sectionTitle} ta="center">
              Recent Work
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
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={rem(12)}>
            {service.gallery.map((src, i) => {
              // Đảm bảo path luôn absolute (bắt đầu bằng /)
              const imgSrc = src.startsWith("") ? src : `${src}`;
              return (
                <motion.div key={i} variants={staggerItem}>
                  <Box className={classes.galleryItem}>
                    <Image
                      src={imgSrc}
                      alt={`${service.title} ${i + 1}`}
                      fit="cover"
                      h="100%"
                      w="100%"
                    />
                    <Box className={classes.galleryOverlay} />
                  </Box>
                </motion.div>
              );
            })}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
};
