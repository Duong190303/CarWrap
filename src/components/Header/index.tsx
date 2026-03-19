import {
  Box,
  Group,
  Image,
  UnstyledButton,
  Paper,
  Container,
} from "@mantine/core";
import { IconPhoneRinging, IconFilePhone } from "@tabler/icons-react";
import classes from "./Header.module.css";
import Link from "next/link";
import { ButtonDaisy } from "../ButtonDaisy";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DrawerNav } from "./Drawer/DrawerNav";
import { usePathname } from "next/navigation";
import React from "react";
import { NavItem } from "./Navbar/NavbarItem";
import { Hero } from "./Hero";
type NavigationType = {
  id: string | number;
  label: string;
  href: string;
  active?: boolean;
  subNavigation?: NavigationType[];
  children?: NavigationType[];
};

export const DEFAULT_NAVIGATION_ITEMS: NavigationType[] = [
  {
    id: 1,
    label: "Home",
    href: "/#",
  },
  {
    id: 2,
    label: "Services",
    href: "/#",
    children: [
      { id: "2a", label: "Car Wrapping", href: "/#services" },
      {
        id: "2b",
        label: "Car Washing",
        href: "/#services",
      },
      { id: "2c", label: " Car Repair", href: "/#services" },
    ],
  },
];

export const Header: React.FC<{ pinned: boolean }> = ({ pinned }) => {
  const headerVariants = {
    hidden: { y: -80, x: "-50%", opacity: 0 },
    visible: { y: 0, x: "-50%", opacity: 1 },
  };
  // const theme = useMantineTheme();
  const pathname = usePathname();

  // Hash hiện tại
  const [currentHash, setCurrentHash] = React.useState<string>("");
  React.useEffect(() => {
    const update = () => setCurrentHash(window.location.hash || "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  // Lấy href “đang active” từ URL (nếu có hash -> "/#xxx", nếu không -> pathname)
  const activeHref = React.useMemo(() => {
    if (currentHash) return `/${currentHash}`; // ví dụ "#contact_us" -> "/#contact_us"
    return pathname || "/"; // ví dụ "/about"
  }, [pathname, currentHash]);

  return (
    <Container size="xl" className={classes.header}>
      <motion.div
        className={clsx(classes.headerBottom, { [classes.pinned]: pinned })}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={headerVariants}
        // transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Group
          classNames={{ root: classes.headerBottomContent }}
          w="100%"
          h={{ base: 60, md: 70 }}
          px={{ base: 5, sm: 20 }}
        >
          <Group flex={1} h="100%">
            <UnstyledButton component={Link} href="#">
              <Image
                src="/LogoCarWrap.jpg"
                alt="logo"
                fit="contain"
                h="100%"
                w={{ base: 40, md: 40 }}
                radius={100}
              />
            </UnstyledButton>
          </Group>

          <Box hiddenFrom="md">
            <ButtonDaisy
              type="primary"
              size="sm"
              radius="sm"
              w={100}
              href="/#contactus"
              iconLeft={<IconFilePhone stroke={1.5} size={24} />}
              iconRight={<IconPhoneRinging size={20} />}
              fz={14}
              style={{
                background: "var(--button-primary)",
                border: "none",
                borderRadius: "4px",
                color: "var(--text-primary)",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.5px",
                boxShadow: "var(--glow-primary)",
                transition: "opacity var(--transition-speed)",
              }}
            >
              Booking
            </ButtonDaisy>
          </Box>

          <Paper
            visibleFrom="md"
            component="nav"
            radius={0}
            withBorder={false}
            px="lg"
            py="sm"
            variant="transparent"
            bg="transparent"
            fz={16}
          >
            <Group justify="center" gap={36}>
              {DEFAULT_NAVIGATION_ITEMS.map((it) => (
                <NavItem key={it.id} item={it} activeHref={activeHref} />
              ))}
            </Group>
          </Paper>

          <DrawerNav items={DEFAULT_NAVIGATION_ITEMS} />
          <Box visibleFrom="md">
            <ButtonDaisy
              type="primary"
              size="sm"
              radius="sm"
              href="/#contactus"
              w={100}
              iconLeft={<IconFilePhone stroke={1.5} size={24} />}
              iconRight={<IconPhoneRinging size={20} />}
              fz={14}
              style={{
                background: "var(--button-primary)",
                border: "none",
                borderRadius: "4px",
                color: "var(--text-primary)",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.5px",
                boxShadow: "var(--glow-primary)",
                transition: "opacity var(--transition-speed)",
              }}
            >
              Booking
            </ButtonDaisy>
          </Box>
        </Group>
      </motion.div>
      <Hero />
    </Container>
  );
};
