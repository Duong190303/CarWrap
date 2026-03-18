"use client";

import React from "react";
import Link from "next/link";
import { Box, Text, Menu, rem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import classes from "./Navbar.module.css";

export type NavigationType = {
  id: string | number;
  label: string;
  href: string;
  active?: boolean;
  subNavigation?: NavigationType[];
  children?: NavigationType[];
};

export const NavItem: React.FC<{
  item: NavigationType;
  activeHref?: string; // <-- chỉ cần cái này
}> = ({ item, activeHref }) => {
  const childMatch = item.children?.some((c) => c.href === activeHref) ?? false;
  const isActive = item.href === activeHref || childMatch;

  // Tùy bạn có muốn underline khi hover không:
  const [hovered, setHovered] = React.useState(false);
  const showLine = isActive || hovered; // có thể dùng chỉ `isActive` để không “bật về”

  if (item.children && item.children.length > 0) {
    return (
      <Menu
        trigger="hover"
        openDelay={80}
        closeDelay={120}
        transitionProps={{ duration: 120 }}
        position="bottom-start"
        offset={6}
        width={260}
        shadow="md"
        classNames={{ dropdown: classes.Menudropdown, label: classes.Menulabel }}
      >
        <Menu.Target>
          <Box
            component="button"
            type="button"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              position: "relative",
              // paddingBottom: rem(8),
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Text
              fw={700}
              size="16px"
              c={isActive ? "#fff" : "#fff"}
              tt="uppercase"
              style={{ letterSpacing: 0.6 }}
            >
              {item.label}
            </Text>
            <IconChevronDown size={16} stroke={2} color="#fff" />

            {showLine && (
              <motion.div
                layoutId="nav-underline"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -5,
                  height: 2,
                  background:
                    "linear-gradient(103.24deg, #763DF2 0%, #0583F2 100%)",
                }}
              />
            )}
          </Box>
        </Menu.Target>

        <Menu.Dropdown p={0} style={{ overflow: "hidden", borderRadius: 6 }}>
          {item.children.map((c) => (
            <Menu.Item
              key={c.id}
              component={Link}
              href={c.href}
              style={{
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: rem(16),
                letterSpacing: 0.5,
                transition: "color .2s ease",
                color: c.active ? "var(--secondary)" : "var(--text-primary)",
                // background:
                //   "linear-gradient(103.24deg, #763DF2 0%, #0583F2 100%)",
              }}
            >
              {c.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    );
  }

  // Link thường
  return (
    <Box
      component={Link}
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: "none",
        position: "relative",
        display: "inline-block",
      }}
      className={classes.navLink}
    >
      <Text
        fw={700}
        size="16px"
        c={isActive ? "#fff" : "var(--text-primary)"}
        tt="uppercase"
        style={{ letterSpacing: 0.6, transition: "color .2s ease" }}
      >
        {item.label}
      </Text>

      {showLine && (
        <motion.div
          layoutId="nav-underline"
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -5,
            height: 2,
            background: "linear-gradient(103.24deg, #763DF2 0%, #0583F2 100%)",
          }}
        />
      )}
    </Box>
  );
};
