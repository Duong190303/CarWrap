"use client";

import React, { useRef } from "react";
import {
  Box,
  Container,
  Text,
  Image,
  Anchor,
  ActionIcon,
  Badge,
} from "@mantine/core";
import { IconArrowRight, IconShare2 } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import classes from "./NewToday.module.css";
import { GradientText } from "../UI/GradientText/GradientText";

export type NewsItem = {
  id: string | number;
  category: string;
  categoryColor?: string;
  title: string;
  date: string;
  image: string;
  href?: string;
};

// ── Variants ─────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── NewsCard ──────────────────────────────────────────────────
function NewsCard({ item }: { item: NewsItem }) {
  return (
    <motion.div variants={cardVariants} className={classes.cardMotion}>
      <Box className={classes.card}>
        {/* ── Image block ── */}
        <Box className={classes.imgWrap}>
          <Image
            src={item.image}
            alt={item.title}
            fit="cover"
            w="100%"
            h="100%"
            className={classes.img}
          />
          {/* category badge */}
          <Badge
            className={classes.badge}
            style={{
              background: item.categoryColor ?? "var(--secondary)",
            }}
          >
            {item.category}
          </Badge>
        </Box>

        {/* ── Content block ── */}
        <Box className={classes.body}>
          <Text className={classes.date}>{item.date}</Text>
          <Text className={classes.title} lineClamp={4}>
            {item.title}
          </Text>

          {/* footer row */}
          <Box className={classes.footer}>
            {item.href ? (
              <Anchor
                href={item.href}
                underline="never"
                className={classes.readMore}
              >
                <Text component="span" className={classes.readMoreText}>
                  READ MORE
                </Text>
                <IconArrowRight size={14} stroke={2.5} />
              </Anchor>
            ) : (
              <Box />
            )}
            <ActionIcon
              variant="subtle"
              radius="xl"
              size="sm"
              className={classes.shareBtn}
              aria-label="Share"
            >
              <IconShare2 size={15} />
            </ActionIcon>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────
export const NewToday: React.FC<{ items?: NewsItem[] }> = ({
  items = defaultItems,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <Box
      component="section"
      className={classes.section}
      id="news"
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
            <Text component="span" className={classes.heading}>
              {"WHAT'S "}
              <GradientText
                gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)"
                animationSpeed={10}
                className={classes.gradientText}
                fontWeight={900}
              >
                {" NEW TODAY"}
              </GradientText>
            </Text>
            <Box className={classes.headingUnderline} />
          </Box>
        </motion.div>

        {/* ── Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Box className={classes.grid}>
            {items.map((it) => (
              <NewsCard key={it.id} item={it} />
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

// --- Demo data ---
const defaultItems: NewsItem[] = [
  {
    id: 1,
    category: "PPF",
    categoryColor: "#0ea5e9",
    title:
      "PPF OPTICSHIELD FILM – PREMIUM CAR PROTECTION PRODUCT AVAILABLE AT WRAPSTYLE VIET...",
    date: "March 2, 2025",
    image: "/assets/carousel/img1.jpg",
    href: "#",
  },
  {
    id: 2,
    category: "WRAPPING",
    categoryColor: "#ec4899",
    title:
      "CLOSE-UP OF 'SUPER COW' LAMBORGHINI URUS S GOING DOWN THE STREETS WITH BABY BLUE...",
    date: "October 23, 2024",
    image: "/assets/carousel/img2.jpg",
    href: "#",
  },
  {
    id: 3,
    category: "HOT NEWS",
    categoryColor: "#f43f5e",
    title:
      "WRAPSTYLE 'BEAUTY' FOR PORSCHE CLUB VIETNAM AFTER THE JOURNEY EXPLORATION...",
    date: "October 17, 2024",
    image: "/assets/carousel/img3.jpg",
    href: "#",
  },
];
