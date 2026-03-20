"use client";

import React, { useRef } from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  SimpleGrid,
  rem,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
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

export const Process: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <Box className={classes.processSection} ref={ref}>
      <Container size="lg">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Stack align="center" gap={rem(6)} mb={rem(48)}>
            <Text
              className={classes.sectionEyebrow}
              style={{ color: service.accentColor }}
            >
              HOW IT WORKS
            </Text>
            <Text className={classes.sectionTitle} ta="center">
              Our Process
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
            {service.process.map((p) => (
              <motion.div key={p.step} variants={staggerItem}>
                <Box className={classes.processCard}>
                  {/* Step number */}
                  <Text
                    className={classes.processNum}
                    style={{ color: service.accentColor }}
                  >
                    {String(p.step).padStart(2, "0")}
                  </Text>
                  <Text className={classes.processTitle}>{p.title}</Text>
                  <Text className={classes.processDesc}>{p.description}</Text>
                  {/* Check icon */}
                  <ThemeIcon
                    size={24}
                    radius="xl"
                    className={classes.processCheck}
                    style={{
                      background: `${service.accentColor}22`,
                      color: service.accentColor,
                    }}
                  >
                    <IconCheck size={13} stroke={3} />
                  </ThemeIcon>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
};
