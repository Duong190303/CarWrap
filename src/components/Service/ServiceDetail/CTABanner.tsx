"use client";

import React, { useRef } from "react";
import { Box, Container, Text, Stack, rem, Anchor } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
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

export const CTABanner: React.FC<{ service: ServiceDetail }> = ({
  service,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <Box
      className={classes.ctaSection}
      ref={ref}
      style={{ borderColor: `${service.accentColor}22` }}
    >
      <Box
        className={classes.ctaGlow}
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${service.accentColor}18 0%, transparent 65%)`,
        }}
      />
      <Container size="md">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Stack align="center" gap={rem(20)}>
            <Text className={classes.ctaTitle}>
              Ready to transform your vehicle?
            </Text>
            <Text className={classes.ctaSubtitle}>
              Book a consultation today and get a free no-obligation quote.
            </Text>
            <Anchor
              component={Link}
              href="/#contactus"
              className={classes.ctaBtn}
              underline="never"
              style={{ background: service.accentColor }}
            >
              Book a Free Consultation
              <IconArrowRight size={16} stroke={2.5} />
            </Anchor>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};
