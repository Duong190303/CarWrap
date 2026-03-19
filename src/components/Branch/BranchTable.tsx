"use client";

import { Box, Text, Anchor, rem } from "@mantine/core";
import { IconMapPin, IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

const branches = [
  {
    country: "California",
    year: "8 Years",
    website: "wrapstylecalifornia.com",
  },
  { country: "Texas", year: "7 Years", website: "wrapstyletx.com" },
  { country: "Florida", year: "5 Years", website: "wrapstylefl.com" },
  { country: "New York", year: "4 Years", website: "wrapstyleny.com" },
  { country: "Nevada", year: "3 Years", website: "wrapstylenv.com" },
  { country: "Illinois", year: "2 Years", website: "wrapstyleil.com" },
];

const rowVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3 + i * 0.08,
    },
  }),
};

type Props = { isInView: boolean };

export const BranchTable: React.FC<Props> = ({ isInView }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: rem(8),
        maxWidth: rem(440),
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {/* Header label */}
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          padding: `0 ${rem(16)}`,
          marginBottom: rem(4),
        }}
      >
        <Text
          fz={rem(10)}
          fw={700}
          tt="uppercase"
          c="rgba(255,255,255,0.3)"
          style={{ letterSpacing: "0.14em" }}
        >
          Location
        </Text>
        <Text
          fz={rem(10)}
          fw={700}
          tt="uppercase"
          c="rgba(255,255,255,0.3)"
          style={{ letterSpacing: "0.14em" }}
        >
          Experience
        </Text>
      </Box>

      {/* Rows */}
      {branches.map((b, i) => (
        <motion.div
          key={b.country}
          custom={i}
          variants={rowVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "center",
              gap: rem(12),
              padding: `${rem(12)} ${rem(16)}`,
              borderRadius: rem(10),
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              cursor: "default",
              transition:
                "background 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
            }}
            className="branch-row"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(56,159,255,0.07)";
              el.style.borderColor = "rgba(56,159,255,0.25)";
              el.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.borderColor = "rgba(255,255,255,0.06)";
              el.style.transform = "translateX(0)";
            }}
          >
            {/* Index number */}
            <Text
              fz={rem(11)}
              fw={700}
              c="rgba(56,159,255,0.5)"
              style={{ fontVariantNumeric: "tabular-nums", minWidth: rem(20) }}
            >
              {String(i + 1).padStart(2, "0")}
            </Text>

            {/* Country + website */}
            <Box>
              <Box
                style={{ display: "flex", alignItems: "center", gap: rem(6) }}
              >
                <IconMapPin
                  size={12}
                  color="var(--secondary)"
                  style={{ opacity: 0.7, flexShrink: 0 }}
                />
                <Text
                  fz={rem(14)}
                  fw={700}
                  c="#e2e8f0"
                  tt="uppercase"
                  style={{ letterSpacing: "0.03em" }}
                >
                  {b.country}
                </Text>
              </Box>
              <Anchor
                href={`https://${b.website}`}
                target="_blank"
                rel="noopener noreferrer"
                fz={rem(11)}
                c="rgba(255,255,255,0.35)"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: rem(3),
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--secondary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.35)")
                }
              >
                {b.website}
                <IconExternalLink size={10} />
              </Anchor>
            </Box>

            {/* Year badge */}
            <Box
              style={{
                padding: `${rem(3)} ${rem(10)}`,
                borderRadius: rem(999),
                background: "rgba(56,159,255,0.1)",
                border: "1px solid rgba(56,159,255,0.2)",
              }}
            >
              <Text
                fz={rem(11)}
                fw={700}
                c="#7dd3fc"
                style={{ whiteSpace: "nowrap" }}
              >
                {b.year}
              </Text>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};
