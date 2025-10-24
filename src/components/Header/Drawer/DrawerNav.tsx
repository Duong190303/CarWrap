"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  Drawer,
  ThemeIcon,
  Flex,
  Box,
  Image,
  UnstyledButton,
  Anchor,
  Text,
  Paper,
} from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { DEFAULT_NAVIGATION_ITEMS, NavigationType } from "../index";
import "./DrawerNav.css";
import { useMatches } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandTiktokFilled,
} from "@tabler/icons-react";
import { MenuImg } from "../MenuImg";

const socialLinks = [
  {
    icon: IconBrandFacebookFilled,
    href: "/#",
  },
  {
    icon: IconBrandInstagramFilled,
    href: "/#",
  },
  {
    icon: IconBrandTiktokFilled,
    href: "/#",
  },
];
interface NavProps {
  items?: NavigationType[];
}
export const DrawerNav: React.FC<NavProps> = ({
  items = DEFAULT_NAVIGATION_ITEMS,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const sizeIconSocial = useMatches({
    base: 16,
    md: 20,
  });
  return (
    <Box component="div" hiddenFrom="md">
      <Drawer.Root
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        hiddenFrom={"md"}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header
            style={{ borderBottom: "1px solid #246FB4", padding: 10 }}
          >
            <UnstyledButton component={Link} href="#">
              <Image
                src="/logo.png"
                alt="logo"
                fit="contain"
                h="100%"
                w={{
                  base: 100,
                  md: 200,
                }}
              />
            </UnstyledButton>
            <Drawer.CloseButton c={"#246FB4"} size={40} />
          </Drawer.Header>

          <Drawer.Body
            p={0}
            px={0}
            display={"flex"}
            h={"100%"}
            style={{ flexDirection: "column", justifyContent: "space-evenly" }}
          >
            <Flex
              pos="relative"
              h="100%"
              mt={5}
              gap={5}
              align="flex-start"
              direction={"column"}
            >
              {items.map((item) => (
                <Anchor
                  key={item.id}
                  href={item.href}
                  underline="never"
                  fw={500}
                  fz="md"
                  w={"100%"}
                  p={"5px"}
                  classNames={{
                    root: "Anchor-root",
                  }}
                >
                  <Text
                    fz={16}
                    tt="uppercase"
                    classNames={{ root: "Text-root" }}
                  >
                    {item.label}
                  </Text>
                </Anchor>
              ))}
              <MenuImg />
            </Flex>
            <Flex align="center" gap={20} p={10} justify="flex-start">
              {socialLinks.map((link, index) => (
                <Paper
                  key={index}
                  classNames={{ root: "socialLink" }}
                  w={{ base: 30, md: 35 }}
                  h={{ base: 30, md: 35 }}
                >
                  <link.icon size={sizeIconSocial} color="#fff" />
                </Paper>
              ))}
            </Flex>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <ThemeIcon variant="transparent" onClick={open}>
        <IconMenu2 stroke={2} color="#246FB4" />
      </ThemeIcon>
    </Box>
  );
};
