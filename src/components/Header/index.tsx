import {
  Box,
  Container,
  Flex,
  Group,
  Image,
  Text,
  UnstyledButton,
  useMantineTheme,
  Divider,
  Paper,
} from "@mantine/core";
import {
  IconMapPin,
  IconPhoneRinging,
  IconClock,
  IconHeadphones,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import Link from "next/link";
import { ButtonDaisy } from "../ButtonDaisy";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DrawerNav } from "./Drawer/DrawerNav";
import { usePathname } from "next/navigation";
import React from "react";
import { NavItem } from "./Navbar/NavbarItem";
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
      { id: "2a", label: "Car Wrapping", href: "/#service" },
      {
        id: "2b",
        label: "Paint Protection",
        href: "/#service",
      },
      { id: "2c", label: "Detailing", href: "/#service" },
      { id: "2d", label: "Bodykit Installing", href: "/#service" },
    ],
  },
  {
    id: 3,
    label: "News",
    href: "/#newtoday",
  },
  {
    id: 4,
    label: "Suppliers",
    href: "/#suppliers",
  },
  {
    id: 5,
    label: "About Us",
    href: "/#about_us",
  },
  {
    id: 6,
    label: "Contact Us",
    href: "/#contact_us",
  },
];

export const Header: React.FC<{ pinned: boolean }> = ({ pinned }) => {
  const headerVariants = {
    hidden: { y: -80, x: "-50%", opacity: 0 },
    visible: { y: 5, x: "-50%", opacity: 1 },
  };
  const theme = useMantineTheme();
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
    <>
      <Container size="xl" mx="auto" visibleFrom="md" bg={"#F4F6F7"}>
        <Flex gap={10} align="center" justify="space-between" w="100%" h={60} >
          <Group gap="xs" wrap="nowrap">
            <IconMapPin size={18} color={theme.colors.cyan[6]} />
            <Text fz="sm" fw={500} c="#1f1f1f">
              38A Nguyễn Quý Đức, P. An Phú, TP. Thủ Đức, TP. HCM
            </Text>
          </Group>

          <Divider
            orientation="vertical"
            styles={{ root: { borderInlineStart: "1px solid #666" } }}
          />

          <Group gap="xs" wrap="nowrap">
            <IconClock size={18} color={theme.colors.cyan[6]} />
            <Text fz="sm" fw={500} c="#1f1f1f">
              Thứ 2 - 7 / 08:30 AM - 06:00 PM
            </Text>
          </Group>

          <Divider
            orientation="vertical"
            styles={{ root: { borderInlineStart: "1px solid #666" } }}
          />

          <Group gap="xs" wrap="nowrap">
            <IconHeadphones size={18} color={theme.colors.cyan[6]} />
            <Text fz="sm" fw={500} c="#1f1f1f">
              Tư vấn: (+84) 933 622 225
            </Text>
          </Group>

          <Divider
            orientation="vertical"
            styles={{ root: { borderInlineStart: "1px solid #666" } }}
          />

          <ButtonDaisy
            type="primary"
            size="sm"
            radius={5}
            w={100}
            iconLeft={<Image src="/booking_icon.png" alt="booking" w={20} />}
            iconRight={<IconPhoneRinging size={20} />}
            fz={14}
          >
            Booking
          </ButtonDaisy>
        </Flex>
      </Container>

      <motion.div
        className={clsx(classes.headerBottom, { [classes.pinned]: pinned })}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={headerVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Group
          classNames={{ root: classes.headerBottomContent }}
          w="100%"
          h={{ base: 60, md: 80 }}
          px={{ base: 5, sm: 20 }}
        >
          <Group flex={1} h="100%">
            <UnstyledButton component={Link} href="#">
              <Image
                src="/LogoCW_des.svg"
                alt="logo"
                fit="contain"
                h="100%"
                w={{ base: 80, md: 85 }}
              />
            </UnstyledButton>
          </Group>

          <Box hiddenFrom="md">
            <ButtonDaisy
              type="primary"
              size="sm"
              radius="sm"
              w={100}
              iconLeft={<Image src="/booking_icon.png" alt="booking" w={20} />}
              iconRight={<IconPhoneRinging size={20} />}
              fz={14}
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
        </Group>
      </motion.div>
    </>
  );
};
