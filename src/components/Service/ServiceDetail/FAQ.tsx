"use client";

import React, { useRef } from "react";
import { Box, Container, Text, Stack, rem, Accordion } from "@mantine/core";
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

export const FAQ: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <Box className={classes.faqSection} ref={ref}>
      <Container size="md">
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
              FAQ
            </Text>
            <Text className={classes.sectionTitle} ta="center">
              Common Questions
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
          <Accordion
            classNames={{
              item: classes.faqItem,
              control: classes.faqControl,
              label: classes.faqLabel,
              panel: classes.faqPanel,
            }}
          >
            {service.faq.map((f, i) => (
              <motion.div key={i} variants={staggerItem}>
                <Accordion.Item value={String(i)}>
                  <Accordion.Control>{f.question}</Accordion.Control>
                  <Accordion.Panel>{f.answer}</Accordion.Panel>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </Box>
  );
};
