"use client";

import { Box, Container, Flex, Text, Image, Anchor, rem } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandX,
  IconMapPin,
  IconPhone,
  IconMail,
  IconArrowUpRight,
} from "@tabler/icons-react";

// ── Data ─────────────────────────────────────────────────────
const LINKS = {
  services: [
    { label: "Car Wrapping", href: "#" },
    { label: "Car Washing", href: "#" },
    { label: "Car Repair", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#aboutus" },
    { label: "Our Projects", href: "#lasted" },
    { label: "News", href: "#news" },
    { label: "Suppliers", href: "#suppliers" },
    { label: "Contact", href: "#contactus" },
  ],
};

const SOCIALS = [
  { icon: IconBrandFacebook, href: "#", label: "Facebook" },
  { icon: IconBrandX, href: "#", label: "X" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandYoutube, href: "#", label: "YouTube" },
];

const CONTACT = [
  { icon: IconMapPin, text: "38A Nguyen Quy Duc, An Phu Ward, Thu Duc, HCM" },
  { icon: IconPhone, text: "+84 933 622 225" },
  { icon: IconMail, text: "hello@wrapstyle.vn" },
];

// ── Variants ─────────────────────────────────────────────────
const colVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

// ── Component ─────────────────────────────────────────────────
export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      style={{
        background: "linear-gradient(180deg, #0d0f14 0%, #080a0e 100%)",
        borderTop: "1px solid rgba(56,159,255,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Top glow orb ── */}
      <Box
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(56,159,255,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Main grid ── */}
        <Flex
          pt={{ base: rem(48), md: rem(64) }}
          pb={rem(40)}
          gap={{ base: rem(40), md: rem(32) }}
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          wrap="wrap"
        >
          {/* Brand col */}
          <motion.div
            custom={0}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            style={{ flex: "0 0 auto", maxWidth: 260 }}
          >
            <Image
              src="https://res.cloudinary.com/dguivkg8d/image/upload/v1774235693/Frame_2_2_gnpjjo.png"
              alt="WrapStyle"
              w={{ base: "70%", xs: "70%" }}
              mb={rem(16)}
              radius={30}
            />
            <Text fz={rem(13)} lh={1.7} c="rgba(255,255,255,0.45)" mb={rem(24)}>
              Premium automotive wrapping services — protecting and transforming
              vehicles with precision-cut vinyl since 2015.
            </Text>

            {/* Social icons */}
            <Flex gap={rem(10)}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <Anchor
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: rem(36),
                    height: rem(36),
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    transition:
                      "background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(56,159,255,0.15)";
                    el.style.borderColor = "rgba(56,159,255,0.35)";
                    el.style.color = "var(--secondary)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={16} stroke={1.5} />
                </Anchor>
              ))}
            </Flex>
          </motion.div>

          {/* Services col */}
          <motion.div
            custom={1}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          >
            <Text
              fz={rem(10)}
              fw={700}
              tt="uppercase"
              c="var(--secondary)"
              style={{ letterSpacing: "0.18em" }}
              mb={rem(18)}
            >
              Services
            </Text>
            <Flex direction="column" gap={rem(11)}>
              {LINKS.services.map((l) => (
                <Anchor
                  key={l.label}
                  href={l.href}
                  underline="never"
                  style={{
                    fontSize: rem(13),
                    color: "rgba(255,255,255,0.5)",
                    display: "flex",
                    alignItems: "center",
                    gap: rem(4),
                    transition: "color 0.22s ease, gap 0.22s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#ffffff";
                    el.style.gap = rem(8);
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.gap = rem(4);
                  }}
                >
                  <IconArrowUpRight size={13} style={{ flexShrink: 0 }} />
                  {l.label}
                </Anchor>
              ))}
            </Flex>
          </motion.div>
          {/* Company col */}
          <motion.div
            custom={2}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          >
            <Text
              fz={rem(10)}
              fw={700}
              tt="uppercase"
              c="var(--secondary)"
              style={{ letterSpacing: "0.18em" }}
              mb={rem(18)}
            >
              Company
            </Text>
            <Flex direction="column" gap={rem(11)}>
              {LINKS.company.map((l) => (
                <Anchor
                  key={l.label}
                  href={l.href}
                  underline="never"
                  style={{
                    fontSize: rem(13),
                    color: "rgba(255,255,255,0.5)",
                    display: "flex",
                    alignItems: "center",
                    gap: rem(4),
                    transition: "color 0.22s ease, gap 0.22s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#ffffff";
                    el.style.gap = rem(8);
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.gap = rem(4);
                  }}
                >
                  <IconArrowUpRight size={13} style={{ flexShrink: 0 }} />
                  {l.label}
                </Anchor>
              ))}
            </Flex>
          </motion.div>

          {/* Contact col */}
          <motion.div
            custom={3}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            style={{ maxWidth: 280 }}
          >
            <Text
              fz={rem(10)}
              fw={700}
              tt="uppercase"
              c="var(--secondary)"
              style={{ letterSpacing: "0.18em" }}
              mb={rem(18)}
            >
              Contact
            </Text>
            <Flex direction="column" gap={rem(14)}>
              {CONTACT.map(({ icon: Icon, text }) => (
                <Flex key={text} align="flex-start" gap={rem(10)}>
                  <Box
                    style={{
                      width: rem(28),
                      height: rem(28),
                      borderRadius: "50%",
                      background: "rgba(56,159,255,0.1)",
                      border: "1px solid rgba(56,159,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: rem(1),
                    }}
                  >
                    <Icon size={13} color="var(--secondary)" stroke={2} />
                  </Box>
                  <Text fz={rem(13)} c="rgba(255,255,255,0.45)" lh={1.6}>
                    {text}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </motion.div>
        </Flex>

        {/* ── Divider ── */}
        <Box
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
          }}
        />

        {/* ── Bottom bar ── */}
        <Flex
          py={rem(18)}
          justify="space-between"
          align="center"
          direction={{ base: "column", sm: "row" }}
          gap={rem(10)}
        >
          <Text fz={rem(11)} c="rgba(255,255,255,0.25)">
            © 2025 WrapStyle Vietnam. All rights reserved.
          </Text>
          <Flex gap={rem(24)}>
            {["Privacy Policy", "Terms & Conditions"].map((t) => (
              <Anchor
                key={t}
                href="#"
                underline="never"
                fz={rem(11)}
                c="rgba(255,255,255,0.3)"
                style={{ transition: "color 0.2s ease" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.3)")
                }
              >
                {t}
              </Anchor>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
