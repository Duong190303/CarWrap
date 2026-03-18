"use client";

import React, { useRef } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Image,
  rem,
  ThemeIcon,
} from "@mantine/core";
import { motion, useInView } from "framer-motion";
import classes from "./Service.module.css";

export type ServiceItem = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  href?: string;
  icon?: string; // path to icon image
};

// ── Variants ──────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: -44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── ServiceTile ───────────────────────────────────────────────
function ServiceTile({ item }: { item: ServiceItem }) {
  return (
    <motion.div variants={tileVariants} className={classes.tileMotion}>
      <Box className={classes.tile}>
        {/* Full-cover background image */}
        <Image
          src={item.image}
          alt={item.title}
          fit="cover"
          w="100%"
          h="100%"
          className={classes.tileImg}
        />

        {/* Dark gradient overlay — bottom-up */}
        <Box className={classes.overlay} />

        {/* Icon badge — top right */}
        {item.icon && (
          <ThemeIcon className={classes.iconBadge} size={48} radius="md">
            <Image src={item.icon} alt={item.title} h={rem(26)} w={rem(26)} />
          </ThemeIcon>
        )}

        {/* Bottom content */}
        <Box className={classes.content}>
          <Text className={classes.tileTitle}>{item.title}</Text>
          <Text className={classes.tileDesc}>{item.description}</Text>
          {/* Glow line — expands on hover */}
          <Box className={classes.bottomLine} />
        </Box>
      </Box>
    </motion.div>
  );
}

// ── ServiceList ───────────────────────────────────────────────
export const ServiceList: React.FC<{ items?: ServiceItem[] }> = ({
  items = defaultItems,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <Box ref={ref} className={classes.section}>
      {/* Heading */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Stack align="center" gap={rem(6)} mb={rem(40)}>
            <Text
              fz={{ base: rem(20),sm: rem(32)}}
              fw={900}
              tt="uppercase"
              c="var(--text-white)"
              style={{ letterSpacing: 1 }}
            >
              Our Service
            </Text>
          <Text ta="center" c="dimmed" maw={780} fz={{ base: rem(13), sm: rem(14) }}>
            There is no challenge we would not commit to. Our work meets the
            highest quality standards and professionalism in the business —
            offering premium car wrapping, vinyl installations, window tinting,
            paint protection film and ceramic coating.
          </Text>
        </Stack>
      </motion.div>

      {/* Tiles grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {items.map((it) => (
            <ServiceTile key={it.id} item={it} />
          ))}
        </SimpleGrid>
      </motion.div>
    </Box>
  );
};

// ── Default data ──────────────────────────────────────────────
const defaultItems: ServiceItem[] = [
  {
    id: 1,
    title: "Wrapping",
    description:
      "Professional vinyl car wrapping services that transform your vehicle’s appearance while protecting the original paint. Choose from a wide range of colors, textures, and finishes for a unique custom look.",
    icon: "/icons/wrapping.png",
    image: "/assets/service/wrapping.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Washing",
    description:
      "Premium car washing and detailing services designed to keep your vehicle spotless and well-maintained. We use safe cleaning techniques and high-quality products to protect your wrap and paint.",
    icon: "/icons/wash.png",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 3,
    title: "Repair",
    description:
      "Expert repair services for vinyl wraps and vehicle surfaces. From small scratches to damaged wrap sections, our technicians restore your car’s appearance quickly and professionally.",
    icon: "/icons/repair.png",
    image: "/assets/service/protection.jpg",
    href: "#",
  },
];
